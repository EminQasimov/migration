/* eslint-disable prettier/prettier */
import "bootstrap"
import "../../scss/mig1/index.scss"

import "./todo"
import "./azerbaijanis"
import "./places"
import "./location"
import "./culinary"
import "./music"
import "./festivals"
import "./transportation"

// mig2 section start from here
import '../mig2/visastart.js'

// mig3 section start from here
import "../mig3/niye.js"

import WOW from "wow.js"

var wow = new WOW({ offset: 0 })
wow.init()


var open = false

$(".menu-icon").click(function() {
  open = !open
  if (open) {
    $(".menu-list").css({
      display: "block",
      position: "absolute",
      background: "#7519b0",
      left: "0",
      top: "77px",
      width: "100%"
    })
    $(".sticky").css("background", "rgb(117, 25, 176)")
  } else {
    $(".menu-list").hide()
    window.scrollY < 30 && $(".sticky").css("background", "transparent")
  }
})

window.addEventListener('resize',function() {
  open = false
  window.scrollY < 30 && $(".sticky").css("background", "transparent")
  if (window.innerWidth > 1150) {
    $(".menu-list").css({
      display: "flex",
      position: "static",
      background: "transparent"
    })
  } else {
    $(".menu-list").hide({
      height: "0"
    })
  }
})

$(function() {
  $(window).scroll(function() {
    var sticky = $(".sticky"),
      scroll = $(window).scrollTop()

    if (scroll >= 100) {
      window.scrollY < 10
        ? sticky.css("background", "transparent")
        : sticky.css("background", "rgb(117, 25, 176)")
      $(".hero").css({
        marginTop: "-30px"
      })
      sticky.addClass("fixed")
    } else {
      $(".hero").css({
        marginTop: "0px"
      })
      !open && sticky.css("background", "transparent")
      sticky.removeClass("fixed")
    }
  })
})

// // delete thisssss !!!!!!!!! its for git deploy
// $('.nav-item:first-child .nav-link').click(function(e) {
//   e.preventDefault();
//   window.location.replace('https://' + window.location.hostname + '/mig');
// });
