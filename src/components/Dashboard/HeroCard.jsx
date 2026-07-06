import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";

import "./HeroCard.css";

export default function HeroCard() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
    }
  }, []);
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

      {/* <span className="dashboard-hero-icon">💪</span> */}

      <div className="dashboard-hero-left">
        <p className="dashboard-hero-greeting">Good Morning 👋</p>

        <div className="dashboard-hero-title">
          <h1>
            Hey <span>{userName}</span>,
          </h1>

          <div className="dashboard-hero-title-right">
            <span>you're doing great!</span>

            <Dumbbell className="dashboard-hero-dumbbell" size={32} />
          </div>
        </div>

        <p className="dashboard-hero-subtitle">
          You've logged <strong>3 meals</strong> today. Only{" "}
          <strong>360 calories</strong> remaining. Keep it up!
        </p>
      </div>

      {/* Right */}

      <div className="dashboard-hero-score">
        <h2>74</h2>

        <p>Health Score</p>
      </div>
    </motion.section>
  );
}
