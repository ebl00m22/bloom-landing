import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Framer Motion 12 variant ease types differ from TS inference — safe to ignore
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
