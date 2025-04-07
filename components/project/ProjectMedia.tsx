import React from "react";
import { Project } from "@/types";
import Image from "next/image";
import AnimatedImage from "../animated/AnimatedImage";

const ProjectMedia = ({ project }: { project: Project }) => {
  // Function to determine column span based on image dimensions
  const getColSpan = (image: any) => {
    const { width, height } = image;
    const aspectRatio = width / height;

    // Wide images (close to 16:9 ratio)
    if (aspectRatio >= 1.6) {
      return "md:col-span-4";
    }
    // Square or slightly portrait images (close to 1:1 or 4:5 ratio)
    else if (aspectRatio >= 0.7) {
      return "md:col-span-2";
    }
    // Tall portrait images (close to 9:16 ratio)
    else {
      return "md:col-span-1";
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full col-span-1 ${getColSpan(
                image
              )} flex flex-col`}
            >
              {/* Only use AnimatedImage for first three images */}
              {index < 2 ? (
                <AnimatedImage
                  src={image}
                  alt={project.title}
                  className="w-full h-auto"
                  direction="down"
                  duration={1.5}
                  delay={0.2 * index + 0.3}
                />
              ) : (
                <Image
                  src={image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              )}

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
