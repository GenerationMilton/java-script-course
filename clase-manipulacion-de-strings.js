//String primitivos

const stringPrimitivo='Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien=String('Soy un string primitivo tambien');
console.log(typeof stringPrimitivoTambien);

//String objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

//Acceder a carecteres
//Mediante indice
const saludo='Hola. ¿Como estas?'
console.log(saludo[2]);

//Mediante metodo
console.log(saludo.charAt(2));

//Acceder al numero del indice de un string primera palabra
console.log(saludo.indexOf('o'));

//Acceder al numero del indice de una palabra en el string metodo indexOf
console.log(saludo.indexOf('Como'));

//Acceder al numero del indice de una palabra en el string que no existe metodo indexOf
console.log(saludo.indexOf('Rocin'));

//Acceder al numero del indice de un string ultima palabra repetida con metodo lastIndexOf
console.log(saludo.lastIndexOf('o'));

//Encontrar letras dentro del string por metodo slice
console.log(saludo.slice(3, 5));

//Dar la longitud del string dado con el metodo length
console.log(saludo.length);

//Convertir a mayuscula el string con la funcion toUpperCase
console.log(saludo.toUpperCase());

//Convertir a minuscula el string con la funcion toLowerCase
console.log(saludo.toLowerCase())

//Separar el string por espacios con el Metodo split
const saludoDividido=saludo.split(' ');
console.log(saludoDividido);
//Acceder a la posicion del array creado
console.log(saludoDividido[1]);

//Quitar espacios de un string con el funcion trim
const saludoConEspacios= ' Hola Mundo ';
const saludoSinEspacios= saludoConEspacios.trim();
console.log(saludoSinEspacios);

//reemplazar palabras de un string
const saludoOriginal='Hola Mundo';
const nuevoSaludo=saludoOriginal.replace('Mundo','🩷');
console.log(nuevoSaludo);