import NutritionAlerts from "./NutritionAlerts";
import AISuggestions from "./AISuggestions";

import "./InsightsRow.css";

export default function InsightsRow() {
  return (
    <section className="insights-row">

      <NutritionAlerts />

      <AISuggestions />

    </section>
  );
}