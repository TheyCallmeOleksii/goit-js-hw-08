import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_PLAYER_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(data) {
  localStorage.setItem(VIDEO_PLAYER_KEY, data.seconds);
}

const throttledOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttledOnPlay);

const secPaused = localStorage.getItem(VIDEO_PLAYER_KEY);

if (secPaused) {
  player
    .setCurrentTime(secPaused)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
