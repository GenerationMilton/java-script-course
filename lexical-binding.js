'use strict';

const sacha={
    nombre: 'Sacha',
    twitter: '@sachalifs',
    saludar: function (){
        const seguimeEnTwitter= () => {
            console.log(`Seguime en Twitter: ${this.twitter}`);
        }


        console.log(`Hola, me llamo ${this.nombre}`);
        seguimeEnTwitter();
    }
}

sacha.saludar();