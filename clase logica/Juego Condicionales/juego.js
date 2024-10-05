//declarar las constantes para generar el numero aleatorio
const numeroSecreto = Math.floor(Math.random()*10+1);


//declarar metodo prompt para preguntar en consola
const numeroJugador= parseInt(
    prompt("Adivina el numero secreto entre el 1 al 10")
);

//Imprimir el numero del jugador
console.log(`El numero con el que juegas es ${numeroJugador}!`);


//implementar la logica condicional
if(numeroJugador === numeroSecreto){
    console.log(`!Felicidades, adivinaste el numero secreto! el numero secreto era ${numeroSecreto}` );
    
}else if( numeroJugador< numeroSecreto){
    console.log(`El numero es demasiado bajo, intenta de nuevo! el numero secreto era ${numeroSecreto}`);
    
}else {
    console.log(`El numero es muy alto intenta de nuevo! el numero secreto era ${numeroSecreto}`);
}