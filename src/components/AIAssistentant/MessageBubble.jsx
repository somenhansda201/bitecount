import "./MessageBubble.css";

export default function MessageBubble({ sender, message }) {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className={`message-row ${sender}`}>
      {/* AI Avatar */}
      {sender === "ai" && (
        <div className="message-avatar ai-avatar">
          🌿
        </div>
      )}

      <div className="message-content">
        <div className={`message-bubble ${sender}`}>
          {message}
        </div>

        <span className="message-time">
          {time}
        </span>
      </div>

      {/* User Avatar */}
      {sender === "user" && (
        <div className="message-avatar user-avatar">
          {initials}
        </div>
      )}
    </div>
  );
}