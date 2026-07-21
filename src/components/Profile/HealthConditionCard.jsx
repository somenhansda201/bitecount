import "./HealthConditionCard.css";
import { AlertTriangle, Check } from "lucide-react";

export default function HealthConditionsCard({
  CONDITIONS,
  conditions,
  toggleCondition,
}) {
  return (
    <div className="health-card">
      <h2 className="health-title">Health Conditions</h2>

      <p className="health-subtitle">
        Select any conditions that apply to personalize your nutrition
        recommendations.
      </p>

      <div className="health-grid">
        {CONDITIONS.map((condition) => (
          <button
            key={condition}
            type="button"
            onClick={() => toggleCondition(condition)}
            className={`health-btn ${
              conditions.includes(condition) ? "active" : ""
            }`}
          >
            {conditions.includes(condition) && (
              <Check size={18} strokeWidth={3} />
            )}

            {condition}
          </button>
        ))}
      </div>

      <div className="health-note">
        <AlertTriangle size={18} />

        <span>
          These health conditions are only used to personalize AI nutrition
          recommendations, deficiency detection, meal planning, and health
          reports.
        </span>
      </div>
    </div>
  );
}
