import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItems = [
    { path: "/users/dashboard", label: "Dashboard" },
    { path: "/users/current-user", label: "Profile" },
    { path: "/users/update-account", label: "Update Account" },
    { path: "/users/avatar", label: "Change Avatar" },
    { path: "/users/cover-image", label: "Change Cover" },
    { path: "/users/change-password", label: "Change Password" },
    { path: "/users/history", label: "Watch History" },
    { path: "/users/logout", label: "Logout" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Icon */}
      <FaUserCircle
        size={28}
        className="text-gray-700 dark:text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <ul className="py-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
