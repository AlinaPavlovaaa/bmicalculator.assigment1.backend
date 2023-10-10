function calculateBMI(height, weight) {
    return weight / ((height / 100) * (height / 100));
}
function displayBMIResults(bmi) {
    const resultElement = document.getElementById("bmi-result");

    if (isNaN(bmi) || bmi <= 0) {
        resultElement.innerText = "Please enter valid height and weight.";
    } else if (bmi < 16) {
        resultElement.innerText = "Severely underweight.";
    } else if (bmi >= 16 && bmi < 16.9) {
        resultElement.innerText = "Moderately underweight.";
    } else if (bmi >= 17 && bmi < 18.4) {
        resultElement.innerText = "Mildly underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultElement.innerText = "Normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultElement.innerText = "Overweight.";
    } else if (bmi >= 30 && bmi < 34.9) {
        resultElement.innerText = "Obesity Class 1 (Moderate).";
    } else if (bmi >= 35 && bmi < 39.9) {
        resultElement.innerText = "Obesity Class 2 (Severe).";
    } else {
        resultElement.innerText = "Obesity Class 3 (Very Severe or Morbidly).";
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const bmi = calculateBMI(height, weight);
    displayBMIResults(bmi);
}
document.getElementById("bmi-form").addEventListener("submit", handleFormSubmission);



