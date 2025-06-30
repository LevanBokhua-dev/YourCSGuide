import React from "react";

interface JobBoxProps {
  title: string;
  company: string;
  location: string;
  tag?: string;
}

const JobBox: React.FC<JobBoxProps> = ({ title, company, location, tag }) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-2xl border border-gray-200 shadow-sm">
      <div className="bg-yellow-400 rounded-lg text-white px-3 py-1 text-xs font-bold w-fit">
        {tag || "Standard"}
      </div>
      <div className="text-lg font-semibold text-black">{title}</div>
      <div className="text-sm text-gray-600">{company}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
  );
};

export default JobBox;
