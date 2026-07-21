import "./NutritionCharts.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

export default function NutritionCharts({ weekly }) {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Weekly Nutrition Trend</h3>

      <p className="chart-subtitle">
        7-day calorie and protein tracking
      </p>

      <div className="chart-grid">

        <div className="chart-box">
          <h4 className="green-title">Calories (kcal)</h4>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weekly}>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="calories"
                fill="#22C55E"
                radius={[8, 8, 0, 0]}
                barSize={42}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h4 className="blue-title">Protein (g)</h4>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weekly}>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="protein"
                fill="#0EA5E9"
                radius={[8, 8, 0, 0]}
                barSize={42}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}