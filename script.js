document.getElementById("btn").addEventListener("click", calculateBMI);

function calculateBMI() {
    // Get input values
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let heightUnit = document.getElementById("heightUnit").value;
    let result = document.getElementById("result");

    // Check for valid input
    if (height === "" || weight === "" || isNaN(height) || isNaN(weight)) {
        result.innerText = "Please enter valid height and weight values.";
        return;
    }

    // Convert height to meters
    if (heightUnit === "cm") {
        height = height / 100; // cm to meters
    } else if (heightUnit === "ft") {
        height = height * 0.3048; // ft to meters
    }

    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    // Display BMI and category
    result.innerText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        result.innerText += "Category: Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerText += "Category: Ideal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerText += "Category: Overweight";
    } else {
        result.innerText += "Category: Obesity";
    }
}
