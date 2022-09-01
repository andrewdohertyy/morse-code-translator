"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToMorse = void 0;

var translateToMorse = function translateToMorse() {
  var toMorseCode = [{
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ' ': '/',
    '?': '..--..'
  }];

  var toMorse = function toMorse(string) {
    return string.split("").map(function (c) {
      return (c == " " ? " " : CHAR_TO_MORSE[c]) + " ";
    }).join("").trim();
  };

  console.log(toMorse("Andrew"));
};

exports.translateToMorse = translateToMorse;