import Link from "next/link";
import TalentCard from "@/components/talents/TalentCard";
import { getLatestTalents } from "@/services/profiles";

export default async function LatestTalents() {
  const talents = await getLatestTalents(2);
  const talentsOne = await getLatestTalents(1);
  const talentsThree = await getLatestTalents(3);

  return (
    <div className="w-full py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">ახალი ტალანტები</h2>
        <div className="sm:hidden lg:flex sm:justify-center sm:items-center sm:gap-6 hidden">
          {talentsThree.map((talentDTO, index) => {
            const transformedTalent = {
              firstName: talentDTO.name,
              lastName: talentDTO.surname,
              introduction: talentDTO.description,
              experience: talentDTO.experience,
              skills: talentDTO.skills,
              email: talentDTO.email,
            };

            return <TalentCard key={index} talent={transformedTalent} />;
          })}
        </div>
        <div className="sm:flex lg:hidden sm:justify-center sm:items-center sm:gap-6 hidden">
          {talents.map((talentDTO, index) => {
            const transformedTalent = {
              firstName: talentDTO.name,
              lastName: talentDTO.surname,
              introduction: talentDTO.description,
              experience: talentDTO.experience,
              skills: talentDTO.skills,
              email: talentDTO.email,
            };

            return <TalentCard key={index} talent={transformedTalent} />;
          })}
        </div>
        <div className="flex justify-center items-center gap-6 sm:hidden">
          {talentsOne.map((talentDTO, index) => {
            const transformedTalent = {
              firstName: talentDTO.name,
              lastName: talentDTO.surname,
              introduction: talentDTO.description,
              experience: talentDTO.experience,
              skills: talentDTO.skills,
              email: talentDTO.email,
            };

            return <TalentCard key={index} talent={transformedTalent} />;
          })}
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
