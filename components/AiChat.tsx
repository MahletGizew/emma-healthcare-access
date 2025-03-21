import Image from "next/image";
import Link from "next/link";
import React from "react";

const AiChat = () => {
  return (
    <Link
      href={"/assistance"}
      className="fixed bottom-6 right-6 px-3 py-1.5 rounded-lg bg-[#AD6E9D] text-white flex items-center gap-2 cursor-pointer"
    >
      <Image src="/icons/ai-white.svg" alt="lock" width={18} height={18} />
      <span className="text-sm">Emma Assistance</span>
    </Link>
  );
};

export default AiChat;
