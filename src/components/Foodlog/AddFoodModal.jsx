import "./AddFoodModal.css";

export default function AddFoodModal({
  open,
  food,
  meal,
  setMeal,
  quantity,
  setQuantity,
  onClose,
  onAdd,
  isEditing,
}) {
  if (!open || !food) return null;

  return (
    <div className="modal-overlay">
      <div className="food-modal">
        <h2>{isEditing ? "Edit Food" : "Add Food"}</h2>

        <div className="modal-food">
          <strong>
            {food.icon} {food.name}
          </strong>

          <p>
            {food.calories} kcal • P:{food.protein}g • C:{food.carbs}g • F:
            {food.fat}g
          </p>
        </div>

        <label>Meal</label>

        <div className="selected-meal">🍽️ {meal}</div>

        <label>Quantity (grams)</label>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="add-btn" onClick={onAdd}>
            {isEditing ? "Save Changes" : "Add Food"}
          </button>
        </div>
      </div>
    </div>
  );
}
