import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { FadeIn } from "@/components/FadeIn";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PageShell } from "@/components/PageShell";
import { articles } from "@/lib/articles";
import { buildBlogListingJsonLd } from "@/lib/page-structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Uzman Makaleleri & Blog",
  description:
    "Bursa psikolog blog: kaygı, panik atak, depresyon, ilişkiler, çift terapisi, EMDR ve terapi süreçleri üzerine klinik uzman içerikler.",
  path: "/blog",
  keywords: [
    "Bursa psikolog blog",
    "psikoloji makaleleri",
    "kaygı bozukluğu",
    "panik atak",
    "depresyon",
    "çift terapisi",
    "EMDR",
    "online terapi",
    "ilk terapi seansı",
  ],
});

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  return (
    <PageShell>
      <JsonLdScript data={buildBlogListingJsonLd()} />
      <section
        aria-labelledby="blog-heading"
        className="border-t border-ice-blue/60 bg-mesh-blue py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <FadeIn>
            <p className="eyebrow eyebrow-cta mb-4">Blog</p>
            <h1 id="blog-heading" className="heading-section max-w-3xl">
              Uzman Makaleleri &amp; Blog
            </h1>
            <p className="body-lead mt-4 max-w-2xl sm:mt-6">
              Kaygı, panik atak, depresyon, ilişkiler ve terapi süreçleri
              üzerine klinik uzmanlığımızı yansıtan içerikler.
            </p>
          </FadeIn>

          <BlogList articles={sorted} />
        </div>
      </section>
    </PageShell>
  );
}
