"use strict";

var _translator = require("./translator.js");

var englishText = document.querySelector(".translator__enter");
var morseDisplay = document.querySelector(".translator__display");
var convertButton = document.querySelector(".translator__convert");
var clearButton = document.querySelector(".translator__clear"); //variables for morse-english

var morseButton = document.querySelector(".morsecode__convert");
var englishDisplay = document.querySelector(".morsecode__output");
var morseText = document.querySelector(".morsecode__enter"); //function to only show the morse when convert is clicked

convertButton.addEventListener("click", function () {
  var morseArr = (0, _translator.makeMorse)(englishText.value, _translator.engToMorse);
  morseDisplay.value = morseArr;
}); //converts morse code to english 

morseButton.addEventListener("click", function () {
  var englishArr = (0, _translator.makeEnglish)(morseText.value, _translator.morseToEng);
  englishDisplay.value = englishArr;
}); //function to clear all the forms

var clearText = function clearText() {
  englishText.value = "";
  morseDisplay.value = "";
  englishDisplay.value = "";
  morseText.value = "";
}; // //event listeners to wait for functions


clearButton.addEventListener("click", clearText);