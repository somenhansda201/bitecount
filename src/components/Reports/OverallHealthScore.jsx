import "./OverallHealthScore.css";
import CircularStat from "./CircularStat";

export default function OverallHealthScore({ overallHealth }) {
  if (!overallHealth) {
    return <div className="overall-health-card">Loading overall health...</div>;
  }
  return (
    <div className="overall-health-card">
      <div className="overall-health-left">
        <h2>Overall Health Score</h2>

        <p>Based on your nutrition, health metrics, and dietary patterns.</p>

        <div className="health-metrics">
          <CircularStat
            value={overallHealth.calorie_balance}
            color="#22c55e"
            label="Calorie Balance"
          />

          <CircularStat
            value={overallHealth.protein_goal}
            color="#0ea5e9"
            label="Protein Goal"
          />

          <CircularStat
            value={overallHealth.micronutrients}
            color="#f59e0b"
            label="Micronutrients"
          />

          <CircularStat
            value={overallHealth.consistency}
            color="#8b5cf6"
            label="Consistency"
          />
        </div>
      </div>

      <div className="overall-health-right">
        <h1>{overallHealth.health_score}</h1>

        <span>/100</span>

        <div className="score-badge">
          {overallHealth.health_score >= 85
            ? "Excellent"
            : overallHealth.health_score >= 70
              ? "Good"
              : "Needs Improvement"}
        </div>
      </div>
    </div>
  );
}
