// ------ Funzioni JS per aggiunta/eliminazione metodi di pagamento ------ //

function aggiungi_carta() {
    localStorage.messaggio = "CartaAggiunta";
    location.href = "../Utente/Metodo_di_pagamento.html";
}

function elimina_carta() {
    localStorage.messaggio = "CartaElminata";
    location.href = "../Utente/Metodo_di_pagamento.html";
}


// ------ Funzioni JS per messaggi di errore ------ //
function verifica_utente1() {
    localStorage.verifica = "UtenteGiaRegistrato";
    location.href = "../Registrazione/signup.html";
}

function verifica_utente2() {
    localStorage.verifica = "UtenteNonRegistrato";
    location.href = "../Registrazione/login.html";
}

// Controllo correttezza password inserita
function controlla_password() {
    localStorage.verifica = "PasswordErrata";
    location.href = "../Registrazione/login.html";
}

// Controllo della password di conferma
function confronta_password() {
    localStorage.verifica = "PasswordDiversa";
    location.href = "../Registrazione/signup.html";

}



function ErrorMsg() {

    switch(localStorage.verifica) {
        
        case "UtenteGiaRegistrato":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h4 style=\"color:rgb(163, 0, 0)\">\
                                            Errore!<br>L'utente inserito è già registrato\
                                            </h4>\</div>");
            break;
        
        case "UtenteNonRegistrato":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h4 style=\"color:rgb(163, 0, 0)\">\
                                            Errore!<br>Spiacente, non sei un utente registrato\
                                            </h4>\</div>");
            break;
        
        case "PasswordErrata":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h4 style=\"color:rgb(163, 0, 0)\">\
                                            Errore!<br>La password inserita non è corretta\
                                            </h4>\</div>");
            break;

        case "PasswordDiversa":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h4 style=\"color:rgb(163, 0, 0)\">\
                                            Errore!<br>Le due password inserite devono essere uguali!\
                                            </h4>\</div>");
            break;
        
        default:
        localStorage.verifica = "false";
    
    }
    localStorage.verifica="";
}



// ------ Funzioni per messaggi generici su schermo ------ //
function aggiorna_dati() {
    localStorage.messaggio = "DatiAggiornati"; // la variabile messaggio serve per printare messaggi su schermo
    location.href = "../Utente/I_miei_dati.html";

}

// Devo usare un'altra funzione con una variabile local storage diversa
// perche altrimenti altre funzioni pulirebbero "verifica" anche quando non devono
// quindi introduco la variabile lS "messaggio".
function msg() {

    switch(localStorage.messaggio) {
        case "DatiAggiornati":
            $("#message-container").append("<div class=\"titolo msg center\">\
                                            <h4 style=\"color:rgb(0, 163, 0)\">\
                                            <p>I dati sono stati aggiornati correttamente!</p>\
                                            </h4>\</div>");
            break;
        
        case "CartaAggiunta":
            $("#message-container").append("<div class=\"titolo msg center\">\
                                            <h4 style=\"color:rgb(0, 163, 0)\">\
                                            <p>Il metodo di pagamento è stato aggiunto correttamente!</p>\
                                            </h4>\</div>");
            break;
        
        case "CartaElminata":
            $("#message-container").append("<div class=\"titolo error center\">\
                                            <h4 style=\"color:rgb(163, 0, 0)\">\
                                            <p>il metodo di pagamento è stato eliminato correttamente!</p>\
                                            </h4>\</div>");
            break;
    }
    localStorage.messaggio = "";
}




