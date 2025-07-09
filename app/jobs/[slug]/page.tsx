import { notFound } from "next/navigation";
import { getJobById } from "@/app/services/jobs";

export default async function JobDetail({
  params,
}: {
  params: { slug: string };
}) {
  const id = parseInt(params.slug.split("-")[0]);
  if (isNaN(id)) return notFound();

  const job = await getJobById(id);
  if (!job) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="text-sm text-gray-500 mb-2">{job.description}</div>
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <div className="text-gray-700 mb-1">{job.companyName}</div>
      <div className="text-gray-500 mb-1">{job.salaryRange}</div>
      <p className="text-gray-800 mb-4">{job.description}</p>
      <div className="text-sm text-blue-700">
        Contact:{" "}
        <a href={`mailto:${job.companyEmail}`} className="underline">
          {job.companyEmail}
        </a>
      </div>
    </div>
  );
}
