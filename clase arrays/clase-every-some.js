//Methods that DO NOT modify the original array(Immutability)

//every()
/*
Determina si todos los elementos en el array satisfacen una condicion
*/
const ages= [21,25,31,19,22];

const allAreAdults = ages.every(age => age > 18);
console.log('**Clase every()**')
console.log(ages);
console.log(allAreAdults);


//some()
const atLeastOneIsOver30 = ages.some(age => age>30);
console.log('**Clase some()**')
console.log(ages);
console.log(atLeastOneIsOver30);

