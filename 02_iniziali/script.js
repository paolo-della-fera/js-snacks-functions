/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/* 
function takeFirstLetter(arr) {
    const firstLetter = []; 
    // creo un ciclo for per prendere la prima lettera
    for (let i = 0; i < arr.length; i++) {
        // aggiungo la prima lettere di ogni parola nell nuovo array creato precedentemente
        firstLetter.push(arr[i][0])
    }
    return firstLetter
} 
*/

// arrow function
const takeFirstLetter = (arr) => {
    const firstLetter = [];
    for (let i = 0; i < arr.length; i++) {
        // aggiungo la prima lettere di ogni parola nell nuovo array creato precedentemente
        firstLetter.push(arr[i][0])
    }
    return firstLetter
}

// Invoca la funzione qui e stampa il risultato in console
// mi stampo in console l'array con solo le iniziali delle parole del primo array 
console.log(takeFirstLetter(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]