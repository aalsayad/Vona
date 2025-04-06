import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
