import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { vonaEasing } from "@/Utils/animation";

type ImageItem = {
  src: string;
  alt: string;
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
    clipPath: "inset(0 0 0 100%)",
    transition: { duration: 1, ease: vonaEasing },
  },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 1, ease: vonaEasing },
  },
  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: { duration: 0.5, ease: vonaEasing },
  },
};

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1742654230443-7c19cb55cd46?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Branding",
    position: {
      mobile: { top: "25%", left: "5%" },
      desktop: { top: "5%", left: "5%" },
    },
  },
  {
    src: "https://images.unsplash.com/photo-1741619215920-1db7baf88f6e?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Web Design",
    position: {
      mobile: { top: "10%", left: "10%" },
      desktop: { top: "15%", left: "45%" },
    },
  },
  {
    src: "https://images.unsplash.com/photo-1741807083060-39c641cd97fa?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Web Development",
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
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="sync">
        {IMAGES.map((image, index) => {
          // Only render the active image
          if (index !== activeIndex) return null;
          // Decide which position to use
          const { top, left } = isMobile
            ? image.position.mobile
            : image.position.desktop;

          return (
            <motion.div
              key={index}
              className={`
            absolute inset-0`}
              style={{
                top: top,
                left: left,
                maxHeight: "75%",
              }}
              initial="enter"
              animate="visible"
              exit="exit"
              variants={maskVariants}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={0} // Let the image use its natural width
                height={0} // Let the image use its natural height
                sizes="100vw" // Ensure proper scaling for responsive layouts
                style={{
                  width: "auto", // Use natural width
                  height: "auto", // Use natural height
                  // minWidth: "70%",
                  maxWidth: "100%", // Constrain to the parent's max-height (75%)
                  maxHeight: "100%", // Constrain to the parent's max-height (75%)
                  objectFit: "contain", // Maintain aspect ratio, fit within bounds
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
