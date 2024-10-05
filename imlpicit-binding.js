const sacha={
    nombre:"Sacha",
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}!`);
    },
    hermano:{
        nombre: "Eric",
        saludar: function(){
            console.log(`Yo, el hermano, me llamo ${this.nombre}!`);
        },
    },    
};

sacha.saludar();
sacha.hermano.saludar();