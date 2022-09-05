import {makeMorse} from './translator.js' 


const myList = { 
    
    'a':'.-',
    'b':'-...',
    'c':'-.-.',
    'd':'-..',
    'e':'.',
    'f':'..-.',
    'g':'--.',
    'h':'....',
    'i':'..',
    'j':'.---',
    'k':'-.-',
    'l':'.-..',
    'm':'--',
    'n':'-.',
    'o':'---',
    'p':'.--.',
    'q':'--.-',
    'r':'.-.',
    's':'...',
    't':'-',
    'u':'..-',
    'v':'...-',
    'w':'.--',
    'y':'-.--',
    'z':'--..',
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.',
    '0':'-----',
    ' ':'/',
    '?':'..--..',
    '/':'-..-.',
    '&':'.-...',
    '+':'.-.-.',
    '.':'.-.-.-'
};


//creating variables
const englishText = document.querySelector(".translator__enter");
const morseDisplay = document.querySelector(".translator__display");
const convertButton = document.querySelector(".translator__convert");
const clearButton = document.querySelector(".translator__clear")

let items = [""]

//function to only show the morse when convert is clicked
convertButton.addEventListener("click", () => {
    const morseArr = makeMorse(englishText.value, myList)
    morseDisplay.value = morseArr;
})

const clearText = () => {
    englishText.value = ""
    morseDisplay.value = ""
}


clearButton.addEventListener("click", clearText)
englishText.addEventListener("keyup", () => {
    makeMorse(englishText.value, myList)
});

