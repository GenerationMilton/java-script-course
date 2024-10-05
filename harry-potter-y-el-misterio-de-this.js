const harry={
    nombre: 'Harry',
    saludar:function(){
        console.log(`Hola, me llamo ${this.nombre}!`);
    }
};

harry.saludar();

//alternativa con undefined


const harry2={
    nombre: 'Harry',
    saludar:function(){
        console.log(`Hola, me llamo ${this.nombre}!`);
    }
};

const saludar=harry2.saludar;
saludar();