import '../../scss/mig2/visanovleri.scss';

$(function() {
  var toggle = false;

  $('.left1').click(function() {
    toggle = !toggle;
    if (toggle) {
      $(this).addClass('selectedVisa');
      $('.right1').removeClass('selectedVisa');

      $('.right').hide();
      $('.left').fadeIn();
    } else {
      $(this).removeClass('selectedVisa');
      $('.right').hide();
      $('.left').fadeOut();
    }
  });

  // $('.right1').click(function() {
  //     $(this).addClass('selectedVisa');
  //     $(".left1").removeClass("selectedVisa");

  //     $(".left").hide()
  //     $(".right").fadeIn()
  // });
});

// delete thisssss !!!!!!!!! its for git deploy
// $('.nav-item:first-child .nav-link').click(function(e) {
//   e.preventDefault();
//   window.location.replace('https://' + window.location.hostname + '/mig2');
// });
