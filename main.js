import {makeMorse, makeEnglish, engToMorse, morseToEng} from './translator.js' 


//creating variables for english to morse 
const englishText = document.querySelector(".translator__enter");
const morseDisplay = document.querySelector(".translator__display");
const convertButton = document.querySelector(".translator__convert");
const clearButton = document.querySelector(".translator__clear");

//variables for morse-english
const morseButton = document.querySelector(".morsecode__convert");
const englishDisplay = document.querySelector(".morsecode__output");
const morseText = document.querySelector(".morsecode__enter");



//function to only show the morse when convert is clicked
convertButton.addEventListener("click", () => {
    const morseArr = makeMorse(englishText.value, engToMorse)
    morseDisplay.value = morseArr;
})


//converts morse code to english 
morseButton.addEventListener("click", () => {
    const englishArr = makeEnglish(morseText.value, morseToEng)
    englishDisplay.value = englishArr;
})


//function to clear all the forms
const clearText = () => {
    englishText.value = ""
    morseDisplay.value = ""
    englishDisplay.value = ""
    morseText.value = ""
}

// //event listeners to wait for functions
clearButton.addEventListener("click", clearText)
