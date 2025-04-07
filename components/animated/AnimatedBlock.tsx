import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { vonaEasing } from "@/Utils/animation";

type AnimatedBlockProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  /** Duration of animation in seconds. Defaults to 0.8 */
  duration?: number;
  /** Percentage of element that must be visible before animation triggers. Default 0.2 */
  inViewAmount?: number;
  /** Animation delay in seconds. Defaults to 0 */
  delay?: number;
};

const AnimatedBlock = ({
  children,
  className = "",
  direction = "up",
  duration = 1.2,
  inViewAmount = 0.2,
  delay = 0,
}: AnimatedBlockProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: inViewAmount });

  // Determine initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: "40px", x: 0 };
      case "down":
        return { y: "-40px", x: 0 };
      case "left":
        return { x: "40px", y: 0 };
      case "right":
        return { x: "-40px", y: 0 };
      default:
        return { y: "40px", x: 0 };
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ ...getInitialPosition(), opacity: 0 }}
        animate={inView ? { y: 0, x: 0, opacity: 1 } : {}}
        transition={{
          duration: duration,
          delay: delay,
          ease: vonaEasing,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedBlock;
