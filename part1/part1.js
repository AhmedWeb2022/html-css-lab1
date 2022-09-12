let vedio = document.getElementById("vedio");
let playBtn = document.getElementById("play");
let stopBtn = document.getElementById("stop");
let vedioRange = document.getElementById("range");
let toBegin = document.getElementById("to-begin");
let toEnd = document.getElementById("to-end");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let currentTime = document.getElementById("current-time");
let fullTime = document.getElementById("full-time");
let muteBtn = document.getElementById("mute");
let volumeRange = document.getElementById("volume-range");
let speedRange = document.getElementById("speed-range");
// Play & Stop Button Function
playBtn.onclick = function () {
  if (vedio.paused) {
    vedio.play();
    playBtn.innerHTML = "Stop";
  } else {
    vedio.pause();
    playBtn.innerHTML = "Play";
  }
};
// Stop Button Function
stopBtn.onclick = function () {
  vedio.pause();
  playBtn.innerHTML = "Play";
};
// Go To Start Of Vedio Button Function
toBegin.onclick = function () {
  vedio.currentTime = 0;
  if (vedio.paused) {
    vedio.play();
    playBtn.innerHTML = "Stop";
  }
};
// Go To End Of Vedio Button Function
toEnd.onclick = function () {
  vedio.currentTime = vedio.duration;
  if (!vedio.paused) {
    vedio.pause();
    playBtn.innerHTML = "Start";
  }
};
// Go 10 seconds forward Button Function
forward.onclick = function () {
  vedio.currentTime += 10;
};
// Go 10 second Backward Button Function
backward.onclick = function () {
  vedio.currentTime -= 10;
};
// Mute & Unmute Button Function
muteBtn.onclick = function () {
  if (vedio.muted) {
    vedio.muted = false;
    muteBtn.innerHTML = "Mute";
    volumeRange.style.display = "inline";
  } else {
    vedio.muted = true;
    muteBtn.innerHTML = "Unmute";
    volumeRange.style.display = "none";
  }
};
// Vedio Scroll  Function
vedioRange.onchange = function () {
  let time = vedio.duration * (vedioRange.value / 100);
  vedio.currentTime = time;
};
// Volume Scroll Function
volumeRange.onchange = function () {
  vedio.volume = volumeRange.value / 100;
};
// Speed Scroll Function
speedRange.onchange = function () {
  vedio.playbackRate = speedRange.value;
  console.log(vedio.playbackRate);
};
// Vedio Time Function
vedio.ontimeupdate = function () {
  // to Make scroll Go With The Vedio show
  let newTime = vedio.currentTime * (100 / vedio.duration);
  vedioRange.value = newTime;
  // Set The Time Of Vedio
  let currentMinute = Math.floor(vedio.currentTime / 60);
  let currentSecond = Math.floor(vedio.currentTime - currentMinute * 60);
  let fullMinute = Math.floor(vedio.duration / 60);
  let fullSecond = Math.floor(vedio.duration - fullMinute * 60);
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  if (fullMinute < 10) {
    fullMinute = "0" + fullMinute;
  }
  if (fullSecond < 10) {
    fullSecond = "0" + fullSecond;
  }
  currentTime.innerHTML = `${currentMinute} : ${currentSecond}`;
  fullTime.innerHTML = `${fullMinute} : ${fullSecond}`;
};
