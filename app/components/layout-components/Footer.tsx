"use client";
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xl font-semibold text-gray-900">
              <Image
                onClick={() => (window.location.href = "/")}
                src="/assets/YourCsGuide_Icon_Trimmed.png"
                alt="YourCSGuide"
                width={32}
                height={32}
              />
              YourCSGuide
            </div>
            <div className="text-sm text-gray-800 font-semibold">About</div>
            <a href="/about" className="text-sm text-gray-600 hover:underline">
              About
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-800 font-semibold">Courses</div>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Web Development
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Data Science
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Mobile Development
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-800 font-semibold">Resources</div>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Blog
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              FAQs
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Contact
            </a>
          </div>
        </div>

        <div className="flex md:justify-end items-start gap-4">
          <a
            href="#"
            aria-label="Twitter"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 YourCSGuide. All rights reserved.
      </div>
    </footer>
  );
}
