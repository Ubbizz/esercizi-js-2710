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


// 1 esercizio libro: Write a loop that makes seven calls to console.log to output the following triangle:


// for (let a = 0; a <= 0; a++) {
//     console.log("#");
//     for (let b = 0; b < 1; b++) {
//         console.log("##");
//         for (let c = 0; c < 1; c++) {
//             console.log("###");
//             for (let d = 0; d < 1; d++) {
//                 console.log("####");
//                 for (let e = 0; e < 1; e++) {
//                     console.log("#####");
//                     for (let f = 0; f < 1; f++) {
//                         console.log("######");
//                         for (let g = 0; g < 1; g++) {
//                             console.log("#######");
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// Con CHATGPT più corto

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }


// 2 esercizio libro: FIZZBUZZ - Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) { // && è l'operatore AND e lo puoi utilizzare nelle stringhe con più operazioni
//     console.log("FizzBuzz"); 
//   } else if (i % 3 === 0) {
//     console.log("Fizz");     
//   } else if (i % 5 === 0) {
//     console.log("Buzz");     
//   } else {
//     console.log(i);          
//   }
// }


// 3 esercizio libro: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


// let size = parseInt(prompt("Dimmi un numero"));
// let board = "";

// for (let row = 0; row < size; row++) {
//   for (let col = 0; col < size; col++) {
//     // Alterna fra # e spazio
//     if ((row + col) % 2 === 0) { 
//       board += " ";
//     } else {
//       board += "#"; 
//     }
//   }
//   board += "\n"; // Nuova colonna dopo ogni linea
// } // Ritorna al codice nestato finchè "row" non è maggiore del "size" scritto nel prompt 
   // finito il loop outputta sulla console
// console.log(board);






