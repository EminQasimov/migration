import '../../scss/mig1/culinary.scss';

$(document).ready(function() {
  $('.metbex-slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: false,
    asNavFor: '.metbex-slider-nav',
  });

  $('.metbex-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    asNavFor: '.metbex-slider-big',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // $('.slick-slide').off();

  // window.addEventListener('resize', function() {
  //   $('.slick-slide').off();
  // });

  // $('.todoitems .slick-slider')
  //   .find(`[data-slick-index=4]`)
  //   .addClass('activeSlide');

  // $('.todoitems .slick-slider').on('click', '.slick-slide', function(e) {
  //   var slideClicked = $(e.currentTarget).attr('data-slick-index');
  //   $('.slick-slide').removeClass('activeSlide');
  //   $(e.currentTarget).addClass('activeSlide');
  //   $('.content').slick('slickGoTo', slideClicked);
  //   e.stopPropagation();
  // });
});
