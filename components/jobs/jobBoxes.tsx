"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface JobBoxProps {
  title: string;
  company: string;
  location: string;
  tag: string;
  slug: string;
}

const JobBoxes = ({ title, company, location, tag, slug }: JobBoxProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/jobs/${slug}`)}
      className="flex flex-col justify-between items-center m-auto gap-2 p-4 rounded-2xl border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition h-40 w-[250px]"
    >
      <div
        className={`bg-blue-300 rounded-lg text-white px-3 py-1 text-xs font-bold w-fit`}
      >
        {tag || "Normal"}
      </div>
      <div className="text-lg font-semibold text-black">{title}</div>
      <div className="text-sm text-gray-600">{company}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
  );
};

export default JobBoxes;
