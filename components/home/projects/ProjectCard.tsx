import { SubService } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubServiceItem from "../hero/SubServiceItem";
import { StaticImageData } from "next/image";
import Button from "@/components/Button";
import { cn } from "@/Utils/cn";
import VisitProjectButton from "./VisitProjectButton";

type projectProps = {
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  id: string;
  title: string;
  description: string;
  tags: SubService[];
  images: StaticImageData[];
  slug: string;
};

const ProjectCard = ({
  index,
  activeIndex,
  setActiveIndex,
  id,
  tags,
  title,
  description,
  images,
  slug,
}: projectProps) => {
  return (
    <Link scroll={false} href={`/project/${slug}`}>
      <div
        key={id}
        className={cn(
          "border-b-[1px] border-foreground/10 py-[32px] md:py-[40px] cursor-pointer transition-opacity duration-300 ease-in-out",
          activeIndex === index ? "opacity-100" : "opacity-30",
          activeIndex === null && "opacity-100"
        )}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div className="flex flex-col md:flex-row">
          {/* Project Info */}
          <div className=" flex flex-col w-full md:w-[45%] md:min-w-[45%]">
            {/* Project Header */}
            <div className="flex md:flex-col flex-row-reverse items-end md:items-start justify-end">
              {/* Tags */}
              <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-4 md:max-w-[80%] lg:max-w-full opacity-60 lg:mb-[64px] md:mb-[40px] md:ml-0 ml-[16px]">
                {tags.map((tag, index) => (
                  <SubServiceItem key={index} subService={tag} size="sm" />
                ))}
              </div>

              {/* Project Title */}
              <div className="flex flex-col items-start md:flex-row md:items-end gap-2">
                <div className="text-[9px] lg:text-xs text-accent opacity-80 flex items-center gap-0.5">
                  <span>[{id}</span>
                  <div className="inline-block">/</div>
                  <span>0{tags.length + 1}]</span>
                </div>
                <h3 className="text-[22px] lg:text-[26px] font-medium leading-[0.9]">
                  {title}
                </h3>
              </div>
            </div>

            {/* Project Description */}
            <p className="mt-[12px] text-[12px] md:text-[13px] lg:text-[14px] leading-[1.2] lg:leading-[1.3] max-w-[60%] md:max-w-[70%] lg:max-w-[55%] opacity-80">
              {description}
            </p>

            {/* Visit Project Button */}
            <div className="mt-[24px]">
              <VisitProjectButton active={activeIndex === index} />
            </div>
          </div>

          {/* Project Images */}
          <div className="w-full flex gap-[8px] mt-[40px] md:mt-0">
            {images.map((image, index) => (
              <div key={index} className=" w-full">
                <Image
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
