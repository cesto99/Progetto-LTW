function caricaUtente(username){
    localStorage.utente="";
    var utente={nome: username};
    localStorage.utente=JSON.stringify(utente);
    location.href="../Utente_Loggato.html";
}

function stampaNome(){
    var u=JSON.parse(localStorage.utente);
    return u.nome;
}

function scriviNome(){
    $("#ut").append('Ciao '+stampaNome()+'!');
}