const MORSE_TABLE = {
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
};

function decode(expr) {
    function sliceInto(expr) {
        let result = [];
        for (let i = 0; i < expr.length; i +=10){
          let chunk = expr.slice(i, i+10)
          while (chunk.startsWith(0)){
            chunk = chunk.substr(1)
          }
          result.push(chunk)
        } return result
    };
    let newArr = sliceInto(expr)
    let arr = newArr.map(element => {
        return element.replaceAll('10','.').replaceAll('11','-')
    });
    
    return arr.map(el => {
        if(el == '**********') {
            return  el = ' ';
        } else {
            return el = MORSE_TABLE[el]
        }
    }).join('')
};

module.exports = {
    decode
}


console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))