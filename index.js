let firstNumber = document.getElementById("number1");
let secondNumber = document.getElementById("number2");
let answerTxt = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");

async function calculateSD(numList) {
  try {
    // 1. Send a request to the Flask API URL
    const response = await fetch('http://localhost:8000/api/sdCalculator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // 🏷️ Tell Python this is JSON text
        },
        body: JSON.stringify(numList.split(','))
    });
    
    // 2. Parse the incoming JSON data
    const data = await response.json();
    
    answerTxt.textContent = data;
    
  } catch (error) {
    console.error("Could not connect to the backend:", error);
  }
}

submitBtn.addEventListener('click', () => {
    calculateSD(firstNumber.value);
});