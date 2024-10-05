'use strict';

const sacha= {
    nombre:"Sacha",
    twiter:'@sachalifs',
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`);
        this.seguimeEnTwitter();
    },
    seguimeEnTwitter: function(){
        console.log(`Seguime en Twitter: ${this.twiter}`);
    }
};
sacha.saludar();