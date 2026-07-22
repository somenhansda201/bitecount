export default function CircularStat({ value, color, label }) {
  const radius = 38;
  const stroke = 7;

  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="metric">
      <svg width="90" height="90" className="progress-ring">
        <circle
          className="progress-bg"
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
          r={normalizedRadius}
          cx="45"
          cy="45"
        />

        <circle
          className="progress-value"
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          r={normalizedRadius}
          cx="45"
          cy="45"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />

        <text
          x="45"
          y="50"
          textAnchor="middle"
          className="progress-text"
        >
          {value}%
        </text>
      </svg>

      <p>{label}</p>
    </div>
  );
}