import React from "react";
import BlogBoxes from "@/app/components/landing/BlogBoxes";

const BlogHeadlines = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full lg:max-w-[900px] sm:max-w-[700px] xs:max-w-[500px] max-w-[320px]">
        <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg font-bold text-gray-900 text-center ">
          ბოლოდროინდელი ბლოგები
        </div>

        <div className="xs:flex justify-between mt-10 gap-2 ">
          <div>
            <BlogBoxes
              TitleText="ტოპ 5 სფერო, რომელიც უნდა გამოიკვლიო კომპიუტერულ მეცნიერებაში"
              Description="ფიქრობ საიდან დაიწყო? ეს გიდი დაგეხმარება აღმოაჩინო ყველაზე საინტერესო დარგები თანამედროვე სტუდენტებისთვის."
              HeadlineText="Getting Started"
              HeadlineColor="bg-[#3E4DF1]"
              slug="top-fields"
            />
          </div>
          <div className="xs:block hidden">
            <BlogBoxes
              TitleText="როგორ ცვლის ხელოვნური ინტელექტი მომავალს"
              Description="სიღრმისეული გადახედვა იმაზე, თუ როგორ აყალიბებს AI ჩვენს მომავალს."
              HeadlineText="AI & ML"
              HeadlineColor="bg-[#5940CF]"
              slug="ai-future"
            />
          </div>
          <div className="sm:block hidden">
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
    </div>
  );
};

export default BlogHeadlines;
