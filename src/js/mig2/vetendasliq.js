import '../../scss/mig2/vetendasliq.scss';

$(function() {
  var v = $('.veten-item');
  var width = v.width();
  v.height(width);

  window.addEventListener('resize', function() {
    var width = v.width();
    v.height(width + 10);
  });

  $('.veten-item').click(function() {
    var self = this;
    $('.veten-item').each(function(index) {
      $(this).removeClass('activeVeten');
      $($('.veten-content')[index]).hide();
      if (self === this) {
        $($('.veten-content')[index]).fadeIn('slow');
      }
    });

    $(this).addClass('activeVeten');
  });
});
