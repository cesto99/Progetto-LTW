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
    var utente={username: user, matricola: matr, nome: nom, cognome:cogn, nascita:nasc, card: []};
    localStorage.utente=JSON.stringify(utente);
    
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

function ErrorMsg() {

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
    localStorage.verifica="";
}



// ------ Funzioni per messaggi generici su schermo ------ //
function aggiorna_dati() {
    localStorage.messaggio = "DatiAggiornati"; // la variabile messaggio serve per printare messaggi su schermo
    location.href = "i_miei_dati.html";

}

// Devo usare un'altra funzione con una variabile local storage diversa
// perche altrimenti altre funzioni pulirebbero "verifica" anche quando non devono
// quindi introduco la variabile lS "messaggio".
function msg() {

    switch(localStorage.messaggio) {
        case "DatiAggiornati":
            $("#message-container").append("<div class=\"titolo msg center\">\
                                            <h3 style=\"color:rgb(0, 153, 0)\">\
                                            <p>I dati sono stati aggiornati correttamente!</p>\
                                            </h3>\</div>");
            break;
    }
    localStorage.messaggio = "";
}



function caricaDati() {
    var u = JSON.parse(localStorage.utente)
    document.getElementById("user").value = u.username;
    document.getElementsByName("nome")[0].value = u.nome;
    document.getElementsByName("cogn")[0].value = u.cognome;
    document.getElementsByName("nascita")[0].value = u.nascita;
    document.getElementsByName("matr")[0].value = u.matricola;
}

function caricaCarte(uC,num,mes,ann,cv,tit){
    var u=JSON.parse(localStorage.utente)
    var n=u.card.length;
    if(mes>=1 && mes<=9)mes='0'+mes;
    var c={userC:uC, numero:num, mese:mes, anno:ann,cvv:cv, titolare:tit};
    u.card[n]=c;
    localStorage.utente=JSON.stringify(u);
}

function vediCarta(){
    
    var u=JSON.parse(localStorage.utente);
    var n=u.card.length;
    for(var i=0;i<n;i++){
    $("#carte").append('<br>'+
        '<div class="card container">'+
            '<div class="container"><br>'+
                '<div style= "width:25%; position:relative; float:left;"><label> Numero Carta: </label><br>'+
                '<input type="text" readonly value="'+u.card[i].numero+'"></div>'+
                '<div style= "width:25%; position:relative; float:left; margin-left: 2%"><label> Scadenza: </label><br>'+
                '<input type="text" readonly value="'+u.card[i].mese+'/'+u.card[i].anno+'"></div>'+
                '<div style= "width:25%; position:relative;float:left; margin-left: 2%"><label> CVV: </label><br>'+
                '<input type="text" readonly value="'+u.card[i].cvv+'"></div>'+
                '<div style="width:79%; position: relative;"><label> Titolare: </label>'+
                '<input type="text" readonly value="'+u.card[i].titolare+'"></div><br>'+
                '<div><button class="btn btn-secondary pos_el" action="EliminaCarta.php"> Elimina </button> </a> </div>'+
           '</div>'+
        '</div>'+
        '<br>');
    }
}