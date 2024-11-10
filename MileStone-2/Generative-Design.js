import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

//variabelen
let width = context.canvas.width;
let height = context.canvas.height;
let random, x,y, widthRect, 
heightRect = height /25;

//uitvoer
drawRectangle(); //functie "drawRectangle" opgeroept

//verwerking
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
        
      

    //onderste rechthoeken 

}