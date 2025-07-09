"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface BlogBoxProps {
  TitleText: string;
  Description: string;
  HeadlineText: string;
  HeadlineColor: string;
  slug: string;
}

const truncate = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength) + "…" : text;

const BlogBoxes = ({
  TitleText,
  Description,
  HeadlineText,
  HeadlineColor,
  slug,
}: BlogBoxProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blog/${slug}`)}
      className="sm:flex sm:flex-col justify-between cursor-pointer p-6 rounded-xl shadow-lg bg-white transition hover:shadow-xl w-full max-w-[320px] sm:max-w-sm"
    >
      <div
        className={`px-4 py-1 rounded-full text-white text-sm font-bold  ${HeadlineColor}`}
      >
        {HeadlineText}
      </div>
      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {truncate(TitleText, 20)}
      </h2>
      <p className="mt-2 text-gray-500">{truncate(Description, 30)}</p>
      <p className="mt-4 text-blue-600 font-semibold">Read more →</p>
    </div>
  );
};

export default BlogBoxes;
