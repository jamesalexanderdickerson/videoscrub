(function() {
  var scrollbar, scrollend, vid;

  vid = document.getElementById('v0');

  scrollbar = document.getElementById('scrolldown');

  scrollend = document.getElementById('scrollend');

  vid.pause();

  window.onscroll = function() {
    vid.currentTime = window.pageYOffset / 400;
    if (vid.currentTime >= 0.1) {
      scrollbar.classList.add('hide');
    }
    if (vid.currentTime < 0.1) {
      scrollbar.classList.remove('hide');
    }
    if (vid.currentTime > vid.duration - 250) {
      scrollend.classList.add('show');
    }
    if (vid.currentTime < vid.duration - 250) {
      return scrollend.classList.remove('show');
    }
  };

}).call(this);
