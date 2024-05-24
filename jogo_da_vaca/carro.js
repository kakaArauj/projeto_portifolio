//codigo do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

    
 function mostraCarro(){
   for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i] , yCarros[i], comprimentoCarro, alturaCarro);
   }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
    
   
  xCarros[0] -=  velocidadeCarros[0];
  xCarros[1] -=velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
   }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}
