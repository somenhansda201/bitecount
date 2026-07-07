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
            key={index}
            icon={food.icon}
            name={food.name}
            serving={food.serving}
            protein={food.protein}
            carbs={food.carbs}
            fat={food.fat}
            calories={food.calories}
          />
        ))}

      </div>

    </div>
  );
}