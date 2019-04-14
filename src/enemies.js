let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let backward = [16,79,143,208,272,334,402,467,530];
let x = Math.floor(Math.random() * 900);
let  y = Math.floor(Math.random() * 700);

// let y = 0;
// function drawEnemies (index,x=450,y=350){
//     img.src = '../images/background/skeleton.png';
//     img.onload = function() {
//         console.log(index);
//     ctx.drawImage(img, backward[index], 589 , 40, 53, x, y, 40, 53);    
//     ctx.beginPath();
//     ctx.rect(x, y, 40, 53);
//     ctx.stroke();
//     };
// }

// export default drawEnemies;
export default class Skeleton{
    
    constructor(){
        this.x = Math.floor( 300+ Math.random() * 900);
        this.y  = Math.floor(Math.random() * 700);
    }

    render(index){
        let img = new Image();
        const that = this;
        img.src = '../images/background/skeleton.png';
        img.onload = function() {
                ctx.drawImage(img, backward[index], 589 , 40, 53,that.x, that.y, 40, 53);    
                ctx.beginPath();
                ctx.rect(that.x, that.y, 40, 53);
                ctx.stroke();
                };
    }

    move(index){
        
        this.x -=5;
        this.render(index);
    }

    box(){
      return {x: this.x, y: this.y, width: 40, height: 53}
    }
}

