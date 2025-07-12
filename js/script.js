
//recupero il bottone da html cosi da permettere ai dati di essere presi non appena l'untente clicca sul pulsante

const check = document.getElementById(`check`);

//recupero il secondo bottone per creare la dunzione di reset

const reset = document.getElementById(`reset`);

//recupero l'elemnto che andrò a mostrare il risultato
const result = document.getElementById("result");

//devo prevenire il comportamento di default della pagina 

check.addEventListener(`click`, function (e) {
  e.preventDefault();

  //assegno le varibili all'interno dell'evento in modo tale che queste variabili ricevono un valore non appena l'evento Click si verifica 

  const distance = document.getElementById("km").value;
  const age = document.getElementById("age").value;
  const iduser = document.getElementById("nominativo").value;


  //calcolo il costo del biglietto e stabilisco le condizioni che devono essere applicate al calcolo finale.

  //stabilisco il prezzo base a km da percorrere
  let price = 0.21

  //stabilisco il prezzo della corsa
  let runprice = price * distance

  //Variabile vuota creata per inserire il prezzo finale al netto di sconti
  let finalprice;

  //aggiungo la condizione 
  if (age < 18) {
    finalprice = runprice * 0.8 //sconto del 20%

  }
  else if (age >= 65)
    finalprice = runprice * 0.60 //sconto del 40%

  else {
    finalprice = runprice
  }

  //Mostro il risultato direttamente in pagina, quindi recupero prima la variabile da html 

  result.innerText = `Ciao ${iduser}, in base alla tua età ${age} e la distanza da percorrere ${distance} il prezzo del tuo biglietto è ${finalprice.toFixed(2)} `
})

reset.addEventListener(`click`, function (e) {
  e.preventDefault();
  result.innerText = ``;

  //prendo le variabili dal dom ma non richiamandole con le variabili assegnate, perchè essendo all'inteno di un altra funzione queste non vengono visualizzate 

  document.getElementById("nominativo").value = ``;
  document.getElementById("km").value = ``;
  document.getElementById("age").value = ``;

})









