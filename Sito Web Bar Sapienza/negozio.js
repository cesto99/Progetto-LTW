var app = new Vue ({
    el : '#app' ,
    data : {
        products :[
            {product:'Insalata estiva', 
            description: 'Ingredienti: Lattuga, Pomodorini, Mozzarella, Peperoni, Cipolla',
            image: './images/Insalata_1 (1).png',
            price: '4.00€',
            rating: 5},
            {product:'Tramezzini', 
            description: 'Ingredienti: Insalata, Pomodori e Formaggio',
            image: './images/tramezzini.png',
            price: '3.25€',
            rating: 4},
            {product:'Patatine CrickCrock', 
            description: 'Patatine croccanti in busta',
            image: './images/Patatine_1.png',
            price: '1.00€',
            rating: 4},
            {product:'Panino', 
            description: 'Ingredienti: Bacon, Cheddar, Pollo',
            image: './images/Panino_2.png',
            price: '1.25€',
            rating: 3}],
            
        cart: JSON.parse(localStorage.carrello)
    },
    methods : {
        caricaCarr: function (){
                document.getElementById("carr").innerText=this.cart;
        },

        addCarr: function(){
            this.cart+=1;
            localStorage.carrello=JSON.parse(localStorage.carrello)+1;
            this.caricaCarr();
        }
        
    }
});