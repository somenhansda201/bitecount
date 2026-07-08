import MealHeader from "./MealHeader";
import FoodItem from "./FoodItem";

import "./MealSection.css";

export default function MealSection({
  icon,
  title,
  calories,
  protein,
  foods,
  onAddFood,
  onEditFood,
  onRemoveFood,
}) {
  return (
    <div className="meal-section">
      <MealHeader
        icon={icon}
        title={title}
        calories={calories}
        protein={protein}
        onAddFood={onAddFood}
      />

      <div className="meal-food-list">
        {foods.map((food, index) => (
          <FoodItem
            key={food.id || index}
            icon={food.icon}
            name={food.food_name || food.name}
            serving={food.serving}
            protein={food.protein}
            carbs={food.carbs}
            fat={food.fat}
            fiber={food.fiber}
            sodium={food.sodium}
            calcium={food.calcium}
            iron={food.iron}
            vitamin_c={food.vitamin_c}
            calories={food.calories}
            onEdit={() => onEditFood(title, index)}
            onRemove={() => onRemoveFood(title, index)}
          />
        ))}
      </div>
    </div>
  );
}
