export function calculateHealthScore(
  health,
  category,
  conditions
) {
  if (!health) return "--";

  let score = 100;

  if (category?.label !== "Normal Weight") {
    score -= 15;
  }

  score -= conditions.length * 6;

  return Math.max(30, Math.min(100, score));
}