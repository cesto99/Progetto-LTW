function caricaPagine(){
    $("#intest").append(''+
    '<div>'+
        '<img src="./icons/Uniroma1.svg.png" alt="">'+
    '</div>'+
    '<div class="mobile-nav">'+
        '<div class="nav-top">'+
            '<ul>'+
                '<li><a href="index.html">Home</a></li>'+
                '<li><a href="Info.html">Info</a></li>'+
                '<li><a href="#">Negozio</a></li>'+
                '<li><a href="./Login.html">Registrati | Accedi </a></li>'+
            '</ul>'+
        '</div>'+
        '<div class="contact flex items-center">'+
            '<img src="./icons/phone.svg" alt="">'+
            '<div>'+
                '<h5>SOS - 800 81 11 92</h5>'+
                '<h6>E-mail : helpdesk@studenti.uniroma1.it</h6>'+
            '</div>'+
        '</div>'+
        '<div class="time flex items-center">'+
           '<img src="./icons/clock.svg" alt="">'+
           '<div>'+
                '<h5>Orario </h5>'+
                '<h6>Lun - Sat 8.00 - 12.00</h6>'+
            '</div>'+
        '</div>'+
    '</div>');

    $("#inf").append(''+
    '<div class="container flex justify-between items-center">'+
        '<div class="icons">'+
            '<a href="#"><img src="./icons/facebook.svg" alt=""></a>'+
            '<a href="#"><img src="./icons/instagram.svg" alt=""></a>'+
        '</div>'+
        '<div class="auth flex items-center">'+
            '<div>'+
                '<img src="./icons/user-icon.svg" alt="">'+
                '<a href="Registrazione/login.html">Log in</a>'+
            '</div>'+
            '<span class="divider">|</span>'+
            '<div>'+
                '<img src="./icons/edit.svg" alt="">'+
                '<a href="Registrazione/signup.html">Registrati </a>'+
            '</div>'+
        '</div>'+
    '</div>');

    $("#menu").append(''+
    '<div class="top">'+
        '<div class="container flex justify-between">'+
            '<div class="contact flex items-center">'+
                '<img src="./icons/phone.svg" alt="">'+
                '<div>'+
                    '<h5>Chiamaci</h5>'+
                    '<h6>331 7479246</h6>'+
                '</div>'+
            '</div>'+
            '<div><img  class="grandezza_logo" src="./icons/Uniroma1.svg.png" alt=""></div>'+
            '<div class="time flex items-center">'+
                '<img src="./icons/clock.svg" alt="">'+
                '<div>'+
                    '<h5>Orari:</h5>'+
                    '<h6>Lun - Sat 8.00 - 12.00</h6>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="navbar magic-shadow">'+
        '<div class="container flex justify-center">'+
            '<a href="index.html" >Home</a>'+
            '<a href="Info.html">Info</a>'+
            '<a href="#">Metodo di pagamento</a>'+
            '<a href="#">Negozio</a>'+
            '<a href="#">Contatti</a>'+
        '</div>'+
    '</div>');

    $("#serv").append(''+
    '<div class="container">'+
        '<h1 class="section-heading">I nostri Servizi</h1>'+
        '<div class="card-wrapper flex">'+
            '<div class="service-card magic-shadow-sm">'+
                '<img class="icon" src="./icons/transport.svg" alt="">'+
                    '<h2>Ritiro presso il negozio</h2>'+
                   '<p>Vieni a ritirarlo nel punto del bar situato nella città universitaria</p>'+
            '</div>'+
            '<div class="service-card magic-shadow-sm">'+
                '<img class="icon" src="./icons/usd.svg" alt="">'+
                '<h2>Te lo consegnamo noi!</h2>'+
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
                '<li><a href="index.html">Home</a></li>'+
                '<li><a href="Info.html">Info</a</li>'+
                '<li><a href="#">Negozio</a</li>'+
                '<li><a href="Registrazione/Login.html">Registrati o Accedi</a></li>'+
            '</ul>'+
        '</div>'+
        '<div class="box">'+
            '<h3>Seguici</h3>'+
            '<div>'+
                '<ul>'+
                    '<li>'+
                        '<a href="HH">'+
                            '<img src="./icons/facebook.svg" alt="">'+
                            '<span>Facebook</span>'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="https://www.instagram.com/sapienzaroma/?hl=it">'+
                            '<img src="./icons/instagram.svg" alt="">'+
                            '<span>Instagram</span>'+
                        '</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>');

}