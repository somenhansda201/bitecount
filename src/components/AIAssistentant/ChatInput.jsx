import { useState } from "react";
import {
  SendHorizontal,
  Mic,
  Paperclip,
} from "lucide-react";

import "./ChatInput.css";

export default function ChatInput({ onSend })  {

  const [message, setMessage] = useState("");

  const handleSend = () => {

    if (!message.trim()) return;

    onSend(message);

    setMessage("");

};

  return (

    <div className="chat-input-container">

      <button className="chat-input-icon">

        <Paperclip size={20} />

      </button>

      <input
        type="text"
        placeholder="Ask BiteCount AI anything about nutrition..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button className="chat-input-icon">

        <Mic size={20} />

      </button>

      <button
        className="chat-send-btn"
        onClick={handleSend}
      >

        <SendHorizontal size={20} />

      </button>

    </div>

  );

}