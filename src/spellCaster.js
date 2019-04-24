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
        this.x = Math.floor( 850+ Math.random() * 900);
        this.y  = Math.floor(Math.random() * 700);
        this.speed = 4;
        this.img = new Image();
        this.img.src = './images/background/spellCaster.png';
        this.img.onload = function() {
            //loads image
            };
    }

    render(index){

            ctx.drawImage(this.img, backward[index], 589 , 40, 53,this.x, this.y, 40, 53);    
            
            // ctx.beginPath();
            // ctx.rect(this.x, this.y, 40-10, 53-10);
            // ctx.stroke();

    }

    move(index){
        
        if(this.x < 800 ){
            this.speed = 20;
        }
        this.x -=this.speed;
        this.render(index);
    }

    taunt(index){
        
        ctx.drawImage(this.img, Math.floor(backward[index]), 144 , 40, 53,this.x, this.y, 40, 53);    
        // ctx.beginPath();s
        // ctx.rect(this.x, this.y, 40, 53);
        // ctx.stroke();

    }

    box(){
      return {x: this.x, y: this.y, width: 40-10, height: 53-10}
    }
}

