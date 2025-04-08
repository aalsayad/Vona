import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDisplay from "@/components/project/ProjectDisplay";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Add dynamic metadata generation for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Vona",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Vona Creative Agency`,
    description:
      project.description ||
      `${project.title} - A creative project by Vona, a leading agency in Riyadh specializing in branding, web design, and development.`,
    keywords: `${project.title}, ${project.tags?.join(", ")}, Vona, creative agency Riyadh`,
    openGraph: {
      title: `${project.title} | Vona`,
      description:
        project.description || `${project.title} - A creative project by Vona`,
      type: "article",
    },
    alternates: {
      canonical: `/project/${slug}`,
    },
  };
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
