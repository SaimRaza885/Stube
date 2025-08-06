import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  console.log("404 Page Rendered");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4">
      <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">404</h1>
      <p className="text-xl text-zinc-700 dark:text-zinc-200 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
