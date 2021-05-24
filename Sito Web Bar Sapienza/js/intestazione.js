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
                '<img src="../icons/cart.svg" style="width:25px; height:25px; margin-left:40px"></img>'+
                '<p id="carr" style="position relative; float:right; font-size:18px"></p>'+
                '<p style="margin-left:40px">Carrello</p>'+
            '</div>'+
        '</div>'+
    '</div>');

    scriviNome();
    document.getElementById("carr").innerText=localStorage.carrello;
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
            '<a href="../index.html" >Home</a>'+
            '<a href="../Info.html">Info</a>'+
            '<a class="neg" href="../Utente/Negozio.html">Negozio</a>'+
            '<a href="#">Contatti</a>'+
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
                '<li><a href="../index.html">Home</a></li>'+
                '<li><a href="../Info.html">Info</a</li>'+
                '<li><a class="neg" href="../Utente/Negozio.html">Negozio</a</li>'+
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
                arr[i].href="../Utente/Negozio.html";
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
    for(var i=0;i<n;i++){
    $("#carte").append('<br>'+
        '<div class="card container">'+
            '<form action="EliminaCarta.php" method="POST"><br>'+
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

$(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
 
    });
 
    $('.nav-trigger').click(function(){
       $('.site-content-wrapper').toggleClass('scaled');
    })
 });