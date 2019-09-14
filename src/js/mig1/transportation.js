import '../../scss/mig1/transportation.scss';

$(document).ready(function() {
  $('#transModal').on('show.bs.modal', function(event) {
    var target = $(event.relatedTarget).parent();
    var t = target.find('h1')[0];
    var d = target.find('p')[0];
    var i = target.find('img')[0];

    var title = t && t.innerText;
    var desc = d && d.innerHTML;
    var src = i && i.src;
    var modal = $(this);

    console.log(target);
    modal.find('.modal-title').text(title);
    modal.find('.modal-desc').html(desc);
    modal.find('.modal-img').attr('src', src);
  });
});
