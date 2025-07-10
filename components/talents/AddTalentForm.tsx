"use client";

import React, { useState } from "react";
import { createTalentProfile } from "@/services/profiles";
import { useRouter } from "next/navigation";

export default function AddTalentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    introduction: "",
    experience: "",
    skills: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.firstName,
      surname: formData.lastName,
      description: formData.introduction,
      experience: formData.experience,
      skills: formData.skills.split(",").map((s) => s.trim()),
      email: formData.email,
    };

    try {
      await createTalentProfile(payload);
      setFormData({
        firstName: "",
        lastName: "",
        introduction: "",
        experience: "",
        skills: "",
        email: "",
      });
      router.push("/add-as-talent");
    } catch (error) {
      alert("Failed to submit profile");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-lg border">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        📝 დაამატე შენი პროფილი
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Lastname */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              სახელი
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              required
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              გვარი
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              required
            />
          </div>
        </div>

        {/* Introduction */}
        <div>
          <label
            htmlFor="introduction"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            შენი თავის მოკლე აღწერა
          </label>
          <textarea
            id="introduction"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label
            htmlFor="experience"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            გამოცდილება
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            required
          />
        </div>

        {/* Skills */}
        <div>
          <label
            htmlFor="skills"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            უნარ-ჩვევები (მძიმით გამოყოფილი)
          </label>
          <input
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            ელ.ფოსტა
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition shadow-md"
          >
            დამატება
          </button>
        </div>
      </form>
    </div>
  );
}
