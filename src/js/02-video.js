import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

