//Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve? 
// Consigli del giorno: 
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”



//esercizio MAIL

//Chiedi all’utente la sua email,

let listaMail = ['mario@mail', 'guido@mail', 'sara@mail', 'michele@mail', 'sergio@mail'];

//controlla che sia nella lista di chi può accedere,

let invitato = prompt('Inserisci la mail');
let conto = 0

invitato.toUpperCase();

for (let i=0; i<listaMail.length; i++) {
    
    if (listaMail[i] == invitato) { //stampa un messaggio appropriato sull’esito del controllo. 
        document.getElementById('answer').innerHTML = 'Welcome'
        conto += 1
    }
    
    else if (i == listaMail.length - 1 && conto == 0) {
        document.getElementById('answer').innerHTML = ":-( Sorry, you are not on the list";
    }
    
}











//esercizio DADI

//Gioco dei dadi 
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.