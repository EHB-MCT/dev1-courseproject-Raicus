//scripts
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


//variabelen
let width = context.canvas.width;
let height = context.canvas.height;
let random, x,x2, x3,y2, y, widthRect, size, 
heightRect = height /25;


//uitvoer (oproep van de verschillende functies)
Background(); 
drawSpecialLines();
drawLines();
drawDiagonalLines();
drawSquare(10);

//verwerking
function Background() {
    context.fillRect(0,0, width, height); //zwarte background
}

function drawSquare(size){
    let x_vierkant = (width - size) /2; //x-coordinaat (plaats) van de witte vierkant
    let y_vierkant = (height - size) /2 //y-coordinaat (plaats) van de witte vierkant
    context.fillStyle = "white"; //kleur vierkant
    context.fillRect(x_vierkant, y_vierkant, size, size); //tekent vierkant
}


function drawLines() {
    let i = 0;
    do {
        x2 = i * 30;
        random = Utils.randomNumber(1, 3); //random nummer tussen 1 en 3
        
        if (random == 1) { 
            context.strokeStyle = Utils.hsla(197, 76, 53, 100); //blauw
        } else if (random == 2) {
            context.strokeStyle = Utils.hsla(358, 87, 50, 100); //rood
        } else {
            context.strokeStyle = Utils.hsla(47, 100, 50, 100); //geel
        } 
        
        Utils.drawLine(width / 2, height / 2, x2, 0); // tekent de lijnen op de bovenste helft van het scherm

        Utils.drawLine(width / 2, height / 2, x2, height); // tekent de lijnen op de onderste helft van het scherm
        i++;
    } while (x2 < width); //stopt wanneer x2 groter is dan de helft van de width
}


function drawSpecialLines(){
    let i =0;
    do{
        random = Utils.randomNumber(1,3); //random nummer tussen 1 en 3
        if(random == 1){
            context.strokeStyle = Utils.hsla(197, 76, 53, 100); //blauw
        }
        else if(random == 2) {
            context.strokeStyle = Utils.hsla(358, 87, 50, 100); //rood
        }
        else {
            context.strokeStyle = Utils.hsla(47, 100, 50, 100); //geel
        }

        x2 = width / 2 * i / 10; //x-coordinaat voor de linkse speciale lijnen
        x3 = width - width / 2 * i / 10; //x-coordinaat voor de rechtse speciale lijnen
        y2 = height / 10 * i; //y-coordinaat            
        
        // console.log(x2 + " " + x3 + " " + y2); //om mijn coordinaten op de console de bekijken

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
            random = Utils.randomNumber(1,3); //random nummer tussen 1 en 3

            if(random == 1){
                context.strokeStyle = Utils.hsla(197, 76, 53, 100); //blauw
            }
            else if(random == 2) {
                context.strokeStyle = Utils.hsla(358, 87, 50, 100); //rood
            }
            else {
                context.strokeStyle = Utils.hsla(47, 100, 50, 100); //geel
            }

            Utils.drawLine(0,i * height,width/2, height/2); //zorgt voor de twee lijnen aan de linker kant van het scherm
            Utils.drawLine(width -1,i * height,width/2, height/2); //zorgt voor de twee lijnen aan de rechter kant van het scherm
        }
}