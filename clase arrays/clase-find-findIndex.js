//Methods that iterate over an array
//Methods that DO NOT modify the original array(Immutability)

/*
Find()
Devuelve el valor del primer elemento del array que cumple la
funcion de prueba proporcionada
*/

const multipleOf5=[5,10,15,20];
const firstNumberGreaterThan10=multipleOf5.find(number => number > 10);

console.log('**find() example**')
console.log(multipleOf5)
console.log(firstNumberGreaterThan10);

/*
FindIndex()
Devuelve el valor del indice del primer elemento del array que cumple la
condicion proporcionada en forma de uncion. Si no encuentra ningun elemento
que cumpla la condicion, devuelve -1
*/

const randomNumber= [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50);
console.log('**findIndex() example**')
console.log(randomNumber);
console.log(indexNumber);


//Exercise
/*
Raffle Winner Verification Program
In this program, you can verify if a person is among the list of winner in a raffle.
Simply input the name or ticket number, and the program will check and display the 
winners information
*/
const winningParticipant = [
    {id: 1, name: 'Jennifer', ticketNumber: 1},
    {id: 8, name: 'Michael', ticketNumber: 8},
    {id: 15, name: 'Emily', ticketNumber: 15},
    {id: 47, name: 'Charlie', ticketNumber: 47},
]

//encontrar nombre del ganador
function findWinnerByName(name){
    const winner = winningParticipant.find(participants =>participants.name === name)
    return winner || 'No winner found with that name.'
}

//encontrar indice del ticket ganador
function findIndexWinnerByTicket(ticketNumber){
    const index=winningParticipant.findIndex(participants => participants.ticketNumber=== ticketNumber);
    return index !== -1 ? index: 'No winner found with that ticker number.';
}

//informacion ganadores
function displayWinnerInformation(winner){
    if(winner !== undefined && winner !== null && winner !== 'No winner found with that ticker number.'){
        console.log('Winner information: ', winner);
    } else {
        console.log('No winner found.');
    
    }
       
}
//constantes para guardar las funciones a ejecutar
const winnerByName= findWinnerByName('Emily');
const indexWinnerByTicket= findIndexWinnerByTicket(15);

displayWinnerInformation(winnerByName);
console.log('Index of winner by ticket number: ', indexWinnerByTicket);
