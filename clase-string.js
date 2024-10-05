//Creacion de String
const primeraOpcion= 'Comillas simples';
const segundaOpcion= "Comillas simples";
const terceraOpcion= `Comillas simples`;

//1. Concatenacion: Opcion +
const direccion='Calle falsa 123'
const ciudad='Springfield'
const direccionCompleta='Mi direccion completa es' + direccion + ciudad;
console.log(direccionCompleta);

const direccionCompletaConEspacio= 'Mi direccion completa es' + direccion + ' '+ ciudad;
console.log(direccionCompletaConEspacio)

// 2. Concatenacion: Template Literals
const nombre='Milton';
const pais='CO';
const presentacion=`Hola, soy ${nombre} de ${pais}`;
console.log(presentacion);

//3. Concatenacion: join()
const primeraParte='Me encanta';
const segundaParte='la gente de';
const terceraParte='MX';
const pensamiento=[primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' 🫔  '));

//4. Concatenacion: concat()
const hoobie1='correr';
const hoobie2='leer';
const hoobie3='estudiar';
const hobbies='Mis hobbies son: '.concat(hoobie1, ', ' , hoobie2, ', ' , hoobie3,' .');
console.log(hobbies);

//5. caracteres de escape

//1. Escape alternativo
const escapeAlternativo= "I'm software Engineer";

//2. Barra invertiva
const escapeBarraInvertida='I\'m Software Enginer';

//3. Template literals
const escapeComillaInvertida=`I'm Software Enginer`;

//Escritura de Strings Largos
/*
Las rosas son rojas,
las violetas son azules,
Caracter insesperado,
En la linea 86
*/
const poema = 'Las rosas son rojas,\n'+
              'Las violetas son azules,\n'+ 
              'Caracter inesperado,\n'+
              'En la linea 86.'
console.log(poema);

const poema2= 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'
console.log(poema2);

const poema3= `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`
console.log(poema3);
