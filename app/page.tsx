import Explore from "@/app/components/landing/Explore";
import BlogHeadlines from "@/app/components/landing/BlogHeadlines";
import Image from "next/image";
import React from "react";
import JobDisplay from "@/app/components/jobs/jobDisplay";

export default function Home() {
  return (
    <div
      className="relative
    "
    >
      <div className="absolute right-0 top-[-50px] z-[-10]">
        <Image
          src="/assets/CSGuide_Background_Transparent.png"
          alt="transparent background"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <Explore />
      <BlogHeadlines />
      <JobDisplay />
    </div>
  );
}
