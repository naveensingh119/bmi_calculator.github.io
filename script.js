function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

  if (isNaN(weight) || isNaN(height) || height === 0) {
    document.getElementById('result').textContent = "Please enter valid values for weight and height.";
    return;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);

  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obese';
  }

  const resultMessage = `Your BMI: ${bmiRounded} (${bmiCategory})`;
  document.getElementById('result').textContent = resultMessage;
}
