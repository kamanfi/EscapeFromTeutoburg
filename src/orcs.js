let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let down = [6,69,131,198,261,327,391,456,518];
let x = Math.floor(Math.random() * 900);
let  y = Math.floor(Math.random() * 700);

// let y = 0;
// function drawEnemies (index,x=450,y=350){
//     img.src = '../images/background/skeleton.png';
//     img.onload = function() {
//         console.log(index);
//     ctx.drawImage(img, down[index], 589 , 40, 53, x, y, 40, 53);    
//     ctx.beginPath();
//     ctx.rect(x, y, 40, 53);
//     ctx.stroke();
//     };
// }

// export default drawEnemies;
export default class Orc{
    
    constructor(){
        this.x = Math.floor( 500+ Math.random() * 900);
        this.y  = Math.floor(Math.random() * 700);
        this.img = new Image();
        this.img.src = './images/background/orc.png';
        this.speed = 2;
        this.img.onload = function() {
            //loads image
            };
    }

    render(index){

        if (this.speed == -4){

            ctx.drawImage(this.img, down[index], 595 , 40, 53,this.x, this.y, 40, 53);  
        }else{

            ctx.drawImage(this.img, down[index], 651 , 40, 53,this.x, this.y, 40, 53);   
        }
            
            // ctx.beginPath();
            // ctx.rect(this.x, this.y, 40-10, 53-10);
            // ctx.stroke();

    }

    move(index){
        
        if(this.x > 1200){
            this.speed = Math.floor( -6 + Math.random() * -10);
        }
        this.x +=this.speed;
        this.render(index);
    }

    taunt(index){
        
        ctx.drawImage(this.img, Math.floor(down[index]), 651 , 40, 53,this.x, this.y, 40, 53);    
        // ctx.beginPath();
        // ctx.rect(this.x, this.y, 40, 53);
        // ctx.stroke();

    }

    box(){
      return {x: this.x, y: this.y, width: 40-10, height: 53-10}
    }
}

