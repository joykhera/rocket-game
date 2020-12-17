import { rocket } from './rocket.js'
import { pressedKeys } from './input.js'

let lasers = [];
let upPressed = false;

class Laser {
    constructor(){
        this.x = rocket.x + rocket.sizeX / 2;
        this.y = rocket.y + 20;
        this.size = 20;
        this.color = "red";
        this.speed = 5;
        this.rocksHit = 0;
    }

    draw(ctx){
        if(this.y >= rocket.y +20) this.x = rocket.x + rocket.sizeX / 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();  
        ctx.closePath();
    }

    move(){
        this.y -= this.speed;
    }

    collision(){
        for (let i = 0; i < rocksCount; i++){
            if ((this.x + this.size >= rocks[i].x - rocks[i].size) &&
            (this.x - this.size <= rocks[i].x + rocks[i].size) &&
            (this.y  - this.size <= rocks[i].y + rocks[i].size) &&
            (this.y + this.size >= rocks[i].y - rocks[i].size)){
                rocks.splice(i, 1)
                rocksHit++
            }
        }    
    }
}

export function drawLaser(ctx){
    if(pressedKeys.up && !upPressed){
        lasers.push(new Laser());
        upPressed = true;
    }
    if(!pressedKeys.up){
        upPressed = false;
    }
    for (const laser of lasers) {
        laser.draw(ctx);
        laser.move();
        laser.collision();
    }
}
