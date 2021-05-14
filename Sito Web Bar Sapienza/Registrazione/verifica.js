// ------ Funzioni JS per messaggi di errore ------ //
function verifica_utente1() {
    localStorage.verifica = "UtenteGiaRegistrato";
    location.href = "signup.html";
}

function verifica_utente2() {
    localStorage.verifica = "UtenteNonRegistrato";
    location.href = "login.html";
}

// Controllo correttezza password inserita
function controlla_password() {
    localStorage.verifica = "PasswordErrata";
    location.href = "login.html";
}

// Controllo della password di conferma
function confronta_password() {
    localStorage.verifica = "PasswordDiversa";
    location.href = "signup.html";

}


// ------ Funzioni per mostrare nome utente ------ //
function caricaUtente(user, matr, nom, cogn, nasc){
    localStorage.utente="";
    var utente={username: user, matricola: matr, nome: nom, cognome:cogn, nascita:nasc};
    localStorage.utente=JSON.stringify(utente);
    location.href="../Utente_Loggato.html";
}

function stampaNome(){
    var u=JSON.parse(localStorage.utente);
    return u.username;
}

function scriviNome(){
    $("#ut").append('Ciao '+stampaNome()+'!');
}

function esci(){
    localStorage.clear();
    location.href="../index.html"
}

function mettiUtente(){
  document.getElementById("user").value=stampaNome();
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

        case "PasswordDiversa":
            $("#error-container").append("<div id=\"errore\" class=\"titolo error center\">\
                                            <h3 style=\"color:rgb(153, 0, 0)\">\
                                            <p>Errore!</p> <p>Le due password inserite devono essere uguali!</p>\
                                            </h3>\</div>");
            break;

        default:
            localStorage.verifica = "false";
    
    }
    localStorage.clear();
}


