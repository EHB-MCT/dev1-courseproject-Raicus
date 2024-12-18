//scripts
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


//variabelen
let width = context.canvas.width;
let height = context.canvas.height;
let random,
x2, x3, y2,
e = 0,
size = 10, //size cirkel
isBlack = true,
radius;


//object + array
let colors = [
    {h: 197, s: 76, l: 53, a: 100}, // blauw
    {h: 358, s: 87, l: 50, a: 100}, // rood
    {h: 47, s: 100, l: 50, a: 100}  // geel
];

let randomcolor = [];

//voor functie eyes
let eyeProperties = {
    large: Math.min(width, height) / 12, // grootte van het oog (grote deel)
    small: Math.min(width, height) / 40, // grootte van het oog (kleine deel)
    x: width - width / 1.5, // x-coordinaat van het oog
    y: height / 2 // y-coordinaat van het oog
};



//mouse
window.onmousedown = click;
window.onmousemove = move;

//uitvoer (oproep van de verschillende functies)
randomColors()
Background(); 
drawSpecialLines();
drawLines();
drawDiagonalLines();
drawCircle(size);
eyes();

//verwerking
function randomColors() {
    for (let i = 0; i < 100; i++)
    {
        random = Utils.randomNumber(0, colors.length - 1); //random nummer tussen 0 en aantal gegevens in deze array
        randomcolor.push(colors[random]);
    }
}

function Background() {
    if (isBlack) {
        context.fillStyle = "black";
    } else {
        context.fillStyle = "white";
    }
    context.fillRect(0,0, width, height); //zwarte of witte background
}

function drawCircle(size){
    if (isBlack) {
        context.fillStyle = "white";
    } else {
        context.fillStyle = "black";
    } 

    if (size < 25)
    {
        Utils.fillCircle(width /2, height /2, size / 2); //tekent de cirkel in het midden
    }
    else 
    {
        size = 30;
        Utils.fillCircle(width /2, height /2, size / 2); //tekent de cirkel in het midden
    }

}


function drawLines() {
    context.lineWidth = 1;
    let i = 0;
    do {
        x2 = i * width / 20;

        context.strokeStyle = Utils.hsla(randomcolor[i].h, randomcolor[i].s, randomcolor[i].l, Utils.randomNumber(20,100)); //random kleur

        Utils.drawLine(width / 2, height / 2, x2, 0); // tekent de lijnen op de bovenste helft van het scherm

        Utils.drawLine(width / 2, height / 2, x2, height); // tekent de lijnen op de onderste helft van het scherm
        i++;
    } while (x2 < width); //stopt wanneer x2 groter of gelijk is dan de width - width / 15
}

function drawSpecialLines(){
    context.lineWidth = 2;
    let i = 0;
    do{
        random = Utils.randomNumber(0, colors.length - 1); //random nummer tussen 0 en aantal gegevens in deze array

        context.strokeStyle = Utils.hsla(colors[random].h, colors[random].s, colors[random].l, colors[random].a); //random kleur
         
        x2 = width / 2 * i / 10; //x-coordinaat voor de linkse speciale lijnen
        x3 = width - width / 2 * i / 10; //x-coordinaat voor de rechtse speciale lijnen
        y2 = height / 10 * i; //y-coordinaat            

        Utils.drawLine(0, y2, x2, height - height / 20 * i); //tekent de linkse speciale lijnen op de scherm 
        Utils.drawLine(width, y2, x3, height - height / 20 * i); //tekent de rechtse speciale lijnen op de scherm

        i++;
    }while(x2 < width/2); //stopt wanneer x2 groter is dan de helft van de width
}


function drawDiagonalLines() {
    context.lineWidth = 5; //lijn dikte
    context.lineCap = "round"; //zorgt ervoor dat de hoekjes van de lijn "rond" worden

    for(let i = 0; i < 2; i++)
        {
            random = Utils.randomNumber(0, colors.length - 1); //random nummer tussen 0 en aantal gegevens in deze array

            context.strokeStyle = Utils.hsla(colors[random].h, colors[random].s, colors[random].l, colors[random].a); //random kleur

            Utils.drawLine(0,i * height,width/2, height/2); //zorgt voor de twee lijnen aan de linker kant van het scherm
            Utils.drawLine(width,i * height,width/2, height/2); //zorgt voor de twee lijnen aan de rechter kant van het scherm
        }
}


function eyes() {
    Background(); 
    drawSpecialLines();
    drawLines();
    drawDiagonalLines();
    drawCircle(size);
    if (isBlack) {
        context.fillStyle = "white";
    } else {
        context.fillStyle = "black";
    }

    Utils.fillCircle(eyeProperties.x, eyeProperties.y, eyeProperties.large); // left eye
    Utils.fillCircle(eyeProperties.x * 2, eyeProperties.y, eyeProperties.large); // right eye

    if (isBlack) {
        context.fillStyle = "black";
    } else {
        context.fillStyle = "white";
    } 

    Utils.fillCircle(eyeProperties.x, eyeProperties.y, eyeProperties.small); // left eye
    Utils.fillCircle(eyeProperties.x * 2, eyeProperties.y, eyeProperties.small); // right eye
    
    if (eyeProperties.small >= eyeProperties.large)
    {
        radius = false;
    }
    else if (eyeProperties.small <= eyeProperties.large)
    {
        radius = true;
    }

    if (radius == true)
    {
        eyeProperties.small += 0.1;
    }
    else
    {
        eyeProperties.small = 0
        eyeProperties.x -= Utils.randomNumber(1,20);
        e++;
        if (e == 3)
        {
            eyeProperties.x = width - width / 1.5;
            e = 0;
        }
    }

    requestAnimationFrame(eyes);
}

/**
 * @param {MouseEvent} e
 */

function move(e) {
    drawCircle(size += 0.1);
    
}

function click(e) {
    isBlack = !isBlack; 
    Background(); 
    drawSpecialLines();
    drawLines();
    drawDiagonalLines();
    drawCircle(size);
    eyes();
}



