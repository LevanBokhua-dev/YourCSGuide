import React from "react";
import JobBoxes from "@/app/components/jobs/jobBoxes";
import Link from "next/link";
import { getJobs } from "@/app/services/jobs";
import type { Job } from "@/app/jobs/types";
export default async function JobDisplay() {
  const jobs = await getJobs();
  const latestJobs = jobs.slice(0, 4);

  return (
    <div className="flex justify-center gap-4 mt-10 pb-10">
      <div className="flex flex-col items-center gap-4 w-[900px]">
        <div className="flex justify-center mt-8">
          <div className="lg:w-[900px] sm:w-[700px] xs:w-[500px] w-[320px] relative inline-block border-2 border-dashed border-blue-300 p-4 rounded-md text-center bg-[#EAF8FF] ">
            <div className="absolute top-[-16px] left-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>
            <div className="absolute top-[-16px] right-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>
            <div className="absolute bottom-[-16px] left-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>
            <div className="absolute bottom-[-16px] right-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>

            <div className="text-4xl font-bold text-gray-900">ვაკანსიები</div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-[320px] sm:w-full sm:max-w-[700px] lg:max-w-[900px] justify-between mt-4 gap-4">
          {latestJobs.map((job: Job) => (
            <JobBoxes
              key={job.id}
              title={job.title}
              company={job.companyName}
              location={job.salaryRange}
              tag="ვაკანსია"
              slug={`${job.id}-${job.title.toLowerCase().replace(/\s+/g, "-")}`}
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
