"use strict";

//export const translateToMorse = () => {makeMorse}
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
  '&': '.-...'
};
var englishText = document.querySelector(".translator__enter");
var morseDisplay = document.querySelector(".translator__display");
var convertButton = document.querySelector(".translator__convert"); // const makeMorse = (string) => {
//     return string.toLowerCase().split("").map(element => {
//     return myList[element]; 
//     }).join("");
// }

var items = [""];

var makeMorse = function makeMorse() {
  var inputValue = englishText.value;
  console.log(inputValue);
  inputValue = inputValue.toLowerCase();
  items.push(inputValue);
  items = inputValue.split("");
  var itemsSplit = items.map(function (i) {
    if (myList[i]) {
      return myList[i];
    }
  });
  var morsecode = itemsSplit.join(" ");
  morseDisplay.value = morsecode;
};

englishText.addEventListener("keyup", makeMorse); // convertButton.addEventListener("click",)