import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";



const video:any = document.querySelector('video');
const btnPlay:any = document.getElementById('btnPlay');
//const btnPlay = document.querySelector('#PlayButton');
const btnMute:any = document.getElementById('btnMute');

const player = new MediaPlayer( {
    el: video, plugins: [ new AutoPlay() , new AutoPause(), new Ads()]
} );
btnPlay.onclick = () => video.paused ? player.play():player.pause();

btnMute.onclick = () => video.muted ? player.unmute(): player.mute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.log(error.message)
    });
}