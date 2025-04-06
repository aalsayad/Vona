import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDisplay from "@/components/project/ProjectDisplay";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params }: Props) {
  // Use async/await pattern with server components
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDisplay project={project} />;
}
