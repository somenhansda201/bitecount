import "./SearchFoodItem.css";

export default function SearchFoodItem({
  icon,
  name,
  protein,
  carbs,
  fat,
  calories,
}) {
  return (
    <div className="search-food-item">

      <div className="search-food-left">

        <div className="search-food-icon">
          {icon}
        </div>

        <div>

          <h4>{name}</h4>

          <p>
            P:{protein}g C:{carbs}g F:{fat}g
          </p>

        </div>

      </div>

      <div className="search-food-kcal">

        <span>{calories}</span>

        <small>kcal</small>

      </div>

    </div>
  );
}