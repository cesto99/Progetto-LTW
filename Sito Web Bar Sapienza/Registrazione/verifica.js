// Funzioni JS per messaggi di errore 

function verifica_utente() {
    localStorage.verifica = "false";
    location.href = "signup.html";
}

function modifica() {
    if (localStorage.verifica == "false") {
        $("#errore").append("<h3> Errore, utente giá esistente  </h3>");
    }
    localStorage.clear();
}