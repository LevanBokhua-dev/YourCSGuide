import { notFound } from "next/navigation";
import { getJobById } from "@/services/jobs";

export default async function JobDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = parseInt(slug.split("-")[0]);
  if (isNaN(id)) return notFound();

  try {
    const job = await getJobById(id);

    return (
      <div className="mt-10 max-w-3xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            ვაკანსიის აღწერა
          </span>
          <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-lg font-medium text-gray-700">
              {job.companyName}
            </span>
            <span className="text-md text-green-600 font-semibold">
              ₾ {job.salaryRange}
            </span>
          </div>

          <p className="text-gray-700 text-base leading-relaxed">
            {job.description}
          </p>

          <div className="text-sm text-gray-500 mt-4">
            დაგვიკავშირდით:{" "}
            <a
              href={`mailto:${job.companyEmail}`}
              className="text-blue-600 underline font-medium"
            >
              {job.companyEmail}
            </a>
          </div>
        </div>
      </div>
    );
  } catch {
    return notFound();
  }
}
