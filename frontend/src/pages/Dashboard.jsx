import React from "react";
import { FaEye, FaHeart, FaVideo, FaUsers } from "react-icons/fa";
import Video_Box from "../components/Video_Box";
import { Images } from "../assets/data";

const Dashboard = () => {
  return (
    <div className="mx-7 px-4 p-3">
      {/* Title */}
      <h2 className="lg:text-8xl md:text-7xl text-5xl text-center font-extrabold drop-shadow-lg">
        Dashboard
      </h2>

      <div className="py-10">
        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="lg:text-5xl text-3xl font-bold mb-6">Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-4">
            {/* Views */}
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <FaEye className="text-4xl text-blue-400 drop-shadow" />
              <h4 className="text-2xl">
                Total Views:{" "}
                <span className="font-bold text-blue-300">90K</span>
              </h4>
            </div>

            {/* Likes */}
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <FaHeart className="text-4xl text-pink-400 drop-shadow" />
              <h4 className="text-2xl">
                Total Likes: <span className="font-bold text-pink-300">9K</span>
              </h4>
            </div>

            {/* Total Videos */}
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <FaVideo className="text-4xl text-green-400 drop-shadow" />
              <h4 className="text-2xl">
                Total Videos:{" "}
                <span className="font-bold text-green-300">120</span>
              </h4>
            </div>

            {/* Total Subscribers */}
            <div className="flex items-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-4xl text-yellow-400 drop-shadow" />
              <h4 className="text-2xl">
                Total Subs:{" "}
                <span className="font-bold text-yellow-300">15K</span>
              </h4>
            </div>
          </div>
        </div>

        {/* Uploaded Videos */}
        <div className="pt-10">
          <h2 className="lg:text-5xl text-3xl font-bold mb-4">
            Uploaded Videos
          </h2>
          <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Video_Box
              ChannelName={"TMIUC"}
              logoImageUrl={Images.dunmmy_Logo}
              thumbnailUrl={Images.dunmmy_CoverImage}
              title={"this is good"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
