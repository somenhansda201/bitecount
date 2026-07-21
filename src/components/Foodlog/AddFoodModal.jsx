import "./AddFoodModal.css";

export default function AddFoodModal({
  open,
  food,
  meal,

  quantity,
  setQuantity,
  selectedUnit,
  setSelectedUnit,
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

          <p className="food-subtitle">Nutrition values per 100 g</p>
          {selectedUnit && (
            <small className="serving-info">
              Default unit: <strong>{selectedUnit.name}</strong>
              {" • "}
              {selectedUnit.grams} g
            </small>
          )}
        </div>

        <label>Meal</label>

        <div className="selected-meal">🍽️ {meal}</div>

        <label>Quantity</label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <label>Unit</label>

        <select
          value={selectedUnit?.name || ""}
          onChange={(e) => {
            const unit = food.units?.find((u) => u.name === e.target.value);

            if (unit) {
              setSelectedUnit(unit);
            }
          }}
        >
          {(food.units || []).map((unit) => (
            <option key={unit.name} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>

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
