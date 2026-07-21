import MealCard from "./MealCard";

export default function MealGrid({
  meals,
  loading,
}) {
  if (loading && !meals) {
    return null;
  }

  if (!meals) {
    return null;
  }

  const mealOrder = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
  ];

  return (
    <div className="meal-grid">
      {mealOrder.map((mealType) => (
        <MealCard
          key={mealType}
          mealType={mealType}
          recommendations={meals[mealType] ?? []}
        />
      ))}
    </div>
  );
}