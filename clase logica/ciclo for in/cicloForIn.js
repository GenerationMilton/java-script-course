/*
Ciclo for In

for in ---> objetos

propiedades = valor

array, string

item

for(variable in objeto){
    codigo
}

*/

const listaDeCompras = {
    manzana:5,
    pera: 3,
    naranaja:2,
    uva:1,
};
console.log("for in primer ejemplo de la iteracion del objeto")
for (fruta in listaDeCompras){
    console.log(fruta);
}

console.log("for in segundo ejemplo de la iteracion del objeto y contenido")
for(fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
console.log("for of para error por no ser array iterable sino objeto")
for (fruta of listaDeCompras){
    console.log(fruta);
}
