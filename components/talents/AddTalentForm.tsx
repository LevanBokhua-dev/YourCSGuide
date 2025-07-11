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

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    introduction: "",
    experience: "",
    skills: "",
    email: "",
  });

  const validate = () => {
    const newErrors = {
      firstName:
        formData.firstName.trim().length < 2 ? "მინიმუმ 2 სიმბოლოა საჭირო" : "",
      lastName:
        formData.lastName.trim().length < 2 ? "მინიმუმ 2 სიმბოლოა საჭირო" : "",
      introduction:
        formData.introduction.trim().length < 10
          ? "მინიმუმ 10 სიმბოლოა საჭირო"
          : "",
      experience:
        formData.experience.trim().length < 10
          ? "მინიმუმ 10 სიმბოლოა საჭირო"
          : "",
      skills: formData.skills.trim() === "" ? "უნდა მიუთითოთ უნარები" : "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "არასწორი ელ.ფოსტის ფორმატი"
        : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      console.warn("Validation failed", errors);
      return;
    }

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
      router.push("/talents");
    } catch (error) {
      console.error("Submission failed", error);
      alert("დაფიქსირდა შეცდომა პროფილის დამატებისას");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-lg border">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        📝 დაამატე შენი პროფილი
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First and Last Name */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* First Name */}
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
              className="border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
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
              className="border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Introduction */}
        <div>
          <label
            htmlFor="introduction"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            საკუთარი თავის მოკლე აღწერა
          </label>
          <textarea
            id="introduction"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.introduction && (
            <p className="text-sm text-red-500 mt-1">{errors.introduction}</p>
          )}
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.experience && (
            <p className="text-sm text-red-500 mt-1">{errors.experience}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label
            htmlFor="skills"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            უნარ-ჩვევები (გამოყავი მძიმით)
          </label>
          <input
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.skills && (
            <p className="text-sm text-red-500 mt-1">{errors.skills}</p>
          )}
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

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
