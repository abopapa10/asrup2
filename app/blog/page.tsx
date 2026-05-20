import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/PageShell";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Uzman Makaleleri & Blog | Bursa Psikolog",
  description:
    "Bursa psikolog blog: bireysel terapi, çift terapisi, online terapi ve ruh sağlığı rehberi makaleleri.",
  alternates: { canonical: "https://bursapsikologsancar.com/blog" },
};

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  return (
    <PageShell>
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
              Bursa psikolog aramalarında semantik derinlik sağlayan tüm uzman
              makalelerimiz.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {sorted.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.04}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
