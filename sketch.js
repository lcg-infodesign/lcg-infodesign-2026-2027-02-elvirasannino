/*puoi fare dei bottoni
Questi variano per:
- dimensione
- colore
- numero fori o 2 o 4
- dimensione dei fori che dipende ovviamente dalla dimensione originale del bottone
*/

function setup() {
    //le cose inserite nel setup vengono eseguite una sola volta
    createCanvas(windowWidth, windowHeight);
    background("black");

    let numeroBottoni = 200;
    //ceil e floor arrotondano una per eccesso e l'altra per difetto 
    let numeroColonne = ceil(sqrt(numeroBottoni)); 
    let numeroRighe = ceil(sqrt(numeroBottoni));
    let dimColonna = windowWidth / numeroColonne;
    let dimRiga = windowHeight / numeroRighe;

    let xCorrente = 0;
    let yCorrente = 0;

    for(let j = 0; j < numeroBottoni; j++){
        mioBottone(
            xCorrente + dimColonna / 2,
            yCorrente + dimRiga / 2,
            random(min(dimColonna, dimRiga) * 0.5,
                    min(dimColonna, dimRiga) * 1.1)
        );
        
        xCorrente = xCorrente + dimColonna;

        if(xCorrente >= windowWidth){
            xCorrente = 0;
            yCorrente = yCorrente + dimRiga;
        }
    }
}

function draw() {

}

function mioBottone(_x, _y, _size){
    push();

    translate(_x, _y);
    angleMode(DEGREES);
    rotate(random(360));

    let colore = floor(random(1, 9));
    
    if(colore == 1){
        fill("#E9A6B0");
    } else if(colore == 2){
        fill("#9fd0b4");
    } else if(colore == 3){
        fill("#eec477");
    } else if(colore == 4){
        fill("#b5a3f5");
    } else if(colore == 5){
        fill("#90c9df");
    } else if(colore == 6){
        fill("#df7558");
    } else if(colore == 7){
        fill("#d77fbb");
    } else {
        fill("#72a8d5");
    }
    stroke("#e3e3e3");
    strokeWeight(2);

    //bottone
    circle(0, 0, _size);
    //circonferenza all'interno
    noFill();
    circle(0, 0, _size - 10);

    /*devono poter avere 2 o 4 fori quindi basta randomicamente salvare 
    in una variabile un numero compreso tra 1 e 3(escluso) e i valori intermedi
    arrotondarli per difetto altrimento 1 non esce quasi mai e se la variabile
    vale 1 ha 2 fori se no ne ha 4*/
    let numeroFori = floor(random(1, 3));
    
    /*voglio che anche la dimensione dei fori sia scelta in modo random
    ma che sia sempre minore di quella di partenza del bottone*/
    let dimFori = random(_size / 12, _size / 7);

    noStroke();
    fill("black");

    if(numeroFori == 1){
        circle(0, -_size / 8, dimFori);
        circle(0, _size / 8, dimFori);
    } else {
        circle(_size / 8, -_size / 8, dimFori);
        circle(-_size / 8, -_size / 8, dimFori);
        circle(-_size / 8, _size / 8, dimFori);
        circle(_size / 8, _size / 8, dimFori);
    }

    pop();
}