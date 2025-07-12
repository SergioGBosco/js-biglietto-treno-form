
//recupero il bottone da html cosi da permettere ai dati di essere presi non appena l'untente clicca sul pulsante

const check = document.getElementById(`check`);

//devo prevenire il comportamento di default della pagina 

check.addEventListener(`click`, function (e) {
  e.preventDefault();

  //assegno le varibili all'interno dell'evento in modo tale che queste variabili ricevono un valore non appena l'evento Click si verifica 

  const distance = document.getElementById("km").value;
  const age = document.getElementById("age").value;


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
})





