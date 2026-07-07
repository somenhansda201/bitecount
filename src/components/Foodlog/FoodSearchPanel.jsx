import SearchBar from "./SearchBar";
import SearchFoodItem from "./SearchFoodItem";
import foods from "../../data/foods";

import "./FoodSearchPanel.css";

export default function FoodSearchPanel() {
  return (
    <div className="food-search-panel">
      <h3>🔍 Add to Breakfast</h3>

      <SearchBar />

      <div className="food-search-list">
        {foods.map((food) => (
          <SearchFoodItem
            key={food.id}
            icon={food.icon}
            name={food.name}
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
