//export const translateToMorse = () => {makeMorse}

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
        '&':'.-...'
      };

const englishText = document.querySelector(".translator__enter");
const morseDisplay = document.querySelector(".translator__display");
const convertButton = document.querySelector(".translator__convert");

// const makeMorse = (string) => {
//     return string.toLowerCase().split("").map(element => {
//     return myList[element]; 
//     }).join("");
// }

let items = [""]

const makeMorse = () => {

    let inputValue = englishText.value
    console.log(inputValue);
    inputValue = inputValue.toLowerCase();

    items.push(inputValue)
    items = inputValue.split("")


    let itemsSplit = items.map(i => {
        if(myList[i]) {
            return myList[i]
        } 
    })

    let morsecode = itemsSplit.join(" ")
    morseDisplay.value = morsecode;
}

englishText.addEventListener("keyup", makeMorse);

// convertButton.addEventListener("click",)


