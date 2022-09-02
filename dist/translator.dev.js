"use strict";

//export const translateToMorse = () => {makeMorse}
var myArray = {
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
};

var makeMorse = function makeMorse(string) {
  return string.toLowerCase().split("").map(function (element) {
    return myArray[element];
  }).join("");
};

console.log(makeMorse("Andrew?"));
console.log("test");
console.log(makeMorse("Doherty"));
;
console.log(makeMorse("united"));