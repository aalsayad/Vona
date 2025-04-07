import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { vonaEasingSmoother } from "@/Utils/animation";
import Image from "next/image";

type AnimatedImageProps = {
  src: any; // Using any to accommodate both imported and string URLs
  alt: string;
  className?: string;
  direction?: "up" | "down";
  /** Duration of animation in seconds. Defaults to 1.2 */
  duration?: number;
  /** Percentage of element that must be visible before animation triggers. Default 0.2 */
  inViewAmount?: number;
  /** Animation delay in seconds. Defaults to 0 */
  delay?: number;
  /** Optional width for the image */
  width?: number;
  /** Optional height for the image */
  height?: number;
};

const AnimatedImage = ({
  src,
  alt,
  className = "",
  direction = "up",
  duration = 1,
  inViewAmount = 0,
  delay = 0,
  width,
  height,
}: AnimatedImageProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: inViewAmount });

  // Determine mask direction
  const initialClipPath =
    direction === "up" ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: initialClipPath }}
        animate={inView ? { clipPath: "inset(0 0 0 0)" } : {}}
        transition={{
          duration: duration,
          delay: delay,
          ease: vonaEasingSmoother,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto`}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
