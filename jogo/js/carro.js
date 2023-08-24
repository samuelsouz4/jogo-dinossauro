//posiÃ§Ãµes dos carros
/* let xCarros1 = 630;
let xCarros2 = 630;
let xCarros3 = 630; */
let xCarros=[700,630,100,630,630,630]
let yCarros=[40,95,150,210,260,320]
let velocidadeCarros=[2,3,2,5,3,4]

let comprimentoCarros = 40;
let alturaCarros =40;




function mostrarCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {
        image(imagensCarros[i],xCarros[i],yCarros[i], 40, 40);
        
    }
 /*    image(imagemDoCarro1,xCarros1,34, comprimentoCarros, alturaCarros);
    image(imagemDoCarro2,xCarros2,90, 50, 50);
    image(imagemDoCarro3,xCarros3,145, 50, 50); */
    
}

function movimentoCarro() {
    for (let i = 0; i < imagensCarros.length; i++) {
       xCarros[i] -= velocidadeCarros[i];
        
       if (xCarros[i] < 50) {
            xCarros[i] = 700
       }
    }
}