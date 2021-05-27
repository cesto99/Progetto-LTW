function caricaHome(){
    var dati={
        "products" :[
            {
                "product": "Insalata estiva", 
                "description":  "Ingredienti: Lattuga, Pomodorini, Mozzarella, Peperoni, Cipolla",
                "image": "../images/Insalata_1 (1).png",
                "price": "4.00€",
                "rating": "4"
            },
            {
                "product": "Insalata di pollo", 
                "description":  "Ingredienti: Lattuga, Pomodorini, Mozzarella, Bocconcini di pollo",
                "image": "../images/Insalata_2.png",
                "price": "5.00€",
                "rating": "5"
            },
            {
                "product":"Tramezzini", 
                "description": "Ingredienti: Insalata, Pomodori e Formaggio",
                "image": "../images/tramezzini.png",
                "price": "3.25€",
                "rating": "4"
            },
            {
                "product":"Acqua grande San Benedetto", 
                "description": "Bottiglia d'acqua grande 1.5 litri San Benedetto",
                "image": "../images/Acqua_2.png",
                "price": "1.50€",
                "rating": "3"
            },
            {
                "product":"Acqua piccola San Benedetto", 
                "description": "Bottiglietta d'acqua piccola 0.5 litri San Benedetto",
                "image": "../images/Acqua_3.png",
                "price": "1.00€",
                "rating": "3"
            },
            {
                "product":"Acqua grande Levissima", 
                "description": "Bottiglia d'acqua grande 1.5 litri Levissima",
                "image": "../images/Acqua_4.png",
                "price": "1.50€",
                "rating": "4"
            },
            {
                "product":"Acqua piccola Levissima", 
                "description": "Bottiglietta d'acqua piccola 0.5 litri Levissima",
                "image": "../images/Acqua_5.png",
                "price": "1.00€",
                "rating": "4"
            },
            {
                "product":"Caffè", 
                "description": "Caffè espresso del bar",
                "image": "../images/Caffè_1.png",
                "price": "0.80€",
                "rating": "5"
            },
            {
                "product":"Cappuccino", 
                "description": "Cappuccino del bar",
                "image": "../images/Cappuccino.png",
                "price": "1.20€",
                "rating": "5"
            },
            {
                "product":"Coca Cola", 
                "description": "Lattina di Coca Cola 33 cl",
                "image": "../images/CocaCola_2.png",
                "price": "1.00€",
                "rating": "5"
            },
            {
                "product":"Coca Cola zero", 
                "description": "Lattina di Coca Cola zero 33 cl",
                "image": "../images/CocaCola_3.png",
                "price": "1.00€",
                "rating": "4"
            },
            {
                "product":"Cornetto semplice", 
                "description": "Cornetto soffice vuoto",
                "image": "../images/Cornetto_1.png",
                "price": "1.00€",
                "rating": "4"
            },
            {
                "product":"Cornetto con marmellata", 
                "description": "Cornetto soffice ripiendo di marmellata ai frutti di bosco",
                "image": "../images/Cornetto_2.png",
                "price": "1.20€",
                "rating": "5"
            },
            {
                "product":"Estathè", 
                "description": "Bottiglietta 0.5 litri Estathè",
                "image": "../images/estathè.png",
                "price": "1.20€",
                "rating": "5"
            },
            {
                "product":"Fuzetea", 
                "description": "Bottiglietta 0.5 litri Fuzetea",
                "image": "../images/Thè_1.png",
                "price": "0.80€",
                "rating": "2"
            },
            {
                "product":"Fanta grande", 
                "description": "Bottiglia di aranciata Fanta grande 1.5 litri",
                "image": "../images/Fanta_2 (1).png",
                "price": "1.50€",
                "rating": "5"
            },
            {
                "product":"Fanta piccola", 
                "description": "Lattina di aranciata Fanta 33 cl",
                "image": "../images/Fanta_2 (2).png",
                "price": "1.00€",
                "rating": "5"
            },
            {
                "product":"Panino", 
                "description": "Ingredienti: Insalata, Prosciutto, Pomodori, Formaggio",
                "image": "../images/Panino_1.png",
                "price": "1.25€",
                "rating": "3"
            },
            {
                "product":"Ciabatta", 
                "description": "Ingredienti: Bacon, Cheddar, Pollo",
                "image": "../images/Panino_2.png",
                "price": "1.50€",
                "rating": "4"
            },
            {
                "product":"Panino caldo", 
                "description": "Ingredienti: Insalata, Pomodori, Formaggio",
                "image": "../images/Panino_3.png",
                "price": "1.25€",
                "rating": "4"
            },
            {
                "product":"Patatine CrickCrock", 
                "description": "Patatine croccanti in busta",
                "image": "../images/Patatine_1.png",
                "price": "1.00€",
                "rating": "4"
            },
            {
                "product":"Patatine Chips", 
                "description": "Patatine croccanti in busta CrickCrock",
                "image": "../images/Patatine_2.png",
                "price": "1.00€",
                "rating": "4"
            },
            {
                "product":"Patatine San Carlo classic", 
                "description": "Patatine croccanti in busta San Carlo gusto classico",
                "image": "../images/Patatine_3.png",
                "price": "1.00€",
                "rating": "5"
            },
            {
                "product":"Patatine San Carlo lime", 
                "description": "Patatine croccanti in busta San Carlo gusto lime e pepe rosa",
                "image": "../images/Patatine_4.png",
                "price": "1.00€",
                "rating": "5"
            },
            {
                "product":"Patatine San Carlo mais", 
                "description": "Patatine croccanti in busta San Carlo gusto mais",
                "image": "../images/Patatine_5.png",
                "price": "1.00€",
                "rating": "4"
            },
            {
                "product":"Patatine San Carlo pomodoro", 
                "description": "Patatine croccanti in busta San Carlo gusto pomodoro",
                "image": "../images/Patatine_6.png",
                "price": "1.00€",
                "rating": "5"
            },
            {
                "product":"Yogurt", 
                "description": "Yogurt cremoso con frutta fresca a pezzi",
                "image": "../images/yogurt.png",
                "price": "1.20€",
                "rating": "5"
            }
        ]
    
    }
    
    
    var n=dati.products.length;
    for(var i=0;i<n;i=i+3){
        $("#conten").append(''+
        '<div class="food-card magic-shadow-sm">'+
            '<div class="product-image flex items-center justify-center">'+
                '<img src="'+dati.products[i].image+'" alt="">'+
            '</div><hr>'+
            '<div>'+
                '<h2 class="text-center">'+dati.products[i].product+'</h2>'+
                '<h4 class="text-center">'+dati.products[i].description+'</h4>'+
                '<div class="stars flex justify-center items-center">'+
                    stars(dati.products[i].rating)+
                '</div>'+
                '<div class="price text-center">'+dati.products[i].price+'</div>'+
            '</div>'+
        '</div>');
    }

    slide();
}
function stars(rating){
    var t="";
    for(var j=0;j<rating;j++){
        t=t+'<img src="../icons/start-filled.svg" alt="">';
    }
    for(var i=0;i<5-rating;i++){
        t=t+'<img src="../icons/star-grey.svg" alt="">';
    }
    return t;
}

function slide(){
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
}

function caricaProd(){
    
    var u=JSON.parse(localStorage.utente);
    var n=u.prodotti.length;
    var p=0;
    for(var i=0;i<n;i++){
        $("#conten").append(''+
        '<div class="card container" style="background-color: white">'+
            '<div>'+
                '<h3>'+u.prodotti[i].product+'  '+u.prodotti[i].price+'   '+'x'+u.prodotti[i].qta+'</h2>'+
    '       </div>'+
            '<div class="product-image flex items-center justify-center style="width:30%; height:30%">'+
                '<img src="'+u.prodotti[i].image+'" alt="" style="width:30%; height:30%">'+
            '</div>'+
            '<div>'+
                '<h5>'+u.prodotti[i].description+'</h4>'+
            '</div>'+
            '<div><button class="btn btn-secondary pos_el" onclick="eliminaCarr('+i+',)">Elimina dal carrello</button> </a> </div>'+
        '</div><br><br>');
       p=p+parseFloat(u.prodotti[i].price)*u.prodotti[i].qta;
    }
    if(p==parseInt(p)){
        document.getElementById("prezzo").value=p+'.00€';
        if(document.getElementById("prezzo").value=="0.00€") document.getElementsByName("paga")[0].disabled=true;
        localStorage.prezzo= document.getElementById("prezzo").value;  
        return;
    } 

    var s=JSON.stringify(p);
    var pos=0;
    for(var x=0;x<s.length;x++){
        if(s[x]=='.')pos=x;
    }
    if(s.length<pos+3) document.getElementById("prezzo").value=p+'0€';
   
    else document.getElementById("prezzo").value=p+'€';
    
    if(document.getElementById("prezzo").value=="0.00€") document.getElementsByName("paga")[0].disabled=true;
    localStorage.prezzo= document.getElementById("prezzo").value;  
}

function eliminaCarr(index){
    var u=JSON.parse(localStorage.utente)
    var v=u.prodotti;
    var j=0;
    var arr=[];
    for(var i=0;i<v.length;i++){
        if(i!=index){
            arr[j]=v[i];
            j++;
        }
        else{
            if(v[i].qta>1){
                v[i].qta-=1;
                arr[j]=v[i];
                j++;
            }
        }
    }
    u.prodotti=arr;
    u.carrello=u.carrello-1;
    localStorage.utente=JSON.stringify(u);
    document.getElementById("carr").innerText=JSON.parse(localStorage.utente).carrello;
    document.getElementById("conten").innerHTML="";
    caricaProd();
}

function paga(){
    var u=JSON.parse(localStorage.utente);
    localStorage.seleziona="daScegliere";
    if(u.card.length==0) location.href="../Utente/Aggiungi_carta.html";
    else location.href="../Utente/Metodo_di_pagamento.html";
}

function pagamento(){
    var min;
    if(document.getElementsByName("edificio")[0].style.display=='none') min=0;
    else min=document.getElementsByName("edificio")[0].value;
    localStorage.messaggio="MessaggioPagamento";
    localStorage.minuti=min;
    var u=JSON.parse(localStorage.utente);
    u.carrello=0;
    u.prodotti=[];
    localStorage.prezzo="0.00€";
    localStorage.utente=JSON.stringify(u);
    document.getElementsByName("paga")[0].disabled=true;
    document.getElementById("carr").innerText=JSON.parse(localStorage.utente).carrello;
    location.href="../Negozio/Negozio.html";
}