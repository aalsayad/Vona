import { Project } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import VisitProjectButton from "../home/projects/VisitProjectButton";
import Link from "next/link";
import AnimatedSentence from "../animated/AnimatedSentence";
import AnimatedDivider from "../animated/AnimatedDivider";

const NextProject = ({ project }: { project: Project }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col items-center p-[16px] md:p-[32px] lg:p-[40px] pt-[80px]">
        <div className="w-full max-w-[1100px]">
          <div className="w-full flex flex-col gap-[16px] md:gap-[24px]">
            {/* Divider */}
            {/* <div className="w-full h-[1px] bg-foreground/10" /> */}
            <AnimatedDivider height={1} />
            {/* Title + Next PRoject Card */}
            <div className="w-full flex flex-col md:flex-row space-between items-start">
              {/* Title */}
              <AnimatedSentence
                text="Explore Next Project"
                direction="down"
                className="font-merchant leading-[1] text-[24px] lg:text-[32px] font-extralight w-full"
              />

              {/* Project */}
              <Link
                href={`/project/${project.slug}`}
                className="w-fit flex flex-col gap-[8px] lg:gap-[16px] max-w-full md:mt-0 mt-[32px] md:max-w-[50%] lg:max-w-[350px] cursor-pointer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {/* Project Thumbnail */}
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="w-full h-[250px] object-cover"
                />

                {/* Project Details */}
                <div className="space-y-[8px]">
                  {/* Project ID + Title + Visit Project Button */}
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-[8px] items-end">
                      <div className="text-[9px] lg:text-xs text-accent opacity-80 flex items-center gap-0.5">
                        <span>[{project.id}</span>
                        <div className="inline-block">/</div>
                        <span>0{project.tags.length + 1}]</span>
                      </div>
                      <h3 className="text-[20px] lg:text-[24px] font-medium leading-[0.9]">
                        {project.title}
                      </h3>
                    </div>
                    {/* Visit Project Button */}
                    <VisitProjectButton active={hover} />
                  </div>
                  {/* Project Description */}
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[1.2] lg:leading-[1.3] opacity-80 max-w-[85%]">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextProject;
