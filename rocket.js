import { pressedKeys } from './input.js'
const rocketImg = new Image()
rocketImg.src = "https://www.freeiconspng.com/thumbs/rocket-ship-png/rocket-ship-png-20.png"

export let rocket = {
    x: canvas.width / 2,
    y: canvas.height - 300,
    sizeX: 100,
    sizeY: 200,

    update(ctx){
        this.draw(ctx)
        this.move()
        this.collision()
    },

    draw(ctx){
        ctx.drawImage(rocketImg, this.x, this.y, this.sizeX, this.sizeY);
    },

    move(){
        if(pressedKeys.right) {
            this.x += 10;
            if (this.x + this.sizeX >= canvas.width + 22){
                this.x = canvas.width - this.sizeX + 22;
            }
        }
        if(pressedKeys.left) {
            this.x -= 10;
            if (this.x <= -22){
                this.x = -22;
            }
        }
    },
    
    collision(){
        for (let i = 0; i < rocksCount; i++){
            if ((this.x + this.sizeX >= rocks[i].x - rocks[i].size) &&
                (this.x <= rocks[i].x + rocks[i].size) &&
                (this.y + this.sizeY >= rocks[i].y - rocks[i].size) &&
                (this.y <= rocks[i].y + rocks[i].size)){
                    rocks.splice(i, 1)
                    rocksHit++
            }
        }    
    }
}
