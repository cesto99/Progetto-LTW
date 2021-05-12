// Funzioni JS per messaggi di errore 

function verifica_utente1() {
    localStorage.verifica = "UtenteGiaRegistrato";
    location.href = "signup.html";
}

function verifica_utente2() {
    localStorage.verifica = "UtenteNonRegistrato";
    location.href = "login.html";
}

function controlla_password() {
    localStorage.verifica = "PasswordErrata";
    location.href = "login.html";
}

function modifica() {

    switch(localStorage.verifica) {
        
        case "UtenteGiaRegistrato":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h3 style=\"color:rgb(153, 0, 0)\">\
                                            <p>Errore!</p> <p>L'utente inserito è già registrato</p>\
                                            </h3>\</div>");
            break;
        
        case "UtenteNonRegistrato":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h3 style=\"color:rgb(153, 0, 0)\">\
                                            <p>Errore!</p> <p>Spiacente, non sei un utente registrato</p>\
                                            </h3>\</div>");
            break;
        
        case "PasswordErrata":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h3 style=\"color:rgb(153, 0, 0)\">\
                                            <p>Errore!</p> <p>La password inserita non è corretta</p>\
                                            </h3>\</div>");
            break;

        default:
            localStorage.verifica = "false";
    
    }
    localStorage.clear();
}


