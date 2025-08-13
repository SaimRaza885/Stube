// HomePage.jsx
import { useEffect, useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Video_Box from "../components/Video_Box";
import Sidebar from "../components/SideBar"; 
import { Images } from "../assets/data";
import UserDropdown from "../components/User_DropDown";

export default function HomePage() {
  const [videos, setVideos] = useState([
    {
      Channel: "TMIUC",
      thumbnail: Images.dunmmy_CoverImage,
      logo: Images.dunmmy_Logo,
      title: "this is testing"
    },
  ]);

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("i am on home page");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          

          <div className="flex items-center justify-between w-full max-w-xl pl-4 rounded-r-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xl border-none outline-0 bg-transparent"
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
          <UserDropdown/>
          </div>
        </header>

        {/* User Name (Debug) */}
        <div className="text-9xl">{user.name}</div>

        {/* Video Grid */}
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos?.map((video, i) => (
            <Video_Box
              key={i}
              ChannelName={video.Channel}
              logoImageUrl={video.logo}
              thumbnailUrl={video.thumbnail}
              title={video.title}
              username={"saoim"}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
