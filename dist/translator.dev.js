"use strict";

//export {makeMorse}
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
};

var makeMorse = function makeMorse(value) {
  var input = String(value.toLowerCase());
  var splitArr = input.split("");
  console.log(splitArr);
  var mapArr = splitArr.map(function (i) {
    if (engToMorse[i]) {
      return engToMorse[i];
    }
  });
  var morseCode = mapArr.join(" ");
  return morseCode;
};

var output = "";

var makeEnglish = function makeEnglish(morse) {
  for (var i = 0; i < morse.split(" ").length; i++) {
    if (i === " ") {
      output += " ";
    } else {
      output += morseToEng[morse.split(" ")[i]];
    }
  }

  return output;
};

console.log(makeMorse("1.5"));
console.log(makeEnglish(".---- .-.-.- ....."));