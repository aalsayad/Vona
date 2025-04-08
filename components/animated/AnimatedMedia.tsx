import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { vonaEasingSmoother } from "@/Utils/animation";
import Image from "next/image";

type AnimatedMediaProps = {
  src: any; // Using any to accommodate both imported and string URLs
  alt: string;
  className?: string;
  direction?: "up" | "down";
  /** Duration of animation in seconds. Defaults to 1 */
  duration?: number;
  /** Percentage of element that must be visible before animation triggers. Default 0 */
  inViewAmount?: number;
  /** Animation delay in seconds. Defaults to 0 */
  delay?: number;
  /** Optional width for the media */
  width?: number;
  /** Optional height for the media */
  height?: number;
  /** Media type: 'image' or 'video' */
  mediaType?: "image" | "video";
};

const AnimatedMedia = ({
  src,
  alt,
  className = "",
  direction = "up",
  duration = 1,
  inViewAmount = 0,
  delay = 0,
  width,
  height,
  mediaType = "image",
}: AnimatedMediaProps) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, amount: inViewAmount });
  const isVisibleInView = useInView(ref, { amount: inViewAmount });

  // Determine mask direction
  const initialClipPath =
    direction === "up" ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";

  // Handle video playback based on visibility
  useEffect(() => {
    if (mediaType === "video" && videoRef.current) {
      if (isVisibleInView) {
        videoRef.current
          .play()
          .catch((e) => console.log("Video play error:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisibleInView, mediaType]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: initialClipPath }}
        animate={inView ? { clipPath: "inset(0 0 0 0)" } : {}}
        transition={{
          duration: duration,
          delay: delay,
          ease: vonaEasingSmoother,
        }}
      >
        {mediaType === "image" ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-auto`}
            placeholder="blur"
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            className={`w-full h-auto`}
            width={width}
            height={height}
          />
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedMedia;
