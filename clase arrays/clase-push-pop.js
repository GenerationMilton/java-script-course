//methods that modify the original array(Mutability)

//push

const countries = ['USA','Canada', 'UK'];
const newCountries= countries.push('Germany', 'UK');

console.log(countries);
console.log(newCountries);

//pop()

const removedCountry= countries.pop();

console.log(countries);
console.log(removedCountry);

//Ejercicio stack de libros

/*
Exercise: Managing a Stack

Create a program that simulates a stack using the push and pop
methods. The stack should store a collection of books. users 
can perform the following actions:

1. Add a new book to the top of the stack
2. Remove the book from the top of the stack
3. Display the current stack of books.

Implement a loop that allows users to interact with the stack 
until they choose to exit.
*/

//Exercise: Managing a Stack

let bookCart = [];

const ADD_TO_CART_ACTION= 'addToCart';
const REMOVE_FROM_CART_ACTION= 'removeFromCart';
const VIEW_CART_ACTION= 'viewCart';

//function view Cart
function viewCart(){
    console.log('Current Cart of Books: ', bookCart);
}
//crear funcion
function performCartActions(action, newBook){
    switch (action){
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length ===0){
                console.log('Cart is empty, no books to remove.')
            } else {
                const removeBook= bookCart.pop();
                console.log(`Removed book fromt the cart: ${removeBook}`);

            }
            bookCart.pop()
            break;

        case VIEW_CART_ACTION:
            viewCart();
            break;
        default: 
        console.log('Invalid action. Please choose a valid option')
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Cien anos de soledad');
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART_ACTION, 'Niebla');
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART_ACTION);
performCartActions(VIEW_CART_ACTION);