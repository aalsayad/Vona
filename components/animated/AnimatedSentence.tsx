import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { vonaEasing } from "@/Utils/animation";

type AnimatedSentenceProps = {
  text: string;
  direction?: "up" | "down";
  className?: string;
  /** Delay in seconds between each word’s animation. Defaults to 0.05 */
  stagger?: number;
  /** Percentage of element that must be visible before animation triggers. Default 0.2 */
  inViewAmount?: number;
  /** Line height of the sentence. Defaults to 1.2 */
  lineHeight?: number;
  /** Duration of animation in seconds. Defaults to 1 */
  duration?: number;
};

const AnimatedSentence = ({
  text,
  direction = "up",
  duration = 1,
  className = "",
  stagger = 0.08,
  inViewAmount = 0.2,
  lineHeight = 1.2,
}: AnimatedSentenceProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: inViewAmount });

  // Determine direction (start from below if "up", else from above)
  const yFrom = direction === "up" ? "100%" : "-100%";

  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <div
          key={i}
          className={`mr-[0.3em] h-[${lineHeight}em] overflow-hidden relative`}
        >
          <motion.div
            initial={{ y: yFrom, opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: duration,
              delay: i * stagger,
              ease: vonaEasing,
            }}
          >
            {word}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedSentence;
