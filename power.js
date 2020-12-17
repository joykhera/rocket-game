import { rocket } from './rocket.js'
import { pressedKeys } from './input.js'

let powers = [];

class PowerCirc {
    constructor(){
        this.x = rocket.x + rocket.sizeX / 2;
        this.y = rocket.y + 20;
        this.size = 20;
        this.color = "orange";
        this.dir = 0;
        this.speed = 5;
        this.create = false;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();  
        ctx.closePath();
    }

    move() {
        this.x = this.x + this.speed * Math.cos(this.dir);
        this.y = this.y - this.speed * Math.sin(this.dir);
    }
}

class Power {
    constructor(){
        this.circles = [];
        this.num = 20;
    }

    spawn(){
        let theta = 0;
        for (let i = 0; i < this.num; i++) {
            theta += (0.95 * Math.PI) / this.num;
            this.circles.push(new PowerCirc());
            this.circles[i].dir = theta
        }
    }

    draw(ctx) {
        for (const circ of this.circles) {
            circ.draw(ctx);
        }
    }

    move() {
        for (const circ of this.circles) {
            circ.move();
        }
    }
    
    collision(){
        for (const circ of this.circles) {
            for (let i = 0; i < rocksCount; i++){
                if ((circ.x + circ.size >= rocks[i].x - rocks[i].size) &&
                (circ.x <= rocks[i].x + rocks[i].size) &&
                (circ.y <= rocks[i].y + rocks[i].size) &&
                (circ.y + circ.size >= rocks[i].y - rocks[i].size)){
                    rocks.splice(i, 1)
                    rocksHit++
                }
            }
        }    
    }
}

export function drawPower(ctx){
    if(pressedKeys.shift){
        const newPower = new Power()
        powers.push(newPower);
        newPower.spawn();
    }
    for (const power of powers){
        power.draw(ctx);
        power.move();
        power.collision();
    }
}
