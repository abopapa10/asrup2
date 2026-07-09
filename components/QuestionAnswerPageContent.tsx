import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { slugifyHeading } from "@/lib/articles";
import type {
  QuestionAnswerBlock,
  QuestionAnswerItem,
} from "@/lib/question-answer-types";

type QuestionAnswerPageContentProps = {
  item: QuestionAnswerItem;
};

function QuestionAnswerBlockView({ block }: { block: QuestionAnswerBlock }) {
  if (block.type === "h2") {
    return (
      <h2
        id={slugifyHeading(block.text)}
        className="heading-section mt-14 scroll-mt-24 text-2xl first:mt-0 sm:mt-16 sm:text-[1.75rem]"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="mt-8 font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:mt-10 sm:text-xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="mt-2 flex flex-col gap-2.5 pl-1 sm:gap-3">
        {block.items.map((item, idx) => (
          <li
            key={`qa-li-${idx}`}
            className="flex gap-3 text-sm leading-[1.85] text-slate-body sm:gap-4 sm:text-base sm:leading-[1.92]"
          >
            <span
              aria-hidden
              className="mt-[0.65em] inline-block h-1 w-3 shrink-0 bg-neon-turquoise/70"
            />
            <span>{renderInlineMarkup(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="mt-6 border-l-2 border-neon-turquoise/60 bg-soft-sky/15 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-sm leading-[1.85] text-slate-charcoal sm:text-[0.9375rem]">
          {renderInlineMarkup(block.text)}
        </p>
      </aside>
    );
  }

  return (
    <p className="text-sm leading-[1.9] text-slate-body sm:text-base sm:leading-[1.92]">
      {renderInlineMarkup(block.text)}
    </p>
  );
}

export function QuestionAnswerPageContent({ item }: QuestionAnswerPageContentProps) {
  return (
    <article className="border-t border-ice-blue/40 bg-mesh-blue py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:max-w-3xl lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-body sm:mb-8">
          <Link href="/" className="link-editorial">
            Ana Sayfa
          </Link>
          <span className="mx-2 text-ice-blue" aria-hidden>
            /
          </span>
          <Link href="/soru-cevap" className="link-editorial">
            Soru - Cevap
          </Link>
        </nav>

        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-slate-body/90 sm:text-xs">
          Soru - Cevap
        </p>
        <h1 id="hero-heading" className="heading-section mt-4">
          {item.question}
        </h1>
        <p className="body-lead mt-6 max-w-2xl">{item.excerpt}</p>

        <section
          aria-label="Doğrudan Cevap"
          className="mt-8 border-l-2 border-neon-turquoise/70 bg-white/80 px-5 py-5 sm:mt-10 sm:px-6 sm:py-6"
        >
          <p className="text-sm leading-[1.9] text-slate-charcoal sm:text-base sm:leading-[1.92]">
            <strong>{item.directAnswer}</strong>
          </p>
        </section>

        <div className="prose-custom mt-12 space-y-6 sm:mt-16">
          {item.content.map((block, index) => (
            <QuestionAnswerBlockView key={`${item.slug}-${index}`} block={block} />
          ))}
        </div>

        <section className="mt-14 border-t border-ice-blue pt-10 sm:mt-16">
          <h2 className="heading-section text-2xl sm:text-[1.75rem]">Kısa SSS</h2>
          <div className="mt-6 space-y-5">
            {item.faq.map((faq) => (
              <div key={faq.question} className="rounded border border-ice-blue/60 bg-white/80 p-5">
                <h3 className="font-display text-base font-semibold text-slate-charcoal sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-[1.85] text-slate-body sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 sm:mt-16">
          <CtaBlock variant="banner" />
        </div>

        <div className="mt-12 border-t border-ice-blue pt-8 sm:mt-16">
          <Link href="/soru-cevap" className="link-editorial">
            ← Tüm Soru - Cevap içeriklerine dön
          </Link>
        </div>
      </div>
    </article>
  );
}
