import Image from "next/image";
import Link from "next/link";
import { computeReadingMinutes } from "@/lib/articles";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

/**
 * Görseli olmayan makaleler için tipografik fallback.
 * Medium tarzı premium görünüm — düz renk değil; yumuşak gradient
 * ve kategori vurgusuyla soğuk olmayan bir kart üretir.
 */
function ArticleCardFallback({ category }: { category: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-mesh-sky">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 0% 100%, rgba(66, 255, 214, 0.18) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 60% 60% at 100% 0%, rgba(201, 247, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />
      <div className="absolute inset-0 flex items-end p-5 sm:p-6 lg:p-7">
        <div className="flex items-center gap-3">
          <span aria-hidden className="block h-px w-8 bg-neon-turquoise" />
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.26em] text-slate-charcoal/90 sm:text-[0.6875rem]">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ArticleCard({ article }: ArticleCardProps) {
  const readingMinutes = computeReadingMinutes(article);

  return (
    <article className="group flex h-full flex-col">
      <Link href={`/makale/${article.slug}`} className="flex h-full flex-col">
        <div className="overflow-hidden border border-ice-blue border-t-2 border-t-transparent bg-white transition-colors group-hover:border-t-neon-turquoise">
          {article.image ? (
            <Image
              src={article.image}
              alt={`${article.title} — ${article.category}`}
              width={640}
              height={360}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="article-image"
            />
          ) : (
            <ArticleCardFallback category={article.category} />
          )}
        </div>

        <div className="flex flex-1 flex-col border border-t-0 border-ice-blue bg-white px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] uppercase tracking-[0.18em] text-slate-body/80">
            <time dateTime={article.dateISO} className="font-semibold">
              {article.date}
            </time>
            <span aria-hidden className="text-slate-body/40">
              •
            </span>
            <span className="font-semibold">{readingMinutes} dk okuma</span>
          </div>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-body/80 sm:mt-4">
            {article.category}
          </p>

          <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal transition-colors group-hover:text-slate-body sm:mt-4 sm:text-xl lg:text-[1.35rem]">
            {article.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-[1.8] text-slate-body sm:mt-3">
            {article.excerpt}
          </p>

          <span className="link-editorial mt-5 sm:mt-6">Devamını Oku</span>
        </div>
      </Link>
    </article>
  );
}
