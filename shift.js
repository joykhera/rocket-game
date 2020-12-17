import { pressedKeys } from './input.js'
import { rocket } from './rocket.js'

export const shift = {
    x: 10,
    y: rocket.y - 155,
    sizeX: 50,
    sizeY: 50,
    borderSize: 2,
    moverSpeed: 5,
    moverY: rocket.y - 155,
    moverSizeY: 50,
    on: true,

    update(ctx){
        this.move()
        this.draw(ctx)
    },

    move(){
        this.moverSpeed = 0.15

        if (this.moverSizeY <= this.sizeY - this.borderSize && 
        this.moverY >= this.y) pressedKeys.shift = false

        if (pressedKeys.shift && 
        this.moverSizeY >= this.sizeY - this.borderSize && 
        this.moverY >= this.y - (this.borderSize)) {
            this.moverSizeY = 0
            this.moverY = this.y + this.sizeY
        } 

        else if (!pressedKeys.shift && 
        this.moverSizeY <= this.sizeY && 
        this.moverY >= this.y - this.borderSize) {
            this.moverSizeY += this.moverSpeed
            this.moverY -= this.moverSpeed
        }
    },

    draw(ctx){
        ctx.fillStyle = 'orange'
        ctx.strokeStyle = 'white'
        ctx.lineWidth = this.borderSize
        ctx.font = this.sizeX / 3 + 'px Arial'
        ctx.fillText('Shift', this.x, this.y - this.sizeX / 4)
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.x, this.moverY, this.sizeX, this.moverSizeY)
        ctx.strokeRect(this.x, this.y, this.sizeX, this.sizeY)
    }
}
