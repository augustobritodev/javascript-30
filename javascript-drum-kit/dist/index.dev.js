"use strict";

var container = document.querySelector('.container');
var key_container = document.querySelector('.key-container');
var keys = [{
  letter: 'A',
  sound: 'clap',
  src: 'sounds/clap.wav',
  data_key: 'KeyA'
}, {
  letter: 'S',
  sound: 'hihat',
  src: 'sounds/hihat.wav',
  data_key: 'KeyS'
}, {
  letter: 'D',
  sound: 'kick',
  src: 'sounds/kick.wav',
  data_key: 'KeyD'
}, {
  letter: 'F',
  sound: 'openhat',
  src: 'sounds/openhat.wav',
  data_key: 'KeyF'
}, {
  letter: 'G',
  sound: 'boom',
  src: 'sounds/boom.wav',
  data_key: 'KeyG'
}, {
  letter: 'H',
  sound: 'ride',
  src: 'sounds/ride.wav',
  data_key: 'KeyH'
}, {
  letter: 'J',
  sound: 'snare',
  src: 'sounds/snare.wav',
  data_key: 'KeyJ'
}, {
  letter: 'K',
  sound: 'tom',
  src: 'sounds/tom.wav',
  data_key: 'KeyK'
}, {
  letter: 'L',
  sound: 'tink',
  src: 'sounds/tink.wav',
  data_key: 'KeyL'
}];
keys.forEach(function (key) {
  var audio = document.createElement('audio');
  audio.setAttribute('data-key', key.data_key);
  audio.setAttribute('src', key.src);
  if (audio) container.insertAdjacentElement('afterend', audio);
});
keys.forEach(function (key) {
  var div = document.createElement('div');
  div.setAttribute('data-key', key.data_key);
  div.setAttribute('class', 'key');
  var letter = document.createElement('span');
  letter.setAttribute('class', 'key-letter');
  letter.innerHTML = key.letter;
  div.insertAdjacentElement('afterbegin', letter);
  var sound = document.createElement('span');
  sound.setAttribute('class', 'key-sound');
  sound.innerHTML = key.sound;
  div.insertAdjacentElement('afterbegin', sound);
  key_container.insertAdjacentElement('afterbegin', div);
});

function playSound(event) {
  var audio = document.querySelector("audio[data-key=\"".concat(event.code, "\"]"));
  var key = document.querySelector("div[data-key=\"".concat(event.code, "\"]"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

var keyElements = document.querySelectorAll('.key');
keyElements.forEach(function (key) {
  key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound); // keyElements.forEach((element) => {
//   element.addEventListener('click', (event) => {
//     console.log(event);
//   });
// });