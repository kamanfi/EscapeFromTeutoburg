let img = new Image();
// img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


function drawLegion(){

    img.src = '../images/background/Legionnaire.png';
    img.onload = function() {
      init();
    };
}


function init(){
    ctx.drawImage(img, 72, 722, 43, 50, 10, 10, 43, 50);
}

function render(x, y){
    ctx.drawImage(img, 72, 722, 43, 50, 10, 10, 43, 50);
}

export default drawLegion;

