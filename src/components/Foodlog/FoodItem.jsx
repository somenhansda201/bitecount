import "./FoodItem.css";
import { Pencil, Trash2 } from "lucide-react";

export default function FoodItem({
  icon,
  name,
  serving,
  protein,
  carbs,
  fat,
  fiber,
  sodium,
  calcium,
  iron,
  vitamin_c,
  calories,
  onEdit,
  onRemove,
}) {
  return (
    <div className="food-item">
      <div className="food-left">
        <div className="food-icon">{icon}</div>

        <div>
          <h4>{name}</h4>

          <div className="food-details">
            <p>
              P:{protein}g • C:{carbs}g • F:{fat}g
            </p>

            <p className="micros">
              Fiber:{fiber}g • Ca:{calcium}mg • Fe:{iron}mg
            </p>

            <p className="micros">
              Na:{sodium}mg • Vit C:{vitamin_c}mg
            </p>
          </div>
        </div>
      </div>

      <div className="food-right">
        <div className="food-calories">
          <span>{calories}</span>

          <small>kcal</small>
        </div>

        <div className="food-actions">
          <button className="edit-btn" onClick={onEdit}>
            <Pencil size={16} />
            <span>Edit</span>
          </button>

          <button className="remove-btn" onClick={onRemove}>
            <Trash2 size={16} />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}
