import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration
  basePath: '/navyug-trust',
  assetPrefix: '/navyug-trust/',
};

export default nextConfig;
