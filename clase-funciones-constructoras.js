const personalizedMessage =() => 'Goodbye everybody!';

//Crear objeto a partir de funciones en JS con la palabra new de objeto
function Rocket(name, ownMessage){
    this.name=name;
    this.launchMessage= ownMessage;
    
}

const falcon9Rocket= new Rocket('Falcon 9',personalizedMessage);

const falconHeavyRocket= new Rocket('Falcon Heavy', personalizedMessage);

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage());


//Crear objeto con arrowFunction sin la palabra new
const RocketWithArrowFunction = (name,ownMessage) => ({
    name:name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = ()=> 'Succesful launch'; 
const falcon9Rocket1= RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction);
console.group(falcon9Rocket1.name);
console.group(falcon9Rocket1.launchMessage());

//Ejemplo sencillo de entender

//Definicion de una clase para juegos de PS4
class PS4Game{
    constructor(title, genre, releaseYear, rating){
        this.title= title;
        this.genre= genre;
        this.releaseYear=releaseYear;
        this.rating=rating;
        this.isReleased=false;
    }


    //funcion release
    release(){
        console.log(`${this.title} has been released in ${this.releaseYear}`);
        this.isReleased=true;
    }

    //funcion getDeteails
    getDetails(){
        return `${this.title} (${this.releaseYear}) - Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}

//crear juegos de PS4
const theLastOfUs2= new PS4Game('The Last of Us part II', 'Action-Adventure',2020,'Mature');
const ghostOfTsushima= new PS4Game('Ghost of Tsushima', 'Action-Adventure',2021,'Mature');

//Funcion para imprimir detalles y estado de un juego
const printGameDetails=(game)=>{
    console.log(game.getDetails());
    if(!game.isReleased){
        console.log(`${game.title} has not been released yet.!`);
    }
};

// Imprimir detalles y estado de los juegos
printGameDetails(theLastOfUs2);
printGameDetails(ghostOfTsushima);

//lanzar los juegos
theLastOfUs2.release();
ghostOfTsushima.release();

//Imprimir detalles y estado actualizados
printGameDetails(theLastOfUs2);
printGameDetails(ghostOfTsushima);