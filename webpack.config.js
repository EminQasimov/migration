/* eslint-disable prettier/prettier */
const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PreloadWebpackPlugin = require("preload-webpack-plugin")
// const CssUrlRelativePlugin = require("css-url-relative-plugin")

const glob = require("glob")

const IS_DEV = process.env.NODE_ENV === "dev"



const config = {
  mode: IS_DEV ? "development" : "production",
  devtool: IS_DEV ? "eval" : "source-map",
  entry: "./src/js/mig1/index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist")
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist/js'),
  //   filename: 'main.js'
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         hmr: IS_DEV,
      //       },
      //     },
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: IS_DEV
            }
          },
          {
            loader: "css-loader?url=false"
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
           {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              fallback: "file-loader",
              outputPath: "public/images/[folder]"
            }
          },
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: "[name].[ext]",
          //     outputPath: "public/images",
          //     // publicPath: "public/images",
          //   }
          // },
         
          // {
          //   loader: "image-webpack-loader",
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65
          //     },
          //     pngquant: {
          //       quality: "65-90",
          //       speed: 4
          //     },
          //     gifsicle: {
          //       interlaced: false
          //     },
          //     webp: {
          //       quality: 75
          //     }
          //   }
          // },
          
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/public",
        to: "public"
      }
    ]),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: "css/main.css"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new PreloadWebpackPlugin({
      include: "initial"
    }),
    // new CssUrlRelativePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1 // disable creating additional chunks
    }),
   
  ],

  devServer: {
    contentBase: path.join(__dirname, "src")
  },

  optimization: {
    runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /node_modules/,
    //       chunks: 'initial',
    //       name: 'vendor',
    //       priority: 10,
    //       enforce: true,
    //     },
    //   },
    // },
    minimizer: []
  }
}

if (!IS_DEV) {
  const TerserPlugin = require("terser-webpack-plugin")
  const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

  config.optimization.minimizer.push(
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin({})
  )
}

const files = glob.sync("./src/**/*.html")

files.forEach(file => {
  config.plugins.push(
    new HtmlWebPackPlugin({
      filename: path.basename(file),
      template: file,
      favicon: path.resolve(__dirname, "./src/public/icon.ico"),
      minify: false
      // minify: !IS_DEV,
    })
  )
})

module.exports = config
