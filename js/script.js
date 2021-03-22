/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
 e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

// 1 CHIEDI ALL'UTENTE I CHILOMETRI CHE VUOLE 
var kmDaFare = parseInt (prompt ('Quanti km vuoi percorrere?') );
//console.log(kmDaFare);
var prezzoKm = 0.21;

// 2 CHIEDERE QUANTI ANNI HA 
var età =  parseInt(prompt ('Quanti anni hai ?') );
//console.log (età);
// 3 prezzo al km del biglietto
var prezzo = kmDaFare * prezzoKm;
//console.log (prezzo);

// 4 
var prezzo20 = (20 / 100) * prezzo;
var prezzoMin = prezzo - prezzo20;
//console.log (prezzoMin);

// 5
var prezzo40 = (40 / 100) * prezzo;
var prezzoOv = prezzo - prezzo40;
//console.log (prezzoOv);
// 6
if (età < 18 ) {
    document.getElementById('biglietto').innerHTML = ('Il prezzo è ') + prezzoMin + ' $' ;
    
    console.log ('il prezzo scontato del 20% è ' + prezzoMin + '$');

} else if (età >= 18 && età < 65) {
    document.getElementById('biglietto').innerHTML =  ('il prezzo è') + prezzo + ' $' ;
    
    console.log ('il prezzo intero è' + prezzo + ' $');
} else if (età >= 65) {
    document.getElementById('biglietto').innerHTML = ('il prezzo è ') + prezzoOv + ' $' ;
   
    console.log ('il prezzo scontato del 40% è ' + prezzoOv + ' $');
}



// se l'età è piu piccola di 18 deve avere un prezzo con il 20% di sconto
// se l'età è sopra ai 18 ha il prezzo standard 
// se l'età è sopra i 65 anni deve avere il 40% di sconto 

