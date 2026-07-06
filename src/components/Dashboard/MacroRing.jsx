import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

import { motion } from "framer-motion";

import "./MacroRing.css";

export default function MacroRing({
  label,
  value,
  goal,
  color,
}) {

  const percentage = Math.round((value / goal) * 100);

  const data = [
    {
      value: percentage,
    },
  ];

  return (
    <motion.div
      className="macro-ring"
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <RadialBarChart
        width={130}
        height={130}
        cx="50%"
        cy="50%"
        innerRadius="78%"
        outerRadius="100%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />

        <RadialBar
          background
          dataKey="value"
          cornerRadius={20}
          fill={color}
        />
      </RadialBarChart>

      <div className="macro-percentage">

        {percentage}%

      </div>

      <h4>{label}</h4>

      <p>
        {value}/{goal}g
      </p>

    </motion.div>
  );
}