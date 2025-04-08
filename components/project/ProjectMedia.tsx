import React from "react";
import { Project } from "@/types";
import Image from "next/image";
import AnimatedMedia from "../animated/AnimatedMedia";

const ProjectMedia = ({ project }: { project: Project }) => {
  // Function to determine column span based on media dimensions
  const getColSpan = (media: any) => {
    // For string sources (videos), default to a 2-column span
    if (typeof media.src === "string" && !media.src.width) {
      return "md:col-span-2";
    }

    try {
      const { width, height } = media.src;
      const aspectRatio = width / height;

      if (aspectRatio >= 1.6) return "md:col-span-4";
      else if (aspectRatio >= 0.7) return "md:col-span-2";
      else return "md:col-span-1";
    } catch (e) {
      // Fallback if dimensions can't be determined
      return "md:col-span-2";
    }
  };

  // Function to extract clean filename from media source
  const getFileName = (media: any) => {
    const source = media.src;

    // Handle string paths (videos)
    if (typeof source === "string") {
      const parts = source.split("/");
      return parts[parts.length - 1];
    }

    // Handle imported images
    if (source && typeof source.src === "string") {
      const parts = source.src.split("/");
      const fullName = parts[parts.length - 1];

      const match = fullName.match(/(.+?)\.[\da-f]+\.(.+)$/);
      if (match) return `${match[1]}.${match[2]}`;
      return fullName;
    }

    return "media";
  };

  // Function to determine if media is video (string path) or image (import)
  const isVideo = (media: any): boolean => {
    if (typeof media === "string") {
      const videoExtensions = [".mp4", ".webm", ".mov", ".avi"];
      return videoExtensions.some((ext) => media.toLowerCase().endsWith(ext));
    }
    return false;
  };

  return (
    <div className="w-full flex flex-col items-center p-[16px] md:p-[32px] lg:p-[40px] lg:pt-[80px]">
      <div className="w-full max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
          {project.media.map((media, index) => (
            <div
              key={index}
              className={`w-full h-full col-span-1 ${getColSpan(media)} flex flex-col`}
            >
              {index < 2 ? (
                <AnimatedMedia
                  src={media.src}
                  alt={project.title || "Project media"}
                  className="w-full h-auto"
                  direction="down"
                  duration={1.5}
                  delay={0.2 * index + 0.3}
                  mediaType={media.type}
                />
              ) : media.type === "video" ? (
                <video
                  src={
                    typeof media.src === "string" ? media.src : media.src.src
                  }
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className="w-full h-auto"
                />
              ) : (
                <Image
                  src={media.src}
                  alt={project.title || "Project image"}
                  className="w-full h-auto"
                />
              )}

              <div className="text-foreground/30 text-[10px] md:text-[12px] lg:text-[13px] pt-[8px]">
                [{getFileName(media)}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMedia;
