import React from "react";
import BlogBoxes from "@/components/landing/BlogBoxes";

const BlogHeadlines = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full lg:max-w-[900px] sm:max-w-[700px] xs:max-w-[500px] max-w-[320px]">
        <div className="flex justify-center">
          <div className="w-full lg:max-w-[900px] sm:max-w-[700px] xs:max-w-[500px] max-w-[320px] relative inline-block border-2 border-dashed border-blue-300 p-4 rounded-md text-center ">
            {/* Corner plus signs */}
            <div className="absolute top-[-16px] left-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>
            <div className="absolute top-[-16px] right-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>
            <div className="absolute bottom-[-16px] left-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>
            <div className="absolute bottom-[-16px] right-[-6px] text-blue-400 text-xl font-bold">
              +
            </div>

            <div className=" lg:text-4xl sm:text-3xl xs:text-2xl text-lg font-bold text-gray-900">
              ბოლოდროინდელი ბლოგები
            </div>
          </div>
        </div>

        <div className="xs:flex justify-between mt-10 gap-2 ">
          <div>
            <BlogBoxes
              TitleText="ტოპ 5 სფერო, რომელიც უნდა გამოიკვლიო კომპიუტერულ მეცნიერებაში"
              Description="ფიქრობ საიდან დაიწყო? ეს გიდი დაგეხმარება აღმოაჩინო ყველაზე საინტერესო დარგები თანამედროვე სტუდენტებისთვის."
              HeadlineText="Getting Started"
              HeadlineColor="bg-[#50A2FF]"
              slug="top-fields"
            />
          </div>
          <div className="xs:block hidden">
            <BlogBoxes
              TitleText="როგორ ცვლის ხელოვნური ინტელექტი მომავალს"
              Description="სიღრმისეული გადახედვა იმაზე, თუ როგორ აყალიბებს AI ჩვენს მომავალს."
              HeadlineText="AI & ML"
              HeadlineColor="bg-[#50A2FF]"
              slug="ai-future"
            />
          </div>
          <div className="sm:block hidden">
            <BlogBoxes
              TitleText="კიბერ უსაფრთხოების საფუძვლები, რაც უნდა იცოდეს ყოველმა დეველოპერმა"
              Description="დაიცავი თავი და others უსაფრთხოების აუცილებელი ცნებების ცოდნით."
              HeadlineText="Cybersecurity"
              HeadlineColor="bg-[#50A2FF]"
              slug="cybersecurity-basics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeadlines;
