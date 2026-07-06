import { TriangleAlert } from "lucide-react";

import AlertItem from "./AlertItem";

import "./NutritionAlerts.css";

export default function NutritionAlerts() {
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

        <AlertItem
          title="Iron critically low"
          value="35% of RDI"
          color="#ef4444"
          background="#fef2f2"
          border="#fecaca"
        />

        <AlertItem
          title="Zinc deficiency detected"
          value="30% of RDI"
          color="#ef4444"
          background="#fef2f2"
          border="#fecaca"
        />

        <AlertItem
          title="Vitamin D below target"
          value="42%"
          color="#eab308"
          background="#fefce8"
          border="#fde68a"
        />

        <AlertItem
          title="Calcium needs attention"
          value="55%"
          color="#eab308"
          background="#fefce8"
          border="#fde68a"
        />

      </div>

    </section>
  );
}