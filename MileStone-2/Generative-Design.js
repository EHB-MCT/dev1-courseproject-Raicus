import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

//variabelen
let width = context.canvas.width;
let height = context.canvas.height;

//uitvoer
drawRectangle(); //functie "drawRectangle" opgeroept

//verwerking
function drawRectangle() {
    context.fillStyle = "#29ABE2"; //blauw
    context.fillRect(width - width / 1.34,height - height + height / 35, width- width / 1.93, height / 25);
    context.fillStyle = "#ED1C24"; //rood
    context.fillRect(width - width / 1.2,height - height + height / 10, width- width / 2.9, height / 25);
    context.fillStyle = "#FFC700"; //geel
    context.fillRect(width - width / 1.09 ,height - height + height / 5.8, width- width / 5.7, height / 25);
    context.fillStyle = "black"; //zwart
    context.fillRect(0,height - height + height / 4.1, width, height / 25);
}