//Includes()
/*
Determina si un array incluye un determinado elemento, devuelve true 
o false segun corresponda.
*/

//1. Example with numbers
const numbers=[1,2,3,4,5];

const result1= numbers.includes(3);
console.log('**Clase includes()**');
console.log(result1);

const result2=numbers.includes(8);
console.log(result2);

//IndexOf()
/*
Retorna el primer indice en el que se puede encontrar un elemento
dado en el array, o retorna -1 si el elemento no esta presenta
*/
const fruits =['apple','cherry','grape','mango'];

const index1 = fruits.indexOf('cherry');
console.log('**clase indexOf example 1**')
console.log('array: ', fruits);
console.log('result indexOf cherry', index1);

const index2 = fruits.indexOf('orange');
console.log('**clase indexOf example 2**')
console.log('array: ', fruits);
console.log('result indexOf orange', index2);

//LastIndexOf()
const numberIndex=[2,4,6,8,10,6];
const lastIndexOf= numberIndex.lastIndexOf(6);

console.log('**clase lastIndexOf example 1**')
console.log('number Index: ', numberIndex);
console.log('last Index of: ',lastIndexOf);

const lastIndexOf2= numberIndex.lastIndexOf(20);

console.log('**clase lastIndexOf example 2**')
console.log('number Index: ', numberIndex);
console.log('last Index of: ',lastIndexOf2);
