import React from "react";
import JobBoxes from "@/app/components/jobs/jobBoxes";
import Link from "next/link";

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
];

export default function JobDisplay() {
  return (
    <div className="flex justify-center gap-4 mt-10 pb-10">
      <div className="flex flex-col items-center gap-4 w-[750px]">
        <div className="text-4xl font-bold text-gray-900 text-center">
          Featured Job Opportunities
        </div>
        <div className="flex flex-wrap max-w-[750px] justify-between w-full mt-4">
          {jobs.map((job, index) => (
            <JobBoxes
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              tag={job.tag}
            />
          ))}
        </div>
        <div>
          <Link href="/jobs">
            <button className="px-7 py-2.5 bg-gray-100 text-gray-800  text-base font-semibold  rounded-full hover:bg-gray-200 transition duration-200 mt-5">
              View All Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
