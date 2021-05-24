var app = new Vue ({
    el : '#app' ,
    data : {
        products :[
            {
                product: "Insalata estiva", 
                description: "Ingredienti: Lattuga, Pomodorini, Mozzarella, Peperoni, Cipolla",
                image: "../images/Insalata_1 (1).png",
                price: "4.00€",
                rating: 4
            },
            {
                product: "Insalata di pollo", 
                description: "Ingredienti: Lattuga, Pomodorini, Mozzarella, Bocconcini di pollo",
                image: "../images/Insalata_2.png",
                price: "5.00€",
                rating: 5
            },
            {
                product: "Tramezzini", 
                description: "Ingredienti: Insalata, Pomodori e Formaggio",
                image: "../images/tramezzini.png",
                price: "3.25€",
                rating: 4
            },
            {
                product: "Acqua grande San Benedetto", 
                description: "Bottiglia d'acqua grande 1.5 litri San Benedetto",
                image: "../images/Acqua_2.png",
                price: "1.50€",
                rating: 3
            },
            {
                product: "Acqua piccola San Benedetto", 
                description: "Bottiglietta d'acqua piccola 0.5 litri San Benedetto",
                image: "../images/Acqua_3.png",
                price: "1.00€",
                rating: 3
            },
            {
                product: "Acqua grande Levissima", 
                description: "Bottiglia d'acqua grande 1.5 litri Levissima",
                image: "../images/Acqua_4.png",
                price: "1.50€",
                rating: 4
            },
            {
                product: "Acqua piccola Levissima", 
                description: "Bottiglietta d'acqua piccola 0.5 litri Levissima",
                image: "../images/Acqua_5.png",
                price: "1.00€",
                rating: 4
            },
            {
                product:"Caffè", 
                description: "Caffè espresso del bar",
                image: "../images/Caffè_1.png",
                price: "0.80€",
                rating: 5
            },
            {
                product: "Cappuccino", 
                description: "Cappuccino del bar",
                image: "../images/Cappuccino.png",
                price: "1.20€",
                rating: 5
            },
            {
                product: "Coca Cola", 
                description: "Lattina di Coca Cola 33 cl",
                image: "../images/CocaCola_2.png",
                price: "1.00€",
                rating: 5
            },
            {
                product: "Coca Cola zero", 
                description: "Lattina di Coca Cola zero 33 cl",
                image: "../images/CocaCola_3.png",
                price: "1.00€",
                rating: 4
            },
            {
                product: "Cornetto semplice", 
                description: "Cornetto soffice vuoto",
                image: "../images/Cornetto_1.png",
                price: "1.00€",
                rating: 4
            },
            {
                product: "Cornetto con marmellata", 
                description: "Cornetto soffice ripiendo di marmellata ai frutti di bosco",
                image: "../images/Cornetto_2.png",
                price: "1.20€",
                rating: 5
            },
            {
                product: "Estathè", 
                description: "Bottiglietta 0.5 litri Estathè",
                image: "../images/estathè.png",
                price: "1.20€",
                rating: 5
            },
            {
                product: "Fuzetea", 
                description: "Bottiglietta 0.5 litri Fuzetea",
                image: "../images/Thè_1.png",
                price: "0.80€",
                rating: 2
            },
            {
                product: "Fanta grande", 
                description: "Bottiglia di aranciata Fanta grande 1.5 litri",
                image: "../images/Fanta_2 (1).png",
                price: "1.50€",
                rating: 5
            },
            {
                product :"Fanta piccola", 
                description: "Lattina di aranciata Fanta 33 cl",
                image: "../images/Fanta_2 (2).png",
                price: "1.00€",
                rating: 5
            },
            {
                product: "Panino", 
                description: "Ingredienti: Insalata, Prosciutto, Pomodori, Formaggio",
                image: "../images/Panino_1.png",
                price: "1.25€",
                rating: 3
            },
            {
                product:"Ciabatta", 
                description: "Ingredienti: Bacon, Cheddar, Pollo",
                image: "../images/Panino_2.png",
                price: "1.50€",
                rating: 4
            },
            {
                product: "Panino caldo", 
                description: "Ingredienti: Insalata, Pomodori, Formaggio",
                image: "../images/Panino_3.png",
                price: "1.25€",
                rating: 4
            },
            {
                product: "Patatine CrickCrock", 
                description: "Patatine croccanti in busta",
                image: "../images/Patatine_1.png",
                price: "1.00€",
                rating: 4
            },
            {
                product: "Patatine Chips", 
                description: "Patatine croccanti in busta CrickCrock",
                image: "../images/Patatine_2.png",
                price: "1.00€",
                rating: 4
            },
            {
                product :"Patatine San Carlo classic", 
                description: "Patatine croccanti in busta San Carlo gusto classico",
                image: "../images/Patatine_3.png",
                price: "1.00€",
                rating: 5
            },
            {
                product: "Patatine San Carlo lime", 
                description: "Patatine croccanti in busta San Carlo gusto lime e pepe rosa",
                image: "../images/Patatine_4.png",
                price: "1.00€",
                rating: 5
            },
            {
                product: "Patatine San Carlo mais", 
                description: "Patatine croccanti in busta San Carlo gusto mais",
                image: "../images/Patatine_5.png",
                price: "1.00€",
                rating: 4
            },
            {
                product: "Patatine San Carlo pomodoro", 
                description: "Patatine croccanti in busta San Carlo gusto pomodoro",
                image: "../images/Patatine_6.png",
                price: "1.00€",
                rating: 5
            },
            {
                product: "Yogurt", 
                description: "Yogurt cremoso con frutta fresca a pezzi",
                image: "../images/yogurt.png",
                price: "1.20€",
                rating: 5
            }
        ],
            
        cart: JSON.parse(localStorage.carrello)
    },
    methods : {
        caricaCarr: function (){
                document.getElementById("carr").innerText=this.cart;
        },

        addCarr: function(i){
            this.cart+=1;
            localStorage.carrello=JSON.parse(localStorage.carrello)+1;
            this.caricaCarr();
            var obj=this.products[i];
            if(localStorage.prodotti==undefined){
                var arr=[obj];
                localStorage.prodotti=JSON.stringify(arr);
            }
            else{
                var u=JSON.parse(localStorage.prodotti);
                var n=u.length;
                u[n]=obj;
                localStorage.prodotti=JSON.stringify(u);
            }
        }
        
    }
});