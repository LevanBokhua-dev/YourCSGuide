import { topics } from "@/app/roadmap/topics";
import { notFound } from "next/navigation";

export default async function StepPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = await params;
  const specificTopic = topics[slug].roadmap[topic];

  if (!specificTopic) return notFound();
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start max-w-6xl mx-auto px-6 py-12">
      {/* Text section */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {specificTopic.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line text-justify">
          {specificTopic.bigDescription}
        </p>
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
          🎥 ვიდეო
        </h2>
        <div className="w-full rounded-xl overflow-hidden shadow-lg h-[260px]">
          <iframe
            src={specificTopic.youtubeSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
