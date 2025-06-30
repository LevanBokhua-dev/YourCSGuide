import React from "react";
import BlogBoxes from "@/app/components/landing/BlogBoxes";

const BlogHeadlines = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[900px]">
        <div className="text-4xl font-bold text-gray-900 text-center">
          ბოლოდროინდელი ბლოგები
        </div>

        <div className="flex justify-between mt-10 gap-2">
          <BlogBoxes
            TitleText="ტოპ 5 სფერო, რომელიც უნდა გამოიკვლიო კომპიუტერულ მეცნიერებაში"
            Description="ფიქრობ საიდან დაიწყო? ეს გიდი დაგეხმარება აღმოაჩინო ყველაზე საინტერესო დარგები თანამედროვე სტუდენტებისთვის."
            HeadlineText="Getting Started"
            HeadlineColor="bg-[#3E4DF1]"
            slug="top-fields"
          />
          <BlogBoxes
            TitleText="როგორ ცვლის ხელოვნური ინტელექტი მომავალს"
            Description="სიღრმისეული გადახედვა იმაზე, თუ როგორ აყალიბებს AI ჩვენს მომავალს."
            HeadlineText="AI & ML"
            HeadlineColor="bg-[#5940CF]"
            slug="ai-future"
          />
          <BlogBoxes
            TitleText="კიბერ უსაფრთხოების საფუძვლები, რაც უნდა იცოდეს ყოველმა დეველოპერმა"
            Description="დაიცავი თავი და others უსაფრთხოების აუცილებელი ცნებების ცოდნით."
            HeadlineText="Cybersecurity"
            HeadlineColor="bg-[#EC6A7E]"
            slug="cybersecurity-basics"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeadlines;
