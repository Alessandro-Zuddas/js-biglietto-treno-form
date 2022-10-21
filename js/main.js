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
        if(userAge === "minorenne"){

            fullPrice -= fullPrice * 20 / 100;

            // Implementare logica display biglietto
            console.log(fullPrice.toFixed(2) + " €");

        }else if (userAge === "over65"){

            fullPrice -= fullPrice * 40 / 100;

            // Implementare logica display biglietto
            console.log(fullPrice.toFixed(2) + " €");

        } else {
            // Implementare logica display biglietto
            console.log(fullPrice.toFixed(2) + " €");

        }
    }else{
        // Errore di inserimento
        alert("Inserisci solamente testo e numeri!!")
        window.location.reload();
    }
});