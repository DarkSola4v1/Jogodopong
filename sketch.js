// Variáveis da Bolinha:


let xBolinha = 300;


let yBolinha = 200;


let diametro = 20;


let velocidadeXBolinha = 5;


let velocidadeYBolinha = 5;


let raio = diametro / 2;


                           


//Variáveis da Raquete:


 


let xRaquete=5;


let yRaquete=150;


let raqueteComprimento = 10;


let raqueteAltura = 90;


 


//Variáveis Raquete do Oponente:


let xRaqueteOponente = 585;


let yRaqueteOponente = 150;


let velocidadeYOponente


 


function setup() {


 
createCanvas(600, 400);


}


 


function draw() {


 
background(20);


 
mostraBolinha ();


 
movimentaBolinha ();


 
verificaColisaoBorda ();


 
mostraRaquete (xRaquete, yRaquete);


 
movimentaMinhaRaquete ();


  verificaColisaoRaquete
();


 
mostraRaquete (xRaqueteOponente, yRaqueteOponente);


 
movimentaRaqueteOponente ();
//o nome já diz
  incluirPlacar();
  marcarPonto();
 


function mostraBolinha (){


 
circle(xBolinha, yBolinha, diametro);


}


 


function movimentaBolinha () {


  xBolinha +=
velocidadeXBolinha;


  yBolinha +=
velocidadeYBolinha;


}


 


function verificaColisaoBorda () {


  if (xBolinha
+ raio > width || xBolinha - raio < 0)


 {velocidadeXBolinha *= -1}


 


  if (yBolinha
+ raio > height || yBolinha - raio < 0)


 
{velocidadeYBolinha *= -1}


}


 


function mostraRaquete (x,y) {


  rect (x, y,
raqueteComprimento,


       
raqueteAltura)


 }


 


function mostraRaqueteOponente () {


  rect
(xRaqueteOponente, yRaqueteOponente, raqueteComprimento,


       
raqueteAltura)


 }


 


function movimentaMinhaRaquete() {


    if (keyIsDown(UP_ARROW))
{


       
yRaquete -= 10;


    }


    if
(keyIsDown(DOWN_ARROW)) {


       
yRaquete += 10;


    }


}


 


  function
verificaColisaoRaquete (){


    if
(xBolinha - raio < xRaquete + raqueteComprimento


     
&& yBolinha - raio < yRaquete + raqueteAltura &&
yBolinha + raio > yRaquete){


     
velocidadeXBolinha *= -1;


    }


  }


 


  function
movimentaRaqueteOponente () {


   
velocidadeYOponente = yBolinha - yRaqueteOponente -


     
raqueteComprimento / 2 -30;


   
yRaqueteOponente += velocidadeYOponente;


      }

}

//placar do jogo
let pontosMeus =0;
let pontosOponente =0;
//função incluir placar
 function incluirPlacar(){
      fill(255);
      text(pontosMeus, 278, 26);
      text(pontosOponente, 300, 26);}
//função incluir placar
 function incluirPlacar(){
      fill(255);
      text(pontosMeus, 278, 26);
      text(pontosOponente, 300, 26);
    }

//função marcar pontuação
  function marcarPonto(){
    if(xBolinha>590){
      pontosMeus+=1;
    }
    if(xBolinha<10){
      pontosOponente+=1;
    }
  }