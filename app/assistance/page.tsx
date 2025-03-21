import Chatbox from "@/components/ChatBox";
import React from "react";

const page = () => {
  return (
    <div className="p-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold text-[#AD6E9D] mb-2">
        Welcome Dear
      </h1>
      <p className="text-lg text-gray-600 mb-4 text-center">
        I'm Emma's AI Assistance. How can i help you?
      </p>
      <Chatbox />
    </div>
  );
};

export default page;
