// Sidebar.jsx
import { useState } from "react";
import {
  FaHome,
  FaFire,
  FaPlayCircle,
  FaHistory,
  FaDashcube,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`${
        isOpen ? "w-60 " : "w-16"
      } bg-white  dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen p-4 transition-all duration-300`}
    >
      {/* Hamburger */}
      <div
        className="flex items-center space-x-4 cursor-pointer mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu className="text-[24px]" />
        {isOpen && <span className="font-semibold">Menu</span>}
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <Link to={"/"}>
          <div className="flex mb-1 items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            <FaHome size={20} />
            {isOpen && <span>Home</span>}
          </div>
        </Link>
        {/* Playlists */}
  <Link to={"/playlist/create"}>
    <div className="flex mb-1 items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
      <FaPlayCircle size={20} />
      {isOpen && <span>Playlists</span>}
    </div>
  </Link>

  {/* Subscribers */}
  <Link to={"/subscriptions/subscribers/u/:subscriberId"}>
    <div className="flex mb-1 items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
      <FaUsers size={20} />
      {isOpen && <span>Subscribers</span>}
    </div>
  </Link>

  {/* Subscribed Channels */}
  <Link to={"subscriptions/subscribed/c/:channelId"}>
    <div className="flex mb-1 items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
      <FaUserCheck size={20} />
      {isOpen && <span>Subscribed Channels</span>}
    </div>
  </Link>
        <Link to={"/playlist/create"} >
          <div className="flex mb-1 items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            <FaPlayCircle size={20} />
            {isOpen && <span>Playlists</span>}
          </div>
        </Link>

        <Link to={"/users/history"}>
          <div className="flex mb-1 items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            <FaHistory size={20} />
            {isOpen && <span>History</span>}
          </div>
        </Link>
      </nav>
    </aside>
  );
}
