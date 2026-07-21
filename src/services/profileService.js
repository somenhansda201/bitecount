import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem("access_token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getProfile = async () => {
  const response = await axios.get(
    `${API_URL}/profile`,
    getAuthHeaders()
  );

  return response.data;
};

export const createProfile = async (profileData) => {
  const response = await axios.post(
    `${API_URL}/profile`,
    profileData,
    getAuthHeaders()
  );

  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await axios.put(
    `${API_URL}/profile`,
    profileData,
    getAuthHeaders()
  );

  return response.data;
};