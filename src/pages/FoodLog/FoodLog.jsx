import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import MealHeader from "../../components/Foodlog/MealHeader";
import FoodItem from "../../components/Foodlog/FoodItem";
import MealSection from "../../components/Foodlog/MealSection";
import FoodSearchPanel from "../../components/Foodlog/FoodSearchPanel";
import AddFoodModal from "../../components/Foodlog/AddFoodModal";
import "./FoodLog.css";
import { useEffect, useState } from "react";
import {
  getTodayFoodLogs,
  createFoodLog,
  updateFoodLog,
  deleteFoodLog,
} from "../../api/foodLog";

export default function FoodLog() {
  const [breakfastFoods, setBreakfastFoods] = useState([]);
  const [lunchFoods, setLunchFoods] = useState([]);
  const [dinnerFoods, setDinnerFoods] = useState([]);
  const [snackFoods, setSnackFoods] = useState([]);
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [quantity, setQuantity] = useState(100);
  const [activeMeal, setActiveMeal] = useState("Breakfast");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const handleAddFood = (meal, food) => {
    switch (meal) {
      case "Breakfast":
        setBreakfastFoods((prev) => [...prev, food]);
        break;

      case "Lunch":
        setLunchFoods((prev) => [...prev, food]);
        break;

      case "Dinner":
        setDinnerFoods((prev) => [...prev, food]);
        break;

      case "Snacks":
        setSnackFoods((prev) => [...prev, food]);
        break;

      default:
        break;
    }
  };
  const handleRemoveFood = async (meal, index) => {
    let food = null;

    switch (meal) {
      case "Breakfast":
        food = breakfastFoods[index];
        break;

      case "Lunch":
        food = lunchFoods[index];
        break;

      case "Dinner":
        food = dinnerFoods[index];
        break;

      case "Snacks":
        food = snackFoods[index];
        break;

      default:
        return;
    }

    try {
      await deleteFoodLog(food.id);

      await loadTodayFoodLogs();
    } catch (error) {
      console.error("Failed to delete food log:", error);
    }
  };
  const handleEditFood = (meal, index) => {
    let food = null;

    switch (meal) {
      case "Breakfast":
        food = breakfastFoods[index];
        break;

      case "Lunch":
        food = lunchFoods[index];
        break;

      case "Dinner":
        food = dinnerFoods[index];
        break;

      case "Snacks":
        food = snackFoods[index];
        break;

      default:
        return;
    }

    // Save selected food
    setSelectedFood(food);

    // Save active meal
    setActiveMeal(meal);

    // Use quantity from database
    const grams = Number(food.quantity);

    setQuantity(grams || 100);

    // Save index
    setEditIndex(index);

    // Enable edit mode
    setIsEditing(true);

    // Open modal
    setModalOpen(true);
  };
  const calculateMealTotals = (foods) => {
    return foods.reduce(
      (total, food) => ({
        calories: total.calories + Number(food.calories || 0),
        protein: total.protein + Number(food.protein || 0),
      }),
      {
        calories: 0,
        protein: 0,
      },
    );
  };
  const calculateNutrition = (food, quantity) => {
  const factor = quantity / 100;

  return {
    ...food,

    quantity,
    serving: `${quantity} g`,

    calories: Number((food.calories * factor).toFixed(1)),
    protein: Number((food.protein * factor).toFixed(1)),
    carbs: Number((food.carbs * factor).toFixed(1)),
    fat: Number((food.fat * factor).toFixed(1)),

    fiber: Number((food.fiber * factor).toFixed(1)),
    sodium: Number((food.sodium * factor).toFixed(1)),
    calcium: Number((food.calcium * factor).toFixed(1)),
    iron: Number((food.iron * factor).toFixed(1)),
    vitamin_c: Number((food.vitamin_c * factor).toFixed(1)),
    folate: Number((food.folate * factor).toFixed(1)),
  };
};

  const loadTodayFoodLogs = async () => {
    try {
      const foodLogs = await getTodayFoodLogs();

      console.log(foodLogs);

      setBreakfastFoods(foodLogs.filter((food) => food.meal === "Breakfast"));

      setLunchFoods(foodLogs.filter((food) => food.meal === "Lunch"));

      setDinnerFoods(foodLogs.filter((food) => food.meal === "Dinner"));

      setSnackFoods(foodLogs.filter((food) => food.meal === "Snacks"));
    } catch (error) {
      console.error("Failed to load food logs:", error);
    }
  };

  const handleOpenModal = (food) => {
    setSelectedFood(food);
    setQuantity(100);
    setModalOpen(true);
  };
  const breakfastTotals = calculateMealTotals(breakfastFoods);
  const lunchTotals = calculateMealTotals(lunchFoods);
  const dinnerTotals = calculateMealTotals(dinnerFoods);
  const snackTotals = calculateMealTotals(snackFoods);
  useEffect(() => {
    loadTodayFoodLogs();
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <div className="foodlog-layout">
            <div className="foodlog-left">
              <MealSection
                icon="🍳"
                title="Breakfast"
                calories={breakfastTotals.calories}
                protein={breakfastTotals.protein}
                foods={breakfastFoods}
                onAddFood={() => setActiveMeal("Breakfast")}
                onEditFood={handleEditFood}
                onRemoveFood={handleRemoveFood}
              />

              <MealSection
                icon="☀️"
                title="Lunch"
                calories={lunchTotals.calories}
                protein={lunchTotals.protein}
                foods={lunchFoods}
                onAddFood={() => setActiveMeal("Lunch")}
                onEditFood={handleEditFood}
                onRemoveFood={handleRemoveFood}
              />

              <MealSection
                icon="🌙"
                title="Dinner"
                calories={dinnerTotals.calories}
                protein={dinnerTotals.protein}
                foods={dinnerFoods}
                onAddFood={() => setActiveMeal("Dinner")}
                onEditFood={handleEditFood}
                onRemoveFood={handleRemoveFood}
              />

              <MealSection
                icon="🍏"
                title="Snacks"
                calories={snackTotals.calories}
                protein={snackTotals.protein}
                foods={snackFoods}
                onAddFood={() => setActiveMeal("Snacks")}
                onEditFood={handleEditFood}
                onRemoveFood={handleRemoveFood}
              />
            </div>

            <div className="foodlog-right">
              <FoodSearchPanel
                activeMeal={activeMeal}
                onAddFood={handleOpenModal}
              />
            </div>
          </div>
        </div>
        <AddFoodModal
          open={modalOpen}
          food={selectedFood}
          meal={activeMeal}
          quantity={quantity}
          isEditing={isEditing}
          setQuantity={setQuantity}
          onClose={() => setModalOpen(false)}
          onAdd={async () => {
            const updatedFood = calculateNutrition(selectedFood, quantity);

            try {
              if (isEditing) {
                // We'll connect this to the backend next.
                await updateFoodLog(updatedFood.id, {
                  quantity: updatedFood.quantity,

                  calories: updatedFood.calories,
                  protein: updatedFood.protein,
                  carbs: updatedFood.carbs,
                  fat: updatedFood.fat,

                  fiber: updatedFood.fiber || 0,
                  sodium: updatedFood.sodium || 0,
                  calcium: updatedFood.calcium || 0,
                  iron: updatedFood.iron || 0,
                  vitamin_c: updatedFood.vitamin_c || 0,
                  folate: updatedFood.folate || 0,
                });

                await loadTodayFoodLogs();
              } else {
                await createFoodLog({
                  meal: activeMeal,

                  food_name: updatedFood.name,

                  quantity: quantity,

                  calories: updatedFood.calories,
                  protein: updatedFood.protein,
                  carbs: updatedFood.carbs,
                  fat: updatedFood.fat,

                  fiber: updatedFood.fiber || 0,
                  sodium: updatedFood.sodium || 0,
                  calcium: updatedFood.calcium || 0,
                  iron: updatedFood.iron || 0,
                  vitamin_c: updatedFood.vitamin_c || 0,
                  folate: updatedFood.folate || 0,
                });

                await loadTodayFoodLogs();
              }

              setModalOpen(false);
              setIsEditing(false);
              setEditIndex(null);
            } catch (error) {
              console.error("Failed to save food log:", error);
            }
          }}
        />
      </main>
    </div>
  );
}
