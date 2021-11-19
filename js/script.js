// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

const distance = parseInt(prompt(`What distance do you have to travel?(Type the kilometres)`));
console.log(`Distance: ` + distance);

const age = parseInt(prompt(`How old the passenger is?(Type the passenger's age)`))
console.log(`Age: ` + age)

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const kmPrice = 0.21;

let ticketPrice = kmPrice * distance;
let ticketPriceFix = ticketPrice.toFixed(2);
console.log(`Ticket price: ` + ticketPriceFix + `€`);  

// va applicato uno sconto del 20% per i minorenni

let underageDiscount = parseFloat((ticketPriceFix * 20) / 100);
let underageDiscountFix = underageDiscount.toFixed(2);
console.log(`Underage's Discount(<18): ` + underageDiscountFix + `€`);

let underagePrice = ticketPriceFix - underageDiscountFix;
let underagePriceFix = underagePrice.toFixed(2);
console.log(`Underage's ticket price: ` + underagePriceFix + `€`)

// va applicato uno sconto del 40% per gli over 65.

let overageDiscount = parseFloat((ticketPriceFix * 40) / 100);
let overageDiscountFix = overageDiscount.toFixed(2);
console.log(`Elder's Discount(>65): ` + overageDiscountFix + `€`);

let overagePrice = ticketPriceFix - overageDiscountFix;
let overagePriceFix = overagePrice.toFixed(2);
console.log(`Overage's ticket price: ` + overagePriceFix + `€`)
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

if (age < 18) {
    document.getElementById(`my_div`).innerHTML = `The cost of the ticket will be <span class="price">${underagePriceFix}</span> €.`;
} else if (age > 65) {
    document.getElementById(`my_div`).innerHTML = `The cost of the ticket will be <span class="price">${overagePriceFix}</span> €.`;
} else {
    document.getElementById(`my_div`).innerHTML = `The cost of the ticket will be <span class="price">${ticketPriceFix}</span> €.`
}




