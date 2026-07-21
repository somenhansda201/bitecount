export function bmiCategory(bmi) {
  if (bmi < 18.5) {
    return {
      label: "Underweight",
      color: "#3B82F6",
    };
  }

  if (bmi < 25) {
    return {
      label: "Normal Weight",
      color: "#16A34A",
    };
  }

  if (bmi < 30) {
    return {
      label: "Overweight",
      color: "#F59E0B",
    };
  }

  return {
    label: "Obese",
    color: "#DC2626",
  };
}