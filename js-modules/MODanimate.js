// MOD for animation

export class Animate {
    constructor(dt) {
        this.dt = dt;
    }

    update(ctx, array) {
        if (!Array.isArray(array)) return; 

        for (let o of array) {
            o.draw(ctx);
        }
    }
}
