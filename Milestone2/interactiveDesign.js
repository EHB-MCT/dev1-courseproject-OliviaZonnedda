import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let alien = {
    x: 300,
    y: 100,
    size: 40,
    wSpeed: 2, // widthspeed
    hSpeed: 2,//heightspeed
    moving: true // beweegt al wnr het start



};

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

    drawMoon(width / 2, height / 2, Math.PI / 2, Math.PI + Math.PI / 2);
    drawStarrySky();
    drawAlien(alien.x, alien.y);


    //alien laten bewegen
    if (alien.moving) {
        //horizontaal
        alien.x += alien.wSpeed;
        // verticaal
        alien.y += alien.hSpeed;
        //alien laten botsen 
        if (alien.x >= width - alien.size || alien.x <= alien.size) {
            alien.wSpeed *= -1;
        } if (alien.y >= height - alien.size || alien.y <= alien.size) {
            alien.hSpeed *= -1;
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