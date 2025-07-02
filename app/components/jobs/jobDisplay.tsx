import React from "react";
import JobBoxes from "@/app/components/jobs/jobBoxes";
import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    tag: "VIP",
    slug: "technova-frontend-developer",
  },
  {
    title: "AI Research Engineer",
    company: "NeuroWorks",
    location: "Berlin, Germany",
    tag: "Boosted",
    slug: "neuroworks-frontend-developer",
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "New York, USA",
    tag: "VIP",
    slug: "securenet-frontend-developer",
  },
  {
    title: "Backend Developer",
    company: "SecureNet",
    location: "New York, USA",
    tag: "VIP",
    slug: "securenet-frontend-developer",
  },
];

export default function JobDisplay() {
  return (
    <div className="flex justify-center gap-4 mt-10 pb-10">
      <div className="flex flex-col items-center gap-4 w-[900px]">
        <div className="text-4xl font-bold text-gray-900 text-center">
          ვაკანსიები
        </div>
        <div className="flex sm:flex-row flex-col w-[360px] sm:w-full sm:max-w-[700px] lg:max-w-[900px] justify-between mt-4 gap-4">
          {jobs.map((job, index) => (
            <JobBoxes
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              tag={job.tag}
              slug={job.slug}
            />
          ))}
        </div>
        <div>
          <Link href="/jobs">
            <button className="px-7 py-2.5 bg-gray-100 text-gray-800  text-base font-semibold  rounded-full hover:bg-gray-200 transition duration-200 mt-5">
              ყველა ვაკანსიის ნახვა
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
