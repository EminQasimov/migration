import '../../scss/mig2/visa.scss';

$(function() {
  var v = $('.visa-item');
  var width = v.width();
  v.height(width);

  window.addEventListener('resize', function() {
    var width = v.width();
    v.height(width + 10);
  });

  $('.visa-item').click(function() {
    $('.visa-item').each(function() {
      $(this).removeClass('activeVisa');
    });

    $(this).addClass('activeVisa');
  });

  $('#visaModal').on('show.bs.modal', function(event) {
    var target = $(event.relatedTarget);
    var t = target.find('h1')[0];
    var d = target.find('.visa-desc')[0];

    var title = t && t.innerText;
    var desc = d && d.innerHTML;
    var modal = $(this);

    modal.find('.modal-title').text(title);
    modal.find('.modal-desc').html(desc);
  });
});
