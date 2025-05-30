import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [], // Add allowed external image domains here if needed
  },
  output: "export", // Enables static export for production
  // Add more production optimizations as needed
};

export default nextConfig;
