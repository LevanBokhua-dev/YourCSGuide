import React from "react";

interface BlogContent {
  title: string;
  content: string;
}

const blogPosts: Record<string, BlogContent> = {
  "top-fields": {
    title: "Top 5 Fields to Explore in Computer Science",
    content: "Detailed content for Top Fields...",
  },
  "ai-future": {
    title: "How AI Is Shaping the Future",
    content: "Content on how AI is transforming the world...",
  },
  "cybersecurity-basics": {
    title: "Cybersecurity Basics Every Developer Should Know",
    content: "Cybersecurity must-knows for developers...",
  },
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) return <div>Article not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-7">{post.content}</p>
    </div>
  );
}
