import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import SubServiceItem from "../hero/SubServiceItem";

const ProjectsSection = () => {
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
        {projects.map((project) => (
          //Project Card
          <div
            key={project.id}
            className="border-b-[1px] border-foreground/10 py-[32px] md:py-[40px]"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project Info */}
              <div className=" flex flex-col w-full md:w-[45%] md:min-w-[45%]">
                {/* Project Header */}
                <div className="flex md:flex-col flex-row-reverse items-end md:items-start justify-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-4 md:max-w-[80%] lg:max-w-full opacity-60 lg:mb-[64px] md:mb-[40px] md:ml-0 ml-[16px]">
                    {project.tags.map((tag, index) => (
                      <SubServiceItem key={index} subService={tag} size="sm" />
                    ))}
                  </div>

                  {/* Project Title */}
                  <div className="flex flex-col items-start md:flex-row md:items-end gap-2">
                    <div className="text-[9px] lg:text-xs text-accent opacity-80 flex items-center gap-0.5">
                      <span>[{project.id}</span>
                      <div className="inline-block">/</div>
                      <span>0{project.tags.length + 1}]</span>
                    </div>
                    <h3 className="text-[22px] lg:text-[26px] font-medium leading-[0.9]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Description */}
                <p className="mt-[12px] text-[12px] md:text-[13px] lg:text-[14px] font-light leading-[1.2] lg:leading-[1.3] max-w-[60%] md:max-w-[70%] lg:max-w-[55%] opacity-80">
                  {project.description}
                </p>
              </div>

              {/* Project Images */}
              <div className="max-w-full lg:w-2/3 flex gap-[8px] mt-[40px] md:mt-0">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden ${
                      index === 0 ? "col-span-1 md:col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} image ${index + 1}`}
                      className="w-full h-auto object-cover"
                      placeholder="blur"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
