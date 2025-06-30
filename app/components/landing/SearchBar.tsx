"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-4 px-4">
      <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-5 py-3 shadow-md hover:shadow-lg transition-all">
        <input
          type="text"
          placeholder="Search a field (e.g. Web Development, AI)..."
          className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent text-base"
        />
      </div>
    </div>
  );
};

export default SearchBar;
