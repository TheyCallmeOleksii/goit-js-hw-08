import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(data) {
  localStorage.setItem('videoplayer - current - time', data.seconds);
}

const throttledOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttledOnPlay);

const secPaused = localStorage.getItem('videoplayer - current - time');

if (secPaused) {
  player
    .setCurrentTime(secPaused)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
