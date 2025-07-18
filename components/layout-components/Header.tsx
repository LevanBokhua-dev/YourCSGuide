"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStatus } from "@/shared/useAuthStatus";
import { authStore } from "@/shared/authStore";
import React from "react";

const Header = () => {
  const isLoggedIn = useAuthStatus();
  const router = useRouter();

  const handleLogout = () => {
    authStore.logout();
    router.push("/");
  };

  return (
    <div className="flex items-center justify-between w-full px-6 py-3 border-b border-gray-100 z-10">
      <div className="flex items-center gap-2 select-none cursor-pointer">
        <Image
          onClick={() => router.push("/")}
          src="/assets/YourCsGuide_Icon_Trimmed.png"
          alt="YourCSGuide"
          width={32}
          height={32}
        />
        <span
          className="text-lg font-bold tracking-tight text-gray-900 cursor-pointer select-none hover:text-blue-600 transition-all sm:block hidden"
          onClick={() => router.push("/")}
        >
          Your<span className="text-blue-600">CS</span>Guide
        </span>
      </div>

      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <React.Fragment>
            <nav className="flex gap-6 text-sm font-medium text-gray-900">
              <div
                className="hover:text-blue-600 transition cursor-pointer"
                onClick={() => router.push("/user")}
              >
                კაბინეტი
              </div>
            </nav>
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 bg-gray-100 text-sm font-medium text-gray-800 rounded-full hover:bg-gray-200 transition"
            >
              გამოსვლა
            </button>
          </React.Fragment>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-1.5 bg-gray-100 text-sm font-medium text-gray-800 rounded-full hover:bg-gray-200 transition"
          >
            შესვლა
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
