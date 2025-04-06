import { Project } from "@/types";
import Image from "next/image";
import ProjectPageHero from "./ProjectPageHero";
import ProjectMedia from "./ProjectMedia";

export default function ProjectDisplay({ project }: { project: Project }) {
  return (
    <>
      <ProjectPageHero project={project} />
      <ProjectMedia project={project} />
    </>
  );
}
