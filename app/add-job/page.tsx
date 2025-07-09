"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { postJob } from "@/app/services/jobs";

const JobPostForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    salary: "",
    company: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.role !== "COMPANY") {
      router.replace("/unauthorized");
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postJob({
        title: form.title,
        description: form.description,
        salaryRange: form.salary,
        companyName: form.company,
        companyEmail: form.email,
      });
      router.push("/jobs");
    } catch (err) {
      console.error(err);
      alert("Error posting job");
    }
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
