import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('play', function(data) {
    console.log(data);
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});