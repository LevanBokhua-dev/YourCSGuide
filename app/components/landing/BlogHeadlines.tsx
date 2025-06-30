import React from "react";
import BlogBoxes from "@/app/components/landing/BlogBoxes";

const BlogHeadlines = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[750px]">
        <div className="text-4xl font-bold text-gray-900 text-center">
          Latest Articles
        </div>

        <div className="flex justify-between mt-10 flex-wrap gap-2">
          <BlogBoxes
            TitleText="Top 5 Fields to Explore in Computer Science"
            Description="Wondering where to start? Here's breakdown of the most exciting domains for modern learners."
            HeadlineText="Getting Started"
            HeadlineColor="bg-[#3E4DF1]"
          />
          <BlogBoxes
            TitleText="How AI Is Shaping the Future"
            Description="A deep dive into how Aritificial Intelligence is changing the world."
            HeadlineText="AI & ML"
            HeadlineColor="bg-[#5940CF]"
          />
          <BlogBoxes
            TitleText="Cybersecurity Basics Every Developer Should Know"
            Description="Stay safe and build secure systems with these must-know cybersecurity concepts."
            HeadlineText="Cybersecurity"
            HeadlineColor="bg-[#EC6A7E]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeadlines;
