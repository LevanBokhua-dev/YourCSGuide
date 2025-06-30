import React from "react";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import FieldRectangles from "@/app/components/landing/FieldRectangles";

const fieldData = [
  {
    slug: "web-development",
    icon: <GlobeAltIcon className="w-12 h-12 text-white" />,
    heading: "ვებ დაპროგრამება",
    description: "ისწავლე პრაქტიკული გზით ვებსაიტების შექმნა და განვითარება",
    backgroundColor: "bg-[#6156E5]",
  },
  {
    slug: "artificial-intelligence",
    icon: <ShieldCheckIcon className="w-12 h-12 text-white" />,
    heading: "ხელოვნური ინტელექტი და მანქანური სწავლება",
    description: "გაიგე როგორ ფიქრობენ და სწავლობენ მანქანები",
    backgroundColor: "bg-[#5E51CD]",
  },
  {
    slug: "cybersecurity",
    icon: <CpuChipIcon className="w-12 h-12 text-white" />,
    heading: "კიბერუსაფრთხოება",
    description: "შეისწავლე როგორ დავიცვათ სისტემები და ქსელები",
    backgroundColor: "bg-[#EF697C]",
  },
  {
    slug: "algorithms-data-structures",
    icon: <CpuChipIcon className="w-12 h-12 text-white" />,
    heading: "ალგორითმები და მონაცემთა სტრუქტურები",
    description: "გაიმარტივე ლოგიკა აპლიკაციების უკან",
    backgroundColor: "bg-[#FFAD4F]",
  },
  {
    slug: "databases",
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
    heading: "მონაცემთა ბაზები",
    description: "ისწავლე მონაცემების ეფექტურად შენახვა და მართვა",
    backgroundColor: "bg-[#34AAA3]",
  },
  {
    slug: "mobile-development",
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
    heading: "მობილური დაპროგრამება",
    description: "შექმენი ძლიერი აპლიკაციები Android-სა და iOS-სთვის",
    backgroundColor: "bg-[#29C797]",
  },
];

const Explore = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="z-10 p-10 flex items-center flex-col gap-4">
        <h1 className="text-4xl font-bold">
          იპოვნე შენი გზა კომპიუტერულ მეცნიერებებში
        </h1>
        <p className="mt-4 text-gray-600">
          რომელი სფერო არის შენთვის საინტერესო ?
        </p>
        <div className="flex flex-wrap gap-2 mt-10 w-[900px]">
          {fieldData.map((field, index) => (
            <div key={index} className="w-[calc((100%-16px)/2)]">
              <FieldRectangles
                icon={field.icon}
                heading={field.heading}
                description={field.description}
                backgroundColor={field.backgroundColor}
                slug={field.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
