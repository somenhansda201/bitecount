import { motion } from "framer-motion";

export default function SuggestionItem({
  emoji,
  title,
  subtitle,
  color,
}) {
  return (
    <motion.div
      className="suggestion-item"
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="suggestion-left">

        <div
          className="suggestion-icon"
          style={{ background: `${color}18` }}
        >
          {emoji}
        </div>

        <div>

          <h4>{title}</h4>

          <p>{subtitle}</p>

        </div>

      </div>

      <span
        className="suggestion-badge"
        style={{
          color,
          background: `${color}15`,
        }}
      >
        Recommended
      </span>
    </motion.div>
  );
}