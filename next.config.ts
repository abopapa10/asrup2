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
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/sinav-kaygisi-nedir",
        destination: "/makale/sinav-kaygisi-nedir",
        permanent: true,
      },
      {
        source: "/toksik-ilişki-nedir",
        destination: "/makale/toksik-iliski-nedir",
        permanent: true,
      },
      {
        source: "/toksik-iliski-nedir",
        destination: "/makale/toksik-iliski-nedir",
        permanent: true,
      },
      {
        source: "/manipule-nedir-psikolojik-manipulasyon",
        destination: "/makale/manipule-nedir-psikolojik-manipulasyon",
        permanent: true,
      },
      {
        source: "/manipule-nedir",
        destination: "/makale/manipule-nedir-psikolojik-manipulasyon",
        permanent: true,
      },
      {
        source: "/narsist-erkek-belirtileri",
        destination: "/makale/narsist-erkek-belirtileri",
        permanent: true,
      },
      {
        source: "/ghosting-ne-demek",
        destination: "/makale/ghosting-ne-demek",
        permanent: true,
      },
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
