//Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

//Permite aplicar una funion a cada elemento de un array y construir un nuevo array con los resultados

const numbers =[1,2,3,4,5];
const squaredNumbers= numbers.map(num => num*num);

console.log('**map function**')
console.log(numbers);
console.log(squaredNumbers);

//forEach()
//Itera sobre cada elemento de un array y ejecuta una funcion proporcionada para cada elemento, sin crear un nuevo array

const colors = ['red','pink','blue'];
const iteratedColors= colors.forEach(color => console.log(color));


console.log('**forEach function**')
console.log(colors);
console.log(iteratedColors);


//excercise with map and forEach

//Fahrenheit to Celsius Conversion
/*
Create a program that takes an array of temperatures in Fahrenheit
as input and converts them to Celsius using the formula:
C = 5/9 *(F-32)
*/

// Exercise: Fahrenheit to celcius conversion

const temperaturesInFahrenheit = [32,68,95,104,212];
const temperaturesInCelsius= temperaturesInFahrenheit.map(fahrenheit => (5/9)*(fahrenheit-32));

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit);
console.log('Temperatures In Celsius: ', temperaturesInCelsius);



/*
Sum of Elements in an Array
Create a program that takes an array of numbers as input and calculates the sum of all elements in that array
*/

//Excersise solution

const newNumbers=[1,2,3,4,5]
let sum =0;

newNumbers.forEach(number=>{
    sum += number
});

console.log('Array of Number: ', newNumbers);
console.log('Sum of Numbers: ', sum);