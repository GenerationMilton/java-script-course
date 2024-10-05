//comprobar la temperatura corporal con funciones

function comprobarTemperatura(temperatura){
    switch(temperatura){
        case "37":
        case "36":
            console.log(`Temperatura normal la temperatura esta en ${temperatura}`);
            break;
        case "38":
            console.log(`Fiebre leve la temperatura esta en ${temperatura}`);
            break;
        case "39":
        case "40":
            console.log(`Fiebre alta la temperatura esta en ${temperatura}`);
            break;
        default:
            console.log(`No podemos comprobar su tempratura corporal ${temperatura}`);
    }
}
comprobarTemperatura("32");
comprobarTemperatura("36");
comprobarTemperatura("37");
comprobarTemperatura("38");
comprobarTemperatura("39");
comprobarTemperatura("40");