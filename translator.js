export {makeMorse}

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


const makeMorse = (value) => {
    let input = String(value.toLowerCase());
    let splitArr = input.split("");
    console.log(splitArr);
    let mapArr = splitArr.map(i => {
        if (myList[i]) {
            return myList[i]
        } else {
            return i 
        }
    })
    let morsecode = mapArr.join(" ")
    return morsecode
}
console.log(makeMorse("1.5"));