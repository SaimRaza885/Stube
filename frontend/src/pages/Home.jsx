// HomePage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar_logo from "../components/Avatar_logo";

export default function HomePage() {
  const [videos, setVideos] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  useEffect(() => {
    // Replace with your actual GET API endpoint to fetch videos
    axios.get("http://localhost:5000/api/v1/videos").then((res) => {
      setVideos(res.data?.data || []);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4 cursor-pointer">
         <RxHamburgerMenu className="text-[24px]"/>
        </div>

        <div className="flex items-center justify-between w-full max-w-xl pl-4  rounded-r-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-xl border-none outline-0"
          />
          <button className="p-2 px-4 bg-blue-500 dark:bg-blue-700 rounded-r-lg">
            <FaSearch className="text-white" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full flex gap-1 cursor-pointer ">
            <span>Create</span>
            <IoMdAddCircle size={24} />
          </button>
          <FaUserCircle size={28} className="text-gray-700 dark:text-white cursor-pointer" />
        </div>
      </header>

      {/* Video Grid */}
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos?.map((video, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img
              src={video.thumbnailUrl || "https://i.ytimg.com/vi/UeXo9mX0q-M/maxresdefault.jpg"}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-lg truncate">{video.title || "Benten download"}  </h3>
              <div className="flex items-center gap-2">

              <Avatar_logo image={"https://www.gstatic.com/youtube/img/creator/yt_studio_logo_v2_darkmode.svg"}/>
              <h4 className="opacity-40">{"TMIUC"}</h4>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
