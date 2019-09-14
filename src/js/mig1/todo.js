import '../../scss/mig1/todo.scss';

import '../../../node_modules/slick-carousel';

$(document).ready(function() {
  $('.content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    initialSlide: 4,
    autoplay: false,
    swipe: false,
    draggable: false,
  });

  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    autoplay: false,
    // draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.slick-slide').off();

  window.addEventListener('resize', function() {
    $('.slick-slide').off();
  });

  $('.todoitems .slick-slider')
    .find(`[data-slick-index=4]`)
    .addClass('activeSlide');

  $('.todoitems .slick-slider').on('click', '.slick-slide', function(e) {
    var slideClicked = $(e.currentTarget).attr('data-slick-index');
    $('.slick-slide').removeClass('activeSlide');
    $(e.currentTarget).addClass('activeSlide');
    $('.content').slick('slickGoTo', slideClicked);
    e.stopPropagation();
  });
});
