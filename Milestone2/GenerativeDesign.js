import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);

    context.lineWidth = "5";
    context.strokeStyle = "white";
    drawGrid(150, 150);
    drawArcSide(10, 65);

}
function drawGrid(x, y) {

    for (let i = 0; i < 10; i++) {

        Utils.drawLine(x + i * 150, 0, x + i * 150, height);

        for (let i = 0; i < 10; i++) {
            Utils.drawLine(0, y + i * 150, width, y + i * 150);

        }
    }

}

function drawArcSide(x, y) {


    for (let i = 0; i < 40; i++) {
        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 50, 100);

        context.beginPath();
        context.arc(x + i * 150, y, 50, Math.PI + Math.PI / 2, Math.PI / 2);
        context.lineTo(x + i * 150, y);
        context.closePath();
        context.fill();
    }


}