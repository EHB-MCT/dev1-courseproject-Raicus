import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

//variabelen
let width = context.canvas.width;
let height = context.canvas.height;
let random, x,x2, y, widthRect, 
heightRect = height /25;

//uitvoer
Background();
drawLines();
drawRectangle(); //functie "drawRectangle" opgeroept
//verwerking

function Background() {
    context.fillRect(0,0, width, height);
}
function drawRectangle() {
    //Bovenste- onderste rechthoeken 
    for(let i = 0; i<4; i++)
    {
        for (let j = 0; j <2;j++)
        {
            if (i == 0) {
                x = width - width / 1.35;
                y = height / 35; //y-coord voor boven
                widthRect = width- width / 1.9;
                if(j == 1) {
                    y = height / 1.07; //y-coord voor beneden
                }
                context.fillStyle = "#29ABE2"; //blauw
                context.fillRect(x,y,widthRect,heightRect);
            }
            else if (i == 1) {
                x = width - width / 1.2;
                y = height / 10; //y-coord voor boven
                widthRect = width- width / 2.9;
                if(j == 1) {
                    y = height / 1.16; //y-coord voor beneden
                }
                context.fillStyle = "#ED1C24"; //rood
                context.fillRect(x,y,widthRect,heightRect);
            }
            else if (i == 2) {
                x = width - width / 1.09;
                y = height / 5.8; //y-coord voor boven
                widthRect = width- width / 5.9;
                if(j == 1) {
                    y = height / 1.27; //y-coord voor beneden
                }
                context.fillStyle = "#FFC700"; //geel
                context.fillRect(x,y,widthRect,heightRect);
            }
            else {
                x = 0;
                y = height / 4.1; //y-coord voor boven
                widthRect = width;
                if(j == 1) {
                    y = height / 1.4; //y-coord voor beneden
                }
                context.fillStyle = "black"; //zwart
                context.fillRect(x,y,widthRect,heightRect);
            }
        }
    }
}


function drawLines() {
    for(let i = 0; i < 385; i++)
    {
        x2 = i * 5;
        random = Utils.randomNumber(0,3);
        if(random == 0){
            context.strokeStyle = "#29ABE2";
        }
        else if(random == 1) {
            context.strokeStyle = "#ED1C24"; 
        }
        else if(random == 2){
            context.strokeStyle = "#FFC700"; 
        }
        else{
            context.strokeStyle = "black";
        }
        Utils.drawLine(width / 2, height / 3.6, x2, 0);
        Utils.drawLine(width / 2, height / 1.36, x2, height);



        context.strokeStyle = "black";
        Utils.drawLine(width / 2, height /2, i * 5, 0);
        Utils.drawLine(width / 2, height /2, i * 5, height);
        Utils.drawLine(width / 2, height /2, 0, i * 2.46);
        Utils.drawLine(width / 2, height /2, width, i * 2.46);
    }
}

drawTest();

function drawTest(){
    for(let i = 0; i < 50; i++)
    {
        random = Utils.randomNumber(1,3);
        if(random == 1){
            context.fillStyle = Utils.hsla(197, 76, 53, 100-i*2);
        }
        else if(random == 2) {
            context.fillStyle = Utils.hsla(358, 87, 50, 100-i*2);
        }
        else {
            context.fillStyle = Utils.hsla(47, 100, 50, 100-i*2);
        }
           
        context.fillRect(0 + 50 * i,height / 4, 40, height /2);
    }
}
