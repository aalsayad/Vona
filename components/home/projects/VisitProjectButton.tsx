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
      className="relative md:py-[8px] md:px-[12px] lg:py-[8px] lg:px-[16px] w-fit text-accent bg-accent/5 hidden md:block"
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
