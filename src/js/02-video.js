import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
let currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? 0;
player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate (e) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}
