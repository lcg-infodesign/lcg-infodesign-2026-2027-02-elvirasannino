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

    let numeroBottoni = 144;
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
            random(dimRiga * 0.5, dimRiga * 0.9) /*voglio che il diametro del bottone sia compreso tra il 50% e il 90% dell'altezza
             di una cella questo perchè su desktop l'altezza e quindi dimRiga è minore di dimColonna; così il bottone resta nella
              cella senza sbordare*/
        );                                      
        
        xCorrente = xCorrente + dimColonna;

        if(xCorrente >= windowWidth){
            xCorrente = 0;
            yCorrente = yCorrente + dimRiga;
        }
    }
}


function mioBottone(_x, _y, _size){
    push();

    translate(_x, _y);
    angleMode(DEGREES);
    rotate(random(360));

    /*per ottenere un colore casuale tra quelli che ho scelto
    ho creato una variabile che si salva un numero casuale tra 1 e 8 (incluso)
    e in base a quello con un if/else assegna un colore corrispondente*/
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
    in una variabile un numero compreso tra 1 e 3(escluso), con floor 
    arrotondo per difetto quel valore e se la variabile ha salvato 1 
    allora il bottone avrà 2 fori altrimenti 4*/
    let numeroFori = floor(random(1, 3));
    
    /*voglio che anche la dimensione dei fori sia scelta in modo random
    ma che sia sempre minore di quella di partenza del bottone*/
    let dimFori = random(_size / 12, _size / 7);

    noStroke();
    fill("black");

    if(numeroFori == 1){  //2 fori
        circle(0, -_size / 8, dimFori);
        circle(0, _size / 8, dimFori);
    } else {   //4 fori
        circle(_size / 8, -_size / 8, dimFori);
        circle(-_size / 8, -_size / 8, dimFori);
        circle(-_size / 8, _size / 8, dimFori);
        circle(_size / 8, _size / 8, dimFori);
    }

    pop();
}