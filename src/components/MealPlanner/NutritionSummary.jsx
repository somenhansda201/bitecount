import SummaryCard from "./SummaryCard";

export default function NutritionSummary({
  targets,
  loading,
}) {
  if (loading && !targets) {
    return null;
  }

  return (
    <div className="nutrition-summary">
      <SummaryCard
        value={targets?.target_calories ?? 0}
        label="Total Calories"
        color="#22c55e"
      />

      <SummaryCard
        value={`${targets?.protein ?? 0}g`}
        label="Total Protein"
        color="#0ea5e9"
      />

      <SummaryCard
        value={`${targets?.carbs ?? 0}g`}
        label="Total Carbs"
        color="#f59e0b"
      />

      <SummaryCard
        value={`${targets?.fat ?? 0}g`}
        label="Total Fat"
        color="#8b5cf6"
      />
    </div>
  );
}