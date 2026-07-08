import SearchBar from "./SearchBar";
import SearchFoodItem from "./SearchFoodItem";
import { useState, useEffect } from "react";
import { searchFoods } from "../../api/food";

import "./FoodSearchPanel.css";

export default function FoodSearchPanel({ activeMeal, onAddFood }) {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (search.trim().length < 2) {
      setFoods([]);
      return;
    }

    
      
    const fetchFoods = async () => {
      try {
        const data = await searchFoods(search);
        setFoods(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    {/*
    const fetchFoods = async () => {
      try {
        const data = await searchFoods(search);

        console.log(data[0]);

        setFoods(data);
      } catch (error) {
        console.error(error);
      }
    };*/}

    fetchFoods();
  }, [search]);
  return (
    <div className="food-search-panel">
      <h3>🔍 Add to {activeMeal}</h3>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="food-search-list">
        {foods.map((food) => (
          <SearchFoodItem
            key={food._id}
            icon="🍽️"
            name={food.name}
            protein={food.protein}
            serving="1 serving"
            carbs={food.carbs}
            fat={food.fat}
            calories={food.calories}
            onClick={() => onAddFood(food)}
          />
        ))}
      </div>
    </div>
  );
}
