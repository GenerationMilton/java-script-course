//Social Media Profile

// 1. User information
const userName='livemilton';
const fullName='Milton Munoz';
const age=30;
const isStudent=true;

// 2. Address
const address={
    street: 'Calle 48A sur N 88c 80 int 72',
    city:'Bogota',
    state:'Colombia',
    zipCode: 11010,
}

// 3. Hobbies
const hobbies =['Coding', 'Reading', 'Gaming'];

// 4. Generating personalized bio
const personalizedBio =`Hi, I'm ${fullName} 😉.
I'm ${age} years old 🫠.
I live in ${address.city} 🌆.
I'm from ${address.state} 🏰.
My addres in ${address.city} is ${address.street} 🏍️.
I love 🩷  ${hobbies.join(', ')}.
Follow me for coding adventures!🚀`


// 5.print the user profeil and bio
console.log('**** 😎 my personalized Biography 😎 ********')
console.log(personalizedBio);
console.log('**** 🤓 Thanks for your support! 🤓 ********')