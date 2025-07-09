import TalentCard from "@/components/talents/TalentCard";
import { getAllTalents } from "@/services/profiles";

export default async function TalentPage() {
  const profiles = await getAllTalents();

  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">
        ხელმისაწვდომი ტალანტები
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((p, index) => {
          const talent = {
            firstName: p.name,
            lastName: p.surname,
            introduction: p.description,
            experience: p.experience,
            skills: p.skills,
            email: p.email,
          };

          return <TalentCard key={index} talent={talent} />;
        })}
      </div>
    </div>
  );
}
