import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment these lines when deploying to GitHub Pages
  // basePath: '/navyug-trust',
  // assetPrefix: '/navyug-trust/',
};

export default nextConfig;
