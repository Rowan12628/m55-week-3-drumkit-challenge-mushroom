let boomSound = new Audio("./sounds/boom.wav");
let clapSound = new Audio("./sounds/clap.wav");
let hihatSound = new Audio("./sounds/hihat.wav");
let kickSound = new Audio("./sounds/kick.wav");
let openhatSound = new Audio("./sounds/openhat.wav");
let rideSound = new Audio("./sounds/ride.wav");
let snareSound = new Audio("./sounds/snare.wav");
let tinkSound = new Audio("./sounds/tink.wav");
let tomSound = new Audio("./sounds/tom.wav");

const boomBtn = document.getElementById("boomBtn");
const clapBtn = document.getElementById("clapBtn");
const hihatBtn = document.getElementById("hihatBtn");
const kickBtn = document.getElementById("kickBtn");
const openhatBtn = document.getElementById("openhatBtn");
const rideBtn = document.getElementById("rideBtn");
const snareBtn = document.getElementById("snareBtn");
const tinkBtn = document.getElementById("tinkBtn");
const tomBtn = document.getElementById("tomBtn");

function playSound(sound) {
  sound.play();
}

document.addEventListener("click", (event) => {
  if (event.target === boomBtn) {
    playSound(boomSound);
  } else if (event.target === clapBtn) {
    playSound(clapSound);
  } else if (event.target === hihatBtn) {
    playSound(hihatSound);
  } else if (event.target === kickBtn) {
    playSound(kickSound);
  } else if (event.target === openhatBtn) {
    playSound(openhatSound);
  } else if (event.target === rideBtn) {
    playSound(rideSound);
  } else if (event.target === snareBtn) {
    playSound(snareSound);
  } else if (event.target === tinkBtn) {
    playSound(tinkSound);
  } else if (event.target === tomBtn) {
    playSound(tomSound);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    playSound(boomSound);
  } else if (event.code === "KeyS") {
    playSound(clapSound);
  } else if (event.code === "KeyD") {
    playSound(hihatSound);
  } else if (event.code === "KeyF") {
    playSound(kickSound);
  } else if (event.code === "KeyG") {
    playSound(openhatSound);
  } else if (event.code === "KeyH") {
    playSound(rideSound);
  } else if (event.code === "KeyJ") {
    playSound(snareSound);
  } else if (event.code === "KeyK") {
    playSound(tinkSound);
  } else if (event.code === "KeyL") {
    playSound(tomSound);
  }
});
