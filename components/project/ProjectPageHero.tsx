import { Project } from "@/types";
import React from "react";
import SubServiceItem from "../home/hero/SubServiceItem";
import { projects } from "@/data/projects";
import AnimatedSentence from "../animated/AnimatedSentence";
import AnimatedDivider from "../animated/AnimatedDivider";
import AnimatedBlock from "../animated/AnimatedBlock";

const ProjectPageHero = ({ project }: { project: Project }) => {
  return (
    <div className="w-full flex flex-col items-center p-[16px] md:p-[32px] lg:p-[40px] lg:pt-[80px]">
      <div className="max-w-[1100px] w-full pt-[96px] lg:pt-[160px] pb-[40px]">
        {/* Project Header Number */}
        <AnimatedBlock direction="up">
          <div className="w-full flex items-center justify-end text-[10px] md:text-[11px] lg:text-[12px] text-accent">
            [{project.id} / 0{projects.length}]
          </div>
        </AnimatedBlock>
        {/* Divider */}
        {/* <div className="w-full h-[1px] bg-foreground/10 my-[16px] mb-[24px]" /> */}
        <div className="h-[1px] w-full my-[16px] mb-[32px]">
          <AnimatedDivider height={1} />
        </div>
        {/* Project Description */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-[40px] lg:gap-[80px]">
          {/* Project Subtitle */}
          {/* <h1 className="text-[32px] w-[90%] md:text-[40px] font-extralight md:w-[50%] lg:w-[40%] leading-[1.2] font-merchant">
            {project.subtitle}
          </h1> */}
          <AnimatedSentence
            text={project.subtitle}
            direction="down"
            className="text-[32px] w-[90%] md:text-[40px] font-extralight md:w-[50%] lg:w-[40%] leading-[1.2] font-merchant"
          />
          {/* Project Details */}
          <div className="w-[60%] md:w-[40%] lg:w-[30%]  text-[13px] lg:text-[14px] font-thin leading-[1.3] space-y-[24px] md:space-y-[48px]">
            {/* Project Description */}
            <div>
              <div className="mb-[4px] md:mb-[8px] font-medium lg:text-[16px]">
                <AnimatedBlock direction="down">
                  <p>About {project.title}</p>
                </AnimatedBlock>
                {/* About {project.title} */}
              </div>
              <div className="opacity-80">
                <AnimatedBlock direction="down">
                  <p>{project.description}</p>
                </AnimatedBlock>
              </div>
            </div>
            {/* Project Tags */}
            <div>
              <div className="projectpage-description-title mb-[8px] lg:text-[16px] font-medium">
                <AnimatedBlock direction="down">Project Scope</AnimatedBlock>
              </div>
              <div className="gap-[8px] lg:gap-[12px] flex flex-wrap">
                {project.tags.map((tag, index) => (
                  <AnimatedBlock
                    key={index}
                    direction="down"
                    delay={0.1 * index}
                  >
                    <SubServiceItem subService={tag} />
                  </AnimatedBlock>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageHero;
