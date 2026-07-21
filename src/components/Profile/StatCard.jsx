import "./statCard.css";

export default function StatCard({
  icon,
  iconBg,
  title,
  value,
  unit = "kcal/day",
  description,
  valueColor,
}) {
  return (
    <div className="profile-stat-card">
      <div className="profile-stat-card-icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>

      <div className="profile-stat-card-content">
        <h4 className="stat-card-title">{title}</h4>

        <div
          className="profile-stat-card-value"
          style={valueColor ? { color: valueColor } : {}}
        >
          {Number(value).toLocaleString()}
          <span>{unit}</span>
        </div>

        <p className="profile-stat-card-description">{description}</p>
      </div>
    </div>
  );
}
