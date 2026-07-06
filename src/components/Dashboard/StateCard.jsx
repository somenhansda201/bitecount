import { motion } from "framer-motion";

import "./StatCard.css";

export default function StatCard({
  title,
  value,
  unit,
  progress,
  remaining,
  color,
  icon,
}) {
  return (
    <motion.div
      className="stat-card"
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="stat-card-top">

        <div>

          <p className="stat-title">{title}</p>

          <h2>
            {value}

            <span>{unit}</span>
          </h2>

        </div>

        <div
          className="stat-icon"
          style={{ backgroundColor: `${color}18` }}
        >
          {icon}
        </div>

      </div>

      <div className="stat-progress">

        <div
          className="stat-progress-fill"
          style={{
            width: `${progress}%`,
            background: color,
          }}
        ></div>

      </div>

      <div className="stat-footer">

        <span>{progress}% of goal</span>

        <span>{remaining}</span>

      </div>

    </motion.div>
  );
}