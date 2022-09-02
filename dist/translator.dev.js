"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMorse = void 0;
var myList = {
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
  '?': '..--..',
  '/': '-..-.',
  '&': '.-...',
  '+': '.-.-.',
  '.': '.-.-.-'
};

var makeMorse = function makeMorse(value) {
  var input = String(value.toLowerCase());
  var splitArr = input.split("");
  console.log(splitArr);
  var mapArr = splitArr.map(function (i) {
    if (myList[i]) {
      return myList[i];
    } else {
      return i;
    }
  });
  var morsecode = mapArr.join(" ");
  return morsecode;
};

exports.makeMorse = makeMorse;
console.log(makeMorse("1.5"));