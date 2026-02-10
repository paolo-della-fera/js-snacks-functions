/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// creo la funzione che mi restituisce il saluto seguito dal nome 
/* 
function saluta(userName) {
    return 'Ciao ' + userName
} 
*/

// arrow function
const saluta = (userName) => 'ciao ' + userName


// Invoca la funzione qui e stampa il risultato in console
/* 
console.log(saluta(userName)); 
*/

// stampo il risultato in console della arrow function 
console.log(saluta(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
