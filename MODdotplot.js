//MOD for dot plot
let dotArr = [];

class Dot {
    constructor(x, y, radius) {
        this.x = x;
        this.y = 10;
        this.radius = 5;
    }
}

const spawnDot = function(ctx, x, y) {
    let o = new Dot(x, y);
    dotArr.push(o);

}