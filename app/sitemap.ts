import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { psychologicalTests, PSYCHOLOGICAL_TESTS_HUB } from "@/lib/psychological-tests";
import { seoLandingPages } from "@/lib/seo-pages";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/hizmetler"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/lokasyon"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(PSYCHOLOGICAL_TESTS_HUB.path),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    ...services.map((service) => ({
      url: absoluteUrl(`/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  const seoLandingRoutes: MetadataRoute.Sitemap = seoLandingPages.map(
    (page) => ({
      url: absoluteUrl(page.meta.canonicalPath),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.group === "hizmetler" ? 0.85 : 0.7,
    })
  );

  const testRoutes: MetadataRoute.Sitemap = psychologicalTests.map((test) => ({
    url: absoluteUrl(test.href),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: test.status === "live" ? 0.82 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(`/makale/${article.slug}`),
    lastModified: new Date(article.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...seoLandingRoutes, ...testRoutes, ...articleRoutes];
}
