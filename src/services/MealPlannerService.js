import api from "./api";

export const getMealPlan = async (planVersion = 1) => {
  const response = await api.get("/meal-planner/today", {
    params: {
      plan_version: planVersion,
    },
  });

  return response.data;
};