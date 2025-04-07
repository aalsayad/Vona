import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { vonaEasing } from "@/Utils/animation";

type AnimatedDividerProps = {
  className?: string;
  direction?: "left-to-right" | "right-to-left" | "center";
  /** Duration of animation in seconds. Defaults to 1 */
  duration?: number;
  /** Percentage of element that must be visible before animation triggers. Default 0.2 */
  inViewAmount?: number;
  /** Animation delay in seconds. Defaults to 0 */
  delay?: number;
  /** Height of the divider in pixels. Defaults to 1 */
  height?: number;
};

const AnimatedDivider = ({
  className = "",
  direction = "left-to-right",
  duration = 1,
  inViewAmount = 0.2,
  delay = 0,
  height = 1,
}: AnimatedDividerProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: inViewAmount });

  // Set initial and animate properties based on direction
  const getAnimationProps = () => {
    switch (direction) {
      case "right-to-left":
        return {
          initial: { width: 0, right: 0, left: "auto" },
          animate: { width: "100%" },
        };
      case "center":
        return {
          initial: { width: 0, left: "50%", transform: "translateX(-50%)" },
          animate: { width: "100%" },
        };
      default: // left-to-right
        return {
          initial: { width: 0, left: 0 },
          animate: { width: "100%" },
        };
    }
  };

  const { initial, animate } = getAnimationProps();

  return (
    <div ref={ref} className={`w-full relative ${className}`}>
      <motion.div
        className={`bg-foreground/10 absolute`}
        style={{ height: `${height}px` }}
        initial={initial}
        animate={inView ? animate : initial}
        transition={{
          duration,
          delay,
          ease: vonaEasing,
        }}
      />
    </div>
  );
};

export default AnimatedDivider;
