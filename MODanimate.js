// MOD for animation

class Animate {
    constructor(dt) {
        this.dt = dt;
    }

    draw(ctx, o) {
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#060000';
        ctx.fill();
        ctx.closePath();
    }
}

//requestAnimationFrame(animate);