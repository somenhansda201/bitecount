import "./TypingIndicator.css";

export default function TypingIndicator() {
  return (
    <div className="message-row ai">

      <div className="message-avatar">
        🌿
      </div>

      <div className="typing-bubble">

        <span></span>
        <span></span>
        <span></span>

      </div>

    </div>
  );
}