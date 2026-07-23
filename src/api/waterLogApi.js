import api from "../services/api";

export const getTodayWater = async () => {
  const response = await api.get("/water-log/today");
  return response.data;
};

export const addWater = async (amount_ml) => {
  const response = await api.post("/water-log/add", {
    amount_ml,
  });

  return response.data;
};

export const removeWater = async (amount_ml) => {
  const response = await api.post("/water-log/remove", {
    amount_ml,
  });

  return response.data;
};