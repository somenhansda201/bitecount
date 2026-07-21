import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";

import "./HeroCard.css";

export default function HeroCard({ hero }) {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    loadUser();
  }, []);

  function getFirstName(name) {
    if (!name) return "User";

    return name.trim().split(/\s+/)[0];
  }

  function loadUser() {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) return;

    const user = JSON.parse(storedUser);

    setUserName(getFirstName(user.name));
  }

  return (
    <motion.section
      className="dashboard-hero-card"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Decorations */}
      <div className="dashboard-hero-circle dashboard-hero-circle-1"></div>
      <div className="dashboard-hero-circle dashboard-hero-circle-2"></div>
      <div className="dashboard-hero-circle dashboard-hero-circle-3"></div>

      <div className="dashboard-hero-left">
        <p className="dashboard-hero-greeting">Good Morning 👋</p>

        <div className="dashboard-hero-title">
          <h1>
            Hey <span>{userName}</span>,
          </h1>

          <div className="dashboard-hero-title-right">
            <span>you're doing great!</span>

            <Dumbbell
              className="dashboard-hero-dumbbell"
              size={32}
            />
          </div>
        </div>

        <p className="dashboard-hero-subtitle">
          You've logged{" "}
          <strong>{hero.meals_logged} meal{hero.meals_logged !== 1 ? "s" : ""}</strong>{" "}
          today. Only{" "}
          <strong>{hero.remaining_calories} calories</strong>{" "}
          remaining. Keep it up!
        </p>
      </div>

      <div className="dashboard-hero-score">
        <h2>{hero.health_score}</h2>

        <p>Health Score</p>
      </div>
    </motion.section>
  );
}