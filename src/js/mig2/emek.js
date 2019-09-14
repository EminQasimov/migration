import '../../scss/mig2/emek.scss';

$(function() {
  var round = $('.round');
  var width = round.width();
  round.height(width);

  window.addEventListener('resize', function() {
    var width = round.width();
    round.height(width);
  });

  $('.emek-item').click(function() {
    $('.emek-item').each(function() {
      $(this).removeClass('activeEmek');
    });
    $(this).addClass('activeEmek');
  });

  // bootsrap modal

  $('#emekModal').on('show.bs.modal', function(event) {
    var target = $(event.relatedTarget);
    var t = target.find('h2')[0];
    var d = target.find('.desc')[0];

    var title = t && t.innerText;
    var desc = d && d.innerHTML;
    var modal = $(this);

    modal.find('.modal-title').text(title);
    modal.find('.modal-desc').html(desc);
  });
});
