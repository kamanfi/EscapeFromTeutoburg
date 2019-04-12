import drawLegion from './legionnaire';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let x = 0;
let y = 350;
let forwardIndex = 0;
let backwardIndex = 0;
let upwardIndex = 0;
let downwardIndex = 0;


function init (){ // initialize game

    const background = '../images/background/TEST7B.bmp';
    const img = new Image();
    img.src = background;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
            0, 0, canvas.width, canvas.height);
            if (leftPressed){
                drawLegion(x,y,backwardIndex,'backward');
            }else if(rightPressed){
                drawLegion(x,y,forwardIndex,'forward');
            }else if (upPressed){
                drawLegion(x,y,upwardIndex,'up');
            }else if (downPressed){
                drawLegion(x,y,downwardIndex,'down');
            }else{
                drawLegion(x,y);
            }
            
      };

      function loop (){
        if (leftPressed){
            x > 0 ? x-= 1: x;
            backwardIndex === 8 ? backwardIndex =0 : backwardIndex +=1;
            forwardIndex=0;
        }else if (rightPressed){
            x < canvas.width-40 ? x+= 1: x;
            forwardIndex === 8 ? forwardIndex =0 : forwardIndex +=1;
            backwardIndex =0;
        } 
        if (upPressed){
            y > 0 ? y -=1 : y
            upwardIndex === 8 ? upwardIndex =0 : upwardIndex +=1;
   
        }else if (downPressed){ 
            y < canvas.height-53 ? y +=1 : y
            downwardIndex === 8 ? downwardIndex =0 : downwardIndex +=1;
        }

    }
    loop();
    requestAnimationFrame(init);
      
    }



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {    
    switch (e.keyCode) {
        case 65:
        //move left
            leftPressed = true;
            break;
        case 68:
        //move right
            rightPressed = true;
            break;
        case 87:
        //move up
            upPressed = true;
            break;
        case 83:
        //move down
            downPressed = true;
            break;
        default:
            break;
    }  
}
function keyUpHandler(e) {
    switch (e.keyCode) {
        case 65:
        //move left
            leftPressed = false;
            break;
        case 68:
        //move right
            rightPressed = false;
            break;
        case 87:
        //move up
            upPressed = false;
            break;
        case 83:
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