import '../../scss/mig1/music.scss';

function action(idx, item) {
  var li = $(item);
  var aud = li.find('audio')[0];
  var play = li.find('.play');
  var pause = li.find('.pause');
  pause.hide();

  li.click(function() {
    if (aud.paused) {
      $('audio').each(function() {
        this.pause();
        $(this)
          .siblings('.play')
          .show();
        $(this)
          .siblings('.pause')
          .hide();
      });
      aud.play();
      play.hide();
      pause.show();
    } else {
      $('audio').each(function() {
        $(this)
          .siblings('.play')
          .show();
        $(this)
          .siblings('.pause')
          .hide();
      });
      aud.pause();
      play.show();
      pause.hide();
    }
  });
}

$(document).ready(function() {
  $('#player1 li').each(action);
  $('#player2 li').each(action);
  $('#player3 li').each(action);
  $('#player4 li').each(action);
});
