const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

import { drawStars } from './background.js'
import { shift } from './shift.js'
import { space } from './space.js'
import { drawLaser } from './lasers.js'
import { drawPower } from './power.js'
import { streak } from './streak.js'
import { drawRocks } from './rocks.js'
import { rocket } from './rocket.js'
import { score } from './score.js'

    function update(){
        ctx.canvas.width = window.innerWidth
        ctx.canvas.height = window.innerHeight
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawStars(ctx);
        shift.update(ctx);
        space.update(ctx);
        drawLaser(ctx);
        drawPower(ctx);
        streak.update(ctx);
        drawRocks(ctx);
        rocket.update(ctx);
        score(ctx);
        window.requestAnimationFrame(update);
    }
    window.requestAnimationFrame(update);