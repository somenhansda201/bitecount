import { Brain } from "lucide-react";

import SuggestionItem from "./SuggestionItem";

import "./AISuggestions.css";

export default function AISuggestions({ suggestions = [] }) {
  const getEmoji = (title) => {
  const text = title.toLowerCase();

  if (text.includes("protein")) return "🍗";
  if (text.includes("fiber")) return "🥗";
  if (text.includes("fruit")) return "🍎";
  if (text.includes("vegetable")) return "🥦";
  if (text.includes("snack")) return "🥜";
  if (text.includes("grain")) return "🌾";
  if (text.includes("water")) return "💧";

  return "🤖";
};
  return (
    <section className="ai-card">
      <div className="ai-header">
        <div className="ai-title">
          <Brain
            size={22}
            color="#8b5cf6"
          />

          <h2>AI Suggestions</h2>
        </div>

        <p>Personalized recommendations for today</p>
      </div>

      <div className="ai-list">
        {suggestions.map((item, index) => (
          <SuggestionItem
            key={index}
            emoji={getEmoji(item.title)}
            title={item.title}
            subtitle={item.description}
            color="#8b5cf6"
          />
        ))}
      </div>
    </section>
  );
}