/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

/* const aName = []; */

// Dichiara la funzione qui.
// creo la funzione per selezionare solo i nomi che iniziano per A
/* 
function takeAName(arr, letter) {
    // creo un ciclo for per prendere la prima lettera
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        // SE la prima lettera dei nomi contenuti è A vengono salvati in un altro array 
        if (word.charAt(0) === letter) {
            aName.push(word)
        }
    }
    return aName
} 
*/


// arrow function
const takeAName = (arr, letter) => {
    // mi creo un array per contenere i risultati
    const results = []; 
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        // SE la prima lettera dei nomi contenuti è A vengono salvati in un altro array
        if (word.charAt(0) === letter) {
            results.push(word);
        }
    }
    
    return results;
}


// Invoca la funzione qui e stampa il risultato in console
// mi salvo il return in una viariabile 
const result = takeAName(names, 'A');
// poi mi stampo il risultato in console 
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]