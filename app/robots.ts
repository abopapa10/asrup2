import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-config";

/**
 * robots.txt
 *
 * - Tüm botlara genel erişim verir.
 * - `/_next/` engellenmez: CSS/JS/image optimizer tarayıcı ve bot
 *   render’ı için gerekli; Disallow Semrush’ta “blocked resources”
 *   ve zayıf render sinyali üretir.
 * - Yalnızca API ve private yollar kapatılır.
 * - Sitemap bildirilir.
 */
export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    host: CANONICAL_SITE_ORIGIN,
    sitemap,
  };
}
