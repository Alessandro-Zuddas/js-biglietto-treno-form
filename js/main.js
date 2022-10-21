"use strict";

// Creo variabile con dentro l'elemento generate-btn
const generateButton = document.getElementById("generate-btn");

// Evento al click del generate-btn
generateButton.addEventListener("click", function(){
    // Leggo nome e cognome dell' utente
    const fullName = document.getElementById(`full-name-input`).value;

    // Leggo i km da percorrere dell' utente
    const tripDuration = document.getElementById(`trip-duration`).value;

    // Leggo i km da percorrere dell' utente
    const userAge = document.getElementById(`age-select`).value;

    // Inizializzo prezzo standard biglietto
    let fullPrice = tripDuration * 0.21;

    if(isNaN(fullName) && !isNaN(tripDuration)){
        // Output Biglietto
        let outputSection = document.getElementById("output-section");
        outputSection.classList.toggle("output-section-hidden");

        if(userAge === "minorenne"){

            fullPrice -= fullPrice * 20 / 100;

            document.getElementById("user-full-name").innerHTML = fullName;

            document.getElementById("ticket-name").innerHTML = "Tariffa Minori";

            document.getElementById("carriage-number").innerHTML = 15;

            document.getElementById("cp-code").innerHTML = 15;

            document.getElementById("ticket-price").innerHTML = fullPrice.toFixed(2) + " €";

        }else if (userAge === "over65"){

            fullPrice -= fullPrice * 40 / 100;

            document.getElementById("user-full-name").innerHTML = fullName;

            document.getElementById("ticket-name").innerHTML = "Tariffa Over 65";

            document.getElementById("carriage-number").innerHTML = 15;

            document.getElementById("cp-code").innerHTML = 15;

            document.getElementById("ticket-price").innerHTML = fullPrice.toFixed(2) + " €";

        } else {

            document.getElementById("user-full-name").innerHTML = fullName;

            document.getElementById("ticket-name").innerHTML = "Tariffa Standard";

            document.getElementById("carriage-number").innerHTML = 15;

            document.getElementById("cp-code").innerHTML = 15;

            document.getElementById("ticket-price").innerHTML = fullPrice.toFixed(2) + " €";

        }
    }else{
        // Errore di inserimento
        alert("Inserisci solamente testo e numeri!!")
        window.location.reload();
    }
});