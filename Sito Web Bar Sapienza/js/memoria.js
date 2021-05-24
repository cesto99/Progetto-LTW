// ------ Funzioni per mostrare nome utente ------ //
function caricaUtente(user, matr, nom, cogn, nasc){
    localStorage.utente="";
    var utente={username: user, matricola: matr, nome: nom, cognome:cogn, nascita:nasc, card: []};
    localStorage.utente=JSON.stringify(utente);
    localStorage.carrello=0;
    
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
    location.href="../Home/index.html"
}

function mettiUtente(){
  document.getElementById("user").value=stampaNome();
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
    if(mes>=1 && mes<=9 && mes[0]!='0')mes='0'+mes;
    var c={userC:uC, numero:num, mese:mes, anno:ann,cvv:cv, titolare:tit};
    u.card[n]=c;
    localStorage.utente=JSON.stringify(u);
    
}


function eliminaCarta(num){
    var u=JSON.parse(localStorage.utente)
    var v=u.card;
    var j=0;
    var arr=[];
    for(var i=0;i<v.length;i++){
        if(v[i].numero!=num){
            arr[j]=v[i];
            j++;
        }
    }
    u.card=arr;
    localStorage.utente=JSON.stringify(u);
}
