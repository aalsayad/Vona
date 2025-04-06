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
  params: { slug: string };
}) {
  // Use async/await pattern with server components
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDisplay project={project} />;
}
