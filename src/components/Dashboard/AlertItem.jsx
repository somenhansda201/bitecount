import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import "./AlertItem.css";

export default function AlertItem({
  title,
  value,
  color,
  background,
  border,
  Icon = AlertCircle,
}) {
  return (
    <motion.div
      className="alert-item"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      style={{
        background,
        border: `1px solid ${border}`,
      }}
    >
      <div className="alert-left">
        <Icon
          size={18}
          color={color}
        />

        <span>{title}</span>
      </div>

      <span
        className="alert-value"
        style={{ color }}
      >
        {value}
      </span>
    </motion.div>
  );
}