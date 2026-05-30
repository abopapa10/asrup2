import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-config";

/**
 * robots.txt
 *
 * - Tüm botlara genel erişim verir.
 * - API ve _next altyapı yollarını engeller.
 * - Sitemap'i bildirir.
 *
 * AI botları (GPTBot, ClaudeBot, PerplexityBot vb.) için ayrı bir
 * politika tanımlanmıştır. Mevcut politika, içeriğin AI yanıtlarında
 * doğru kaynak olarak görünebilmesi için izin verir; engellemek
 * istenirse ilgili user-agent'lar `disallow: "/"` ile kapatılabilir.
 */
export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: CANONICAL_SITE_ORIGIN,
    sitemap,
  };
}
