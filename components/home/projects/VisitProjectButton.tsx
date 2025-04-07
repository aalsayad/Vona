"use client";

import React from "react";
import { motion } from "motion/react";
import { vonaEasing } from "@/Utils/animation";

const VisitProjectButton = ({ active }: { active: boolean }) => {
  return (
    <motion.div
      animate={{
        clipPath: active ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      }}
      transition={{ duration: 0.4, ease: vonaEasing }}
      className="relative md:py-[3px] md:px-[10px] lg:py-[4px] lg:px-[12px] w-fit text-accent bg-accent/5 hidden md:block text-xs md:text-sm"
    >
      <motion.div
        animate={{
          clipPath: active ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.3, ease: vonaEasing, delay: 0.2 }}
        className="absolute top-0 left-0 h-full w-full bg-accent/5"
      />
      Visit Project
    </motion.div>
  );
};

export default VisitProjectButton;
