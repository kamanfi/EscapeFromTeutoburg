let img = new Image();
// img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let forward= [9,72,135,201,264,327,391,456,521];
let backward = [16,79,143,208,272,334,402,467,530];
let up = [6,69,131,198,261,327,391,456,518];
let down = [6,69,131,198,261,327,391,456,518];
let death = [6,69,131,198,261,327,391,456,518];
let lastRender = renderforward;

// [7,69,135,201,263,325,390,456,]
function loadImage(url){
    imageholder = {};
    img1.src = '../images/background/Legionnaire.png';

}

function drawLegion(x,y, index,direction){

    img.src = '../images/background/Legionnaire.png';
    img.onload = function() {
        if (direction === 'backward'){
            lastRender = renderbackward;
            lastRender(x,y, index);
        }else if ( direction === 'forward'){
            lastRender = renderforward;
            lastRender(x,y, index);
        }else if (direction === 'up'){
            lastRender = renderup
            lastRender(x,y, index);
        }else if (direction === 'down'){
            lastRender = renderdown;
            lastRender(x,y,index);
        }else if (direction === 'dead'){
           
            renderDeath(x,y,index);
        }else{
          
            lastRender(x,y);
        }
    ctx.beginPath();
    ctx.rect(x, y, 40, 53);
    ctx.stroke();
    };
}

function renderforward(x , y, index=0 ){
    ctx.drawImage(img, forward[index], 720 , 40, 53, x, y, 40, 53);
}

function renderbackward(x,y, index=0){
    ctx.drawImage(img, backward[index], 589 , 40, 53, x, y, 40, 53);
}

function renderup (x,y,index=0){
    ctx.drawImage(img, up[index], 524 , 40, 53, x, y, 40, 53);
}

function renderdown(x,y,index=0){
    ctx.drawImage(img, down[index], 651 , 40, 53, x, y, 40, 53);
}

function renderDeath(x,y,index=0){
    ctx.drawImage(img, death[index], 1291 , 40, 53, x, y, 40, 53);
}

export default drawLegion;


// ctx.drawImage(img, 9, 720  , 40, 51, x, y, 40, 51);
// ctx.drawImage(img, 72, 720 , 40, 51, 40, y, 40, 51);
// ctx.drawImage(img, 135, 720 , 40, 51, 80, y, 40, 51);
// ctx.drawImage(img, 264, 720 , 40, 51, 120, y, 40, 51);
// ctx.drawImage(img, 327, 720 , 40, 51, 160, y, 40, 51);

// ctx.drawImage(img, 391, 720 , 40, 51, 200, y, 40, 51);
// ctx.drawImage(img, 456, 720 , 40, 51, 240, y, 40, 51);
// ctx.drawImage(img, 521, 720 , 40, 51, 280, y, 40, 51);