import drawLegion from './legionnaire';
import drawBox from './invisbleBoxes';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let x = 0;
let y = 350;

// let collisionBox =[[14,200], [14,340], [104,200], [140,340]];
// let playerBox=[[x,y], [x,y+53] , [x+40,y,], [x+40,y+53]];
let rect1 = {x: 14, y: 200, width: 90, height: 140};
let rect2 = {x: x, y: y, width: 40, height: 53};
//game state
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let forwardIndex = 0;
let backwardIndex = 0;
let upwardIndex = 0;
let downwardIndex = 0;

function init (){ // initialize game

    const background = '../images/background/TEST7B.bmp';
    const img = new Image();
    img.src = background;
    img.onload = function () {
        rect2 = {x: x, y: y, width: 40, height: 53};
        ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
            0, 0, canvas.width, canvas.height);

            
            if (leftPressed){
                if (collision() == false){
                    drawLegion(x,y,backwardIndex,'backward');
                    }else{
                        console.log('LEFT' );
                        console.log(collision() );
                        console.log(`x: ${x}`);
                        console.log(`y: ${y}`);
                        x +=2;
                        drawLegion(x,y,backwardIndex,'backward');
                    }
            }else if(rightPressed){
                if (collision() == false){
                    drawLegion(x,y,forwardIndex,'forward');
                }else{
                    x -=2;
                    drawLegion(x,y,forwardIndex,'forward');
                }
                
            }else if (upPressed){
                
                if (collision() == false){
                    drawLegion(x,y,upwardIndex,'up');
                }else{
                    console.log('UP' );
                    console.log(collision() );
                    console.log(`x: ${x}`);
                    console.log(`y: ${y}`);
                    y +=2;
                    drawLegion(x,y,upwardIndex,'up');
                }
            }else if (downPressed){
                if (collision() == false){
                    drawLegion(x,y,downwardIndex,'down');
                }else{
                    y -=2;
                    drawLegion(x,y,downwardIndex,'down');
                }
            }else{
                drawLegion(x,y);
            }


            drawBox();
      };

      function loop (){
        if (leftPressed){
            x > 0 ? x-= 2: x;
            backwardIndex === 8 ? backwardIndex =0 : backwardIndex +=1;
            forwardIndex=0;
        }else if (rightPressed){
            x < canvas.width-40 ? x+= 2: x;
            forwardIndex === 8 ? forwardIndex =0 : forwardIndex +=1;
            backwardIndex =0;

        } 
        if (upPressed){
            y > 0 ? y -=2 : y;
            upwardIndex === 8 ? upwardIndex =0 : upwardIndex +=1;
            downwardIndex =0;
 
        }else if (downPressed){ 
            y < canvas.height-53 ? y +=2 : y
            downwardIndex === 8 ? downwardIndex =0 : downwardIndex +=1;
            upwardIndex =0;
            }

        }
    
    loop();
    requestAnimationFrame(init);
      
    }


    function collision(){
        debugger
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
             return true;
         }
         return false;
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