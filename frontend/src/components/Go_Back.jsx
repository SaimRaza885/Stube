import React from "react";
import { Link } from "react-router-dom";

const Go_Back = () => {
  return (
    <Link to={"/"} className="">
      <button className=" cursor-pointer  rounded-md text-white max-w-24 p-4 bg-slate-900 shadow-2xl transition-all duration-200 hover:scale-110">
        &larr; Home
      </button>
    </Link>
  );
};

export default Go_Back;
