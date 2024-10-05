const sacha ={
    nombre:'Sacha',
    saludar: function(gritando, conDespedida){
        const saludoNormal=`Hola, me llamo ${this.nombre}!`;
        const despedidaNormal= 'Chau!';

        const saludo = gritando ?
        saludoNormal.toUpperCase(): saludoNormal;
        
        const despedida = gritando?
        despedidaNormal.toUpperCase() : despedidaNormal;

        console.log(saludo);

        if(conDespedida){
            console.log(despedida);
        }
    }
};

const pepe = {nombre:'pepe'};

//Lista infinita de parametros
sacha.saludar.call(pepe, true,true);
//recibe un array
sacha.saludar.apply(pepe, [true,true]);