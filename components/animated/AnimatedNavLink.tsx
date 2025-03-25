import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

type AnimatedNavLinkProps = {
  text: string;
};

const AnimatedNavLink = ({ text }: AnimatedNavLinkProps) => {
  const [linkHover, setLinkHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setLinkHover(true)}
      onMouseLeave={() => setLinkHover(false)}
      className="h-[1.5em] relative overflow-hidden"
    >
      <motion.div
        animate={linkHover ? "hover" : "idle"}
        initial="idle"
        variants={{
          hover: { y: "-50%" },
          idle: { y: "0%" },
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          mass: 1,
          restDelta: 0.001,
        }}
        className="flex flex-col"
      >
        <motion.div
          className="h-[1.5em] flex items-center"
          variants={{
            hover: { opacity: 0 },
            idle: { opacity: 1 },
          }}
          transition={{ duration: 0.15 }}
        >
          {text}
        </motion.div>
        <motion.div
          className="h-[1.5em] flex items-center"
          variants={{
            hover: { opacity: 1 },
            idle: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        >
          {text}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedNavLink;
