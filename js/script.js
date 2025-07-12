
//recupero il bottone da html cosi da permettere ai dati di essere presi non appena l'untente clicca sul pulsante

const check = document.getElementById(`check`);

//devo prevenire il comportamento di default della pagina 

check.addEventListener(`click`, function (e) {
  e.preventDefault();

  //assegno le varibili all'interno dell'evento in modo tale che queste variabili ricevono un valore non appena l'evento Click si verifica 

  const distance = document.getElementById("km").value;
  const age = document.getElementById("age").value;
  console.log(age)
  console.log(distance)
})





