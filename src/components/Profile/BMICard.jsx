import "./BMICard.css";
import BmiSlider from "./BmiSlider";

export default function BMICard({ health, category }) {
  if (!health) return null;

  return (
    <div className="bmi-card">

      <div className="bmi-header">
        <span className="bmi-icon">📊</span>

        <h2 className="bmi-title">
          Body Mass Index (BMI)
        </h2>
      </div>

      <div className="bmi-center">

        <div className="bmi-value">
          {health.bmi.toFixed(1)}
        </div>

        <div className="bmi-badge">
          {category.label}
        </div>

      </div>

      <BmiSlider bmi={health.bmi} />

      <div className="bmi-description">
        <strong>Healthy BMI Range</strong>

        <br />

        A BMI between <strong>18.5</strong> and <strong>24.9</strong> is generally considered healthy for most adults.
      </div>

    </div>
  );
}