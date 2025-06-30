// ❌ DO NOT include "use client" here — this is a Server Component

import { notFound } from "next/navigation";
import { topics } from "@/app/roadmap/topics";
import Roadmap from "@/app/components/roadmap/roadmap";
import TopicHeader from "@/app/components/roadmap/topicHeader";
import type { Step } from "@/app/roadmap/topics";

interface TopicPageProps {
  params: { slug: string };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = topics[params.slug];

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
