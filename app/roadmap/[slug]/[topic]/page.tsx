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
  return <div>{specificTopic.title}</div>;
}
