import "./AvoidFoods.css";

const AvoidFoods = ({ avoidFoods }) => {
  return (
    <div className="avoid-section">
      <h2 className="section-title">
        🚫 Foods to Avoid Today
      </h2>

      <div className="avoid-list">
        {avoidFoods.map((item, index) => (
          <div className="avoid-card" key={index}>
            <div className="avoid-icon">
              {item.icon}
            </div>

            <div className="avoid-content">
              <h3>{item.food}</h3>
              <p>{item.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvoidFoods;