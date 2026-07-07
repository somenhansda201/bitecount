import "./FoodItem.css";

export default function FoodItem({
  icon,
  name,
  serving,
  protein,
  carbs,
  fat,
  calories,
}) {
  return (
    <div className="food-item">

      <div className="food-left">

        <div className="food-icon">
          {icon}
        </div>

        <div>

          <h4>{name}</h4>

          <p>
            {serving} • P:{protein}g • C:{carbs}g • F:{fat}g
          </p>

        </div>

      </div>

      <div className="food-calories">

        <span>{calories}</span>

        <small>kcal</small>

      </div>

    </div>
  );
}