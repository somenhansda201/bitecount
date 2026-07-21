import {
  Flame,
  Dumbbell,
  Wheat,
  Beef,
  Droplets,
  Leaf,
} from "lucide-react";

import StatsCard from "./StatsCard";

import "./StatsGrid.css";

export default function StatsGrid({ summary }) {
  const calculateProgress = (consumed, target) => {
    if (!target) return 0;

    return Math.min(
      Math.round((consumed / target) * 100),
      100
    );
  };

  const calculateRemaining = (consumed, target) => {
    return Math.max(target - consumed, 0);
  };

  return (
    <section className="stats-grid">
      <StatsCard
        title="Calories"
        value={summary.calories.consumed}
        unit="kcal"
        progress={calculateProgress(
          summary.calories.consumed,
          summary.calories.target
        )}
        remaining={`${Math.round(
          calculateRemaining(
            summary.calories.consumed,
            summary.calories.target
          )
        )} kcal left`}
        color="#22c55e"
        icon={<Flame color="#22c55e" />}
      />

      <StatsCard
        title="Protein"
        value={summary.protein.consumed}
        unit="g"
        progress={calculateProgress(
          summary.protein.consumed,
          summary.protein.target
        )}
        remaining={`${calculateRemaining(
          summary.protein.consumed,
          summary.protein.target
        ).toFixed(1)} g left`}
        color="#0ea5e9"
        icon={<Dumbbell color="#0ea5e9" />}
      />

      <StatsCard
        title="Carbs"
        value={summary.carbs.consumed}
        unit="g"
        progress={calculateProgress(
          summary.carbs.consumed,
          summary.carbs.target
        )}
        remaining={`${calculateRemaining(
          summary.carbs.consumed,
          summary.carbs.target
        ).toFixed(1)} g left`}
        color="#f59e0b"
        icon={<Wheat color="#f59e0b" />}
      />

      <StatsCard
        title="Fat"
        value={summary.fat.consumed}
        unit="g"
        progress={calculateProgress(
          summary.fat.consumed,
          summary.fat.target
        )}
        remaining={`${calculateRemaining(
          summary.fat.consumed,
          summary.fat.target
        ).toFixed(1)} g left`}
        color="#8b5cf6"
        icon={<Beef color="#8b5cf6" />}
      />

      <StatsCard
        title="Water"
        value={summary.water.consumed}
        unit="L"
        progress={calculateProgress(
          summary.water.consumed,
          summary.water.target
        )}
        remaining={`${calculateRemaining(
          summary.water.consumed,
          summary.water.target
        ).toFixed(1)} L left`}
        color="#06b6d4"
        icon={<Droplets color="#06b6d4" />}
      />

      <StatsCard
        title="Fiber"
        value={summary.fiber.consumed}
        unit="g"
        progress={calculateProgress(
          summary.fiber.consumed,
          summary.fiber.target
        )}
        remaining={`${calculateRemaining(
          summary.fiber.consumed,
          summary.fiber.target
        ).toFixed(1)} g left`}
        color="#10b981"
        icon={<Leaf color="#10b981" />}
      />
    </section>
  );
}