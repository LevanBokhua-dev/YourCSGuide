"use client";
import React from "react";
import { useRegistrationForm } from "@/app/components/registration/custom-hooks/useRegistration";

const RegistrationBox = () => {
  const { formData, handleChange, handleSubmit, handleRoleSelect } =
    useRegistrationForm();

  return (
    <div className="flex items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-10 py-8 sm:shadow-2xl z-10 text-xl font-semibold rounded-2xl items-center gap-y-6 bg-white w-full max-w-md"
      >
        <div className="text-3xl font-bold text-center text-gray-800 mb-2">
          შექმენი ანგარიში
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-600">სრული სახელი</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-600">ელ ფოსტა</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="w-full">
          <label className="text-sm text-gray-600 mb-2 block">
            რეგისტრაცია როგორც
          </label>
          <div className="flex gap-4">
            <div
              onClick={() => handleRoleSelect("talent")}
              className={`flex-1 cursor-pointer p-4 border rounded-lg text-center ${
                formData.role === "talent"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">🧑‍💻</div>
              <div className="text-sm font-medium">ტალანტი</div>
            </div>

            <div
              onClick={() => handleRoleSelect("company")}
              className={`flex-1 cursor-pointer p-4 border rounded-lg text-center ${
                formData.role === "company"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">🏢</div>
              <div className="text-sm font-medium">კომპანია</div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white  py-2 rounded-xl transition duration-300 mt-2"
        >
          რეგისტრაცია
        </button>
        <p className="text-sm text-gray-600 mt-2">
          უკვე გაქვს ანგარიში?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            შესვლა
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationBox;
