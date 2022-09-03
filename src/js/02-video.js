import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setCurrentVideoTime, 1000));
setVideoTime(localStorage.getItem(TIME_KEY));

function setCurrentVideoTime(data) {
  const currentVideoTime = data.seconds;

  localStorage.setItem(TIME_KEY, currentVideoTime);
}

function setVideoTime(seconds) {
  player.setCurrentTime(seconds);
}
