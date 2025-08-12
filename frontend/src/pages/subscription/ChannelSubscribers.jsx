import React from "react";
import { FaUsers } from "react-icons/fa";

const ChannelSubscribers = () => {
  return (
  <>
    <div className="flex  flex-col gap-5 items-center justify-center w-full h-screen bg-slate-200">
      <div className="md:text-8xl text-5xl mb-5 italic">ToTal Subscribers</div>
      <div className="md:text-8xl text-5xl font-bold flex items-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
        <FaUsers className="text-green-500" />
        <span className=" text-green-400">999</span>
      </div>
    </div>
  </>
  );
};

export default ChannelSubscribers;
