import React from "react";

export interface Talent {
  firstName: string;
  lastName: string;
  introduction: string;
  experience: string;
  skills: string[];
  email: string;
}

interface TalentCardProps {
  talent: Talent;
}

export default function TalentCard({ talent }: TalentCardProps) {
  const { firstName, lastName, introduction, experience, skills, email } =
    talent;

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold">
        {firstName} {lastName}
      </h3>
      <p className="text-sm text-gray-600 font-bold mt-1">მოკლე ინფორმაცია:</p>
      <p className="text-sm text-gray-600 mt-1">{introduction}</p>
      <p className="text-sm text-gray-600 font-bold mt-1">გამოცდილება:</p>
      <p className="text-sm mt-2 text-gray-500">{experience}</p>
      <p className="text-sm mt-2 text-gray-700">
        უნარები: <span className="text-gray-800">{skills?.join(" | ")}</span>
      </p>
      <p className="text-sm text-blue-600 mt-2 underline">{email}</p>
    </div>
  );
}
