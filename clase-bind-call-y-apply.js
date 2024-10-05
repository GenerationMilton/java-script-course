const owner= 'Lucy';
const address= '123 avenue';

function dogGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);

}
const newHouse={
    dogName: 'Coconout',
}

dogGreeting.call(newHouse, owner, address);

// 2 ejemplo
const necesaryValues= [owner, address];
dogGreeting.apply(newHouse, necesaryValues);

// 3 ejemplo

const bindingWithBind = dogGreeting.bind(newHouse, owner, address);
console.log(bindingWithBind);
bindingWithBind();

//quizz 

const caricatura = {nombre: 'Vaca y pollito'};

function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita.
    Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caricatura, 'Vaca');
recuerdo.bind(caricatura, 'Pollito');