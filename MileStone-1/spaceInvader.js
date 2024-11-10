let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let x = 50;
let y = 50;

Background(x, y);
Signature(x, y);

function Background(x, y) {
	context.beginPath();
	context.fillStyle = "black";
	context.rect(x, y, 300, 300);
	context.fill();
}

function Signature(x, y) {
	context.beginPath();
	context.fillStyle = "#D886E3";
	context.rect(x + 25, y + 175, 100, 100);
	context.rect(x + 25, y + 125, 50, 50);
	context.rect(x + 125, y + 125, 50, 50);
	context.rect(x + 175, y + 175, 100, 100);
	context.rect(x + 225, y + 125, 50, 50);
	context.rect(x + 75, y + 25, 50, 100);
	context.rect(x + 175, y + 25, 50, 100);
	context.fill();
}
