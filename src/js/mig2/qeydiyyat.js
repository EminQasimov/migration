import '../../scss/mig2/qeydiyyat.scss';

$(function() {
  var width = $('.out').width();
  $('.out').height(width);

  window.addEventListener('resize', function() {
    var width = $('.out').width();
    $('.out').height(width);
  });

  $('.out').click(function() {
    $('.out').each(function() {
      $(this).removeClass('activeQeyd');
    });
    $(this).addClass('activeQeyd');
  });
});
