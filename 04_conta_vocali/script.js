/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/* 
function countVocals(voc) {
    // creo un array conteneti le volcali che mi servirà per il confronto
    const vocals = 'aeiou'
    // creo una variabile dove salvare quante volte trovo una vocale 
    let vocalCount = 0
    // creo un array dove salvere le vocali trovate
    let foundVocals = []
    // uso il ciclo for per analizzare oni lettera della parola
    for (let i = 0; i < voc.length; i++) {
        let char = voc[i]
        // SE la lettera è contenuta nella lista di vocali
        if (vocals.indexOf(char) !== -1) {
            // aumeta il numero di vocali contenute nella parola 
            vocalCount++
            // e si aggiunge all'array che contine tutte le vocali trovate 
            foundVocals.push(char)
        }
    }
    return vocalCount + ' (' + foundVocals.join(', ') + ')';
} 
*/


// arrow function 
const countVocals = (voc) => {
    voc = voc.toLowerCase()
    // creo un array conteneti le volcali che mi servirà per il confronto
    const vocals = 'aeiou'
    // creo una variabile dove salvare quante volte trovo una vocale 
    let vocalCount = 0
    // creo un array dove salvere le vocali trovate
    let foundVocals = []
    // uso il ciclo for per analizzare oni lettera della parola
    for (let i = 0; i < voc.length; i++) {
        let char = voc[i]
        // SE la lettera è contenuta nella lista di vocali
        if (vocals.indexOf(char) !== -1) {
            // aumeta il numero di vocali contenute nella parola 
            vocalCount++
            // e si aggiunge all'array che contine tutte le vocali trovate 
            foundVocals.push(char)
        }
    }
    return vocalCount + ' (' + foundVocals.join(', ') + ')';
}

// Invoca la funzione qui e stampa il risultato in console
// mi salvo il return in una viariabile 
const result = countVocals(word)
// stampo il risultato in console
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)