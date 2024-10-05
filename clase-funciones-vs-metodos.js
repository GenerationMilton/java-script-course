//Capacidades que tienen las funciones al igual q otros metodos

// 1. Pasar funciones como argumentos -> callback

function a(){};
function b(a){};
b(a);

//Retornar funciones -> declaracion de funcion

function c(){
    function d(){}

    return d;
};

//Asignar funciones a variables -> Expresion de funcion

const e = function(){}

// Tener propiedades y metodos

function f(){}
const obj={}
f.call(obj);

// Anidar functiones -> Nested functions

function g(){
    function h(){
        function i(){

        }
        i();
    }
    h();
}
g();

// Es posible almacenar funciones en objetos?

const rocket={
    name:'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('🔥');
    }
}
rocket.launchMessage();
