import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { vonaEasing } from "@/Utils/animation";
import AnimatedMobileNavLink from "./animated/AnimatedMobileNavLink";
import { NavItem } from "@/types";

type MobileMenuProps = {
  isMenuOpen: boolean;
  navItems: NavItem[];
};

const MobileMenu = ({ isMenuOpen, navItems }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ top: "-100%" }}
      animate={isMenuOpen ? { top: "0%" } : { top: "-100%" }}
      transition={{
        duration: 0.8,
        ease: vonaEasing,
      }}
      className="md:hidden bg-foreground text-background w-full h-[100dvh] px-[24px] py-[40px] pt-[calc(64px)] fixed top-[-100%] left-0 flex justify-end flex-col z-[998]"
    >
      {/* Nav Links */}
      <div className="flex flex-col gap-8">
        {navItems.map((item, index) => (
          <AnimatedMobileNavLink
            key={index}
            text={item.text}
            href={item.href}
            index={index}
            isMenuOpen={isMenuOpen}
          />
        ))}
      </div>
      {/* Divider */}
      <motion.div
        className="w-full h-[1px] bg-white/10 mt-[40px] mb-[12px]"
        animate={
          isMenuOpen ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }
        }
        transition={{
          duration: isMenuOpen ? 1.5 : 0.6,
          ease: vonaEasing,
        }}
      />
      {/* Footer Text */}
      <div className="text-white/50 text-[10px] flex items-start justify-between leading-[1.2]">
        <p>
          © 2025 Vona. <br />
          All rights reserved.
        </p>
        <p>
          We design for brands <br />
          that refuse to blend in.
        </p>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
