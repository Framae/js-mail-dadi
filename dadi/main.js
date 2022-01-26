
// Gioco dei dadi 
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//  computer generates myNumber
let myNumber = Math.floor(Math.random() * 6) + 1;
alert('My number is: '+ myNumber);
// // computer generates computer 
let computerNumber = Math.floor(Math.random() * 6) + 1;
alert("Computer's number is: " + computerNumber);

if (myNumber > computerNumber) {
    alert('Hai vinto!')
}

else if (myNumber < computerNumber) {
    alert('Ha vinto il computer')
}
else {
    alert('pareggio')
}


// console.log(numero.toFixed(2));

    

