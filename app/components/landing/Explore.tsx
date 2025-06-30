import React from "react";
import SearchBar from "@/app/components/landing/SearchBar";
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
    heading: "Web Development",
    description: "Find on practical race to modern",
    backgroundColor: "bg-[#6156E5]",
  },
  {
    slug: "artificial-intelligence",
    icon: <ShieldCheckIcon className="w-12 h-12 text-white" />,
    heading: "Artificial Intelligence & Machine Learning",
    description: "Learn how machines think and learn",
    backgroundColor: "bg-[#5E51CD]",
  },
  {
    slug: "cybersecurity",
    icon: <CpuChipIcon className="w-12 h-12 text-white" />,
    heading: "Cybersecurity",
    description: "Explore secure systems and networks",
    backgroundColor: "bg-[#EF697C]",
  },
  {
    slug: "algorithms-data-structures",
    icon: <CpuChipIcon className="w-12 h-12 text-white" />,
    heading: "Algorithms & Data Structures",
    description: "Master the logic behind every app",
    backgroundColor: "bg-[#FFAD4F]",
  },
  {
    slug: "databases",
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
    heading: "Databases",
    description: "Connect, store and manage data efficiently",
    backgroundColor: "bg-[#34AAA3]",
  },
  {
    slug: "mobile-development",
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
    heading: "Mobile Development",
    description: "Create powerful apps for Android and iOS",
    backgroundColor: "bg-[#29C797]",
  },
];

const Explore = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="z-10 p-10 flex items-center flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Find your path in computer science
        </h1>
        <p className="mt-4 text-gray-600">
          This is where your roadmap or search functionality can live.
        </p>
        <SearchBar />
        <div className="flex flex-wrap gap-2 mt-10 w-[750px]">
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
