import "./SummaryCard.css";

export default function SummaryCard({
  value,
  label,
  color = "#22c55e",
}) {
  return (
    <div className="summary-card">
      <h2
        className="summary-value"
        style={{ color }}
      >
        {value}
      </h2>

      <p className="summary-label">
        {label}
      </p>
    </div>
  );
}