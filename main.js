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

const listaMail = ['mario@mail', 'guido@mail', 'sara@mail', 'michele@mail', 'sergio@mail'];

const invitato = prompt('Inserisci la mail');
for (let i=0; i<listaMail.length; i++) {
    
    if (listaMail[i]==invitato)
    alert('Benvenuto!')
    else 
    alert('Ci dispiace, il tuo contatto non figura in questa lista')
}

//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo. 







//esercizio DADI

//Gioco dei dadi 
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.