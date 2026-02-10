/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui. 
/* 
function saluta(name) {
    // creo la costante per ottenere l'ora attuale
    const hour = new Date().getHours();
    let message = ''
    // SE è mattino (fino alle 13)
    if (hour < 13) {
        message = 'Buongiorno'
    }
    // ALTRIMENTI SE è pomeriggio (fino alle 17)
    else if (hour < 17) {
        message = 'Buon Pomeriggio'
    }
    // ALTRIMENTI è notte (oltre le 17)
    else {
        message = 'Buonasera'
    }
    return message + ' ' + name
} 
*/


// arrow function
const saluta = (name) => {
    // creo la costante per ottenere l'ora attuale
    const hour = new Date().getHours();
    let message = ''
    // SE è mattino (fino alle 13)
    if (hour < 13) {
        message = 'Buongiorno'
    }
    // ALTRIMENTI SE è pomeriggio (fino alle 17)
    else if (hour < 17) {
        message = 'Buon Pomeriggio'
    }
    // ALTRIMENTI è notte (oltre le 17)
    else {
        message = 'Buonasera'
    }
    return message + ' ' + name
}

// Invoca la funzione qui e stampa il risultato in console
// mi salvo il risultato in una variabile
const result = saluta(name)
// lo stampo in console
console.log(result);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.