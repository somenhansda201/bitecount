import { useEffect, useState } from "react";
import { getMealPlan } from "../services/MealPlannerService";

export default function useMealPlanner() {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [planVersion, setPlanVersion] = useState(1);

  const loadMealPlan = async (version = planVersion) => {
    try {
      setLoading(true);

      const data = await getMealPlan(version);

      setMealPlan(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMealPlan(planVersion);
  }, [planVersion]);

  const regenerateMealPlan = () => {
    setPlanVersion((prev) => prev + 1);
  };

  return {
    mealPlan,
    loading,
    error,
    planVersion,
    regenerateMealPlan,
    reloadMealPlan: loadMealPlan,
  };
}