import drawLegion from './legionnaire';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

function init (){ // initialize game

    const background = '../images/background/TEST7B.bmp';
    const img = new Image();
    img.src = background;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
            0, 0, canvas.width, canvas.height);
            drawLegion();
      };

      function loop (){
        x = x+1;
        y = y+1;
    }
    loop();
    requestAnimationFrame(init);
      
    }



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    switch (e) {
        case 65:
        //move left
            leftPressed = true;
            break;
        case 68:
        //move right
            rightPressed = true;
            break;
        case 83:
        //move up
            upPressed = true;
            break;
        case 68:
        //move down
            downPressed = true;
            break;
        default:
            break;
    }  
}
function keyUpHandler(e) {
    switch (e) {
        case 65:
        //move left
            leftPressed = false;
            break;
        case 68:
        //move right
            rightPressed = false;
            break;
        case 83:
        //move up
            upPressed = false;
            break;
        case 68:
        //move down
            downPressed = false;
            break;
        default:
            break;
    }  
}
init();
// A = 65
// W = 87
// S = 83
// D = 68