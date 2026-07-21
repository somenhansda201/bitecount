import "./SummaryCard.css";

export default function SummaryCard({ icon, label, value, color }) {
  return (
    <div className="summary-card">
      <div className="summary-card-icon">{icon}</div>

      <p
        className="summary-card-value"
        style={{ color }}
      >
        {value}
      </p>

      <p className="summary-card-label">
        {label}
      </p>
    </div>
  );
} 