let stars = [];
let starCount = 150;

class Star {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 0;  
        this.dirX = false;
        this.dirY = false;
        this.velX = 0;
        this.velY = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.color = "white";
    }
    
    randomize(){
        if ((this.x <= this.size || this.x >= canvas.width + this.size) || 
        (this.y <= this.size || this.y >= canvas.height + this.size)){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = 0;
            this.dirX = false;
            this.dirY = false;
            this.velX = 0;
            this.velY = 0;
            this.speedX = 0;
            this.speedY = 0;
        }    
    }

    direction(){
        this.dirX = Boolean(this.x > canvas.width / 2);
        this.dirY = Boolean(this.y > canvas.height / 2);
    }

    speed(){
        this.speedX = (Math.abs((canvas.width / 2) - this.x)) / 1000;
        this.speedY = (Math.abs((canvas.height / 2) - this.y)) / 1000;
    }

    circSize(){
        this.size = (Math.abs((canvas.width / 2) - this.x)) / 100;
    }

    move(){
        this.dirX ?
        this.velX += this.speedX:
        this.velX -= this.speedX;
        this.x += this.velX;

        this.dirY ?
        this.velY += this.speedY:
        this.velY -= this.speedY;
        this.y += this.velY;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill(); 
        ctx.closePath();
    }

}

export function drawStars(ctx) {
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
        stars[i].randomize();
        stars[i].draw(ctx);
        stars[i].direction();
        stars[i].speed();
        stars[i].circSize();
        stars[i].move();
    }
}
