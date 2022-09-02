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


//function to take the input value of the form and convert it to morse in a mapped array
const makeMorseDOM = () => {
    let inputValue = englishText.value
    inputValue = inputValue.toLowerCase();

    items.push(inputValue)
    items = inputValue.split("")
    let itemsSplit = items.map(i => {
        if(myList[i]) {
            return myList[i]
        } 
    })
    //function to only show the morse when convert is clicked
    convertButton.addEventListener("click", displayMorse = () => {
        let morsecode = itemsSplit.join(" ")
        morseDisplay.value = morsecode;
    })
}

const clearText = () => {
    englishText.value = ""
    morseDisplay.value = ""
}


clearButton.addEventListener("click", clearText)
englishText.addEventListener("keyup", makeMorseDOM);
