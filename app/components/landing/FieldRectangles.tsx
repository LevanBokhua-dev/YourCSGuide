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
      className={`relative cursor-pointer flex gap-3 p-6 lg:h-24 sm:h-32 items-center text-white ${backgroundColor} transition hover:opacity-90 border-2 border-dashed border-white rounded-md`}
    >
      <div className="absolute top-[-10px] left-[-10px] text-white text-lg font-bold">
        +
      </div>
      <div className="absolute top-[-10px] right-[-10px] text-white text-lg font-bold">
        +
      </div>
      <div className="absolute bottom-[-10px] left-[-10px] text-white text-lg font-bold">
        +
      </div>
      <div className="absolute bottom-[-10px] right-[-10px] text-white text-lg font-bold">
        +
      </div>

      <div>{icon}</div>
      <div className="flex flex-col gap-2">
        <div className="text-lg leading-5 font-bold">{heading}</div>
        <div className="text-sm leading-4">{description}</div>
      </div>
    </div>
  );
};

export default FieldRectangles;
