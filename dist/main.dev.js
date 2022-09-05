"use strict";

var _translator = require("./translator.js");

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
}; //creating variables

var englishText = document.querySelector(".translator__enter");
var morseDisplay = document.querySelector(".translator__display");
var convertButton = document.querySelector(".translator__convert");
var clearButton = document.querySelector(".translator__clear");
var items = [""]; //function to only show the morse when convert is clicked

convertButton.addEventListener("click", function () {
  var morseArr = (0, _translator.makeMorse)(englishText.value, myList);
  morseDisplay.value = morseArr;
});

var clearText = function clearText() {
  englishText.value = "";
  morseDisplay.value = "";
};

clearButton.addEventListener("click", clearText);
englishText.addEventListener("keyup", function () {
  (0, _translator.makeMorse)(englishText.value, myList);
});