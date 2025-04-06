"use client";
import { Project } from "@/types";
import Image from "next/image";
import ProjectPageHero from "./ProjectPageHero";
import ProjectMedia from "./ProjectMedia";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import NextProject from "./NextProject";
export default function ProjectDisplay({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  useScrollToTop();
  return (
    <>
      <ProjectPageHero project={project} />
      <ProjectMedia project={project} />
      <NextProject project={nextProject} />
    </>
  );
}
