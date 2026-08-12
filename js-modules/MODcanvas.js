// MOD for canvas
//import { entityList } from "./index.js";
import { Animate } from "./MODanimate.js";

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

const animation = new Animate();

export function animate(array) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animation.update(ctx, array);

    requestAnimationFrame(() => animate(array));
}

//animate(ctx, entityList.dots)