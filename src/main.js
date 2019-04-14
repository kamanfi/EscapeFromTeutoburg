import drawLegion from './legionnaire';
import Skeleton from './enemies'
// import drawBox from './invisbleBoxes';
const enemyArray =[];

for (let index = 0; index < 11; index++) {
    enemyArray.push(new Skeleton());
    
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let x = 0;
let y = 350;


// let collisionCheckBox =[[14,200], [14,340], [104,200], [140,340]];
// // let playerBoxBox=[[x,y], [x,y+53] , [x+40,y,], [x+40,y+53]];
// let box1 = {x: 14, y: 200, width: 90, height: 140};
let playerBox = {x: x, y: y, width: 40, height: 53};
//game state
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let forwardIndex = 0;
let backwardIndex = 0;
let upwardIndex = 0;
let downwardIndex = 0;
let enemiesIndex =0;
let deathIndex =0;
let tauntIndex = 0;

let dead = false;
let health = 10;

let healthbar = document.getElementById('healthbar');
healthbar.style.width = `${health}%`;



healthbar.append(`Health`);

function init (){ // initialize game
    const background = '../images/background/emptyField.png';
    const img = new Image();
    img.src = background;
    img.onload = function () {
        // playerBox = {x: x, y: y, width: 40, height: 53};
        ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
            0, 0, canvas.width, canvas.height);

            if (health <=0){
                dead = true;
            }
            if (!dead){
                if (leftPressed){
                    if (collisionCheck(enemyArray,playerBox) == false){
                    drawLegion(x,y,backwardIndex,'backward');
                    }else{
                        x+=4;
                        if (upPressed){
                            y+=4;
                        }
                        if (downPressed){
                            y-=4;
                        }
                        
                        drawLegion(x,y,backwardIndex,'backward');
                    }
                }else if(rightPressed){
                    if (collisionCheck(enemyArray,playerBox) == false){
                    drawLegion(x,y,forwardIndex,'forward');
                    }else{
                        x -=4;
                        if (upPressed){
                            y+=4;
                        }
                        if (downPressed){
                            y-=4;
                        }
                        drawLegion(x,y,forwardIndex,'forward');
                    }
                } else if (upPressed){
                    if (collisionCheck(enemyArray,playerBox) == false){
                    drawLegion(x,y,upwardIndex,'up');
                    }else{
                        y +=4;
                        drawLegion(x,y,upwardIndex,'up');
                    }
                }else if (downPressed){
                    if (collisionCheck(enemyArray,playerBox) == false){
                    drawLegion(x,y,downwardIndex,'down');
                    }else{
                        y -=4;
                        drawLegion(x,y,downwardIndex,'down');
                    }
                }else{
                    drawLegion(x,y);
                }
                enemiesIndex === 8 ? enemiesIndex =0 : enemiesIndex +=1;
            
            
                enemyArray.forEach(ske => {
                    ske.move(enemiesIndex);
                    collisionCheck(enemyArray, playerBox);  
                    playerBox = {x: x, y: y, width: 40, height: 53}
                });
            }else{
                drawLegion(x,y,deathIndex,'dead');
                deathIndex === 5 ? deathIndex =5 : deathIndex +=1;
                    enemyArray.forEach(ske => {
                    ske.taunt(tauntIndex);
                    tauntIndex === 7 ? tauntIndex =0 : tauntIndex +=1;

                });
            }
            
           
          
      };

     
      function loop (){
        if (leftPressed){
            x > 0 ? x-= 4: x;
            backwardIndex === 8 ? backwardIndex =0 : backwardIndex +=1;
            forwardIndex=0;
        }else if (rightPressed){
            x < canvas.width-40 ? x+= 4: x;
            forwardIndex === 8 ? forwardIndex =0 : forwardIndex +=1;
            backwardIndex =0;

        } 
        if (upPressed){
            y > 0 ? y -=4 : y;
            upwardIndex === 8 ? upwardIndex =0 : upwardIndex +=1;
            downwardIndex =0;
 
        }else if (downPressed){ 
            y < canvas.height-53 ? y +=4 : y
            downwardIndex === 6 ? downwardIndex =0 : downwardIndex +=1;
            upwardIndex =0;
            }

        }
         
    loop();
    
    requestAnimationFrame(init);
    
}

    function collisionCheck(enemyArray,playerBox){
        
        let flag = false

        enemyArray.forEach((enemy) =>{
            if (collision(enemy.box(),playerBox ) == true){
                healthbar.style.width = `${health-=0.05}%`;
                flag = true;
            }
        });
        return flag;
     }

    function collision (box1, playerBox){
        if (box1.x < playerBox.x + playerBox.width &&
            box1.x + box1.width > playerBox.x &&
            box1.y < playerBox.y + playerBox.height &&
            box1.y + box1.height > playerBox.y) {
             return true;
         }
         return false;
    }


document.addEventListener("keydown", keyDownHandler, true);
document.addEventListener("keyup", keyUpHandler, true);
// document.addEventListener("mouseClick", mouseMoveHandler, false);

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