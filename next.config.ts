import type { NextConfig } from "next";
import { CANONICAL_SITE_ORIGIN } from "./lib/site-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bursapsikologsancar.com" }],
        destination: `${CANONICAL_SITE_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
