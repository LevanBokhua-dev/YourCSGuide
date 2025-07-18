export const postJob = async (jobData: {
  title: string;
  description: string;
  salaryRange: string;
  companyName: string;
  companyEmail: string;
}) => {
  const res = await fetch("http://localhost:8080/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });

  if (!res.ok) {
    throw new Error("Failed to post job");
  }

  return res.json();
};
export const getJobs = async () => {
  const res = await fetch("http://localhost:8080/api/jobs");

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();
  return data.content;
};
export async function getJobById(id: number) {
  try {
    const res = await fetch(`http://localhost:8080/api/jobs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Job with ID ${id} not found`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch job:", error);
    return null;
  }
}
