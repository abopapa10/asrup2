import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export type RelatedPagesProps = {
  heading?: string;
  items: readonly {
    label: string;
    href: string;
    description?: string;
  }[];
};

export function RelatedPages({
  heading = "İlgili sayfalar",
  items,
}: RelatedPagesProps) {
  if (items.length === 0) return null;

  return (
    <FadeIn as="section">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">İlgili</p>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>

      <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.href} delay={index * 0.05} as="article">
            <Link
              href={item.href}
              className="editorial-card group block h-full no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal"
            >
              <div className="mb-5 flex items-start justify-between sm:mb-6">
                <span className="eyebrow">Sayfa</span>
                <ArrowUpRight
                  strokeWidth={1.25}
                  className="h-4 w-4 text-ice-blue transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-turquoise"
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                {item.label}
              </h3>
              {item.description ? (
                <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                  {item.description}
                </p>
              ) : null}
              <span className="link-editorial mt-6 inline-flex sm:mt-8">
                Sayfayı incele
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
