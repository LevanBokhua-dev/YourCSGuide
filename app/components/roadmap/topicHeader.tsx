import { LucideIcon } from "lucide-react";
import React from "react";

interface TopicHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({
  title,
  description,
  icon: Icon,
  color = "bg-purple-500",
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div
        className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center`}
      >
        <Icon className="text-white w-6 h-6" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-500 text-sm max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default TopicHeader;
