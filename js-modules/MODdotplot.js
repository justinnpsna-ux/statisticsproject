//MOD for dot plot
import { Dot } from "./MODdots.js";

export class DotPlot {
    constructor(min, max, scale) {
        this.min = min;
        this.max = max;
        this.scale = scale;
    }

    spawnDot(x, y, array) {
        const o = new Dot(x * this.scale, y)
        array.push(o);
    }

    drawDotPlot(data, canvas, array) {
        //if (!Array.isArray(data)) return; 

        for (let x of data) {
            //if (typeof x !== 'number' || isNaN(x)) continue;
            this.spawnDot(Number(x), canvas.height - 10, array)
        }
    }
    
}


