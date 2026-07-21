import { useEffect, useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import Header from "../../components/Recommendation/Header";
import ContextBanner from "../../components/Recommendation/ContextBanner";
import RecommendationCards from "../../components/Recommendation/RecommendationCards";
import AvoidFoods from "../../components/Recommendation/AvoidFoods";

import {
  getRecommendations,
  getAIReasons,
} from "../../api/recommendation";

import "./Recommendation.css";

export default function Recommendation() {
  const [recommendationData, setRecommendationData] = useState(null);

  const loadRecommendations = async () => {
    try {
      const data = await getRecommendations();

      console.log("Fast response:", data);

      setRecommendationData(data);
    } catch (error) {
      console.error("Failed to load recommendations:", error);
    }
  };

  const loadAIReasons = async () => {
    try {
      const aiReasons = await getAIReasons();

      console.log("Gemini reasons:", aiReasons);

      setRecommendationData((previous) => {
        if (!previous) return previous;

        const updatedRecommendations =
          previous.recommendations.map((card) => {
            const ai = aiReasons.find(
              (item) => item.food === card.food
            );

            return {
              ...card,
              reason: ai?.reason || card.reason,
            };
          });

        return {
          ...previous,
          recommendations: updatedRecommendations,
        };
      });
    } catch (error) {
      console.error(
        "Failed to load AI reasons:",
        error
      );
    }
  };

  useEffect(() => {
    const load = async () => {
      await loadRecommendations();

      // Start Gemini AFTER the page has loaded
      loadAIReasons();
    };

    load();
  }, []);

  if (!recommendationData) {
    return (
      <div className="dashboard">
        <Sidebar />

        <main className="dashboard-main">
          <Topbar />

          <div className="dashboard-content">
            <p>Loading recommendations...</p>
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

          <ContextBanner
            alerts={recommendationData.alerts}
          />

          <RecommendationCards
            recommendations={
              recommendationData.recommendations
            }
          />

          <AvoidFoods
            avoidFoods={recommendationData.avoidFoods}
          />
        </div>
      </main>
    </div>
  );
}