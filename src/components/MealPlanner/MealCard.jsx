import "./MealCard.css";
import MealItem from "./MealItem";

const MEAL_EMOJIS = {
  Breakfast: "🍳",
  Lunch: "🍛",
  Dinner: "🍽️",
  Snacks: "🥜",
};

export default function MealCard({
  mealType,
  recommendations,
}) {
  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <div className="meal-title-wrapper">
          <span className="meal-emoji">
            {MEAL_EMOJIS[mealType]}
          </span>

          <div>
            <h3 className="meal-type">
              {mealType}
            </h3>
          </div>
        </div>
      </div>

      <div className="meal-items">
        {recommendations.map((meal, index) => (
          <MealItem
            key={index}
            meal={meal}
          />
        ))}
      </div>
    </div>
  );
}