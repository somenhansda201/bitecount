import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Activity } from "lucide-react";

import "./WeeklyCalories.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="calorie-tooltip">
        <h4>{payload[0].payload.day}</h4>
        <p>{payload[0].value} kcal</p>
      </div>
    );
  }

  return null;
};

export default function WeeklyCalories({
  weeklyCalories = [],
}) {
  const averageCalories =
    weeklyCalories.length > 0
      ? Math.round(
          weeklyCalories.reduce(
            (sum, day) => sum + day.calories,
            0
          ) / weeklyCalories.length
        )
      : 0;

  return (
    <section className="weekly-calories-card">
      {/* Header */}
      <div className="weekly-calories-header">
        <div>
          <div className="weekly-title">
            <Activity size={22} color="#22c55e" />

            <h2>Weekly Calories</h2>
          </div>

          <p>Average: {averageCalories} kcal/day</p>
        </div>

        <span className="week-badge">Last 7 Days</span>
      </div>

      {/* Chart */}
      <div className="weekly-calories-chart">
        <ResponsiveContainer
          width="100%"
          height={window.innerWidth < 768 ? 260 : 320}
        >
          <BarChart
            data={weeklyCalories}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient
                id="calorieGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#86efac" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <YAxis hide />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(34,197,94,.08)" }}
            />

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#edf2f7"
            />

            <Bar
              dataKey="calories"
              radius={[8, 8, 0, 0]}
              fill="url(#calorieGradient)"
              barSize={48}
              animationDuration={1200}
              animationBegin={200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}