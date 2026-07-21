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

import { getFoodById } from "../../api/food";

export default function FoodLog() {
  const [breakfastFoods, setBreakfastFoods] = useState([]);
  const [lunchFoods, setLunchFoods] = useState([]);
  const [dinnerFoods, setDinnerFoods] = useState([]);
  const [snackFoods, setSnackFoods] = useState([]);
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState(null);
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
  const handleEditFood = async (meal, index) => {
    let foodLog = null;

    switch (meal) {
      case "Breakfast":
        foodLog = breakfastFoods[index];
        break;

      case "Lunch":
        foodLog = lunchFoods[index];
        break;

      case "Dinner":
        foodLog = dinnerFoods[index];
        break;

      case "Snacks":
        foodLog = snackFoods[index];
        break;

      default:
        return;
    }

    try {
      // Load the original food from the database
      const food = await getFoodById(foodLog.food_id);

      // Store the full food object (contains units[])
      setSelectedFood(food);

      // Restore meal
      setActiveMeal(meal);

      // Restore quantity
      setQuantity(Number(foodLog.quantity) || 1);

      // Restore the previously selected unit
      const unit =
        food.units?.find((u) => u.name === foodLog.unit) ||
        food.units?.[0] ||
        null;

      setSelectedUnit(unit);

      // Save the FoodLog id so we know which record to update
      setEditIndex(foodLog.id);

      setIsEditing(true);

      setModalOpen(true);
    } catch (error) {
      console.error("Failed to load food for editing:", error);
      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      }
    }
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
  const calculateNutrition = (food, quantity, unit) => {
    if (!food || !unit) return null;
    const grams = quantity * unit.grams;

    const factor = grams / 100;

    return {
      ...food,

      quantity,

      unit: unit.name,

      grams,

      serving: `${quantity} ${unit.name}`,

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
    setIsEditing(false);
    setEditIndex(null);

    setSelectedFood(food);

    setQuantity(1);

    setSelectedUnit(food.units?.[0] || null);

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
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          onClose={() => {
            setModalOpen(false);

            setIsEditing(false);

            setEditIndex(null);

            setSelectedFood(null);

            setSelectedUnit(null);

            setQuantity(1);
          }}
          onAdd={async () => {
            const updatedFood = calculateNutrition(
              selectedFood,
              quantity,
              selectedUnit,
            );

            if (!updatedFood) return;

            try {
              if (isEditing) {
                // We'll connect this to the backend next.
                await updateFoodLog(editIndex, {
                  quantity: updatedFood.quantity,
                  unit: updatedFood.unit,

                  grams: updatedFood.grams,
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

                  food_id: updatedFood._id,
                  food_name: updatedFood.name,

                  quantity: updatedFood.quantity,
                  unit: updatedFood.unit,

                  grams: updatedFood.grams,

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

              setSelectedFood(null);

              setSelectedUnit(null);

              setQuantity(1);
            } catch (error) {
              console.error("Failed to save food log:", error);
            }
          }}
        />
      </main>
    </div>
  );
}
