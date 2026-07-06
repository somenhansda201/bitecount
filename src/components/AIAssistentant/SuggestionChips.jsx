import "./SuggestionChips.css";

const suggestions = [
  "What should I eat tonight?",
  "Why am I low in iron?",
  "Give me a high protein meal plan",
  "Foods good for Vitamin D",
];

export default function SuggestionChips({ onSelect }) {
  return (
    <div className="suggestion-chips">
      {suggestions.map((item, index) => (
        <button
          key={index}
          className="suggestion-chip"
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}