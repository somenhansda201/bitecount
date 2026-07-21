import { ACTIVITY_LEVELS } from "./constants";

export function computeHealth({
  age,
  gender,
  weight,
  height,
  activity,
}) {
  const w = parseFloat(weight);
  const h = parseFloat(height);
  const a = parseFloat(age);

  if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) {
    return null;
  }

  const heightM = h / 100;

  const bmi = w / (heightM * heightM);

  const base = 10 * w + 6.25 * h - 5 * a;

  const bmr = gender === "Male"
    ? base + 5
    : base - 161;

  const activityFactor =
    ACTIVITY_LEVELS.find(
      (item) => item.value === activity
    )?.factor || 1.2;

  const tdee = bmr * activityFactor;

  const weightLossTarget = Math.max(
    tdee - 500,
    bmr * 0.9
  );

  return {
    bmi: Math.round(bmi * 10) / 10,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    weightLossTarget: Math.round(weightLossTarget),
  };
}