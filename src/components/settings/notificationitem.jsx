

export default function NotificationItem({
  title,
  description,
  enabled,
  onToggle,
}) {
  return (
    <div className="notification-item">
      <div className="notification-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <label className="switch">
        <input
          type="checkbox"
          checked={enabled}
          onChange={onToggle}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}