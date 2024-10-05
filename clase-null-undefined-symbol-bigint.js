//Null
const snoopy= null;
console.log(snoopy);
console.log(typeof snoopy);

//Undefined
let name;
console.log(name);

//Symbol
const uniqueId= Symbol('id');
console.log(uniqueId);
const symbol1= Symbol(1);
const symbol2= Symbol(1);
console.log(symbol1==symbol2);

const ID= Symbol('id');
let user ={};
user[ID]='1234';
console.log(user);

//BigInt
const bigNumber = 646464646466665656565656565656565656566565656n;
console.log(bigNumber);

const numberOfParticlesInTheUniverse= 100000000000000000000000000000000n;
console.log(numberOfParticlesInTheUniverse);