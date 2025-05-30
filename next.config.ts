import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
    unoptimized: true, // Disable image optimization for static export
  },
  output: "export",
};

export default nextConfig;
