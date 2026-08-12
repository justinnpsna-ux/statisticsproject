// MOD for dots

export class Dot {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = 5;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#060000';
        ctx.fill();
        ctx.closePath();
    }
    
}