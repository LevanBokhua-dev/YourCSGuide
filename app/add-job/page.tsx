"use client";

import React, { useState } from "react";

const JobPostForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    salary: "",
    company: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Job:", form);
    // Here you'd send `form` to your backend API or Firebase
    alert("Job posted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3"
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary Range (e.g., $60k - $90k)"
          value={form.salary}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Company Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPostForm;
