"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Chatbox = () => {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );

  const handleUserMessage = async (userMessage: string) => {
    const newMessages = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    console.log("messages", messages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.response;
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", text: aiResponse },
        ]);
      } else {
        console.error("Error fetching response from the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto p-4 bg-white ">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2 max-h-[500px] hide-scrollbar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                message.role === "user"
                  ? "bg-[#53a4ec] text-white"
                  : "bg-[#EEEEEE] text-black"
              } p-3 rounded-lg max-w-[80%] break-words`}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      {/* Input box for user message */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Ask me something..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#53a4ec]"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value) {
              handleUserMessage(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chatbox;
