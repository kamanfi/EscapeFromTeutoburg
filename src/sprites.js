class Sprite {
    constructor(img_path, pos, size, speed, frames, dir, once){
        this.pos = pos;
        this.size = size; // size of spirite(one key frame ,pic we flip through)
        this.speed = typeof speed === 'number' ? speed : 0;  //speed in frames/sec for animating
        this.frames = frames;//[0, 1, 2, 3, 2, 1] to animate walking back and forth
        this._index = 0; //sprite sheet
        this.img_path = img_path; //the path to the image for this sprite
        this.dir = dir || 'horizontal';//which direction to move in the sprite map when animating: 'horizontal' (default) or 'vertical'
        this.once = false; // true to only run the animation once, defaults to false
        this.index = 0 //used to determine which frame to render
    }

    update(dt){
        this._index += this.speed*dt;
    }

    render(ctx){
        let frame;
        if(this.speed > 0){
            frame = this.frames[index];
            if (this.once && index+1 >= this.frames.length){ 
                return;
            }
            index >= this.frames.length ? (index =0 ): (index = (index+1));
        }else{
            frame = 0;
        }

        let x = this.pos[0]
        let y = this.pos[1];

        if(this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }
        // 3rd form of drawImage which lets us specify an offset and size for 
        ctx.drawImage(this.img_path,
                          x, y,
                          this.size[0], this.size[1],
                          0, 0,
                          this.size[0], this.size[1]);
        }
    
}