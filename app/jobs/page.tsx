"use client";

import React, { useState, useEffect } from "react";
import JobBoxes from "@/app/components/jobs/jobBoxes";
import { useRouter } from "next/navigation";
import { getJobs } from "@/app/services/jobs";
import { Job } from "@/app/jobs/types";

const AllJobsPage = () => {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchedJobs = await getJobs();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ნახე კარიერის შესაძლებლობები
        </h1>
        <p className="text-gray-600">ტექ შესაძლებლობები, ვაკანსიები</p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="მოძებნე სამუშაო..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleJobs.length > 0 ? (
            visibleJobs.map((job, index) => (
              <JobBoxes
                key={index}
                title={job.title}
                company={job.companyName}
                location={job.salaryRange}
                tag={job.description}
                slug={`${job.id}-${job.title.toLowerCase().replace(/\s+/g, "-")}`}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-sm">
              No jobs match your search.
            </div>
          )}
        </div>
      )}

      {!loading && visibleCount < filteredJobs.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
          >
            Load More
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto mt-20 bg-blue-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          ვერ პოულობ სასურველ სამუშაო ადგილს ?
        </h2>
        <p className="text-gray-700 mb-4">
          ატვირთე შენი რეზიუმე და კომპანიები დაგიკავშირდებიან.
        </p>
        <button
          onClick={() => router.push("/add-as-talent")}
          className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          რეზიუმის ატვირთვა
        </button>
      </div>
    </div>
  );
};

export default AllJobsPage;
