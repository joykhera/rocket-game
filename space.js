import { pressedKeys } from './input.js'
import { shift } from './shift.js'

export const space = {
    x: shift.x,
    y: shift.y + shift.sizeY + 40,
    sizeX: shift.sizeX,
    sizeY: shift.sizeY,
    borderSize: shift.borderSize,
    moverSpeed: shift.moverSpeed,
    moverY: shift.moverY + shift.sizeY + 40,
    moverSizeY: shift.moverSizeY,
    on: true,

    update(ctx){
        this.move()
        this.draw(ctx)
    },

    move(ctx){
        this.moverSpeed = 0.075

        if (this.moverSizeY <= this.sizeY - this.borderSize && 
        this.moverY >= this.y) pressedKeys.space = false

        if (pressedKeys.space && 
        this.moverSizeY >= this.sizeY - this.borderSize && 
        this.moverY >= this.y - (this.borderSize)) {
            this.moverSizeY = 0
            this.moverY = this.y + this.sizeY
        } 

        else if (!pressedKeys.space && 
        this.moverSizeY <= this.sizeY && 
        this.moverY >= this.y - this.borderSize) {
            this.moverSizeY += this.moverSpeed
            this.moverY -= this.moverSpeed
        }
    },

    draw(ctx){
        ctx.fillStyle = 'blue'
        ctx.font = this.sizeX / 3 + 'px Arial'
        ctx.fillText('Space', this.x, this.y - this.sizeX / 4)
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.x, this.moverY, this.sizeX, this.moverSizeY)
        ctx.strokeRect(this.x, this.y, this.sizeX, this.sizeY)
    }
}
