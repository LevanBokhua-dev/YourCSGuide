"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface FieldRectanglesProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
  backgroundColor: string;
  slug: string;
}

const FieldRectangles = ({
  icon,
  heading,
  description,
  backgroundColor,
  slug,
}: FieldRectanglesProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/roadmap/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex gap-3 rounded-2xl p-6 h-24 items-center text-white ${backgroundColor} transition hover:opacity-90`}
    >
      <div>{icon}</div>
      <div className="flex flex-col gap-2">
        <div className="text-lg leading-5 font-bold">{heading}</div>
        <div className="text-sm leading-4">{description}</div>
      </div>
    </div>
  );
};

export default FieldRectangles;
