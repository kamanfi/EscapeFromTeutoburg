import drawLegion from './legionnaire';
import Skeleton from './skeleton';
import Orc from './orcs'; 
// import drawBox from './invisbleBoxes';

// initialState
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0;
let y = 350;
let speed = 6;
let level =1;
let playerBox = {x: x, y: y, width: 40, height: 53};
let playAgainBox = {x: 414, y: 350, width: 90, height: 10};

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let forwardIndex = 0;
let backwardIndex = 0;
let upwardIndex = 0;
let downwardIndex = 0;
let slashIndex = 0;
let enemiesIndex =0;
let deathIndex =0;
let tauntIndex = 0;
let dmg = 4.8;
let dead = false;
let enemyArray=[];


    document.getElementById('start').addEventListener('click', () => {
        document.getElementById('start').style.display=("none");
   

    function loadEnemy(){
        enemyArray =[];
        if (level % 2 != 0){
            for (let index = 0; index < 23; index++) {
          enemyArray.push(new Skeleton());
            }
      }else {
          for (let index = 0; index < 45; index++) {
              enemyArray.push(new Orc());
          }
      }   
    }
    
    function resetState(){
         leftPressed = false;
         rightPressed = false;
         upPressed = false;
         downPressed = false;
         forwardIndex = 0;
         backwardIndex = 0;
         upwardIndex = 0;
         downwardIndex = 0;
         enemiesIndex =0;
         deathIndex =0;
         tauntIndex = 0;
         dmg = 4.8;
         dead = false;
         health = 10;
         x = 0;
         y = 350;
         loadEnemy();
    }
   
 
    resetState();


    // let collisionCheckBox =[[14,200], [14,340], [104,200], [140,340]];
    // // let playerBoxBox=[[x,y], [x,y+53] , [x+40,y,], [x+40,y+53]];
    // let box1 = {x: 14, y: 200, width: 90, height: 140};



    //game state



    let health = 10;
    // let healthbar = document.getElementById('healthbar');
    // healthbar.style.width = `${health}%`;
    
    
    
    // healthbar.append(`Health`);
    
    function init (){ // initialize game
        
        const background = './images/background/emptyField.png';
        ctx.fillStyle='#FF0000';
        ctx.font ="16px Nosifer";
        ctx.fillText(`Level-${level}`, 450,30);



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
                    console.log("MOVING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                    if (leftPressed){
                        if (collisionCheck(enemyArray,playerBox) == false){
                        drawLegion(x,y,backwardIndex,'backward');
                        }else{
                            x+=speed;
                            if (upPressed){
                                y+=speed;
                            }
                            if (downPressed){
                                y-=speed;
                            }
                            
                            drawLegion(x,y,backwardIndex,'backward',dmg);
                        }
                    }else if(rightPressed){
                        if (collisionCheck(enemyArray,playerBox) == false){
                        drawLegion(x,y,forwardIndex,'forward');
                        }else{
                            x -=speed;
                            if (upPressed){
                                y+=speed;
                            }
                            if (downPressed){
                                y-=speed;
                            }
                            drawLegion(x,y,forwardIndex,'forward',dmg);
                        }
                    } else if (upPressed){
                        if (collisionCheck(enemyArray,playerBox) == false){
                        drawLegion(x,y,upwardIndex,'up');
                        }else{
                            y +=speed;
                            drawLegion(x,y,upwardIndex,'up',1);
                        }
                    }else if (downPressed){
                        if (collisionCheck(enemyArray,playerBox) == false){
                        drawLegion(x,y,downwardIndex,'down');
                        }else{
                            y -=speed;
                            drawLegion(x,y,downwardIndex,'down',dmg);
                        }
                    }else{
                        drawLegion(x,y);
                    }
                    enemiesIndex === 8 ? enemiesIndex =0 : enemiesIndex +=1;
                
                
                    enemyArray.forEach(enemy => {
                            enemy.move(enemiesIndex);
                            collisionCheck(enemyArray, playerBox);  
                            playerBox = {x: x, y: y, width: 40, height: 53}
                    });
                }else{
                    console.log(dead);
                    console.log(health);
                    
                    drawLegion(x,y,deathIndex,'dead');
                    deathIndex === 5 ? deathIndex =5 : deathIndex +=1;
                        enemyArray.forEach(ske => {
                        ske.taunt(tauntIndex);
                        tauntIndex === speed ? tauntIndex =0 : tauntIndex +=1;
                    });
                    ctx.fillStyle='#FF0000';
                    ctx.font ="60px Nosifer";
                    ctx.fillText("GAME OVER", 450,300);
    
                    ctx.fillStyle='#FFFFFF';
                    ctx.font ="12px Nosifer";
                    ctx.fillText("you failed Rome", 450,330);
                    ctx.fillText("restart?", 450,350);
                    ctx.textAlign = "center";
                    ctx.fillStyle='rgba(255, 255, 255, .4)';
                    document.addEventListener("click", mouseClicked, false);
    
                    function mouseClicked(e){
                        
                        let mousePos = getRelativeCoords(e);
                        if (collision(mousePos, playAgainBox)) {
                            level =1;
                            resetState();
                         
                        }

                    }
                    
                }
              
        };
    
         
          function loop (){
              if (!dead){
                  if (leftPressed){
                      x > 0 ? x-= speed: x;
                      backwardIndex === 8 ? backwardIndex =0 : backwardIndex +=1;
                      forwardIndex=0;
                  }else if (rightPressed){
                      x < canvas.width-40 ? x+= speed: x;
                      forwardIndex === 8 ? forwardIndex =0 : forwardIndex +=1;
                      backwardIndex =0;
          
                  } 
                  if (upPressed){
                      y > 0 ? y -=speed : y;
                      upwardIndex === 8 ? upwardIndex =0 : upwardIndex +=1;
                      downwardIndex =0;
           
                  }else if (downPressed){ 
                      y < canvas.height-53 ? y +=speed : y
                      downwardIndex === 6 ? downwardIndex =0 : downwardIndex +=1;
                      upwardIndex =0;
                      }

              }
    
            }
         
            if ( x > 800){
                level +=1;
                resetState();
            }
        loop();
        requestAnimationFrame(init);
        
    }
    
        function collisionCheck(enemyArray,playerBox){
            
            let flag = false
    
            enemyArray.forEach((enemy) =>{
                if (collision(enemy.box(),playerBox ) == true){
                    // healthbar.style.width = `${health-=0.05}%`;
                    health-=0.05;
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
    
    
    function getRelativeCoords(event) {
        return { x: event.offsetX, y: event.offsetY, width: 12, height:12};
    }
    
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
    document.addEventListener("click", mouseClicked2, false);
    function mouseClicked2(e){
        console.log('what');
        drawLegion(x,y,slashIndex,'slash');
        slashIndex == 5 ? slashIndex=0 : slashIndex +=1
    }
    
    init();
})



    


// A = 65
// W = 87
// S = 83
// D = 68