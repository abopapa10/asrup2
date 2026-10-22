import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { RandevuLandingPage } from "@/components/randevu/RandevuLandingPage";
import { randevuPageMeta } from "@/lib/seo-content/nilufer-bursa-psikolog-randevu";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: randevuPageMeta.title,
  description: randevuPageMeta.description,
  path: randevuPageMeta.canonicalPath,
  absoluteTitle: true,
  keywords: randevuPageMeta.keywords,
});

export default function NiluferBursaPsikologRandevuPage() {
  return (
    <PageShell showFooterSeo={false}>
      <RandevuLandingPage />
    </PageShell>
  );
}
