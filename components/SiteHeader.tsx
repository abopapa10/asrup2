import Link from "next/link";
import { PsiEmblem } from "@/components/PsiEmblem";
import { SiteHeaderMobileMenu } from "@/components/SiteHeaderMobileMenu";
import { siteNavLinks } from "@/lib/site-nav";

/** Sunucu render header — LCP öncesi client bundle beklenmez (mobil menü ayrı client island) */
export function SiteHeader() {
  return (
    <header
      data-site-header
      className="sticky top-0 z-50 border-b border-ice-blue/50 bg-white/90 backdrop-blur-md"
    >
      <div
        className="h-0.5 w-full bg-gradient-to-r from-transparent via-neon-turquoise/70 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex max-w-editorial items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-6 sm:py-5 lg:px-12">
        <Link
          href="/"
          className="flex max-w-[calc(100%-3rem)] items-center gap-2.5 font-display text-sm font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal sm:max-w-xs sm:gap-3 sm:text-base lg:max-w-md lg:text-lg"
        >
          <PsiEmblem className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span>Bursa Psikolog A. Alparslan Sancar</span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 lg:flex">
          {siteNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-body transition-colors hover:text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#randevu"
            className="rounded-lg border border-ice-blue px-4 py-2.5 text-xs font-semibold tracking-wide text-slate-charcoal transition-colors hover:border-neon-turquoise/60 hover:bg-soft-sky/10"
          >
            Randevu Al
          </Link>
        </nav>

        <SiteHeaderMobileMenu />
      </div>
    </header>
  );
}
