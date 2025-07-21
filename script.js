function calculateBMI() {
    const h = parseFloat(document.getElementById('height').value) / 100;
    const w = parseFloat(document.getElementById('weight').value);
    if (!h || !w) {
      document.getElementById('result').textContent = "Please enter valid numbers.";
      return;
    }
    const bmi = (w / (h * h)).toFixed(2);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";
    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category}).`;
  }
  