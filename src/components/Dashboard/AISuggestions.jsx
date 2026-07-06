import { Brain } from "lucide-react";

import SuggestionItem from "./SuggestionItem";

import "./AISuggestions.css";

export default function AISuggestions() {
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

        <p>Recommended meals for today</p>

      </div>

      <div className="ai-list">

        <SuggestionItem
          emoji="🥗"
          title="Spinach Salad"
          subtitle="Rich in Iron & Fiber"
          color="#22c55e"
        />

        <SuggestionItem
          emoji="🐟"
          title="Grilled Salmon"
          subtitle="Boost Vitamin D"
          color="#0ea5e9"
        />

        <SuggestionItem
          emoji="🥛"
          title="Greek Yogurt"
          subtitle="Improve Calcium"
          color="#8b5cf6"
        />

      </div>

    </section>
  );
}