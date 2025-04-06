import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDisplay from "@/components/project/ProjectDisplay";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Since params is now a Promise in Next.js 15, we need to await it
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDisplay project={project} />;
}
