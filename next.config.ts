import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Enable these for GitHub Pages deployment
  basePath: '/navyug-trust',
  assetPrefix: '/navyug-trust/',
};

export default nextConfig;
