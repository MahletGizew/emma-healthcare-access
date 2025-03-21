'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}

interface Doctor {
  id: number;
  name: string;
  hospital: string;
  lastMessage: string;
}

const ConsultationPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("Dr. Meseret");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Dr. Meseret",
      content: "Hello! How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Meseret",
      hospital: "Tirunesh Beijing Hospital",
      lastMessage: "Hello! How can I help you today?",
    },
    {
      id: 2,
      name: "Dr. Abeba",
      hospital: "Tulu Dimtu Health Center",
      lastMessage: "Take care and let me know if you need anything else.",
    },
    {
      id: 3,
      name: "Dr. Tsion",
      hospital: "Gelan Health Center",
      lastMessage: "I'll be available tomorrow morning.",
    },
    {
      id: 4,
      name: "Dr. Derartu",
      hospital: "Sirti Health Center",
      lastMessage: "Your test results look normal.",
    },
    {
      id: 5,
      name: "Dr. Felekech",
      hospital: "Tirunesh Beijing Hospital",
      lastMessage: "Remember to take your medication regularly.",
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          content: message,
          timestamp: new Date(),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-100 mt-16">
      {/* Left Sidebar - Chat List */}
      <div className="w-80 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-4 border-b border-[#AD6E9D]/20 bg-[#AD6E9D]">
          <h2 className="text-xl font-semibold text-white">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-129px)]">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedDoctor === doctor.name ? "bg-[#AD6E9D]/10" : ""
              }`}
              onClick={() => setSelectedDoctor(doctor.name)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#AD6E9D] flex items-center justify-center text-white font-semibold">
                  {doctor.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-[#AD6E9D] font-semibold">{doctor.name}</div>
                  <div className="text-xs text-gray-500">{doctor.hospital}</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1 truncate pl-[52px]">
                {doctor.lastMessage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#AD6E9D] flex items-center justify-center text-white font-semibold">
              {selectedDoctor.charAt(0)}
            </div>
            <div>
              <h2 className="font-semibold text-lg">{selectedDoctor}</h2>
              <p className="text-xs text-gray-500">
                {doctors.find(d => d.name === selectedDoctor)?.hospital}
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender !== "You" && (
                <div className="w-8 h-8 rounded-full bg-[#AD6E9D] flex items-center justify-center text-white font-semibold mr-2 self-end">
                  {msg.sender.charAt(0)}
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-2xl p-4 ${
                  msg.sender === "You"
                    ? "bg-[#AD6E9D] text-white rounded-tr-none"
                    : "bg-white shadow-sm rounded-tl-none"
                }`}
              >
                <p>{msg.content}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === "You" ? "text-white/80" : "text-gray-400"
                }`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {msg.sender === "You" && (
                <div className="w-8 h-8 rounded-full bg-[#AD6E9D] flex items-center justify-center text-white font-semibold ml-2 self-end">
                  Y
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 shadow-sm">
          <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-full border border-gray-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent p-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#AD6E9D] text-white px-6 py-2 rounded-full hover:bg-[#AD6E9D]/90 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage; 