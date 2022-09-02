"use strict";

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
var items = [""]; //function to take the input value of the form and convert it to morse in a mapped array

var makeMorseDOM = function makeMorseDOM() {
  var inputValue = englishText.value;
  inputValue = inputValue.toLowerCase();
  items.push(inputValue);
  items = inputValue.split("");
  var itemsSplit = items.map(function (i) {
    if (myList[i]) {
      return myList[i];
    }
  }); //function to only show the morse when convert is clicked

  convertButton.addEventListener("click", displayMorse = function displayMorse() {
    var morsecode = itemsSplit.join(" ");
    morseDisplay.value = morsecode;
  });
};

var clearText = function clearText() {
  englishText.value = "";
  morseDisplay.value = "";
};

clearButton.addEventListener("click", clearText);
englishText.addEventListener("keyup", makeMorseDOM);