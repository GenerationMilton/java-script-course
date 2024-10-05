//Tipo de dato primitivo - Inmutable
//1er ejemplo
let numero = 23;
numero = numero+10;
console.log('**datos primitivos**');
console.log(numero);

//2do ejemplo
let esVerdadero=true;
esVerdadero=false;
console.log('**datos primitivos**');
console.log(esVerdadero);

//Tipo de dato complejo-Mutable
let usuario={nombre: 'Pepito', edad:15};
usuario.edad=30;
console.log('**datos complejos**');
console.log(usuario);

//ejemplo con arrays
let frutas =['manzana', 'pera'];
frutas[0]='banano';
console.log('**arrays**');
console.log(frutas);

//ejemplo con funciones
//1er paso declarar el objeto
let persona= {nombre:'Milton'};
//2do paso declarar la funcion
function cambiarNombre(objeto){
    objeto.nombre='Nuevo nombre';
}
//3er paso llamar la funcion e imprimir
cambiarNombre(persona);
console.log('**funciones**');
console.log(persona);