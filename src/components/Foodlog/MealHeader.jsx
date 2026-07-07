import { Plus } from "lucide-react";
import "./MealHeader.css";

export default function MealHeader({
  icon,
  title,
 calories,
  protein,
  onAddFood,
}) {
  return (
    <div className="meal-header">

      <div className="meal-header-left">

        <div className="meal-icon">
          {icon}
        </div>

        <div>
          <h3>{title}</h3>

          <p>
            {calories} kcal • {protein}g protein
          </p>
        </div>

      </div>

      <button
        className="add-food-btn"
        onClick={onAddFood}
      >
        <Plus size={18} />

        Add Food
      </button>

    </div>
  );
}