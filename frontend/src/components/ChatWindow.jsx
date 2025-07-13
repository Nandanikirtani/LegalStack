import React, { useState, useEffect, useRef } from "react";
import { FaBalanceScale, FaRobot } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSend = () => {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();
    if (message) {
      setMessages((prev) => [
        ...prev,
        { text: message, sender: "user" },
        {
          text: "Sorry, I am not available right now.Try again later.Sorry for the inconvenience .",
          sender: "bot",
        }, // Dummy bot reply
      ]);
      input.value = "";
    }
  };

  const chatOptions = [
    {
      label: "📄 Get Legal Document Templates",
      response:
        "Great! Please choose the type of legal document you need a template for. Some options include Rent Agreement, NDA, Employment Contract, and Partnership Agreement.",
    },
    {
      label: "🧠 Ask a Legal Question",
      response:
        "Sure! Please type your legal question. I’ll do my best to provide a helpful response based on general legal knowledge.",
    },
    {
      label: "🔍 Search Legal Clauses",
      response:
        "Please enter the clause or legal term you're looking for (e.g., 'Force Majeure', 'Termination Clause'), and I’ll fetch details for you.",
    },
    {
      label: "✍️ Draft a Custom Agreement",
      response:
        "Let's draft a custom agreement. Please start by telling me the type of agreement (e.g., Rent Agreement, NDA), and I'll guide you through the process step by step.",
    },
    {
      label: "📂 Upload & Analyze a Legal Document",
      response:
        "Please upload the PDF of the legal document you want to analyze. I’ll extract the content and help you understand or edit specific parts of it.",
    },
    {
      label: "📌 Understand Legal Terms",
      response:
        "Enter the legal term you'd like to understand, and I’ll provide a simple explanation with examples if needed.",
    },
    {
      label: "💬 Talk to a Legal Expert (Simulated)",
      response:
        "You're now connected to our AI legal assistant. Feel free to ask about legal processes, document requirements, or any concerns you have.",
    },
    {
      label: "📅 Set a Reminder for Contract Renewal",
      response:
        "Please share the contract name and its expiration date. I’ll help you set a reminder for timely renewal.",
    },
  ];

  return (
    <div className="border w-full h-[80vh] flex flex-col bg-[#0f172a] text-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-600">
        <FaBalanceScale className="text-yellow-500 text-4xl" />
        <div>
          <h1 className="text-2xl font-bold">Legal AI Assistant</h1>
          <p className="text-gray-400 text-sm">
            Ask any legal question or upload documents for analysis
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* Bot message layout */}
            {msg.sender === "bot" ? (
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                <div className="text-yellow-500 text-2xl">
                  <FaRobot />
                </div>
                <div className="p-3 rounded-lg max-w-[80%] bg-gray-800 text-white">
                  {msg.text}
                </div>
                </div>
                {msg.text.toLowerCase().includes("how can i help") && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {chatOptions.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMessages((prev) => [
                            ...prev,
                            { sender: "user", text: opt.label },
                            { sender: "bot", text: opt.response },
                          ]);
                        }}
                        className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // User message layout
              <div className="p-3 rounded-lg max-w-[80%] bg-green-600 text-white">
                {msg.text}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 border-t border-gray-600 p-4">
        <input
          id="messageInput"
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md bg-gray-700 text-white outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="bg-green-500 p-3 text-xl rounded-xl cursor-pointer"
          onClick={handleSend}
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
