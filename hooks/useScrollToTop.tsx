"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

export function useScrollToTop() {
  const lenis = useLenis();

  useEffect(() => {
    // Scroll to top when component mounts
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);
}
