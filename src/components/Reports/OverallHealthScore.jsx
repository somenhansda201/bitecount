import "./OverallHealthScore.css";

export default function OverallHealthScore({overallHealth}) {
  if (!overallHealth) {
    return <div className="overall-health-card">Loading overall health...</div>;
  }
  return (
    <div className="overall-health-card">
      <div className="overall-health-left">
        <h2>Overall Health Score</h2>

        <p>Based on your nutrition, health metrics, and dietary patterns.</p>

        <div className="health-metrics">
          <div className="metric">
            <div className="metric-circle green">
              <span>{overallHealth.calorie_balance}%</span>
            </div>

            <p>Calorie Balance</p>
          </div>

          <div className="metric">
            <div className="metric-circle blue">
              <span>{overallHealth.protein_goal}%</span>
            </div>

            <p>Protein Goal</p>
          </div>

          <div className="metric">
            <div className="metric-circle orange">
              <span>{overallHealth.micronutrients}%</span>
            </div>

            <p>Micronutrients</p>
          </div>

          <div className="metric">
            <div className="metric-circle purple">
              <span>{overallHealth.consistency}%</span>
            </div>

            <p>Consistency</p>
          </div>
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
