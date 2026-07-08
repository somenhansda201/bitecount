import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  console.log("JWT Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("Authorization Header:", config.headers.Authorization);

  return config;
});

// Attach JWT automatically
{/*API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});*/}

// Create Food Log
export const createFoodLog = async (food) => {
  const response = await API.post("/foodlog/", food);
  return response.data;
};

// Get Today's Food Logs
export const getTodayFoodLogs = async () => {
  const response = await API.get("/foodlog/today");
  return response.data;
};

// Update Food Log
export const updateFoodLog = async (id, data) => {
  const response = await API.put(`/foodlog/${id}`, data);
  return response.data;
};

// Delete Food Log
export const deleteFoodLog = async (id) => {
  const response = await API.delete(`/foodlog/${id}`);
  return response.data;
};