draw();

function draw(){

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    drawSignature();




    function drawSignature(){

        //base

        context.strokeStyle = "black";
    context.fillStyle = "black";

    context.beginPath();
    context.rect(50,50,300,300);

    context.fill();
    context.stroke();
    
    //spaceInvader
context.strokeStyle = "salmon";
context.fillStyle = "salmon";
//upper piece
context.beginPath();
context.rect(125,70,150,50);

context.fill();
context.stroke();

//horizontal right
context.beginPath();
context.rect(225,120,100,50);

context.fill();
context.stroke();

//horizontal left
context.beginPath();
context.rect(75,120,100,50);

context.fill();
context.stroke();

//vertical left
context.beginPath();
context.rect(75,120,50,150);

context.fill();
context.stroke();

//vertical right
context.beginPath();
context.rect(275,120,50,150);

context.fill();
context.stroke();

//lower left
context.beginPath();
context.rect(125,270,50,50);

context.fill();
context.stroke();

//lower middle
context.beginPath();
context.rect(175,220,50,50);

context.fill();
context.stroke();

//lower right
context.beginPath();
context.rect(225,270,50,50);

context.fill();
context.stroke();

    }

}

