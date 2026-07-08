import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const searchFoods = async (query) => {
  const response = await API.get("/foods/search", {
    params: {
      query,
    },
  });

  return response.data;
};