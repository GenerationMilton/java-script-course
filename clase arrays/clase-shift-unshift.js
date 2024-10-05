//Methods that modify the original array(mutability).
//Shift() --> Elimina el primer elemento de un array y lo devuelve

const colors=['yellow', 'blue', 'red'];
const removedColos= colors.shift();
console.log('**shift**');
console.log(colors);
console.log(removedColos);

//unshift() --> adiciona un valor al primer elemento del array adicionando los valores al array

const newColors= colors.unshift('pink','purple');

console.log('**unshift**');
console.log(colors);
console.log(newColors);

/*
Exercise: Managing a PlayList
Imagine you are a developing a music application, and you need to create a function to manage a playlist.
Your function should take a playlist array, remove the first song using the shift method, add a new song
 to the beginning using the unshift method, and return the updated playlist.
*/

function managePLaylist(playlist, newSong){

    playlist.shift();
    playlist.unshift(newSong);
    return playlist;
}

const initialPlaylist= ['everybodys changing','this is the last time','breaking the habbit'];
const newSongToAdd='Always';

console.log("Initial playlist:" , initialPlaylist);

const updatedPlaylist= managePLaylist(initialPlaylist, newSongToAdd);

console.log('Initial playlist after to make a unshift method: ', initialPlaylist);
console.log('New song to add: ', newSongToAdd);
console.log('Updated playlist: ', updatedPlaylist);