import { Zap } from "lucide-react";
import StatCard from "./StatCard";

export default function TDEECard({ health }) {
  return (
    <StatCard
      icon={<Zap />}
      iconBg="#dcfce7"
      valueColor="#16a34a"
      title="Total Daily Energy Expenditure (TDEE)"
      value={health.tdee}
      description="Calories to maintain current weight"
    />
  );
}