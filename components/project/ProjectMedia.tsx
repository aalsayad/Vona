import React from "react";
import { Project } from "@/types";
import Image from "next/image";

const ProjectMedia = ({ project }: { project: Project }) => {
  // Function to determine column span based on image dimensions
  const getColSpan = (image: any) => {
    const { width, height } = image;
    const aspectRatio = width / height;

    // Wide images (close to 16:9 ratio)
    if (aspectRatio >= 1.6) {
      return "col-span-4";
    }
    // Square or slightly portrait images (close to 1:1 or 4:5 ratio)
    else if (aspectRatio >= 0.7) {
      return "col-span-2";
    }
    // Tall portrait images (close to 9:16 ratio)
    else {
      return "col-span-1";
    }
  };

  // Function to extract clean filename from image src
  const getFileName = (image: any) => {
    const src = image.src;
    if (typeof src === "string") {
      const parts = src.split("/");
      const fullName = parts[parts.length - 1];

      // Match the pattern like carza-id.4f058154.webp to extract just carza-id.webp
      const match = fullName.match(/(.+?)\.[\da-f]+\.(.+)$/);
      if (match) {
        return `${match[1]}.${match[2]}`;
      }
      return fullName;
    }
    return "image";
  };

  return (
    <div className="w-full flex flex-col items-center p-[16px] md:p-[32px] lg:p-[40px] lg:pt-[80px]">
      <div className="w-full max-w-[1100px]">
        <div className="grid grid-cols-4 gap-[24px]">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full ${getColSpan(image)} flex flex-col`}
            >
              <Image
                src={image}
                alt={project.title}
                className="w-full h-auto"
              />
              <div className="text-accent text-[10px] md:text-[12px] lg:text-[13px] pt-[8px]">
                [{getFileName(image)}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMedia;
