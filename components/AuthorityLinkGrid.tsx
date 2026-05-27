import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { AuthorityLinkItem } from "@/lib/authority-links";

type AuthorityLinkGridProps = {
  title: string;
  eyebrow?: string;
  lead?: string;
  items: readonly AuthorityLinkItem[];
  compact?: boolean;
  badgeLabel?: string;
};

export function AuthorityLinkGrid({
  title,
  eyebrow = "Uzmanlık",
  lead,
  items,
  compact = false,
  badgeLabel = "Sayfa",
}: AuthorityLinkGridProps) {
  return (
    <section aria-labelledby="authority-grid-heading">
      <FadeIn>
        <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
        <h2 id="authority-grid-heading" className="heading-section max-w-3xl">
          {title}
        </h2>
        {lead ? <p className="body-lead mt-4 max-w-2xl sm:mt-6">{lead}</p> : null}
      </FadeIn>

      <div
        className={`mt-10 grid gap-5 sm:mt-12 sm:gap-6 ${
          compact ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {items.map((item, index) => (
          <FadeIn key={item.href} delay={index * 0.04} as="article">
            <Link
              href={item.href}
              className="editorial-card group block h-full no-underline"
            >
              <div className="mb-5 flex items-start justify-between sm:mb-6">
                <span className="eyebrow">{badgeLabel}</span>
                <ArrowUpRight
                  strokeWidth={1.25}
                  className="h-4 w-4 text-ice-blue transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-turquoise"
                  aria-hidden
                />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                {item.description}
              </p>
              <span className="link-editorial mt-6 inline-flex sm:mt-8">
                {item.cta}
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
