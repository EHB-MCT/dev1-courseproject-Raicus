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
    //Bovenste rechthoeken
    for(let i = 0; i<4; i++)
    {
        for (let j = 0; j <2;j++)
        {

            if (i == 0) {
                x = width - width / 1.35;
                y = height / 35;
                widthRect = width- width / 1.9;
                
                context.fillStyle = "#29ABE2"; //blauw
                context.fillRect(x,y,widthRect,heightRect);
            }
            else if (i == 1) {
                x = width - width / 1.2;
                y = height / 10;
                widthRect = width- width / 2.9;
                
                context.fillStyle = "#ED1C24"; //rood
                context.fillRect(x,y,widthRect,heightRect);
            }
            else if (i == 2) {
                x = width - width / 1.09;
                y = height / 5.8;
                widthRect = width- width / 5.9;

                context.fillStyle = "#FFC700"; //geel
                context.fillRect(x,y,widthRect,heightRect);
            }
            else {
                x = 0;
                y = height / 4.1;
                widthRect = width;

                context.fillStyle = "black"; //zwart
                context.fillRect(x,y,widthRect,heightRect);
            }
        }
    }
        
      

    //onderste rechthoeken 

}