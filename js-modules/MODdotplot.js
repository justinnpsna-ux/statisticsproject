//MOD for dot plot
import { Dot } from "./MODdots.js";

export class DotPlot {
    constructor(min, max, scale) {
        this.min = min;
        this.max = max;
        this.scale = scale;
    }

    getDotHash(data) {
        if (!Array.isArray(data)) return; 
        let hash = {};

        for (let x of data) {
            hash[x] = (hash[x] || 0) + 1;
        }

        return hash;
    }

    spawnDot(x, y, array) {
        const o = new Dot(x /** this.scale*/, y)
        array.push(o);
    }

    drawDotPlot(data, canvas, array) {
        if (!Array.isArray(data)) return; 

        let hash = this.getDotHash(data);
        console.log(hash)
        for (let [key, value] of Object.entries(hash)) {
            for (let i = 1; i <= value; i++) {
                this.spawnDot(Number(key), canvas.height - (15 * i), array);
            }
        }
    }
    
}

//if (typeof x !== 'number' || isNaN(x)) continue;


