import TalentCard from "@/app/components/talents/TalentCard";
import talents from "@/app/talents/data/talents";

export default function TalentPage() {
  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">
        ხელმისაწვდომი ტალანტები
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {talents.map((talent, index) => (
          <TalentCard key={index} talent={talent} />
        ))}
      </div>
    </div>
  );
}
