export default function MealItem({ meal }) {
  return (
    <div className="meal-item">
      <div className="meal-item-info">
        <h4>{meal.dish}</h4>

        <p>
          Qty: {Math.round(meal.recommended_quantity_g)} g
        </p>
      </div>

      <div className="meal-item-nutrition">
        <span>
          {Math.round(meal.nutrition.calories)} kcal
        </span>

        <span>
          {meal.nutrition.protein.toFixed(1)} g Protein
        </span>
      </div>
    </div>
  );
}