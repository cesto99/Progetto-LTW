function caricaPagine(){
 if (localStorage.utente==undefined){
    $("#inf").append('' +
    '<div class="container flex justify-between items-center">'+
        '<div class="icons">'+
            '<a href="#"><img src="../icons/facebook.svg" alt=""></a>'+
            '<a href="https://www.instagram.com/sapienzaroma/?hl=it"><img src="../icons/instagram.svg" alt=""></a>'+
        '</div>'+
        '<div class="auth flex items-center">'+
            '<div>'+
                '<img src="../icons/user-icon.svg" alt="">'+
                '<a href="../Registrazione/login.html">Login</a>'+
            '</div>'+
            '<span class="divider">|</span>'+
            '<div>'+
                '<img src="../icons/edit.svg" alt="">'+
                '<a href="../Registrazione/signup.html">Registrati </a>'+
            '</div>'+
        '</div>'+
    '</div>');
}
else{
    $("#inf").append('' +
    '<div class="container flex justify-between items-center">'+
        '<div class="icons">'+
            '<a href="#"><img src="../icons/facebook.svg" alt=""></a>'+
            '<a href="https://www.instagram.com/sapienzaroma/?hl=it"><img src="../icons/instagram.svg" alt=""></a>'+
        '</div>'+
        '<div class="auth flex items-center">'+
            '<h5 id="ut"></h5>'+
            '<div class="dropdown">'+
                '<button onclick="mostra_tendina()" class="dropbtn"> ▼ </button>'+
                '<div id="myDropdown" class="dropdown-content">'+
                    '<a href="../Utente/I_miei_dati.html"> I miei dati </a>'+
                    '<a href="../Utente/Metodo_di_pagamento.html"> Metodo di pagamento </a>'+
                    '<a href="../Gioco/Gioca.html"> Gioca </a>'+
                    '<a href="../Registrazione/Logout.php"> Logout</a>'+
                '</div>'+
            '</div>'+
            '<div>'+
                '<a href="../Negozio/Miei_Prodotti.html"><img src="../icons/cart.svg" style="width:25px; height:25px; margin-left:40px"></img></a>'+
                '<p id="carr" style="position relative; float:right; font-size:18px"></p>'+
                '<p style="margin-left:40px">Carrello</p>'+
            '</div>'+
        '</div>'+
    '</div>');

    scriviNome();
    document.getElementById("carr").innerText=JSON.parse(localStorage.utente).carrello;
}

    $("#menu").append(''+
    '<div class="top">'+
        '<div class="container flex justify-between">'+
            '<div class="contact flex items-center">'+
                '<img src="../icons/phone.svg" alt="">'+
                '<div>'+
                    '<h5>Chiamaci</h5>'+
                    '<h6>331 7479246</h6>'+
                '</div>'+
            '</div>'+
            '<div><img  class="grandezza_logo" src="../icons/Uniroma1.svg.png" alt=""></div>'+
            '<div class="time flex items-center">'+
                '<img src="../icons/clock.svg" alt="">'+
                '<div>'+
                    '<h5>Orari:</h5>'+
                    '<h6>Lun - Sat 8.00 - 12.00</h6>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="navbar magic-shadow">'+
        '<div class="container flex justify-center">'+
            '<a id="hm" href="../Home/index.html" >Home</a>'+
            '<a id="if" href="../Home/Info.html">Info</a>'+
            '<a id="ng" class="neg" href="../Negozio/Negozio.html">Negozio</a>'+
            '<a id="ct" href="#">Contatti</a>'+
        '</div>'+
    '</div>');

    $("#serv").append(''+
    '<div class="container">'+
        '<h1 class="section-heading">I nostri Servizi</h1>'+
        '<div class="card-wrapper flex">'+
            '<div class="service-card magic-shadow-sm">'+
                '<img class="icon" src="../icons/transport.svg" alt="">'+
                    '<h2>Ritiro presso il negozio</h2>'+
                   '<p>Vieni a ritirarlo nel punto del bar situato nella città universitaria</p>'+
            '</div>'+
            '<div class="service-card magic-shadow-sm">'+
                '<img class="icon" src="../icons/usd.svg" alt="">'+
                '<h2>Te lo consegniamo noi!</h2>'+
                "<p>Con un tempo di attesa stabilito te lo consegnamo noi a seconda dell'edificio in cui ti trovi</p>"+
            '</div>'+
        '</div>'+
    '</div>');

    $("#foot").append(''+
    '<div class="container">'+
        '<div class="box">'+
            '<h3>Info</h3>'+
            "<p>Un nuovo servizio per praticità e affidabilità all'interno della Città Universitaria </p>"+
        '</div>'+
        '<div class="box">'+
            '<h3>Quik Links</h3>'+
            '<ul>'+
                '<li><a href="../Home/index.html">Home</a></li>'+
                '<li><a href="../Home/Info.html">Info</a</li>'+
                '<li><a class="neg" href="../Negozio/Negozio.html">Negozio</a</li>'+
                '<li><a href="../Registrazione/Login.html">Registrati o Accedi</a></li>'+
            '</ul>'+
        '</div>'+
        '<div class="box">'+
            '<h3>Seguici</h3>'+
            '<div>'+
                '<ul>'+
                    '<li>'+
                        '<a href="HH">'+
                            '<img src="../icons/facebook.svg" alt="">'+
                            '<span>Facebook</span>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="https://www.instagram.com/sapienzaroma/?hl=it">'+
                            '<img src="../icons/instagram.svg" alt="">'+
                            '<span>Instagram</span>'+
                        '</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>');
    
    
        var arr=document.getElementsByClassName("neg");
        var n=arr.length;
        for(var i=0;i<n;i++){
            if(localStorage.utente==undefined){
                arr[i].href="../Registrazione/Login.html";
            }
            else {
                arr[i].href="../Negozio/Negozio.html";
            }
        }

}

function mostra_tendina() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function vediCarta(){
    
    var u=JSON.parse(localStorage.utente);
    var n=u.card.length;
    if(localStorage.seleziona=="daScegliere"){
        for(var i=0;i<n;i++){
            $("#carte").append('<br>'+
                '<div class="card container">'+
                    '<form><br>'+
                        '<div style= "width:25%; position:relative; float:left;"><label> Numero Carta: </label><br>'+
                        '<input type="text" name="numero" readonly value="'+u.card[i].numero+'"></div>'+
                        '<div style= "width:25%; position:relative; float:left; margin-left: 2%"><label> Scadenza: </label><br>'+
                        '<input type="text" readonly value="'+u.card[i].mese+'/'+u.card[i].anno+'"></div>'+
                        '<div style= "width:25%; position:relative;float:left; margin-left: 2%"><label> CVV: </label><br>'+
                        '<input type="text" readonly value="'+u.card[i].cvv+'"></div>'+
                        '<div style="width:79%; position: relative;"><label> Titolare: </label>'+
                        '<input type="text" readonly value="'+u.card[i].titolare+'"></div><br>'+
                    '</form>'+
                   '<div><button class="btn btn-secondary pos_el" onclick="impostaCarta('+i+')">Seleziona</button> </a> </div>'+
                '</div>'+
            '<br>');
        }
        document.getElementsByClassName("selez")[0].innerText="Seleziona carta per il pagamento"
        document.getElementsByClassName("selez")[1].href="";
        document.getElementsByClassName("selez")[1].innerHTML="";
    }
    else{
        for(var i=0;i<n;i++){
            $("#carte").append('<br>'+
                '<div class="card container">'+
                    '<form action="../Utente/EliminaCarta.php" method="POST"><br>'+
                        '<div style= "width:25%; position:relative; float:left;"><label> Numero Carta: </label><br>'+
                        '<input type="text" name="numero" readonly value="'+u.card[i].numero+'"></div>'+
                        '<div style= "width:25%; position:relative; float:left; margin-left: 2%"><label> Scadenza: </label><br>'+
                        '<input type="text" readonly value="'+u.card[i].mese+'/'+u.card[i].anno+'"></div>'+
                        '<div style= "width:25%; position:relative;float:left; margin-left: 2%"><label> CVV: </label><br>'+
                        '<input type="text" readonly value="'+u.card[i].cvv+'"></div>'+
                        '<div style="width:79%; position: relative;"><label> Titolare: </label>'+
                        '<input type="text" readonly value="'+u.card[i].titolare+'"></div><br>'+
                        '<div><button class="btn btn-secondary pos_el" name="ElCart"> Elimina </button> </a> </div>'+
                   '</form>'+
                '</div>'+
            '<br>');
        }
    }
}

function caricaPagamento(){
    var num=localStorage.seleziona;
    var u=JSON.parse(localStorage.utente);
    for(var i=0;i<u.card.length;i++){
        if(u.card[i].numero==num){
            $("#carte").append('<br>'+
                '<div class="card container">'+
                    '<form><br>'+
                        '<div><input type="radio" name="scelta" value="ritira" checked><label style="margin-left:2%" for="ritira">Vieni a ritirare</label></div>'+
                        '<div><input type="radio" name="scelta" value="consegna"><label style="margin-left:2%" for="consegna">Consegniamo noi</label></div><br>'+
                        '<label for="edificio">Seleziona edificio</label>'+
                        '<select name="edificio" style="display:none">'+
                            '<option value="4">RM002</option>'+
                            '<option value="4">RM004</option>'+
                            '<option value="5">RM005</option>'+
                            '<option value="5">RM006</option>'+
                            '<option value="5">RM014</option>'+
                            '<option value="7">RM015</option>'+
                            '<option value="10">RM018</option>'+
                            '<option value="10">RM019</option>'+
                        '</select>'+
                        '<div style= "width:25%; position:relative; float:left;"><label> Numero Carta: </label><br>'+
                        '<input type="text" name="numero" readonly value="'+u.card[i].numero+'"></div>'+
                        '<div style= "width:25%; position:relative; float:left; margin-left: 2%"><label> Scadenza: </label><br>'+
                        '<input type="text" readonly value="'+u.card[i].mese+'/'+u.card[i].anno+'"></div>'+
                        '<div style= "width:25%; position:relative;float:left; margin-left: 2%"><label> CVV: </label><br>'+
                        '<input type="text" readonly value="'+u.card[i].cvv+'"></div>'+
                        '<div style="width:79%; position: relative;"><label> Titolare: </label>'+
                        '<input type="text" readonly value="'+u.card[i].titolare+'"></div><br>'+
                    '</form>'+
                    '<div><label> Totale: </label>'+
                   '<input type="text" readonly style="width:8%; text-align:right" id="prezzo">'+
                   '<button name="paga" class="btn btn-secondary pos_el" onclick="pagamento()"> Paga</button> </a></div>'+
                '</div>'+
            '<br>');
        }
    }
    document.getElementById("prezzo").value=localStorage.prezzo;
    if(document.getElementById("prezzo").value=='0.00€') document.getElementsByName("paga")[0].disabled=true;
    var v=document.getElementsByName("scelta");
    for(var k=0;k<v.length;k++){
        v[k].addEventListener("click",function mostraEdificio(e){
                                        if (e.target.value=="consegna") document.getElementsByName("edificio")[0].style.display='block';
                                        else document.getElementsByName("edificio")[0].style.display='none';
                                        });
    }
}
