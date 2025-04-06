"use client";

import Image from "next/image";
import vonaLogoWhite from "@/public/images/logos/vona_logo_white.svg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { vonaEasing } from "@/Utils/animation";
import AnimatedNavLink from "./animated/AnimatedNavLink";
import MobileMenu from "./MobileMenu";
import { NavItem } from "@/types";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Single source of truth for navigation items
  const navigationItems: NavItem[] = [
    { text: "Services", href: "/#services" },
    { text: "Work", href: "/#work" },
    { text: "Contact", href: "#contact" },
    { text: "Start a Project", href: "#project" },
  ];

  return (
    <>
      <div className="w-full h-[64px] px-[16px] md:h-[64px] md:px-[32px] lg:h-[80px] lg:px-[40px] flex items-center justify-between mix-blend-difference fixed z-[999]">
        {/* Vona Logo */}
        <Link href="/">
          <Image
            src={vonaLogoWhite}
            alt="Vona Logo"
            className="w-[96px] lg:w-[100px]"
          />
        </Link>

        {/* Navbar Links - Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {navigationItems.map((item, index) => (
            <Link key={index} className="navbar-link" href={item.href}>
              <AnimatedNavLink text={item.text} />
            </Link>
          ))}
        </div>

        {/* Navbar Burger Menu - Mobile */}
        <motion.div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden size-[24px] flex items-center justify-center gap-1 flex-col"
        >
          <motion.div
            className="w-full h-[2px] bg-white"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 3 : 0,
              width: isMenuOpen ? "85%" : "100%",
            }}
            transition={{ duration: 0.5, ease: vonaEasing }}
          ></motion.div>
          <motion.div
            className="w-full h-[2px] bg-white"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -3 : 0,
              width: isMenuOpen ? "85%" : "100%",
            }}
            transition={{
              duration: 0.5,
              ease: vonaEasing,
            }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Full screen Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navigationItems}
      />
    </>
  );
}
