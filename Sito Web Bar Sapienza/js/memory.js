var app = new Vue ({
    el : '#game' ,
    data : {
        cards :[
                        
            {image: "../images/Fanta_2 (2).png"},
            {image: "../images/Caffè_1.png"},
            {image: "../images/Cappuccino.png"},
            {image: "../images/CocaCola_2.png"},
            {image: "../images/Corn.png"},
            {image: "../images/Thè_1.png"},
            {image: "../images/Panino_3.png"},
            {image: "../images/Patatine_4.png"}
        ],
            
        mosse: 0,
        matrice: [[0,1,2,3],[4,5,6,7],[0,1,2,3],[4,5,6,7]],
        vettore:[0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],
        xPrec: -1,
        yPrec:-1,
        coppie:0
    },
    methods : {
        scopri: function(x,y){
            var index=(x-1)*4+y-1;
            var elem=document.getElementsByClassName("imm")[index];
            if(elem.style.display == "none" || elem.scoperta) return;
            var immagine=this.cards[this.vettore[index]].image;
            var immPrec="";
            if(this.xPrec!=-1) immPrec=this.cards[this.vettore[(this.xPrec-1)*4+this.yPrec-1]].image;
            elem.src=immagine;
            elem.scoperta=true;
            if(immagine==immPrec){
                this.coppie+=1;
                elem.style.display="none";
                document.getElementsByClassName("imm")[(this.xPrec-1)*4+this.yPrec-1].style.display="none";
                
                this.xPrec=-1;
                this.yPrec=-1; 
                                  
            }
            else if(immPrec!=""){
                document.getElementsByClassName("imm")[(this.xPrec-1)*4+this.yPrec-1].scoperta=false;
                demo(index,(this.xPrec-1)*4+this.yPrec-1);
                this.xPrec=-1;
                this.yPrec=-1;
                elem.scoperta=false;
            }
            else{
                this.xPrec=x;
                this.yPrec=y;           
             
            }
           this.mosse+=1;
           if(this.coppie==8) this.msg();
        },
        inizia: function(){
            document.getElementsByClassName("contenuto")[0].style.display="block";
            this.mosse= 0;
            this.vettore=this.vettore.sort(() => Math.random() - 0.5);
            this.xPrec= -1;
            this.yPrec=-1;
            this.coppie=0;
            var v=document.getElementsByClassName("imm");
            for(var i=0;i<v.length;i++){
                v[i].src="../images/carta.png"
                v[i].style.display="block";
                v[i].scoperta=false;
            }
            document.getElementById("message-container").innerHTML="";
        },

        msg: function(){
            
            $("#message-container").append("<div class=\"titolo msg center\">\
            <h4 style=\"color:rgb(0, 163, 0)\">\
            <p><b>Hai vinto in "+this.mosse/2+" mosse</b></p>\
            </h4>\</div>");

        }

               
    }
});

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(uno,due){
    await sleep(500);
    document.getElementsByClassName("imm")[uno].src="../images/carta.png";
    document.getElementsByClassName("imm")[due].src="../images/carta.png";
}