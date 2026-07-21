import { Target } from "lucide-react";
import StatCard from "./StatCard";

export default function WeightGoalCard({ health }) {
  return (
    <StatCard
      icon={<Target />}
      iconBg="#ede9fe"
      valueColor="#7c3aed"
      title="Weight Loss Target"
      value={health.weightLossTarget}
      description="Caloric deficit for 0.5 kg/week loss"
    />
  );
}