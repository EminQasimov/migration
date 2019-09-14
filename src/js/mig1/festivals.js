import '../../scss/mig1/festivals.scss';

// bootsrap modal

$('#festivalModal').on('show.bs.modal', function(event) {
  var target = $(event.relatedTarget).parent();
  var t = target.find('h1')[0];
  var d = target.find('p')[1];
  var i = target.find('img')[0];

  var title = t && t.innerText;
  var desc = d && d.innerText;
  var src = i && i.src;
  var modal = $(this);

  console.log(target);
  modal.find('.modal-title').text(title);
  modal.find('.modal-desc').text(desc);
  modal.find('.modal-img').attr('src', src);
});
