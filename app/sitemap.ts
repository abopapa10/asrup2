import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { seoLandingPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...services.map((service) => ({
      url: `${base}/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  const seoLandingRoutes: MetadataRoute.Sitemap = seoLandingPages.map(
    (page) => ({
      url: `${base}${page.meta.canonicalPath}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.group === "hizmetler" ? 0.85 : 0.7,
    })
  );

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/makale/${article.slug}`,
    lastModified: new Date(article.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...seoLandingRoutes, ...articleRoutes];
}
