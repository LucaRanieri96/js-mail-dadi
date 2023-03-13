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

// Chiedo all'utente la sua email e la metto dentro una variabile
const userEmail = prompt("Inserisci la tua Email");
console.log(userEmail);

// Mi creo un array che contenta varie email del sito
// le email le scrivo a caso visto non posso avere nessun sistema di "subscribe" per inserire delle email dentro alla lista

const emailList = [
"luca@gmail.com", 
"gianni@gmail.com", 
"mario@gmail.com",
"federica@gmail.com",
"giuseppe@gmail.com" 
];

// Ora controllo se l'email dentro il prompt è incluso dentro l'array

if (emailList.includes(userEmail)) {
    console.log("yes, you can enter")
} else {
    console.log("no, you can't enter")
}





/* 
Problema:2 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/