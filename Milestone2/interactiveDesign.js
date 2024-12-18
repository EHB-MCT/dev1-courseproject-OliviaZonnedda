import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousedown = click;
//alien in array gemaakt zodat een mouse event er op kan
//zoals(bullseye oefening)
let gAlien = [];

object();
function object() {
    let alien = {
        x: 300,
        y: 100,
        size: 40,
        wSpeed: 2, // widthspeed
        hSpeed: 2,//heightspeed
        moving: true // beweegt al wnr het start

    };
    gAlien.push(alien);
}

let stars = [];

//sterren laten staan door array te maken van stars 
//zodat ze op een vaste positie blijven staan
for (let i = 0; i < 15; i++) {
    stars.push({
        x: Utils.randomNumber(0, width),
        y: Utils.randomNumber(0, height)
    });
}



draw();

function draw() {

    context.fillStyle = Utils.hsl(291, 97, 13);
    context.fillRect(0, 0, width, height);

    drawSignature(width - 300, 450, 50, 50);
    drawMoon(width / 2, height / 2, Math.PI / 2, Math.PI + Math.PI / 2);
    drawStarrySky();

    for (let i = 0; i < gAlien.length; i++) {
        drawAlien(gAlien[i].x, gAlien[i].y, gAlien[i].size);
    }

    //alien laten bewegen
    for (let i = 0; i < gAlien.length; i++) {
        if (gAlien[i].moving) {
            //horizontaal
            gAlien[i].x += gAlien[i].wSpeed;
            // verticaal
            gAlien[i].y += gAlien[i].hSpeed;
            //alien laten botsen 
            if (gAlien[i].x >= width - gAlien[i].size || gAlien[i].x <= gAlien[i].size) {
                gAlien[i].wSpeed *= -1;
            } if (gAlien[i].y >= height - gAlien[i].size || gAlien[i].y <= gAlien[i].size) {
                gAlien[i].hSpeed *= -1;
            }
        }
    }

    requestAnimationFrame(draw);
}

//a1 = Start angle  a2= End angle
function drawMoon(x, y, a1, a2) {
    context.beginPath();
    context.fillStyle = Utils.hsla(291, 97, 50, 10);
    context.arc(x, y, 150, a1, a2);
    context.closePath();
    context.fill();
    context.beginPath();
    context.fillStyle = Utils.hsl(291, 97, 13);
    context.ellipse(x + 45, y, 135, 170, 0, 0, Math.PI * 2);
    context.fill();
    context.closePath(); //anders plakt het aan alien
}

function drawStarrySky() {
    for (let i = 0; i < stars.length; i++) {
        drawStar(stars[i].x, stars[i].y);
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

function drawAlien(x, y) {
    //hoofd
    context.beginPath();
    context.fillStyle = "darkgreen";
    Utils.fillEllipse(x, y, 40, 45, 0, 0, Math.PI * 2);
    Utils.fillEllipse(x, y + 50, 5, 15, 0, 0, Math.PI * 2);
    //body
    Utils.fillEllipse(x, y + 110, 30, 60, 0, 0, Math.PI * 2);
    Utils.fillEllipse(x + 10, y + 180, 8, 40, 0, 0, Math.PI * 2);
    Utils.fillEllipse(x - 10, y + 180, 8, 40, 0, 0, Math.PI * 2);
    //ogen
    context.beginPath();
    context.fillStyle = "black";
    Utils.fillEllipse(x - 15, y, 10, 20, 0, 0, Math.PI * 2);
    Utils.fillEllipse(x + 15, y, 10, 20, 0, 0, Math.PI * 2);

}


/**
 * 
 * @param {MouseEvent} e 
 */

function click(e) {
    for (let i = 0; i < gAlien.length; i++) {
        let distance = Utils.calculateDistance(e.pageX, e.pageY, gAlien[i].x, gAlien[i].y);
        console.log(distance);
        if (distance < 50) {
            gAlien[i].moving = false;
        }

    }

}

//spaceinvader





function drawSignature(x, y, x2, y2) {

    //base

    context.strokeStyle = "black";
    context.fillStyle = "black";

    context.beginPath();
    context.rect(x, y, x2 + 250, y2 + 250);

    context.fill();
    context.stroke();

    //spaceInvader
    context.strokeStyle = "salmon";
    context.fillStyle = "salmon";
    //upper piece
    context.beginPath();
    context.rect(x + 75, y + 20, x2 + 100, y2);

    //horizontal right
    context.rect(x + 175, y + 70, x2 + 50, y2);

    //horizontal left
    context.rect(x + 25, y + 70, x2 + 50, y2);

    //vertical left
    context.rect(x + 25, y + 70, x2, y2 + 100);

    //vertical right
    context.rect(x + 225, y + 70, x2, y2 + 100);

    //lower left
    context.rect(x + 75, y + 220, x2, y2);

    //lower middle
    context.rect(x + 125, y + 170, x2, y2);

    //lower right
    context.rect(x + 175, y + 220, x2, y2);

    context.fill();
    context.stroke();

}



