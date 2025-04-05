import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { vonaEasing } from "@/Utils/animation";

type AnimatedNavLinkProps = {
  text: string;
  className?: string;
};

const AnimatedNavLink = ({ text, className }: AnimatedNavLinkProps) => {
  const [linkHover, setLinkHover] = useState(false);

  const duration = 0.25;
  return (
    <div
      onMouseEnter={() => setLinkHover(true)}
      onMouseLeave={() => setLinkHover(false)}
      className={`h-[1.5em] relative overflow-hidden ${className}`}
    >
      <motion.div
        animate={linkHover ? "hover" : "idle"}
        initial="idle"
        variants={{
          hover: { y: "-50%" },
          idle: { y: "0%" },
        }}
        transition={{
          duration: duration,
          ease: vonaEasing,
        }}
        className="flex flex-col"
      >
        <motion.div
          className="h-[1.5em] flex items-center"
          variants={{
            hover: { opacity: 0 },
            idle: { opacity: 1 },
          }}
          transition={{
            duration: duration,
            ease: vonaEasing,
          }}
        >
          {text}
        </motion.div>
        <motion.div
          className="h-[1.5em] flex items-center"
          variants={{
            hover: { opacity: 1 },
            idle: { opacity: 0 },
          }}
          transition={{
            duration: duration,
            ease: vonaEasing,
          }}
        >
          {text}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedNavLink;
