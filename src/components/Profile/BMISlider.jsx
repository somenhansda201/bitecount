import "./BmiSlider.css";

export default function BmiSlider({ bmi }) {
  const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

  /*
      BMI Scale

      15 ------------ 40

      Underweight
      Normal
      Overweight
      Obese
  */

  const position =
    ((clamp(bmi, 15, 40) - 15) / (40 - 15)) * 100;

  return (
    <div className="bmi-slider">

      <div className="bmi-slider-track">

        <div
          className="bmi-slider-thumb"
          style={{ left: `${position}%` }}
        />

      </div>

      <div className="bmi-slider-labels">
        <span>Underweight</span>
        <span>Normal</span>
        <span>Overweight</span>
        <span>Obese</span>
      </div>

    </div>
  );
}