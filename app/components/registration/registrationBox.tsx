"use client";
import React from "react";
import { useRegistrationForm } from "@/app/components/registration/custom-hooks/useRegistration";

const RegistrationBox = () => {
  const { formData, handleChange, handleSubmit } = useRegistrationForm();

  return (
    <div className="flex items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-10 py-8 shadow-2xl z-10 text-xl font-semibold rounded-2xl items-center gap-y-6 bg-white w-full max-w-md"
      >
        <div className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Your Account
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-600">Full Name</label>
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
          <label className="text-sm text-gray-600">Email Address</label>
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
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white  py-2 rounded-xl transition duration-300 mt-2"
        >
          Register
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationBox;
