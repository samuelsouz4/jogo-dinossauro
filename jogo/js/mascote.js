let yMascote = 340;
let xMascote = 70;
let meusPontos = 0;


function mostrarMascote() {
    image(imagemDoMascote, xMascote, yMascote, 40, 40);
    
}

function incluirPontos() {

    text(meusPontos, 20, 25)
    fill(color(255,0 ,0 ))
    textSize(21);
    
}


function movimentoMascote() {
    if (keyIsDown(UP_ARROW)) {
        yMascote -= 3 ;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yMascote += 3 ;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        xMascote -= 3 ;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        xMascote += 3 ;
    }
}