import Link from "next/link";
import React, { JSX } from "react";
import talents from "@/app/talents/data/talents";
import TalentCard from "@/app/components/talents/TalentCard";

export default function LatestTalents(): JSX.Element {
  const latest = talents.slice(0, 4);

  return (
    <div className="w-full py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">ახალი ტალანტები</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latest.map((talent, index) => (
            <TalentCard key={index} talent={talent} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/talents"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ნახე ყველა ტალანტი
          </Link>
        </div>
      </div>
    </div>
  );
}
