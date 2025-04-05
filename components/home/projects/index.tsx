"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import SubServiceItem from "../hero/SubServiceItem";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <>
      <div className="w-full p-[16px] md:p-[32px] lg:p-[40px] ">
        {/* Projects Header */}
        <div className="w-full flex items-end justify-between md:justify-start pb-[16px] lg:pb-[24px] border-b-[1px] border-foreground/10">
          <div className="w-fit md:w-[45%]">
            <h2 className="font-merchant leading-[0.5] text-[26px] md:text-[32px] lg:text-[40px] font-extralight">
              Selected works
            </h2>
          </div>
          <div>
            <p className="opacity-90 text-[11px] md:text-[13.5px] lg:text-[14px] font-light">
              A selection of brands we've shaped
            </p>
          </div>
        </div>

        {/* Projects List */}
        {projects.map((project, index) => (
          //Project Card
          <ProjectCard
            index={index}
            key={project.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            images={project.images}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
