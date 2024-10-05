//Clase boolean
const isActive = true;
const hasPermission = false;
console.log(isActive);
console.log(hasPermission);

//Conversion implicita
const result = 5>3;
console.log(result);

const name= 'Platzi';
console.log(!!name);

//Conversion explicita
const value=0;  //0 false otro valor 1 true
const explicitBoolean= Boolean(value);
console.log(explicitBoolean);