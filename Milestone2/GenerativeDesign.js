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
    drawArcSideL(15, 65);
    drawArcSideR(125, 65);
    drawRect(50, 50);
    drawHearts(5, 5, 140, 140);
}
function drawGrid(x, y) {

    for (let i = 0; i < 10; i++) {

        Utils.drawLine(x + i * 150, 0, x + i * 150, height);

        for (let j = 0; j < 10; j++) {
            Utils.drawLine(0, y + j * 150, width, y + j * 150);

        }
    }

}

function drawArcSideL(x, y) {

    for (let i = 0; i < 40; i++) {

        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 85, 100);

        context.beginPath();
        context.arc(x + i * 150, y, 50, Math.PI + Math.PI / 2, Math.PI / 2);
        context.fill();

        //for (let j = 0; j < 3; j++) {

        // context.fillStyle = Utils.hsla(75 * Math.random(), 100, 50, 100);

        // context.beginPath();
        //context.arc(x, y + j * 300, 50, Math.PI + Math.PI / 2, Math.PI / 2);
        // context.fill();

        // }



    }
    //row two
    for (let i = 0; i < 40; i++) {

        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 85, 100);

        context.beginPath();
        context.arc(x + i * 150, y + 300, 50, Math.PI + Math.PI / 2, Math.PI / 2);
        context.fill();
    }
    //row three
    for (let i = 0; i < 40; i++) {

        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 85, 100);

        context.beginPath();
        context.arc(x + i * 150, y + 600, 50, Math.PI + Math.PI / 2, Math.PI / 2);
        context.fill();
    }
}

function drawArcSideR(x, y) {


    for (let i = 0; i < 40; i++) {
        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 85, 100);

        context.beginPath();
        context.arc(x + i * 150, y, 50, Math.PI / 2, Math.PI + Math.PI / 2);
        context.lineTo(x + i * 150, y);
        context.closePath();
        context.fill();
    }
    //for (let i = 0; i < 3; i++) {
    //context.fillStyle = Utils.hsla(75 * Math.random(), 100, 50, 100);

    // context.beginPath();
    // context.arc(x, y + i * 300, 50, Math.PI / 2, Math.PI + Math.PI / 2);

    //context.closePath();
    // context.fill();

    // }

    //row two
    for (let i = 0; i < 40; i++) {
        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 85, 100);

        context.beginPath();
        context.arc(x + i * 150, y + 300, 50, Math.PI / 2, Math.PI + Math.PI / 2);
        context.fill();
    }
    //row three
    for (let i = 0; i < 40; i++) {
        context.fillStyle = Utils.hsla(75 * Math.random(), 100, 85, 100);

        context.beginPath();
        context.arc(x + i * 150, y + 600, 50, Math.PI / 2, Math.PI + Math.PI / 2);
        context.fill();
    }
}
function drawRect(x, y) {
    //bovenste
    for (let i = 0; i < 40; i++) {

        context.fillStyle = Utils.hsla(220 * Math.random(), 110, 85, 100);
        context.fillRect(x + i * 150, y + 150, Math.random() * (90 - 50) + 50, Math.random() * (90 - 50) + 50);

    }
    //onder
    for (let i = 0; i < 40; i++) {

        context.fillStyle = Utils.hsla(220 * Math.random(), 110, 85, 100);
        context.fillRect(x + i * 150, y + 450, Math.random() * (85 - 50) + 50, Math.random() * (85 - 50) + 50);

    }
}
function drawHearts(x, y, x2, y2) {
    for (let i = 0; i < 30; i++) {
        context.fillStyle = "white";
        context.fillRect(x + i * 150, y, x2, y2);
    } for (let i = 0; i < 5; i++) {
        context.fillStyle = "white";
        context.fillRect(x, y + i * 150, x2, y2);

    } for (let i = 0; i < 30; i++) {
        context.fillStyle = "white";
        context.fillRect(x + i * 150, y + 600, x2, y2);
    } for (let i = 0; i < 5; i++) {
        context.fillStyle = "white";
        context.fillRect(x + 600, y + i * 150, x2, y2);

    }
    for (let i = 0; i < 5; i++) {
        context.fillStyle = "white";
        context.fillRect(x + 750, y + i * 150, x2, y2);

    } for (let i = 0; i < 5; i++) {

        for (let i = 0; i < 5; i++) {
            context.fillStyle = "white";
            context.fillRect(x + 1350, y + i * 150, x2, y2);

        }
        for (let i = 0; i < 5; i++) {
            context.fillStyle = "white";
            context.fillRect(x + 1500, y + i * 150, x2, y2);

        }
        //fill rest
        context.fillStyle = "white";
        context.fillRect(305, y + 150, x2, y2);
        context.fillRect(1055, y + 150, x2, y2);
        context.fillRect(x + 150, y + 450, x2, y2);
        context.fillRect(x + 450, y + 450, x2, y2);
        context.fillRect(x + 1200, y + 450, x2, y2);
        context.fillRect(x + 900, y + 450, x2, y2);
    }
}




