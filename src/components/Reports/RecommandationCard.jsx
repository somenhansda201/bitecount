import { Bot } from "lucide-react";
import "./ReportCard.css";

export default function RecommendationCard({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
  return (
    <div className="report-card">
      <div className="report-card-header ai">
        <Bot size={22} />
        <h3>AI Recommendations</h3>
      </div>

      <p>No recommendations available.</p>
    </div>
  );
}

  return (
    <div className="report-card">
      <div className="report-card-header ai">
        <Bot size={22} />
        <h3>AI Recommendations</h3>
      </div>

      <ul className="simple-report-list">
        {recommendations.map((item, index) => (
          <li key={index}>
            <span className="bullet blue"></span>

            <span>
              <strong>{item.title}</strong>
              <br />
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
