import {makeMorse, makeEnglish} from './translator.js' 


//object with english-morse
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
//object with morse-english
const morseList = { 

    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '/':' ',
    '..--..':'?',
    '-..-.':'/',
    '.-...':'&',
    '.-.-.':'+',
    '.-.-.-':'.'
}

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
    const morseArr = makeMorse(englishText.value, myList)
    morseDisplay.value = morseArr;
})


//converts morse code to english 
morseButton.addEventListener("click", () => {
    const englishArr = makeEnglish(morseText.value, morseList)
    englishDisplay.value = englishArr;
})


//function to clear all the forms
const clearText = () => {
    englishText.value = ""
    morseDisplay.value = ""
    englishDisplay.value = ""
    morseText.value = ""
}

//event listeners to wait for functions
clearButton.addEventListener("click", clearText)
englishText.addEventListener("keyup", () => {
    makeMorse(englishText.value, myList)
});

