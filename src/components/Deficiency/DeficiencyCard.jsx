import "./DeficiencyCard.css";

export default function DeficiencyCard({
  nutrient,
  current,
  rdi,
  unit,
  status,
  severity,
  level,
}) {
  const colors = {
    red: {
      bg: "#FEF2F2",
      border: "#FECACA",
      bar: "#EF4444",
      badgeBg: "#FEE2E2",
      text: "Critical",

      dot: "radial-gradient(circle at 30% 30%, #ff7b8a, #ef4444 60%, #b91c1c)"
    },

    yellow: {
      bg: "#FFFBEB",
      border: "#FDE68A",
      bar: "#F59E0B",
      badgeBg: "#FEF3C7",
      text: "Moderate",

      dot: "radial-gradient(circle at 30% 30%, #ffe680, #f59e0b 60%, #b45309)"
    },

    green: {
      bg: "#F0FDF4",
      border: "#BBF7D0",
      bar: "#22C55E",
      badgeBg: "#DCFCE7",
      text: "Optimal",

      dot: "radial-gradient(circle at 30% 30%, #8ef5b0, #22c55e 60%, #15803d)"
    },
  };

  const theme = colors[severity] || colors.green;

  return (
    <div
      className="deficiency-card"
      style={{
        background: theme.bg,
        borderColor: theme.border,
      }}
    >
      <div className="deficiency-card-top">
        <div>
          <h3>{nutrient}</h3>

          <p>
            {current}{unit} / {rdi}{unit} RDI
          </p>
        </div>

        <div className="deficiency-status">

          <div
            className="severity-dot"
            style={{
              background: theme.dot,
            }}
          ></div>

          <span
            className="status-badge"
            style={{
              background: theme.badgeBg,
              color: theme.bar,
            }}
          >
            {status.toUpperCase()}
          </span>

        </div>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${level}%`,
            background: theme.bar,
          }}
        />

      </div>

      <div className="progress-footer">

        <span>{level}% of RDI</span>

        <span>{theme.text}</span>

      </div>
    </div>
  );
}