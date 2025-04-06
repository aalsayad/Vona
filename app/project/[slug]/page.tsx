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

  // Find the current project index
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  // Get the next project (or loop back to the first if it's the last project)
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return <ProjectDisplay project={project} nextProject={nextProject} />;
}
