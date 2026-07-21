import api from "./api";

export const getHealthReport = async () => {
  const response = await api.get("/health-report");
  return response.data;
};