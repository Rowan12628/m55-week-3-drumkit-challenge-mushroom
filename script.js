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

const squishMove = { transform: "scale(0.9)" };
const squishTiming = { duration: 100 };

function playSound(sound) {
  sound.play();
}

function squishBtn(button) {
  button.animate(squishMove, squishTiming);
}

document.addEventListener("click", (event) => {
  if (event.target === boomBtn) {
    playSound(boomSound);
    squishBtn(boomBtn);
  } else if (event.target === clapBtn) {
    playSound(clapSound);
    squishBtn(clapBtn);
  } else if (event.target === hihatBtn) {
    playSound(hihatSound);
    squishBtn(hihatBtn);
  } else if (event.target === kickBtn) {
    playSound(kickSound);
    squishBtn(kickBtn);
  } else if (event.target === openhatBtn) {
    playSound(openhatSound);
    squishBtn(openhatBtn);
  } else if (event.target === rideBtn) {
    playSound(rideSound);
    squishBtn(rideBtn);
  } else if (event.target === snareBtn) {
    playSound(snareSound);
    squishBtn(snareBtn);
  } else if (event.target === tinkBtn) {
    playSound(tinkSound);
    squishBtn(tinkBtn);
  } else if (event.target === tomBtn) {
    playSound(tomSound);
    squishBtn(tomBtn);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    playSound(boomSound);
    squishBtn(boomBtn);
  } else if (event.code === "KeyS") {
    playSound(clapSound);
    squishBtn(clapBtn);
  } else if (event.code === "KeyD") {
    playSound(hihatSound);
    squishBtn(hihatBtn);
  } else if (event.code === "KeyF") {
    playSound(kickSound);
    squishBtn(kickBtn);
  } else if (event.code === "KeyG") {
    playSound(openhatSound);
    squishBtn(openhatBtn);
  } else if (event.code === "KeyH") {
    playSound(rideSound);
    squishBtn(rideBtn);
  } else if (event.code === "KeyJ") {
    playSound(snareSound);
    squishBtn(snareBtn);
  } else if (event.code === "KeyK") {
    playSound(tinkSound);
    squishBtn(tinkBtn);
  } else if (event.code === "KeyL") {
    playSound(tomSound);
    squishBtn(tomBtn);
  }
});
