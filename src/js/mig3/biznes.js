import '../../scss/mig3/biznes.scss'

$(function() {
 
    $('.biznes-item').click(function() {
      $('.biznes-item').each(function() {
        $(this).removeClass('activebiznes');
      });
  
      $(this).addClass('activebiznes');
    });
  
    $('#biznesModal').on('show.bs.modal', function(event) {
      var target = $(event.relatedTarget);
      var t = target.find('h3')[0];
      var d = target.find('.biznes-desc')[0];
  
      var title = t && t.innerText;
      var desc = d && d.innerHTML;
      var modal = $(this);
  
      modal.find('.modal-title').text(title);
      modal.find('.modal-desc').html(desc);
    });
  });
  