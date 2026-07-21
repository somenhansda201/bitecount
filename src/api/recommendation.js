import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Attach JWT token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Fast endpoint
export const getRecommendations = async () => {
  const response = await API.get("/recommendation");
  return response.data;
};

// AI endpoint (Gemini)
export const getAIReasons = async () => {
  const response = await API.get("/recommendation/ai-reasons");
  return response.data;
};