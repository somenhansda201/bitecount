import { CheckSquare } from "lucide-react";
import "./ReportCard.css";

export default function Strengths({ strengths }) {
  if (!strengths || strengths.length === 0) {
    return (
      <div className="report-card">
        <div className="report-card-header success">
          <CheckSquare size={22} />
          <h3>Strengths</h3>
        </div>

        <p>No notable nutritional strengths yet.</p>
      </div>
    );
  }

  return (
    <div className="report-card">
      <div className="report-card-header success">
        <CheckSquare size={22} />
        <h3>Strengths</h3>
      </div>

      <ul className="simple-report-list">
        {strengths.map((item, index) => (
          <li key={index}>
            <span className="bullet green"></span>

            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}