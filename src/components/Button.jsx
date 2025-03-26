import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="px-6 bg-white border-black py-2 border-2 border-sky-800 text-sky-800 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-sky-800 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
