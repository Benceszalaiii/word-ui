import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/word-ui",
  experimental:{
    optimizeCss: true
  }
};

export default nextConfig;
