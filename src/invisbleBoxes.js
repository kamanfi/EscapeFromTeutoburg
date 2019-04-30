var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var boxArray = [];


function drawBox(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    boxArray.push({ x: x, y: y, width: width, height: height });
    ctx.stroke();

}

drawBox(14, 200, 90, 140);
