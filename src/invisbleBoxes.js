var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



function drawBox(){
    ctx.beginPath();
    ctx.rect(14, 200, 90, 140);
    ctx.stroke();
}

export default drawBox;