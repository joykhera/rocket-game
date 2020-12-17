import { rocket } from './rocket.js'
import { pressedKeys } from './input.js'

let streaks = [];

class StreakCirc {
    constructor(){
        this.x = rocket.x + rocket.sizeX / 2;
        this.y = rocket.y + 20;
        this.size = 20;
        this.color = "blue";
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
        this.y -= this.speed;
    }

    collision(){
        for (let i = 0; i < rocksCount; i++){
            if ((this.x + this.size >= rocks[i].x - rocks[i].size) &&
            (this.x <= rocks[i].x + rocks[i].size) &&
            (this.y <= rocks[i].y + rocks[i].size) &&
            (this.y + this.size >= rocks[i].y - rocks[i].size)){
                rocks.splice(i, 1)
                rocksHit++
            }
        } 
    }
}

export let streak = {
    totLength: 50,
    spacePressed: false,

    update(ctx){
        this.spawn()
        this.inBound()
        this.create(ctx)
    },

    spawn(){
        if(pressedKeys.space) this.spacePressed = true
        if(streaks.length >= this.totLength) this.spacePressed = false
        if (this.spacePressed) streaks.push(new StreakCirc())
    },

    inBound(){
        for (let i = 0; i < streaks.length; i++) {
            if(streaks[i].y < -streaks[i].size) streaks.splice(i,1)
        }    
    },

    create(ctx){
        for (const streak of streaks){
            streak.draw(ctx);
            streak.move();
            streak.collision();
        }
    }
}
