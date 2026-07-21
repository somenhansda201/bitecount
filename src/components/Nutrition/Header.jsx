import "./Header.css";

export default function Header() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="nutrition-header">
      <h2 className="nutrition-title">
        Nutrition Analysis
      </h2>

      <p className="nutrition-subtitle">
        Today's detailed nutritional breakdown — {formattedDate}
      </p>
    </div>
  );
}