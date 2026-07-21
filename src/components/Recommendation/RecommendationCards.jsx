import "./RecommendationCards.css";

const RecommendationCards = ({ recommendations }) => {
  return (
    <div className="recommendation-section">
      <h2 className="section-title">✅ Recommended for Tonight</h2>

      <div className="recommendation-grid">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className={`recommendation-card ${
              item.priority === "high" ? "high-priority" : ""
            }`}
          >
            <div className="recommendation-top">

              <div className="food-info">
                <div className="food-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.food}</h3>
                  <p>
                    {item.qty} · {item.calories} kcal
                  </p>
                </div>
              </div>

              <span
                className={`priority-badge ${
                  item.priority === "high"
                    ? "badge-high"
                    : "badge-suggested"
                }`}
              >
                {item.priority === "high"
                  ? "HIGH PRIORITY"
                  : "SUGGESTED"}
              </span>

            </div>

            <div className="recommendation-reason">
              <span>Why: </span>
              {item.reason}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCards;