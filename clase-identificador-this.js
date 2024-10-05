// Enlace implicito o implicit bind
const house={
    dogName: 'Fido',
    dogGreeting: function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting();

// 2 ejemplo
//Enlace explicito o explicit bind

function dogGreeting(){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse ={
    dogName: 'Coconout',   
}

dogGreeting.call(newHouse);

//3 ejemplo

function newDogGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner='Lucy';
const address='Avenue 123';

newDogGreeting.call(newHouse, owner, address);
