const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
module.exports = {
    decode
}

let modArr = [];
let parseArray = [];
let finalArray = [];

function inputToChar(input) {
    let arr = input.split("");
    for (let i = 0; i < arr.length / 10; i++) {
        let b = i * 10
        let a = arr.slice(b, b + 10).join("")
        modArr.push(a)
    }
}

function parseToMorse(a) {
    let b;
    for (let j = 0; j < a.length; j++) {
        b = a[j].split("");
        for (let i = 0; i < 10; i += 2) {
            if (b[i] + b[i + 1] == 0) {

            } else if (b[i] + b[i + 1] == 10) {
                parseArray += '.';
            } else if (b[i] + b[i + 1] == 11) {
                parseArray += '-';
            } else {
                parseArray += "";
            }
        } if (j < a.length - 1) {
            parseArray += " "
        };
    }
    parseArray = parseArray.split(" ")
}

function finalDecode(parseArray) {
    let a = Object.entries(MORSE_TABLE);
    for (i = 0; i < parseArray.length; i++) {
        let b = parseArray[i];
        for (j = 0; j < a.length; j++) {
            if (b == a[j][0]) {
                finalArray += a[j][1];
            } else if (b == "") {
                finalArray += " "
                break;
            }
        }
    }
}

function decode(expr) {
    modArr = [];
    parseArray = [];
    finalArray = [];
    inputToChar(expr);
    parseToMorse(modArr);
    finalDecode(parseArray);
    return finalArray;
}




