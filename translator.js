export {engToMorse, makeEnglish}

const engToMorse = { 
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

const morseToEng = { 

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
//main function for converting into morsecode
export const makeMorse = (value, charObj) => {

    let input = String(value.toLowerCase());
    let splitArr = input.split("");
    console.log(splitArr);
    let mapArr = splitArr.map(i => {
        if (charObj[i]) {
            return charObj[i]
        }
    })
    let morseCode = mapArr.join(" ")
    return morseCode
}


let output = "";

//function to convert morse code to english
const makeEnglish = (morse, morseObj) => {
    for (let i = 0; i < morse.split(" ").length; i++) {
        if (i === " ") {
            output += " ";
        } else {
            output += morseObj[morse.split(" ")[i]];
    }
}
return output;
}