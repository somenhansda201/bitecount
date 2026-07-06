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

export default function StatsGrid() {
  return (
    <section className="stats-grid">

      <StatsCard
        title="Calories"
        value="1840"
        unit="kcal"
        progress={84}
        remaining="360 kcal left"
        color="#22c55e"
        icon={<Flame color="#22c55e" />}
      />

      <StatsCard
        title="Protein"
        value="98"
        unit="g"
        progress={70}
        remaining="42 g left"
        color="#0ea5e9"
        icon={<Dumbbell color="#0ea5e9" />}
      />

      <StatsCard
        title="Carbs"
        value="210"
        unit="g"
        progress={76}
        remaining="65 g left"
        color="#f59e0b"
        icon={<Wheat color="#f59e0b" />}
      />

      <StatsCard
        title="Fat"
        value="62"
        unit="g"
        progress={85}
        remaining="11 g left"
        color="#8b5cf6"
        icon={<Beef color="#8b5cf6" />}
      />

      <StatsCard
        title="Water"
        value="1.8"
        unit="L"
        progress={72}
        remaining="0.7 L left"
        color="#06b6d4"
        icon={<Droplets color="#06b6d4" />}
      />

      <StatsCard
        title="Fiber"
        value="18"
        unit="g"
        progress={72}
        remaining="7 g left"
        color="#10b981"
        icon={<Leaf color="#10b981" />}
      />

    </section>
  );
}