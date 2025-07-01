"use client";

import React, { useState } from "react";

interface Talent {
  firstName: string;
  lastName: string;
  introduction: string;
  experience: string;
  skills: string[];
  email: string;
}

export default function AddTalentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    introduction: "",
    experience: "",
    skills: "",
    email: "",
  });

  const [submittedTalent, setSubmittedTalent] = useState<Talent | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTalent: Talent = {
      ...formData,
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    setSubmittedTalent(newTalent);
    setFormData({
      firstName: "",
      lastName: "",
      introduction: "",
      experience: "",
      skills: "",
      email: "",
    });
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

      {submittedTalent && (
        <div className="mt-10 bg-gray-50 p-6 rounded border">
          <h3 className="text-xl font-semibold mb-2">
            დამატებული ტალანტი: {submittedTalent.firstName}{" "}
            {submittedTalent.lastName}
          </h3>
          <p className="text-gray-700">{submittedTalent.introduction}</p>
          <p className="text-sm text-gray-500 mt-1">
            {submittedTalent.experience}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            უნარ-ჩვევები: {submittedTalent.skills.join(", ")}
          </p>
          <p className="text-sm mt-1 text-blue-600 underline">
            {submittedTalent.email}
          </p>
        </div>
      )}
    </div>
  );
}
