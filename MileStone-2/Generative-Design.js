import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

//variabelen
let width = context.canvas.width;
let height = context.canvas.height;
let random, x,x2, x3,y2, y, widthRect, 
heightRect = height /25;

//uitvoer
Background();
drawSpecialLines();
drawLines();

//verwerking
function Background() {
    context.fillRect(0,0, width, height); //zwarte background
}


function drawLines() {
    let i = 0;
    do {
        x2 = i * 30;
        random = Utils.randomNumber(1, 3); //random nummer tussen 1 en 3
        
        if (random == 1) { 
            context.strokeStyle = "#29ABE2"; //blauw
        } else if (random == 2) {
            context.strokeStyle = "#ED1C24"; //rood
        } else {
            context.strokeStyle = "#FFC700"; //geel
        } 
        
        Utils.drawLine(width / 2, height / 2, x2, 0); // tekent de lijnen op de bovenste helft van het scherm

        Utils.drawLine(width / 2, height / 2, x2, height); // tekent de lijnen op de onderste helft van het scherm
        i++;
    } while (x2 < width); //while stopt wanneer x2 kleiner is dan de width
}


function drawSpecialLines(){
    let i =0;
    do{
        random = Utils.randomNumber(1,3);
        if(random == 1){
            context.strokeStyle = Utils.hsla(197, 76, 53, 100);
        }
        else if(random == 2) {
            context.strokeStyle = Utils.hsla(358, 87, 50, 100);
        }
        else {
            context.strokeStyle = Utils.hsla(47, 100, 50, 100);
        }

        x2 = width / 2 * i / 10;
        x3 = width - width / 2 * i / 10; 
        y2 = height / 10 * i;            
    
        Utils.drawLine(0, y2, x2, height - height / 20 * i);
        Utils.drawLine(width, y2, x3, height - height / 20 * i);

        i++;
    }while(x2 < width/2);
}

drawDiagonalLines();

function drawDiagonalLines() {
    context.lineWidth = 5;
    context.lineCap = "round";
    for(let i = 0; i < 2; i++)
        {
            random = Utils.randomNumber(1,3);

            if(random == 1){
                context.strokeStyle = Utils.hsla(197, 76, 53, 100);
            }
            else if(random == 2) {
                context.strokeStyle = Utils.hsla(358, 87, 50, 100);
            }
            else {
                context.strokeStyle = Utils.hsla(47, 100, 50, 100);
            }

            Utils.drawLine(0,i * height,width/2, height/2);
            Utils.drawLine(width -1,i * height,width/2, height/2);   
        }
    
    
}