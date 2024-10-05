//Methods that modify the original array(mutability)

//splice()  -> cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
console.log('**splice()**');
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato'];

console.log('initial array', vegetables);
const removedVegetables= vegetables.splice(2, 1, 'cucumber','onion');

console.log('final array',vegetables);
console.log('removed vegetables',removedVegetables);

//reverse() -> invierte el orden de los elementos de un array in place.
//El primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero.
console.log('**reverse()**');
const numbers = [ 1,2,3,4,5];
console.log('initial array', numbers);

const reversedNumbers = numbers.reverse();
console.log('final array',numbers);
console.log('reversed Numbers',reversedNumbers);

//sort() --> Ordena los elementos de un array (array) localmente y devuelve el array ordenado.
//numbers UNICODE 
console.log('**sort()**');
const unsortedNumbers1= [4,18,1,62,34];
console.log('unsortedNumbers', unsortedNumbers1);

const unicodeSortedNumbers = unsortedNumbers1.sort();

console.log('unsortedNumbers after reverse(): ', unsortedNumbers1);
console.log('unicodeSortedNumbers: ', unicodeSortedNumbers);

console.log('**sort()**');
const unsortedNumbers2=[4,18,1,62,34];
console.log('unsortedNumbers2', unsortedNumbers2);
const sortedNumbers= unsortedNumbers2.sort((a,b) => a-b)
//4-18 =-14
//18-1=17
//1-62=-61
//62-34=28
console.log('unsortedNumbers2 after reverse(): ', unsortedNumbers2);
console.log('sortedNumbers: ', sortedNumbers);


//sort() with strings UTF-16
console.log('**sort() strings**');
const cities= ['New york','Paris', 'Tokyo', 'London'];
console.log('**original string**', cities);
const sortedCities= cities.sort()


console.log('**String with sorted**',cities);
console.log('**sorted array**', sortedCities);

//fill() -> Cambia todos los elementos en un array por un valor estatico desde el indice start(por defecto 0)
//hasta el indice end(por defecto array.length)

const ages =[21,35,45,50];
console.log(ages.fill(0,2,4));
console.log(ages.fill(15,1));
console.log(ages.fill(15));

