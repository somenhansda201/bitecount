import SummaryCard from "./SummaryCard";
import "./SummaryCards.css";

export default function SummaryCards({ summary }) {
  const cards = [
    {
      label: "Nutrition Score",
      value: `${summary.nutrition_score}/100`,
      color: "#22C55E",
      icon: "🎯",
    },
    {
      label: "Meals Logged",
      value: `${summary.meals_logged} / 4`,
      color: "#0EA5E9",
      icon: "🍽️",
    },
    {
      label: "Deficiencies",
      value: `${summary.deficiencies} Found`,
      color: "#EF4444",
      icon: "⚠️",
    },
    {
      label: "Calories Left",
      value: `${Math.round(summary.calories_left)} kcal`,
      color: "#F59E0B",
      icon: "⚡",
    },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card) => (
        <SummaryCard
          key={card.label}
          icon={card.icon}
          label={card.label}
          value={card.value}
          color={card.color}
        />
      ))}
    </div>
  );
}