"use client";
import React, { useState } from "react";
import JobBoxes from "@/app/components/jobs/jobBoxes";

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    tag: "VIP",
  },
  {
    title: "AI Research Engineer",
    company: "NeuroWorks",
    location: "Berlin, Germany",
    tag: "Boosted",
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "New York, USA",
    tag: "VIP",
  },
  {
    title: "DevOps Engineer",
    company: "CloudBase",
    location: "London, UK",
    tag: "",
  },
  {
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Amsterdam, Netherlands",
    tag: "",
  },
  {
    title: "Backend Developer",
    company: "ServerCore",
    location: "Toronto, Canada",
    tag: "",
  },
  {
    title: "ML Engineer",
    company: "DataMorph",
    location: "Remote",
    tag: "Boosted",
  },
];

const AllJobsPage = () => {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Explore Career Opportunities
        </h1>
        <p className="text-gray-600">
          Curated tech jobs tailored for learners, devs, and explorers.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleJobs.length > 0 ? (
          visibleJobs.map((job, index) => (
            <JobBoxes
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              tag={job.tag}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-sm">
            No jobs match your search.
          </div>
        )}
      </div>

      {/* Load More */}
      {visibleCount < filteredJobs.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-20 bg-blue-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Can't find your dream job?
        </h2>
        <p className="text-gray-700 mb-4">
          Upload your resume and let top companies reach out to you directly.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Upload Resume
        </button>
      </div>
    </div>
  );
};

export default AllJobsPage;
