import type { Metadata } from "next";
import { CiftTerapisiRandevuLandingPage } from "@/components/randevu/CiftTerapisiRandevuLandingPage";
import { PageShell } from "@/components/PageShell";
import { ciftRandevuPageMeta } from "@/lib/seo-content/bursa-cift-terapisi-randevu";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: ciftRandevuPageMeta.title,
  description: ciftRandevuPageMeta.description,
  path: ciftRandevuPageMeta.canonicalPath,
  absoluteTitle: true,
  keywords: ciftRandevuPageMeta.keywords,
});

export default function BursaCiftTerapisiRandevuPage() {
  return (
    <PageShell showFooterSeo={false}>
      <CiftTerapisiRandevuLandingPage />
    </PageShell>
  );
}
