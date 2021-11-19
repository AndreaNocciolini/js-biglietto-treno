// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

const distance = parseInt(prompt(`What distance do you have to travel?(Type the kilometres)`));
console.log(`Distance: ` + distance);

const age = parseInt(prompt(`How old the passenger is?(Type the passenger's age)`))
console.log(`Age: ` + age)

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const kmPrice = 0.21;

let ticketPrice = kmPrice * distance;
console.log(`Ticket price: ` + ticketPrice + `€`);  

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

