import "./NutrientProgress.css";

const nutrientInfo = {
  calories: {
    name: "Calories",
    unit: "kcal",
    color: "#22C55E",
    icon: "🔥",
  },

  protein: {
    name: "Protein",
    unit: "g",
    color: "#0EA5E9",
    icon: "💪",
  },

  carbs: {
    name: "Carbohydrates",
    unit: "g",
    color: "#F59E0B",
    icon: "🌾",
  },

  fat: {
    name: "Fat",
    unit: "g",
    color: "#8B5CF6",
    icon: "🥑",
  },

  fiber: {
    name: "Fiber",
    unit: "g",
    color: "#10B981",
    icon: "🌿",
  },

  vitamin_c: {
    name: "Vitamin C",
    unit: "mg",
    color: "#F97316",
    icon: "🍊",
  },

  folate: {
    name: "Folate",
    unit: "µg",
    color: "#EF4444",
    icon: "🥬",
  },

  iron: {
    name: "Iron",
    unit: "mg",
    color: "#DC2626",
    icon: "🩸",
  },

  calcium: {
    name: "Calcium",
    unit: "mg",
    color: "#2563EB",
    icon: "🦴",
  },
};

export default function NutrientProgress({ nutrients }) {
  return (
    <div className="nutrient-card">
      <h3 className="nutrient-title">Nutrient Progress</h3>

      <div className="nutrient-grid">
        {Object.entries(nutrients).map(([key, nutrient]) => {
          const info = nutrientInfo[key];

          if (!info) return null;

          const consumed = Number(nutrient.consumed);
          const target = Number(nutrient.target);

          const pct =
            target > 0
              ? Math.round((consumed / target) * 100)
              : 0;

          const remaining = target - consumed;

          return (
            <div
              key={key}
              className="nutrient-item"
            >
              <div className="nutrient-header">
                <div className="nutrient-name">
                  <span>{info.icon}</span>

                  <span>{info.name}</span>
                </div>

                <div className="nutrient-values">
                  <span>
                    {consumed.toFixed(1)} / {target} {info.unit}
                  </span>

                  <span
                    className="badge"
                    style={{
                      background:
                        pct >= 80
                          ? "#22C55E"
                          : pct >= 50
                          ? "#F59E0B"
                          : "#EF4444",
                    }}
                  >
                    {pct}%
                  </span>
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.min(pct, 100)}%`,
                    background: info.color,
                  }}
                />
              </div>

              <p className="remaining-text">
                {remaining >= 0
                  ? `${remaining.toFixed(1)} ${info.unit} remaining`
                  : `${Math.abs(remaining).toFixed(1)} ${info.unit} over target`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}