import { AlertTriangle } from "lucide-react";
import "./ReportCard.css";

export default function KeyDeficiencies({ deficiencies }) {
  if (!deficiencies || deficiencies.length === 0) {
  return (
    <div className="report-card">
      <div className="report-card-header warning">
        <AlertTriangle size={22} />
        <h3>Key Deficiencies</h3>
      </div>

      <p>No significant nutrient deficiencies detected.</p>
    </div>
  );
}

  return (
    <div className="report-card">
      <div className="report-card-header warning">
        <AlertTriangle size={22} />
        <h3>Key Deficiencies</h3>
      </div>

      <ul className="simple-report-list">
        {deficiencies.map((item) => (
          <li key={item.nutrient}>
            <span
              className={`bullet ${
                item.status === "Critical" ? "red" : "yellow"
              }`}
            ></span>

            <span>
              <strong>{item.nutrient}</strong>: {item.value}
              {" — "}
              <span
                className={
                  item.status === "Critical"
                    ? "status-critical"
                    : "status-low"
                }
              >
                {item.status}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}