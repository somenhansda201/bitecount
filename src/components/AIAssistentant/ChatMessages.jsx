import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import "./ChatMessages.css";

export default function ChatMessages({
  messages,
  isTyping,
  messagesEndRef,
}) {
  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}

      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef}></div>
    </div>
  );
}