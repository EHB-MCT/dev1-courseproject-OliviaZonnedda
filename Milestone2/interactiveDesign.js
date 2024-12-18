import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.fillStyle = Utils.hsl(291, 97, 13);
    context.fillRect(0, 0, width, height);

    drawMoon(width / 2, height / 2, Math.PI / 2, Math.PI + Math.PI / 2);
    drawStarrySky();
}
//a1 = Start angle  a2= End angle
function drawMoon(x, y, a1, a2) {
    context.fillStyle = Utils.hsla(291, 97, 50, 10);
    context.arc(x, y, 150, a1, a2);
    context.closePath();
    context.fill();
    context.beginPath();
    context.fillStyle = Utils.hsl(291, 97, 13);
    context.ellipse(x + 45, y, 135, 170, 0, 0, Math.PI * 2);
    context.fill();
}


function drawStarrySky() {
    for (let i = 0; i < 15; i++) {
        drawStar(Utils.randomNumber(0, width), Utils.randomNumber(0, height));
    }
}
function drawStar(x, y) {
    context.beginPath();
    context.fillStyle = Utils.hsla(60, 100, 85, 20);

    context.moveTo(x, y);
    context.lineTo(x + 15, y + 25);
    context.lineTo(x + 40, y + 30);
    context.lineTo(x + 15, y + 45);
    context.lineTo(x + 25, y + 70);
    context.lineTo(x, y + 55);
    context.lineTo(x - 25, y + 70);
    context.lineTo(x - 15, y + 45);
    context.lineTo(x - 40, y + 30);
    context.lineTo(x - 15, y + 25);

    context.fill();

}