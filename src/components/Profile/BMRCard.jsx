
import { Activity } from "lucide-react";
import StatCard from "./StatCard";

export default function BMRCard({ health }) {
  return (
    <StatCard
      icon={<Activity />}
      iconBg="#e0f2fe"
      valueColor="#0ea5e9"
      title="Basal Metabolic Rate (BMR)"
      value={health.bmr}
      description="Calories burned at complete rest"
    />
  );
}