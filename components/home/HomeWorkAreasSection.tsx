import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { renderInlineMarkup } from "@/components/InlineMarkup";
import { homeWorkAreas } from "@/lib/home-seo-content";

export function HomeWorkAreasSection() {
  return (
    <section
      id="calisma-alanlari"
      aria-labelledby="home-work-areas-heading"
      className="section-mesh border-t border-ice-blue/40 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">
            {homeWorkAreas.eyebrow}
          </p>
          <h2 id="home-work-areas-heading" className="heading-section">
            {homeWorkAreas.heading}
          </h2>
          <p className="body-lead mt-4 sm:mt-6">{homeWorkAreas.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeWorkAreas.items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.03} as="article">
              <div className="editorial-card group flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between">
                  <span
                    className="font-display text-xs font-semibold tabular-nums text-neon-turquoise sm:text-sm"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    strokeWidth={1.25}
                    className="h-4 w-4 text-ice-blue transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-turquoise"
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.85] text-slate-body">
                  {renderInlineMarkup(item.body)}
                </p>
                <Link href={item.href} className="link-editorial mt-6">
                  {item.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
