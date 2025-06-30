import { notFound } from "next/navigation";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "Join TechNova to build responsive user interfaces using React, Tailwind CSS, and TypeScript. Collaborate with designers and backend engineers to create smooth user experiences.",
    company: "TechNova",
    location: "Remote",
    tag: "VIP",
    slug: "technova-frontend-developer",
    email: "careers@technova.com",
  },
  {
    title: "AI Research Engineer",
    description:
      "Work on cutting-edge AI technologies at NeuroWorks. Develop and train deep learning models for natural language processing and computer vision applications.",
    company: "NeuroWorks",
    location: "Berlin, Germany",
    tag: "Boosted",
    slug: "neuroworks-frontend-developer",
    email: "jobs@neuroworks.ai",
  },
  {
    title: "Cybersecurity Analyst",
    description:
      "Monitor and respond to threats, run penetration tests, and help secure enterprise infrastructure. Ideal for those passionate about digital security.",
    company: "SecureNet",
    location: "New York, USA",
    tag: "VIP",
    slug: "securenet-frontend-developer",
    email: "security@securenet.com",
  },
  {
    title: "DevOps Engineer",
    description:
      "Automate CI/CD pipelines, manage cloud infrastructure (AWS/GCP), and support development operations for scalable deployments.",
    company: "CloudBase",
    location: "London, UK",
    tag: "",
    slug: "cloudbase-frontend-developer",
    email: "hiring@cloudbase.dev",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive and elegant interfaces for web and mobile apps. Collaborate with engineers to bring wireframes to life with pixel-perfect accuracy.",
    company: "DesignHub",
    location: "Amsterdam, Netherlands",
    tag: "",
    slug: "designhub-frontend-developer",
    email: "design@designhub.studio",
  },
  {
    title: "Backend Developer",
    description:
      "Create robust APIs and backend systems using Node.js, PostgreSQL, and RESTful principles. Ensure scalability and performance under high load.",
    company: "ServerCore",
    location: "Toronto, Canada",
    tag: "",
    slug: "servercore-frontend-developer",
    email: "backend@servercore.io",
  },
  {
    title: "ML Engineer",
    description:
      "Design and deploy machine learning models into production. Experience with Python, TensorFlow, and real-time inference systems required.",
    company: "DataMorph",
    location: "Remote",
    tag: "Boosted",
    slug: "datamorph-frontend-developer",
    email: "ml@datamorph.tech",
  },
];

export default function JobDetail({ params }: { params: { slug: string } }) {
  const job = jobs.find((j) => j.slug === params.slug);

  if (!job) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="text-sm text-gray-500 mb-2">{job.tag}</div>
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <div className="text-gray-700 mb-1">{job.company}</div>
      <div className="text-gray-500 mb-1">{job.location}</div>
      <p className="text-gray-800 mb-4">{job.description}</p>
      <div className="text-sm text-blue-700">
        Contact:{" "}
        <a href={`mailto:${job.email}`} className="underline">
          {job.email}
        </a>
      </div>
    </div>
  );
}
