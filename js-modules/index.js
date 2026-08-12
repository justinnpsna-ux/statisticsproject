import { canvas, ctx, animate } from "./MODcanvas.js";
import { Dot } from "./MODdots.js";
import { DotPlot } from "./MODdotplot.js";

let firstNumber = document.getElementById("number1");
let secondNumber = document.getElementById("number2");
let answerTxt = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");

export let entityList = { dots: [] };
let min = 0;
let max = 0;
let scale = 1;

//instances
//const dotPlot = new DotPlot(min, max, scale);

async function calculateStats(numList) {
    try {
    // Send a request to the Flask API URL
        const response = await fetch('http://localhost:8000/api/statistics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Tell Python this is JSON text
        },
        body: JSON.stringify(numList.split(','))
    });
        // Parse the incoming JSON data
        const data = await response.json();
    
        answerTxt.textContent = `sum: ${data.sum}, mean: ${data.mean}, variance: ${data.variance}, sd: ${data.sd}, min: ${data.min}, max: ${data.max}`;
        min = data.min;
        max = data.max;
        scale = (canvas.width - 10) / data.max;

    } catch (error) {
        console.error("Could not connect to the backend:", error);
    }
}

submitBtn.addEventListener('click', async () => {
    entityList.dots.length = 0;
    if (firstNumber.value == '') {
        console.warn('type somethin g bro') 
        return;
    }

    try {
        await calculateStats(firstNumber.value);
    } catch (error) {
         console.error("Could not connect to the backend:", error);
    }
    
    const dotPlot = new DotPlot(min, max, scale);
    dotPlot.drawDotPlot(firstNumber.value.split(','), canvas, entityList.dots);

});

animate(entityList.dots);