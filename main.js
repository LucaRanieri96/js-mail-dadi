/* 
Problema 1:
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. 
*/

// STRUMENTI
// • PROMPT
// • CONST/LET
// • ARRAY
// • IF/ELSE

// Bonus1 definisco le variabili per gli elementi della dom da cui devo prendere le informazioni
const inputEmail = document.getElementById("email");
const sendButton = document.getElementById("send");
// elemento della dom dove scrivo la risposta della verifica password
const answerEl = document.getElementById("answer");

// Chiedo all'utente la sua email e la metto dentro una variabile
/* const userEmail = prompt("Inserisci la tua Email");
console.log(userEmail); */
// ^^^ prima del bonus ^^^

// Mi creo un array che contenta varie email del sito
// le email le scrivo a caso visto non posso avere nessun sistema di "subscribe" per inserire delle email dentro alla lista

const emailList = [
  "luca@gmail.com",
  "gianni@gmail.com",
  "mario@gmail.com",
  "federica@gmail.com",
  "giuseppe@gmail.com",
];

console.log(emailList);

// Ora controllo se l'email dentro il prompt è incluso dentro l'array

/* if (emailList.includes(userEmail)) {
    console.log("yes, you can enter")
} else {
    console.log("no, you can't enter")
} */ //^^^ prima del bonus ^^^

// ^^^ per il bonus 1 devo riscrivere parte del codice scritto sopra ^^^

// dopo il bonus
// Siccome Donato mi vuole male devo ricostruire questo senza include e con un ciclo for (lo faccio sotto)
/* sendButton.addEventListener("click", function () {

  const email = inputEmail.value;
  console.log(inputEmail.value)

  if (emailList.includes(email)) {
    answerEl.innerHTML = ("Evviva! Bentornato " + inputEmail.value)
  } else {
    answerEl.innerHTML = ("Mi dispiace, la tua email non è valida per accedere alla pagina")
  }
}); */

sendButton.addEventListener("click", function () {
  const email = inputEmail.value;
  console.log(inputEmail.value);

  let isEmailFound = false;

  for (let i = 0; i < emailList.length; i++) {
    if (email == emailList[i]) {
      isEmailFound = true;
    }
  }
  /**
   * isEmailFound === true -> false
   * isEmailFound === true -> true
   */
  if (isEmailFound) {
    answerEl.innerHTML = "Evviva! Bentornato " + inputEmail.value;
  } else {
    answerEl.innerHTML =
      "Mi dispiace, la tua email non è valida per accedere alla pagina";
  }
});

/* 
Problema:2 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/

// STRUMENTI
// • CONST/LET
// • MATH
// • IF

// mi creo le costanti che riprendono gli elementi della dom

const dice = document.getElementById("throw");
const result = document.getElementById("result");

// ora metto un eventlistener sul pulsante e comincio a definire le casistiche

dice.addEventListener("click", function () {
  // al click del pulsante devo generare due numeri, 1 per il computer e l'altro per il giocatore, e poi confrontarli
  const player = Math.floor(Math.random() * 6) + 1;
  const cpu = Math.floor(Math.random() * 6) + 1;

  if (player > cpu) {
    result.innerHTML = "Evviva! " + player + " > " + cpu + " Hai vinto!";
  } else if (player < cpu) {
    result.innerHTML = "Peccato... " + player + " < " + cpu + " hai perso...";
  } else {
    result.innerHTML =
      "Un pareggio! " + player + " = " + cpu + " prova a rilanciare il dado!";
  }
});
