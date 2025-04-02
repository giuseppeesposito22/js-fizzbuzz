// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
// che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo
//    faremmo "a mano"

// creo 3 variabili stringa da stampare nelle varie condizioni
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBUzz";

// ciclo for che conta da 1 a 100
for (let i = 1; i <= 100; i++) {
  // se il numero che sta contando è multiplo di 3 e di 5, stampa "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizzBuzz);
    // altrimenti se il numero che sta contando è solo un multiplo di 3 stampa "Fizz"
  } else if (i % 3 === 0) {
    console.log(fizz);
    // altrimenti se il numero che sta contando è solo un multiplo di 5 stampa "Buzz"
  } else if (i % 5 === 0) {
    console.log(buzz);
    // altrimenti stampa semplicemente solo il numero
  } else {
    console.log(i);
  }
}
