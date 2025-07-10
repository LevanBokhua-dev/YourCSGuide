"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { postJob } from "@/services/jobs";

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
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
        💼 დაამატე ახალი ვაკანსია
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="ვაკანსიის სათაური"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="description"
          placeholder="ვაკანსიის აღწერა"
          rows={4}
          value={form.description}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="ხელფასის დიაპაზონი (მაგ. $60k - $90k)"
          value={form.salary}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="კომპანიის სახელი"
          value={form.company}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ელ.ფოსტა"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-3 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          დამატება
        </button>
      </form>
    </div>
  );
};

export default JobPostForm;
