import { PieChart } from "lucide-react";

import MacroRing from "./MacroRing";

import "./TodaysMacros.css";

export default function TodaysMacros({
  macroDistribution,
}) {
  return (
    <section className="todays-macros-card">
      {/* Header */}

      <div className="todays-macros-header">
        <div className="todays-macros-title">
          <PieChart
            size={22}
            color="#0f172a"
          />

          <h2>Today's Macros</h2>
        </div>

        <p>Distribution Breakdown</p>
      </div>

      {/* Macro Rings */}

      <div className="todays-macros-grid">
        <MacroRing
          label="Protein"
          value={macroDistribution?.protein ?? 0}
          goal={100}
          color="#0ea5e9"
        />

        <MacroRing
          label="Carbs"
          value={macroDistribution?.carbs ?? 0}
          goal={100}
          color="#f59e0b"
        />

        <MacroRing
          label="Fat"
          value={macroDistribution?.fat ?? 0}
          goal={100}
          color="#8b5cf6"
        />
      </div>
    </section>
  );
}