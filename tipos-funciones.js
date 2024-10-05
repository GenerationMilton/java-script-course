// 1. Funciones declarativas

console.log("Funciones declarativas\n")

function sumaFuncionDeclarativa(a, b) { return a + b; } 

sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}


//innerFunction(); // Esto no funcionará

function outerFunction() {
    innerFunction(); // Esto funcionará
  
    function innerFunction() {
      console.log("Inner function");
    }
  }
  
outerFunction();

console.log("--------------------\n");



//2. Funciones expresivas


console.log("Funciones expresivas\n")

const sumaFuncionExpresiva = function(a, b) { return a + b; }

console.log("Funcion Expresiva suma: ",sumaFuncionExpresiva(1, 2)); // 3

console.log("--------------------\n");


//3. Funciones flecha

console.log("Funciones flechas\n")

const sumaFuncionFlecha = (a, b) => a + b;
console.log("Funcion Flecha suma :",sumaFuncionFlecha(1, 2)); // 3


console.log("--------------------\n");


//4. Funciones Constructoras

console.log("Funciones constructivas\n")

function ConstructorPersona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new ConstructorPersona('Juan', 'Perez', 30);
console.log("Funcion Constructora: ",persona1); // Persona { nombre: 'Juan', apellido: 'Perez', edad: 30 }



const ConstructorPersonaConArrowFunction = (nombre, apellido, edad) => ({
    nombre: nombre,
    apellido: apellido,
    edad: edad
});

const persona2 = ConstructorPersonaConArrowFunction('Pedro', 'Perez', 50);
console.log("Funcion Constructora con Arrow Function: ",persona2); // { nombre: 'Juan', apellido: 'Perez', edad: 30 }


console.log("--------------------\n");

//5. Funciones de Orden Superior

console.log("Funciones de Orden Superior\n")

function SaberSiPuedesBeber(edad) {
    
    function ImpresionSiPuedeBeber() {
        console.log("Sí Puede Beber");
    }

    function ImpresionNoPuedeBeber() {
        console.log("No puede Beber");
    }

    if (edad >= 18) {
        return ImpresionSiPuedeBeber;
    } else {
        return ImpresionNoPuedeBeber;
    }

}

const puedeBeber = SaberSiPuedesBeber(20);
console.log(typeof puedeBeber); // function
puedeBeber(); // Puede Beber

console.log("--------------------\n");


//6. Funciones Recurs

console.log("Funciones Recursivas\n")

function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial de 5: ",factorial(5)); // 120

console.log("--------------------\n");

//7. Funciones Anidadas

console.log("Funciones Anidadas\n")

function exterior() {
    let variableExterior = 'Exterior';
    function interior() { 
        console.log(variableExterior); 
    }
    interior(); 
} 

exterior(); 

console.log("--------------------\n");

//8. Métodos de Objetos

console.log("Metodos de Objetos\n")

const objeto = {

    saludar : function() {
        console.log("Hola");
    }
}

objeto.saludar();

console.log("--------------------\n");


//9. Funciones asíncronas

console.log("Funciones Asincronas\n")

function funcionAsincrona() {
    setTimeout(() => {
        console.log("Hola Mundo, soy una función asíncrona");
    }, 1000);
}

funcionAsincrona();


console.log("--------------------\n");


//10. Funciones Puras

console.log("Funciones Puras\n")

function suma(a, b) {
    return a + b;
}

console.log("Suma: ",suma(1, 2)); // 3

// 1. Funciones declarativas

console.log("Funciones declarativas\n")
function sumaFuncionDeclarativa(a, b) { return a + b; }&#x20;
sayHello(); // "Hello!"
function sayHello() {  console.log("Hello!");}

//innerFunction(); // Esto no funcionará
function outerFunction() {    innerFunction();}// Esto funcionará      function innerFunction() {      console.log("Inner function");    }  }  outerFunction();
console.log("--------------------\n");


//2. Funciones expresivas

console.log("Funciones expresivas\n")
const sumaFuncionExpresiva1 = function(a, b) { return a + b; }
console.log("Funcion Expresiva suma: ",sumaFuncionExpresiva1(1, 2)); // 3
console.log("--------------------\n");

//3. Funciones flecha
console.log("Funciones flechas\n")
const sumaFuncionFlecha1 = (a, b) => a + b;console.log("Funcion Flecha suma :",sumaFuncionFlecha1(1, 2)); // 3

console.log("--------------------\n");

//4. Funciones Constructoras
console.log("Funciones constructivas\n")
function ConstructorPersona(nombre, apellido, edad) {    this.nombre = nombre;    this.apellido = apellido;    this.edad = edad;}
const persona11 = new ConstructorPersona('Juan', 'Perez', 30);console.log("Funcion Constructora: ",persona11); // Persona { nombre: 'Juan', apellido: 'Perez', edad: 30 }


const ConstructorPersonaConArrowFunction1 = (nombre, apellido, edad) => ({    nombre: nombre,    apellido: apellido,    edad: edad});
const persona22 = ConstructorPersonaConArrowFunction1('Pedro', 'Perez', 50);console.log("Funcion Constructora con Arrow Function: ",persona2); // { nombre: 'Juan', apellido: 'Perez', edad: 30 }

console.log("--------------------\n");
//5. Funciones de Orden Superior
console.log("Funciones de Orden Superior\n")
function SaberSiPuedesBeber(edad) {        function ImpresionSiPuedeBeber() {        console.log("Sí Puede Beber");    }
&#x20;   function ImpresionNoPuedeBeber() {        console.log("No puede Beber");    }
&#x20;   if (edad >= 18) {        return ImpresionSiPuedeBeber;    } else {        return ImpresionNoPuedeBeber;    }
}
const puedeBeber1 = SaberSiPuedesBeber(20);console.log(typeof puedeBeber1); // functionpuedeBeber(); // Puede Beber
console.log("--------------------\n");

//6. Funciones Recurs
console.log("Funciones Recursivas\n")
function factorial(n) {    if (n === 0) {      return 1;    }    return n \* factorial(n - 1);}
console.log("Factorial de 5: ",factorial(5)); // 120
console.log("--------------------\n");
//7. Funciones Anidadas
console.log("Funciones Anidadas\n")
function exterior() {    let variableExterior = 'Exterior';    function interior() {         console.log(variableExterior);     }    interior(); }&#x20;
exterior();&#x20;
console.log("--------------------\n");
//8. Métodos de Objetos
console.log("Metodos de Objetos\n")
const objeto = {
&#x20;   saludar : function() {        console.log("Hola");    }}
objeto.saludar();
console.log("--------------------\n");

//9. Funciones asíncronas
console.log("Funciones Asincronas\n")
function funcionAsincrona() {    setTimeout(() => {        console.log("Hola Mundo, soy una función asíncrona");    }, 1000);}
funcionAsincrona();

console.log("--------------------\n");

//10. Funciones Puras
console.log("Funciones Puras\n")
function suma(a, b) {    return a + b;}
console.log("Suma: ",suma(1, 2)); // 3