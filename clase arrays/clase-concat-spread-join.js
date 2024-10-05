//Methods that DO NOT modify the original array(Inmutability);
//Metodo concat
// Combine with concat() . way 1
const morseCode1=['....','---'];  // H O
const morseCode2= ['.-..','.-']; //L A

const morseCodeMessage= morseCode1.concat(morseCode2);
console.log('**concat() type 1**');
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);

// Combine with concat() . way 2

const morseCodeMessage2= [].concat(morseCode1,morseCode2);
console.log('**concat() type 2**');
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage2);

//Spread Operator()
console.log('**Spread() **');
function combineMorseMessages(morseCode1,morseCode2){
    console.log([...morseCode1,...morseCode2]);
}

combineMorseMessages(morseCode1,morseCode2);

//alternative
const number=[1,2,3];
const string= 'string';

console.log('**Spread() example 2 **');
combineMorseMessages(number,string);

//Join()
/*
Concatena todos los elementos de un array, separados por un delimitador especificado
*/

const morseCodeMessageString = morseCodeMessage.join('');
console.log('**JOIN() example 1 **');
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessageString);