document.getElementById('btn').addEventListener('click', calculateBMI);

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightUnit = document.getElementById('heightUnit').value;
    let height = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid values for weight and height.';
        return;
    }

    // Convert height to meters if it's in feet
    if (heightUnit === 'ft') {
        height = height * 0.3048; // Convert feet to meters
    } else {
        height = height / 100; // Convert cm to meters
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let message = '';

    // Determine BMI category and ideal weight range
    const idealWeightMin = (18.5 * height * height).toFixed(2);
    const idealWeightMax = (24.9 * height * height).toFixed(2);

    // Determine BMI category and calculate weight to gain or lose
    if (bmi < 18.5) {
        category = 'Underweight';
        const weightToGain = (idealWeightMin - weight).toFixed(2);
        message = `You need to gain approximately ${weightToGain} kg.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Ideal';
        message = `You are within the ideal weight range (${idealWeightMin} - ${idealWeightMax} kg).`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        const weightToLose = (weight - idealWeightMax).toFixed(2);
        message = `You need to lose approximately ${weightToLose} kg.`;
    } else {
        category = 'Obesity';
        const weightToLose = (weight - idealWeightMax).toFixed(2);
        message = `You need to lose approximately ${weightToLose} kg.`;
    }

    // Display the result
    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category}).<br>${message}`;
}
