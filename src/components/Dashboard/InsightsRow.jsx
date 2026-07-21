import NutritionAlerts from "./NutritionAlerts";
import AISuggestions from "./AISuggestions";

import "./InsightsRow.css";

export default function InsightsRow({
  nutritionAlerts = [],
  aiSuggestions = [],
}) {
  return (
    <section className="insights-row">
      <NutritionAlerts alerts={nutritionAlerts} />

      <AISuggestions suggestions={aiSuggestions} />
    </section>
  );
}