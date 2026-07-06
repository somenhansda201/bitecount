import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts";
import { Activity } from "lucide-react";
import { YAxis } from "recharts";

import "./WeeklyCalories.css";

const weeklyData = [
  { day: "Mon", calories: 1850 },
  { day: "Tue", calories: 1720 },
  { day: "Wed", calories: 1940 },
  { day: "Thu", calories: 1650 },
  { day: "Fri", calories: 1810 },
  { day: "Sat", calories: 1980 },
  { day: "Sun", calories: 1680 },
];

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

export default function WeeklyCalories() {
  return (
    <section className="weekly-calories-card">
      {/* Header */}

      <div className="weekly-calories-header">
        <div>
          <div className="weekly-title">
            <Activity size={22} color="#22c55e" />

            <h2>Weekly Calories</h2>
          </div>

          <p>Average: 2,041 kcal/day</p>
        </div>

        <span className="week-badge">This Week</span>
      </div>

      {/* Chart */}

      <div className="weekly-calories-chart">
        <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 260 : 320}>
          <BarChart
            data={weeklyData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="calorieGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" />

                <stop offset="100%" stopColor="#86efac" />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
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
