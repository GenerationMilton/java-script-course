const sacha={
    nombre:'Sacha',
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
};

const boundSaludar=sacha.saludar.bind(sacha);

boundSaludar();