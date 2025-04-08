import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { vonaEasing } from "@/Utils/animation";
const brandingVideo = "/images/projects/carza/Carza-Logo_animation.mp4";
import brandingImg from "@/public/images/photos/branding.webp";
import webdesignImg from "@/public/images/projects/mushar/mushar_phone.webp";
import webdevImg from "@/public/images/projects/mushar/mushar_laptop.webp";

type MediaItem = {
  src: string | StaticImageData;
  alt: string;
  type: "image" | "video";
  position: {
    mobile: { top: string; left: string };
    desktop: { top: string; left: string };
  };
};

type HeroImagesProps = {
  activeIndex: number;
};

const maskVariants = {
  enter: {
    clipPath: "inset(-20% 0 -20% 100%)",
  },
  visible: {
    clipPath: "inset(-20% 0 -20% 0)",
    transition: { duration: 1, ease: vonaEasing },
  },
  exit: {
    clipPath: "inset(-20% 100% -20% 0)",
    transition: { duration: 0.5, ease: vonaEasing },
  },
};

const numberVariants = {
  enter: {
    y: 40, // Start slightly below final position
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.6, // Small delay after image starts appearing
      ease: vonaEasing,
    },
  },
  exit: {
    y: 20, // Move up when exiting
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: vonaEasing,
    },
  },
};

const IMAGES: MediaItem[] = [
  {
    src: brandingVideo,
    alt: "Branding",
    type: "video",
    position: {
      mobile: { top: "25%", left: "5%" },
      desktop: { top: "5%", left: "5%" },
    },
  },
  {
    src: webdesignImg,
    alt: "Web Design",
    type: "image",
    position: {
      mobile: { top: "15%", left: "10%" },
      desktop: { top: "5%", left: "45%" },
    },
  },
  {
    src: webdevImg,
    alt: "Web Development",
    type: "image",
    position: {
      mobile: { top: "35%", left: "5%" },
      desktop: { top: "5%", left: "60%" },
    },
  },
];
// Custom hook to detect if the viewport is below a certain width
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize(); // run immediately
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
}

export default function HeroImages({ activeIndex }: HeroImagesProps) {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="sync">
        {IMAGES.map((media, index) => {
          // Decide which position to use
          const { top, left } = isMobile
            ? media.position.mobile
            : media.position.desktop;

          // Only animate and show the active media, but keep all rendered
          if (index === activeIndex) {
            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                style={{
                  top: top,
                  left: left,
                  maxHeight: "85%",
                }}
                initial="enter"
                animate="visible"
                exit="exit"
                variants={maskVariants}
              >
                {media.type === "video" ? (
                  <video
                    src={
                      typeof media.src === "string" ? media.src : media.src.src
                    }
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      position: "relative",
                    }}
                  />
                ) : (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      position: "relative",
                    }}
                    placeholder="blur"
                  />
                )}
                <motion.span
                  variants={numberVariants}
                  className="absolute -top-3.5 lg:-top-5 left-0 text-[10px] lg:text-xs text-accent -z-[1]"
                >
                  [0{index + 1}]
                </motion.span>
              </motion.div>
            );
          }
          // Pre-render other media but keep them hidden
          return (
            <div
              key={`preload-${index}`}
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                zIndex: -1,
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              {media.type === "video" ? (
                <video
                  src={
                    typeof media.src === "string" ? media.src : media.src.src
                  }
                  preload="auto"
                />
              ) : (
                <Image
                  src={media.src}
                  alt={`Preload ${media.alt}`}
                  width={0}
                  height={0}
                  priority={index === (activeIndex + 1) % IMAGES.length}
                  sizes="100vw"
                />
              )}
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
