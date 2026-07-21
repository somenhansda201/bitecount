export default function CircularStat({
  value,
  color,
  label,
}) {
  const radius = 38;
  const stroke = 7;

  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="metric">
      <svg
        width="90"
        height="90"
        className="progress-ring"
      >
        <circle
          className="progress-bg"
          stroke="#ECECEC"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx="45"
          cy="45"
        />

        <circle
          stroke={color}
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx="45"
          cy="45"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 45 45)"
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