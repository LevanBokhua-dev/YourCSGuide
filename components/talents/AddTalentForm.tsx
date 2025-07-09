"use client";

import React, { useState } from "react";
import { createTalentProfile } from "@/services/profiles";

export default function AddTalentForm() {
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
    } catch (error) {
      alert("Failed to submit profile");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">დამატე შენი პროფილი</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            name="firstName"
            placeholder="სახელი"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 border px-4 py-2 rounded"
            required
          />
          <input
            name="lastName"
            placeholder="გვარი"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 border px-4 py-2 rounded"
            required
          />
        </div>
        <textarea
          name="introduction"
          placeholder="შენი თავის მოკლე აღწერა"
          value={formData.introduction}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="experience"
          placeholder="გამოცდილება"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="skills"
          placeholder="უნარ-ჩვევები (დაშორებული მძიმით)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="email"
          placeholder="ელ.ფოსტა"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
          type="email"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          დამატება
        </button>
      </form>
    </div>
  );
}
