class BMICalculator {
    calculateBMI(weightKg: number, heightCm: number): number {
        // Convert height from centimeters to meters
        const heightM = heightCm / 100;

        // Calculate BMI
        const bmi = weightKg / (heightM * heightM);

        // Round BMI to two decimal places
        return parseFloat(bmi.toFixed(2));
    }

    getCategory(bmi: number): string {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 24.9 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    }
}

// Example usage
const bmiCalculator = new BMICalculator();
const weight = 70; // in kilograms
const height = 175; // in centimeters
const bmi = bmiCalculator.calculateBMI(weight, height);
const category = bmiCalculator.getCategory(bmi);

console.log(`BMI: ${bmi}`);
console.log(`Category: ${category}`);
