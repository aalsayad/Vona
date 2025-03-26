import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
      {children}
    </ReactLenis>
  );
};
