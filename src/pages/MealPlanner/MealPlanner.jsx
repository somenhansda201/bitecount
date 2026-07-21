import "./MealPlanner.css";
import "../Dashboard/Dashboard.css";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import NutritionSummary from "../../components/MealPlanner/NutritionSummary";
import MealGrid from "../../components/MealPlanner/MealGrid";
import { RefreshCcw } from "lucide-react";
import useMealPlanner from "../../hooks/usePlanner";

export default function MealPlanner() {
  const {
    mealPlan,
    loading,
    error,
    regenerateMealPlan,
  } = useMealPlanner();

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          {/* Header */}
          <div className="meal-header">
            <div>
              <h1>Meal Planner</h1>
              <p>AI-generated meal plan targeting your deficiencies</p>
            </div>

            <button
              className="regenerate-btn"
              onClick={regenerateMealPlan}
              disabled={loading}
            >
              <RefreshCcw size={16} />
              {loading ? "Generating..." : "Regenerate Plan"}
            </button>
          </div>

          {/* Meal Planner Content */}
          {error ? (
            <div className="meal-error">
              Failed to load meal plan. Please try again.
            </div>
          ) : loading && !mealPlan ? (
            <div className="meal-loading">
              Loading meal plan...
            </div>
          ) : (
            <>
              <NutritionSummary
                targets={mealPlan?.targets}
                loading={loading}
              />

              <MealGrid
                meals={mealPlan?.meals}
                loading={loading}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}