import { useEffect, useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import Header from "../../components/Nutrition/Header";
import SummaryCards from "../../components/Nutrition/SummaryCards";
import NutrientProgress from "../../components/Nutrition/NutrientProgress";
import NutritionCharts from "../../components/Nutrition/NutritionCharts";

import { getNutritionAnalysis } from "../../api/nutrition";

import "./Nutrition.css";

export default function Nutrition() {
  const [nutritionData, setNutritionData] = useState(null);

  const loadNutrition = async () => {
    try {
      const data = await getNutritionAnalysis();

      console.log(data);

      setNutritionData(data);
    } catch (error) {
      console.error("Failed to load nutrition analysis:", error);
    }
  };

  useEffect(() => {
    loadNutrition();
  }, []);

  if (!nutritionData) {
    return (
      <div className="dashboard">
        <Sidebar />

        <main className="dashboard-main">
          <Topbar />

          <div className="dashboard-content">
            <p>Loading nutrition analysis...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <Header />

          <SummaryCards summary={nutritionData.summary} />

          <NutrientProgress nutrients={nutritionData.nutrients} />

          <NutritionCharts weekly={nutritionData.weekly} />
        </div>
      </main>
    </div>
  );
}