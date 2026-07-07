import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import MealHeader from "../../components/FoodLog/MealHeader";
import FoodItem from "../../components/FoodLog/FoodItem";
import MealSection from "../../components/FoodLog/MealSection";
import FoodSearchPanel from "../../components/FoodLog/FoodSearchPanel";
import "./FoodLog.css";

export default function FoodLog() {
  const breakfastFoods = [
    {
      icon: "🌽",
      name: "Oats",
      serving: "1 serving",
      protein: 10,
      carbs: 55,
      fat: 5,
      calories: 307,
    },
    {
      icon: "🥣",
      name: "Greek Yogurt",
      serving: "1 serving",
      protein: 17,
      carbs: 6,
      fat: 1,
      calories: 100,
    },
  ];

  const lunchFoods = [
    {
      icon: "🍗",
      name: "Chicken Breast",
      serving: "1 serving",
      protein: 31,
      carbs: 0,
      fat: 3.6,
      calories: 248,
    },
    {
      icon: "🍚",
      name: "Brown Rice",
      serving: "1 serving",
      protein: 5,
      carbs: 45,
      fat: 2,
      calories: 216,
    },
  ];

  const dinnerFoods = [
    {
      icon: "🐟",
      name: "Salmon",
      serving: "1 serving",
      protein: 28,
      carbs: 0,
      fat: 12,
      calories: 208,
    },
  ];

  const snackFoods = [
    {
      icon: "🍎",
      name: "Apple",
      serving: "1 medium",
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      calories: 95,
    },
  ];
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
                calories={407}
                protein={27}
                foods={breakfastFoods}
                onAddFood={() => alert("Breakfast")}
              />

              <MealSection
                icon="☀️"
                title="Lunch"
                calories={464}
                protein={52}
                foods={lunchFoods}
                onAddFood={() => alert("Lunch")}
              />

              <MealSection
                icon="🌙"
                title="Dinner"
                calories={208}
                protein={28}
                foods={dinnerFoods}
                onAddFood={() => alert("Dinner")}
              />

              <MealSection
                icon="🍏"
                title="Snacks"
                calories={95}
                protein={1}
                foods={snackFoods}
                onAddFood={() => alert("Snacks")}
              />
            </div>

            <div className="foodlog-right">
              <FoodSearchPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
