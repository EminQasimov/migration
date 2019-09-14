import '../../scss/mig1/location.scss';

$(document).ready(function() {
  $('#location-img-slide-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.appendDots1'),
    adaptiveHeight: true,
    autoplay: true,
    draggable: true,
    // asNavFor: '#location-desc-slide-1',
  });

  $('#location-img-slide-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.appendDots2'),
    adaptiveHeight: true,
    autoplay: true,
    draggable: true,
  });
});
