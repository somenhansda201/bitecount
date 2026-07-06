import { useState, useEffect, useRef } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import ChatHeader from "../../components/AIAssistentant/ChatHeader";
import SuggestionChips from "../../components/AIAssistentant/SuggestionChips";
import ChatMessages from "../../components/AIAssistentant/ChatMessages";
import ChatInput from "../../components/AIAssistentant/ChatInput";
import { sendMessage } from "../../api/chat";

import "./Chat.css";

export default function Chat() {
  // =========================
  // Initial AI Welcome Message
  // =========================

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      message:
        "Hello! 👋 I'm BiteCount AI. Ask me anything about nutrition, meals, calories, vitamins, deficiencies, or your health.",
    },
  ]);

  // =========================
  // Typing State
  // =========================

  const [isTyping, setIsTyping] = useState(false);

  // =========================
  // Auto Scroll Ref
  // =========================

  const messagesEndRef = useRef(null);

  // =========================
  // Send Message
  // =========================

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: text,
      },
    ]);

    // Show typing animation
    setIsTyping(true);

    try {
      // Send message to FastAPI
      const aiReply = await sendMessage(text);

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: aiReply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message:
            "Sorry, I couldn't process your request. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // =========================
  // Auto Scroll
  // =========================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  // =========================
  // UI
  // =========================

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <div className="chat-page">
            {/* Header */}

            <div className="chat-header-wrapper">
              <ChatHeader />
            </div>

            {/* Suggestion Chips */}

            <div className="chat-chips-wrapper">
              <SuggestionChips onSelect={handleSend} />
            </div>

            {/* Messages */}

            <div className="chat-messages-wrapper">
              <ChatMessages
                messages={messages}
                isTyping={isTyping}
                messagesEndRef={messagesEndRef}
              />
            </div>

            {/* Input */}

            <div className="chat-input-wrapper">
              <ChatInput onSend={handleSend} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
