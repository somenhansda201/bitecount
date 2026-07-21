import "./ContextBanner.css";

const ContextBanner = ({ alerts }) => {
  return (
    <div className="context-banner">
      {alerts.map((alert, index) => (
        <div className="context-item" key={index}>
          <span className="context-icon">{alert.icon}</span>
          <span className="context-text">{alert.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ContextBanner;