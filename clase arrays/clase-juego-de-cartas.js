//Card game Implementation
/*
Imagine you're building a simple card game. You have an array representing a deck of cards, and
you want to perform the following operations:
1. shuffle the deck: Randomly rearrange the order of the cards in the deck
2. deal Cards: Deal a specific number of cards to players from the top of the deck.

This exercise involves using the splice() method to shuffle the deck and deal cards.
*/

//card game implementation

const deck =['♥','♠','♣','♦','♥','♠','♣','♦','♥','♠','♣','♦'];

//funciones barajar y repartir

//Fisher-yates Algorithm
function shuffleDeck(){
    for(let i= deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random(0)*(i + 1));
        [deck[i], deck[j]]= [deck[j], deck[i]]
    }
}

function dealCards(numCard){
    const dealCards = deck.splice(0,numCard)
    return dealCards;
}

shuffleDeck();
const player1Hand= dealCards(3);
const player2Hand= dealCards(3);
const player3Hand= dealCards(3);

console.log('Player 1 Hand: ', player1Hand);
console.log('Player 2 Hand: ', player2Hand);
console.log('Player 3 Hand: ', player3Hand);