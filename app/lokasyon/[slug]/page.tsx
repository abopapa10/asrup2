import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SeoLandingTemplate } from "@/components/seo/SeoLandingTemplate";
import { createPageMetadata } from "@/lib/seo";
import { getSeoPage, getSeoPagesByGroup } from "@/lib/seo-pages";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return getSeoPagesByGroup("lokasyon").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("lokasyon", slug);

  if (!page) {
    return { title: "Sayfa bulunamadı" };
  }

  return createPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.meta.canonicalPath,
    absoluteTitle: true,
    ogImage: page.meta.ogImage,
    ogImageAlt: page.meta.ogImageAlt,
    keywords: page.meta.keywords,
  });
}

export default async function LokasyonSlugPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = getSeoPage("lokasyon", slug);

  if (!page) {
    notFound();
  }

  return (
    <PageShell>
      <SeoLandingTemplate page={page} />
    </PageShell>
  );
}
