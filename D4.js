/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  let areaRect = l1 * l2;
  console.log("L'area del rettangolo è", areaRect);
};
area(10, 50);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};

console.log(crazySum(8, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (numFornito) {
  if (numFornito > 19) {
    return (numFornito - 19) * 3;
  } else {
    return numFornito - 19;
  }
};
console.log(crazyDiff(30));

/* ESERCIZIO 4 Number.isInteger(2.45)
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return "n è compreso tra 20 e 100";
  } else if (n === 400) {
    return "n=400";
  } else {
    return "n non è compreso ne tra 20 e 100 ne uguale a 400";
  }
};
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA  return 'EPICODE' + str */
const epify = function (stringa) {
  if (stringa.slice(0, 7) === "EPICODE") {
    return stringa;
  } else {
    return "epicode" + " " + stringa;
  }
};
console.log(epify("bolll DEVELOPER"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (numPositivo) {
  if (numPositivo % 3 === 0 || numPositivo % 7 === 0) {
    return "il numero è un multiplo sia di 3 che di 7";
  } else {
    return " il numero non è multiplo ne di 3 ne di 7";
  }
};
console.log(check3and7(21));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA split reverse join */
const reverseString = function (reverse) {
  let i = reverse.split(",");
  let a = i.reverse();
  return a.join();
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(frase) {
  let upper = frase.split(" ");
  let newfrase = " ";
  for (let i = 0; i < upper.length; i++) {
    let maiusc = upper[i].charAt(0).toUpperCase();
    let slice = upper[i].slice(1);
    let fras = maiusc + slice;
    newfrase += fras + " ";
  }

  return newfrase;
}

console.log(upperFirst("ciao come stai?"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
