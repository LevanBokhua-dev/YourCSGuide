"use client";
import React from "react";
import { useRouter } from "next/router";

interface BlogBoxesProps {
  HeadlineText: string;
  TitleText: string;
  Description: string;
  HeadlineColor: string;
}

const BlogBoxes = ({
  HeadlineText,
  TitleText,
  Description,
  HeadlineColor,
}: BlogBoxesProps) => {
  return (
    <div className="relative flex flex-col justify-between  hover:border-gray-200 hover:scale-[1.02] gap-y-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow min-h-[220px] w-[240px]">
      {/* Headline Tag */}
      <div
        className={`absolute left-4 ${HeadlineColor} rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md`}
      >
        {HeadlineText}
      </div>

      {/* Title + Description */}
      <div className="flex flex-col gap-y-1 mt-10">
        <div className="text-lg font-semibold text-gray-900 leading-5">
          {TitleText}
        </div>
        <div className="text-sm leading-5 text-gray-500">{Description}</div>
      </div>

      {/* Call to Action */}
      <div className="text-sm font-medium text-blue-600 hover:underline mt-2">
        Read more →
      </div>
    </div>
  );
};

export default BlogBoxes;
