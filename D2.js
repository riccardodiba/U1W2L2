/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers=[25, 25]
if (numbers[0] > numbers[1]){
  console.log(numbers[0] + " è il numero maggiore")
}
else if (numbers[0] < numbers[1]){
  console.log(numbers[1] + " è il numero maggiore")
} 
else {
  console.log(numbers[0] + " e " + numbers[1] ," sono uguali")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 5
const number2 = 8
if (number1 !== number2){
  console.log("not equal")
}
else {
  console.log("equal")
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 50
if (num1 % number1 === 0){
  console.log("divibile per 5")
}
else {
  console.log("non è divibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number3 = 4
if ((number2 === 8 || number3 ===8)){
  console.log("uno dei due numeri è uguale a 8")

}
else if(number2 + number3 ===8 || number2 - number3 ===8)
console.log("la loro addizione/sottrazione sia uguale a 8")






/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 40
const shippingCost = 10
if (totalShoppingCart >=50){
  console.log("spedizione gratuita")
}
else (totalShoppingCart + shippingCost); {
  console.log ("totale carrello")

}



/* ESERCIZIO 6y
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 30;
let numero2 = 90;
let numero3 = 50;

if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log(numero1, numero2, numero3);
  } else {
    console.log(numero1, numero3, numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log(numero2, numero1, numero3);
  } else {
    console.log(numero2, numero3, numero1);
  }
} else {
  if (numero1 >= numero2) {
    console.log(numero3, numero1, numero2);
  } else {
    console.log(numero3, numero2, numero1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let variabile = 100
if (typeof variabile === "number"){
  console.log(variabile + " è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 23
if (num5 % 2 === 0){
  console.log("il numero è pari")
}
else {
  console.log("il numero è dispari")


  }




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10 && val > 5) {
      console.log("Meno di 10")

      }
      else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
      


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}

/* SCRIVI QUI LA TUA RISPOSTA */
city:"toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
 console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (Array.isArray(me.skills) && me.skills.length > 0) {
  me.
  

 
skills.pop();
} else {
  console.log("La proprietà 'skills' non è un array o è vuota.");
}

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = []


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

