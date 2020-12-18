window.rocks = [];
window.rocksCount = 1;
window.rocksHit = 0;
let timeCount = 5000

class Rock{
    constructor(){
        this.x = Math.random() * (canvas.width - 20) + 20;
        this.y = 0;
        this.size = 20;
        this.color = "SaddleBrown";
        this.speed = 1;
        this.gameOver = false
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();  
        ctx.closePath();
    }

    move(){
        this.y += this.speed;
        console.log(this.speed)
        if(this.y + this.size >= canvas.height && !this.gameOver){
            location.reload()
            this.gameOver = true
        }
    }
}

export function drawRocks(ctx){
    for (let i = 0; i < rocksCount; i++){
        rocks.push(new Rock());
        rocks[i].draw(ctx);
        rocks[i].move();
    }
}

setInterval(function(){ 
    rocksCount++;
    timeCount += 500;
    for(const rock of rocks)rock.speed += 0.1
}, timeCount);
