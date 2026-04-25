import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/pdftoolkit-pro",
  assetPrefix: "/pdftoolkit-pro/",
  trailingSlash: true,
};

export default nextConfig;
