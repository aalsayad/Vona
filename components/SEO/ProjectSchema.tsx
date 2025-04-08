"use client";

import Script from "next/script";
import { Project } from "@/types";

interface ProjectSchemaProps {
  project: Project;
}

export default function ProjectSchema({ project }: ProjectSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description:
      project.description || `${project.title} - A creative project by Vona`,
    creator: {
      "@type": "Organization",
      name: "Vona Creative Agency",
      url: "https://www.vona.agency",
    },
    url: `https://www.vona.agency/project/${project.slug}`,
    image: project.images?.[0] ? project.images[0].src : undefined,
    keywords: project.tags?.map((tag) => tag.title).join(", "),
    genre: project.tags?.[0]?.title || "Design",
  };

  return (
    <Script id="project-schema" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
