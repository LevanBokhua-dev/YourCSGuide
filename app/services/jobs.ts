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
