import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeIn } from "@/components/FadeIn";
import { articles, pickFeaturedArticles } from "@/lib/articles";

export function ArticlesSection() {
  const featured = pickFeaturedArticles(articles, 3);

  return (
    <section
      id="makaleler"
      aria-labelledby="articles-heading"
      className="border-t border-ice-blue/60 bg-mesh-blue py-20 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn>
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Topikal Otorite</p>
          <h2 id="articles-heading" className="heading-section max-w-3xl">
            Uzman Makaleleri &amp; Blog
          </h2>
          <p className="body-lead mt-4 max-w-2xl sm:mt-6">
            Bursa psikolog aramalarında semantik derinlik sağlayan, klinik
            uzmanlığımızı kanıtlayan rehber içerikler.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3 lg:gap-10">
          {featured.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.05}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex justify-center sm:mt-16">
          <Link href="/blog" className="link-editorial text-base font-semibold">
            Tüm Makaleleri Görüntüle
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
