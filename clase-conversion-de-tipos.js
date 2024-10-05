//Explicit type casting
const string= '42';
const integer= parseInt(string);
console.log('*******Clase conversion de tipos casteo string-integer*******');
console.log(integer);
console.log(typeof integer);


const stringDecimal= '3.14';
const float= parseFloat(stringDecimal);
console.log('*******Clase conversion de tipos casteo string to float*******');
console.log(float);
console.log(typeof float);

const binary='1010';
const decimal=parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);


//Implicit type casting
const suma ='5'+3;
console.log(suma);
console.log(typeof suma);

//suma string con boolean
const sumWithBoolean='3'+ true;
console.log(sumWithBoolean);

//suma numero con boolean
const sumWithNumber=2 +true;
console.log(sumWithNumber);

//alternativo 
const stringValue='10';
const numberValue=10;
const booleanValue=true;
console.log('*****Resultado suma diferentes tipos*******');
console.log(stringValue + stringValue); //CONCATENA
console.log(stringValue + numberValue); //CONCATENA
console.log(stringValue + booleanValue); //CONCATENA

console.log(numberValue+stringValue); //CONCATENA
console.log(numberValue+numberValue); //SUMA
console.log(numberValue+booleanValue); //SUMA

console.log(booleanValue+stringValue); //CONCATENA
console.log(booleanValue+numberValue);  //SUMA
console.log(booleanValue+booleanValue); //SUMA

//QUIZ  Que tipo es la salida de los siguientes console.log?

const numero= '596';
const numeroConvertido=parseInt(numero);
console.log('*******Quiz para resolver*********')
console.log(typeof numero);
console.log(typeof numeroConvertido);