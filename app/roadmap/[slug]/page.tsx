import { notFound } from "next/navigation";
import { topics } from "@/app/roadmap/topics";
import Roadmap from "@/components/roadmap/roadmap";
import TopicHeader from "@/components/roadmap/topicHeader";
import type { Step } from "@/app/roadmap/topics";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topics[slug];

  if (!topic) return notFound();

  return (
    <div className="px-6 md:px-20 py-12">
      <TopicHeader
        title={topic.title}
        description={topic.description}
        icon={topic.icon}
        color={topic.color}
      />
      <Roadmap steps={topic.roadmap as Step[]} />
    </div>
  );
}
