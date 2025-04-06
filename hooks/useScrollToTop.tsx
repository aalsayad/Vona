"use client"; // This is a Client Component hook

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function useScrollToTop() {
  const pathname = usePathname(); // Track route changes
  const lenis = useLenis(); // Access Lenis instance

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // Scroll to top instantly
      // Or use { duration: 0.5 } for smooth scrolling
    }
  }, [pathname, lenis]);
}
