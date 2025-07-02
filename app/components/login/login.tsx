// components/LoginBox.tsx
"use client";
import React from "react";
import { useLoginForm } from "@/app/components/login/custom-hooks/useLoginForm";

const LoginBox = () => {
  const { formData, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className="flex items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-10 py-8 sm:shadow-2xl z-10 text-xl font-semibold rounded-2xl items-center gap-y-6 bg-white w-full max-w-md"
      >
        <div className="text-3xl font-bold text-center text-gray-800 mb-2">
          ანგარიშში შესვლა
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-600">ელ ფოსტა</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border  text-smborder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-600">პაროლი</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300 mt-2"
        >
          შესვლა
        </button>

        <p className="text-sm text-gray-600 mt-2">
          არ გაქვს ანგარიში?{" "}
          <a
            href="/registration"
            className="text-blue-600 hover:underline font-medium"
          >
            დარეგისტრირდი
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginBox;
