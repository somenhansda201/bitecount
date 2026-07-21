import {
  TriangleAlert,
  CircleAlert,
  Info,
  CircleCheck,
} from "lucide-react";

import AlertItem from "./AlertItem";

import "./NutritionAlerts.css";

const ALERT_STYLES = {
  danger: {
    icon: CircleAlert,
    color: "#ef4444",
    background: "#fef2f2",
    border: "#fecaca",
  },
  warning: {
    icon: TriangleAlert,
    color: "#eab308",
    background: "#fefce8",
    border: "#fde68a",
  },
  info: {
    icon: Info,
    color: "#3b82f6",
    background: "#eff6ff",
    border: "#bfdbfe",
  },
  success: {
    icon: CircleCheck,
    color: "#22c55e",
    background: "#f0fdf4",
    border: "#bbf7d0",
  },
};

export default function NutritionAlerts({ alerts = [] }) {
  return (
    <section className="nutrition-alerts-card">
      <div className="nutrition-alerts-header">
        <div className="nutrition-alerts-title">
          <TriangleAlert
            size={22}
            color="#eab308"
          />
          <h2>Nutrition Alerts</h2>
        </div>
      </div>

      <div className="nutrition-alerts-list">
        {alerts.length === 0 ? (
          <AlertItem
            title="No nutrition alerts"
            value="You're on track today."
            color="#22c55e"
            background="#f0fdf4"
            border="#bbf7d0"
          />
        ) : (
          alerts.map((alert, index) => {
            const style =
              ALERT_STYLES[alert.type] ||
              ALERT_STYLES.info;

            return (
              <AlertItem
                key={index}
                title={alert.title}
                value={alert.message}
                color={style.color}
                background={style.background}
                border={style.border}
                Icon={style.icon}
              />
            );
          })
        )}
      </div>
    </section>
  );
}