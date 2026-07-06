import "./ChatHeader.css";

export default function ChatHeader() {
  return (
    <div className="chat-header">

      <div className="chat-header-left">

        <div className="chat-ai-logo">
          🌿
        </div>

        <div className="chat-ai-info">
          <h3>BiteCount AI</h3>
          <p>
            <span className="online-dot"></span>
            Online • Nutrition Expert
          </p>
        </div>

      </div>

    </div>
  );
}