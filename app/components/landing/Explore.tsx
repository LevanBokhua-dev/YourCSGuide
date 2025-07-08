import React from "react";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import FieldRectangles from "@/app/components/landing/FieldRectangles";

export const fieldData = [
  {
    slug: "web-development",
    icon: <GlobeAltIcon className="w-12 h-12 text-white" />,
    heading: "ვებ დაპროგრამება",
    description: "ისწავლე პრაქტიკული გზით ვებსაიტების შექმნა და განვითარება",
    backgroundColor: "bg-[#3B82F6]", // Blue
  },
  {
    slug: "artificial-intelligence",
    icon: <ShieldCheckIcon className="w-12 h-12 text-white" />,
    heading: "ხელოვნური ინტელექტი და მანქანური სწავლება",
    description: "გაიგე როგორ ფიქრობენ და სწავლობენ მანქანები",
    backgroundColor: "bg-[#8B5CF6]", // Violet
  },
  {
    slug: "cybersecurity",
    icon: <CpuChipIcon className="w-12 h-12 text-white" />,
    heading: "კიბერუსაფრთხოება",
    description: "შეისწავლე როგორ დავიცვათ სისტემები და ქსელები",
    backgroundColor: "bg-[#EF4444]", // Red
  },
  {
    slug: "algorithms-data-structures",
    icon: <CpuChipIcon className="w-12 h-12 text-white" />,
    heading: "ალგორითმები და მონაცემთა სტრუქტურები",
    description: "გაიმარტივე ლოგიკა აპლიკაციების უკან",
    backgroundColor: "bg-[#F59E0B]", // Amber
  },
  {
    slug: "databases",
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
    heading: "მონაცემთა ბაზები",
    description: "ისწავლე მონაცემების ეფექტურად შენახვა და მართვა",
    backgroundColor: "bg-[#10B981]", // Emerald green
  },
  {
    slug: "mobile-development",
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
    heading: "მობილური დაპროგრამება",
    description: "შექმენი ძლიერი აპლიკაციები Android-სა და iOS-სთვის",
    backgroundColor: "bg-[#EC4899]", // Pink
  },
  {
    slug: "computer-architecture",
    icon: <ServerIcon className="w-12 h-12 text-white" />,
    heading: "კომპიუტერის არქიტექტურა და საოპერაციო სისტემები",
    description: "გაიგე როგორ მუშაობს კომპიუტერი შიგნიდან",
    backgroundColor: "bg-[#F97316]", // Orange
  },
  {
    slug: "theory-of-computation",
    icon: <AcademicCapIcon className="w-12 h-12 text-white" />,
    heading: "გამოთვლადობის თეორია",
    description: "რა შეგვიძლია გავთვალოთ და რამდენად სწრაფად?",
    backgroundColor: "bg-[#0EA5E9]", // Sky blue
  },
  {
    slug: "software-engineering",
    icon: <WrenchScrewdriverIcon className="w-12 h-12 text-white" />,
    heading: "პროგრამული ინჟინერია",
    description: "ისწავლე მასშტაბური პროგრამების შექმნის სტრატეგიები",
    backgroundColor: "bg-[#22D3EE]", // Cyan
  },
  {
    slug: "hci",
    icon: <UserGroupIcon className="w-12 h-12 text-white" />,
    heading: "ადამიანი-კომპიუტერის ინტერაქცია (HCI)",
    description: "UX დიზაინი, ინტერფეისები და მომხმარებლის გამოცდილება",
    backgroundColor: "bg-[#A855F7]", // Purple
  },
];

const Explore = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="z-10 p-10 flex items-center flex-col gap-4 justify-center">
        <div className="relative text-center w-[300px] xs:w-[440px] sm:w-[600px] lg:w-[900px] border-2 border-dashed bg-[#EAF8FF] border-blue-300 p-6 rounded-md">
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

          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold">
            იპოვნე შენი გზა კომპიუტერულ მეცნიერებებში
          </h1>
          <p className="mt-4 text-gray-600">
            რომელი სფერო არის შენთვის საინტერესო ?
          </p>
        </div>

        <div className="flex items-center flex-col sm:flex-row sm:flex-wrap gap-2 mt-10 lg:w-[900px] sm:w-[600px] xs:w-[440px] w-[320px]">
          {fieldData.map((field, index) => (
            <div
              key={index}
              className="lg:w-[calc((100%-16px)/2)] sm:w-[calc((100%-16px)/2)] w-[calc((100%-16px))]"
            >
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
