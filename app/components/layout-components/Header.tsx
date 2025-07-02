"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-3 border-b border-gray-100 z-10">
      <div className="flex items-center gap-2 select-none cursor-pointer">
        <Image
          onClick={() => (window.location.href = "/")}
          src="/assets/YourCsGuide_Icon_Trimmed.png"
          alt="YourCSGuide"
          width={32}
          height={32}
        />
        <span
          className="text-lg font-bold tracking-tight text-gray-900 cursor-pointer select-none hover:text-blue-600 transition-all sm:block hidden"
          onClick={() => (window.location.href = "/")}
        >
          Your<span className="text-blue-600">CS</span>Guide
        </span>
      </div>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6 text-sm font-medium text-gray-900">
          <div className="hover:text-blue-600 transition">ჩვენს შესახებ</div>
        </nav>
        <button
          className="px-4 py-1.5 bg-gray-100 text-sm font-medium text-gray-800 rounded-full hover:bg-gray-200 transition"
          onClick={() => (window.location.href = "/login")}
        >
          შესვლა
        </button>
      </div>
    </div>
  );
};

export default Header;
