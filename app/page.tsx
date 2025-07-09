import Explore from "@/components/landing/Explore";
import BlogHeadlines from "@/components/landing/BlogHeadlines";
import Image from "next/image";
import React from "react";
import JobDisplay from "@/components/jobs/jobDisplay";
import LatestTalents from "@/components/talents/LatestTalents";

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
      <LatestTalents />
    </div>
  );
}
