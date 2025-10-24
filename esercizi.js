//Esercizio 6 rifatto con "while"


// let number = 1;

// while (number <= 100) {
//     console.log(number++ ** 2);
// }


//Esercizio 7 rifatto con "while"


// let number = 0;

// while (number <= 99) {
//     if (number++ % 2 === 0) {
//         console.log("dispari  " + number);
//     } else {
//         console.log("pari " + number);  
//     }
// }


//8 - // 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7


// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     console.log(i + " *");
//   } else {
//     console.log(i);
//   }
// }


// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti


// for (let i = 1; i < 100; i++) {

//     let radice = Math.sqrt(i) //controlla se "i" è una radice quadrata

//     if (Number.isInteger(radice)) //Number.isInteger controlla se un numero è intero
//         console.log(i + " *");
//     else {
//         console.log(i);
//     }
// }


//  10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0


// let num = prompt("Dimmi un numero");

// let numConverted = Number(num);

// for (let i = num; i >= 0; i--) {
//     console.log(i);
// }

// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente


// let num1 = prompt("Dimmi un numero");

// let num2 = prompt("Dimmi un altro numero");

// let num1Converted = Number(num1);
// let num2Converted = Number(num2); // si potrebbe usare "parseInt" direttamente prima del prompt così: let num1 = parseInt(prompt("Inserisci il primo numero:"));

// let inizio = Math.min(num1, num2);
// let fine = Math.max(num1, num2); // Math.min e Math.max assicurano che il ciclo parta dal numero più piccolo a quello più grande, anche se l'utente li inverte

// console.log("Numeri pari tra (inizio) e (fine}:");

// for (let i = inizio; i <= fine; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto


// let age = parseInt(prompt("Quanti anni hai?"));

// let oreVissute = age * 24 * 365.25; //365.25 perchè conta gli anni bisestili

// alert("Hai vissuto circa " + oreVissute + " ore!");    




