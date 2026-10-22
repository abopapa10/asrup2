import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NiluferPsikologPage } from "@/components/lokasyon/NiluferPsikologPage";
import { PageShell } from "@/components/PageShell";
import { SeoLandingTemplate } from "@/components/seo/SeoLandingTemplate";
import { niluferAuthorityMeta } from "@/lib/lokasyon/nilufer-psikolog-authority";
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

  const meta = slug === "nilufer-psikolog" ? niluferAuthorityMeta : page.meta;

  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: meta.canonicalPath,
    absoluteTitle: true,
    ogImage: "ogImage" in page.meta ? page.meta.ogImage : undefined,
    ogImageAlt: meta.ogImageAlt ?? page.meta.ogImageAlt,
    keywords: meta.keywords,
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

  if (slug === "nilufer-psikolog") {
    return (
      <PageShell>
        <NiluferPsikologPage />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <SeoLandingTemplate page={page} />
    </PageShell>
  );
}
