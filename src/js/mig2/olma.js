import '../../scss/mig2/olma.scss';

$(function() {
  if (window.innerWidth < 1170) {
    $('.selected-olma').removeClass('selected-olma');
  }
  window.addEventListener('onresize', function() {
    if (window.innerWidth < 1170) {
      $('.selected-olma').removeClass('selected-olma');
    }
  });
  $('.olma-content').hide();
  $('.pointer').click(function() {
    $('.olma-content').show();
    if (window.innerWidth > 1170) {
      var self = this;
      $('.pointer').each(function(index) {
        $(this)
          .parent()
          .removeClass('selected-olma');
        $($('article')[index]).hide();
        if (self === this) {
          var html = $(this)
            .parent()
            .find('.desc-olma')
            .html();
          $($('article')[index]).html(html);
          $($('article')[index]).fadeIn('slow');
        }
      });
      $(this)
        .parent()
        .addClass('selected-olma');
    }
  });
});
