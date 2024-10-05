/*
Juguemos a adivinar la palabra

El usuario tiene 3 intentos par adivinar la palabra
oculta.

Requerimientos:
-EL juego debe tener una palabra oculta.
-El juego puede dar 1 pista de la palabra.
-El usuario debe ingresar una suposicion
-El juego debe verificar si la suposicion del usuario es
correcta.
-El juego debe tener un numero limitado de intentos
-El juego debe terminar cuando el usuario adivine la palabra
o se quede sin intentos.
*/

//variables
let palabraOculta = "java";

let intentos= 3;

//funcion verificar suposicion para saber si es correcta o no

function verificarSuposicion(suposicion, palabraOculta){
    if(suposicion.toLowerCase() === palabraOculta){
        return true
    }
    return false;
}

//funcion que inicia el juego
function jugarAdivinaLaPalabra(){
    alert("Bienvenido a jugar adivina la palabra oculta");
    alert("Tienes 3 intentos para adivinar la palabra");
    alert("--Pista--La palabra oculta es un lenguaje de programacion");

    //iniciar loop
    while(intentos >0){
        let suposicion=prompt("Adivina la palabra");

        //verificacion
        if(verificarSuposicion(suposicion, palabraOculta)){
            alert("Correcto! Has adivinado la palabra.")
            break;

        } else{
            intentos --;
            
            if(intentos>0){
                alert(`Incorrecto, aun tienes ${intentos} intentos restantes`);

            }else{
                alert(`Agotaste tus intentos la palabra oculta era ${palabraOculta}`);

            }

        }
    }

}
//Llamar la funcion

jugarAdivinaLaPalabra();