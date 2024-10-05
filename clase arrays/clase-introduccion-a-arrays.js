// How to create an Array?
//1. new Array() or Array()

const fruits = Array('apple','banana','orange');
console.log(fruits);

// no funciona para declarar un numero en el array
const justOneNumber= Array(12);
console.log(justOneNumber);

// Array con number
const number = Array(1,2,3,4,5);
console.log(number);

//2. Array literal syntax

const oneNumber =[4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports=['soccer', 'tennis', 'rugby'];
console.log(sports);

//3. array mixtos
const recipeIngredients= [
    'Fluor',
    true,
    2,
    {
        ingrediente: 'Milk', quantity: '1 cup' 
    },
    false,
]
console.log(recipeIngredients);

// Accessing array elements

const firstFruit = fruits[0];
console.log(firstFruit);

//length property

const numberOfFruits=fruits.length;
console.log(numberOfFruits);

//Mutability

const fruits1 = Array('Banano', 'Pera','Fresa');
fruits1.push('patilla');
console.log(fruits1);

//Inmutability

const newFruits1 = fruits1.concat(['ciruela', 'naranja']);
console.log(fruits1);
console.log(newFruits1);

//Checking arrays with Array.isArray()
const isArray= Array.isArray(fruits1);
console.log(fruits1);

//ejercicio con For --practical exercise: sum all elements of an array

const numbersArray=[1,2,3,4,5];
let sum=0;

for(let i=0; i<numbersArray.length;i++){
    sum+= numbersArray[i];

}

console.log(sum);
