"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMorse = exports.morseToEng = exports.makeEnglish = exports.engToMorse = void 0;
//objects containing conversions
var engToMorse = {
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
exports.engToMorse = engToMorse;
var morseToEng = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '/': ' ',
  '..--..': '?',
  '-..-.': '/',
  '.-...': '&',
  '.-.-.': '+',
  '.-.-.-': '.'
}; //main function for converting into morsecode

exports.morseToEng = morseToEng;

var makeMorse = function makeMorse(value, engObj) {
  var input = String(value.toLowerCase());
  var splitArr = input.split("");
  var mapArr = splitArr.map(function (i) {
    if (engObj[i]) {
      return engObj[i];
    }
  });
  var morseCode = mapArr.join(" ");
  return morseCode;
};

exports.makeMorse = makeMorse;
var output = ""; //function to convert morse code to english

var makeEnglish = function makeEnglish(morse, morseObj) {
  for (var i = 0; i < morse.split(" ").length; i++) {
    if (i === " ") {
      output += " ";
    } else {
      output += morseObj[morse.split(" ")[i]];
    }
  }

  return output;
};

exports.makeEnglish = makeEnglish;