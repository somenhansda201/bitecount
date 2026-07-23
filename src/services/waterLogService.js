import {
  getTodayWater,
  addWater,
  removeWater,
} from "../api/waterLogApi";

export const fetchTodayWater = async () => {
  return await getTodayWater();
};

export const increaseWater = async (amount) => {
  return await addWater(amount);
};

export const decreaseWater = async (amount) => {
  return await removeWater(amount);
};