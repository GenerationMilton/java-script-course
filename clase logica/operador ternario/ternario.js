//codigo sin ternario
/* let mensaje;

const edad= 20;

if(edad >18){
    mensaje= "Es mayor de edad, puede pasar";
} else{
    mensaje= "No es mayor de edad, no puede pasar";
}

console.log(mensaje);
 */

//codigo ternario
const edad=20;

const mensaje=
    edad>= 18
    ? "Es mayor de edad, puede pasar"
    : "Es menor de edad, no puede pasar";

console.log(mensaje);