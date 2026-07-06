import WeeklyCalories from "./WeeklyCalories";
import TodaysMacros from "./TodaysMacros";

import "./AnalyticsRow.css";

export default function AnalyticsRow() {
  return (
    <section className="analytics-row">

      <WeeklyCalories />

      <TodaysMacros />

    </section>
  );
}