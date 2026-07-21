import WeeklyCalories from "./WeeklyCalories";
import TodaysMacros from "./TodaysMacros";

import "./AnalyticsRow.css";

export default function AnalyticsRow({
  weeklyCalories,
  macroDistribution,
}) {
  return (
    <section className="analytics-row">
      <WeeklyCalories
        weeklyCalories={weeklyCalories}
      />

      <TodaysMacros
        macroDistribution={macroDistribution}
      />
    </section>
  );
}