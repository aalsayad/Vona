"use client";

import React from "react";
import { cn } from "@/Utils/cn";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "motion/react";
import {
  butterEasing,
  butterDuration,
  butterEasingCss,
  butterDurationCss,
} from "@/Utils/animation";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  arrow?: boolean;
};

export default function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  arrow = false,
}: ButtonProps) {
  return (
    <motion.button
      whileHover="hover" // Define a hover state
      className={cn(
        "flex items-center gap-1.5 cursor-pointer relative",
        size === "md" && "px-3 py-2.5",
        variant === "primary" &&
          `bg-accent/5 text-accent/80 hover:text-accent transition-all duration-[${butterDurationCss}] ease-[${butterEasingCss}] font-medium`,
        className
      )}
    >
      {children}
      {arrow && <HiArrowRight className="w-3.5 h-3.5" />}
      <motion.div
        className="absolute top-0 left-0 h-full bg-accent/10 z-[-1]" // Behind content
        initial={{ width: 0 }}
        variants={{
          hover: { width: "100%" }, // Animate to full width when parent is hovered
        }}
        transition={{ duration: butterDuration, ease: butterEasing }}
      ></motion.div>
    </motion.button>
  );
}
