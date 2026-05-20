import Image from "next/image";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import type { Article } from "@/lib/articles";

type ArticlePageContentProps = {
  article: Article;
};

export function ArticlePageContent({ article }: ArticlePageContentProps) {
  return (
    <article className="border-t border-ice-blue/40 bg-mesh-blue py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:max-w-3xl lg:px-12">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-body">
            <Link href="/" className="link-editorial">
              Ana Sayfa
            </Link>
            <span className="mx-2 text-ice-blue" aria-hidden>
              /
            </span>
            <Link href="/blog" className="link-editorial">
              Blog
            </Link>
            <span className="mx-2 text-ice-blue" aria-hidden>
              /
            </span>
            <span className="line-clamp-1 text-slate-charcoal">{article.title}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-body/80">
            {article.category}
          </p>
          <time
            dateTime={article.dateISO}
            className="mt-2 block text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-slate-body/80"
          >
            {article.date}
          </time>
          <h1 className="heading-section mt-4">{article.title}</h1>

          <div className="mt-8 overflow-hidden border border-ice-blue">
            <Image
              src={article.image}
              alt={article.title}
              width={960}
              height={540}
              priority
              className="aspect-video w-full object-cover"
            />
          </div>
        </FadeIn>

        <div className="prose-custom mt-10 space-y-6 sm:mt-12">
          {article.content.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-sm leading-[1.9] text-slate-body sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-ice-blue pt-8 sm:mt-16">
          <Link href="/blog" className="link-editorial">
            ← Tüm makalelere dön
          </Link>
        </div>

        <div className="mt-10 sm:mt-12">
          <CtaBlock variant="banner" />
        </div>
      </div>
    </article>
  );
}
