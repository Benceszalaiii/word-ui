import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/word-ui",
  images: {
    unoptimized: true
  },
  experimental:{
    optimizeCss: true
  }
};

export default nextConfig;
