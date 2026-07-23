import { useEffect, useState } from "react";
import "./WaterLogCard.css";

import {
  fetchTodayWater,
  increaseWater,
  decreaseWater,
} from "../../services/waterLogService";

export default function WaterLogCard() {
  const [water, setWater] = useState({
    consumed_ml: 0,
    goal_ml: 2500,
  });

  useEffect(() => {
    loadWater();
  }, []);

  const loadWater = async () => {
    try {
      const data = await fetchTodayWater();
      setWater(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    try {
      const data = await increaseWater(250);
      setWater(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async () => {
    try {
      const data = await decreaseWater(250);
      setWater(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="water-card">

      <h3>💧 Water Intake</h3>

      <p className="water-amount">
        {water.consumed_ml} / {water.goal_ml} mL
      </p>

      <div className="water-buttons">

        <button onClick={handleRemove}>
          -250 mL
        </button>

        <button onClick={handleAdd}>
          +250 mL
        </button>

      </div>

    </div>
  );
}