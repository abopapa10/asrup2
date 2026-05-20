import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { href: "/bireysel-terapi", label: "Bireysel Terapi" },
  { href: "/cift-terapisi", label: "Çift Terapisi" },
  { href: "/online-terapi", label: "Online Terapi" },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="iletisim"
      className="border-t-2 border-t-neon-turquoise/40 border-ice-blue bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <div id="iletisim-cta" className="mb-14 sm:mb-16">
          <CtaBlock variant="banner" />
        </div>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          <div>
            <p className="font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-lg">
              Bursa Psikolog Ahmet Alparslan Sancar
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-body sm:mt-4">
              Uzman Klinik Psikolog · Bireysel Terapi · Çift Terapisi · Online
              Terapi
            </p>
          </div>

          <nav aria-label="Site bağlantıları" className="space-y-8">
            <div>
              <p className="eyebrow mb-3 sm:mb-4">Hizmetler</p>
              <ul className="space-y-2 sm:space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-slate-charcoal transition-colors hover:text-slate-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3 sm:mb-4">Blog</p>
              <Link
                href="/blog"
                className="text-sm font-medium text-slate-charcoal transition-colors hover:text-slate-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
              >
                Tüm Makaleler
              </Link>
            </div>
          </nav>

          <address className="not-italic">
            <p className="eyebrow mb-3 sm:mb-4">Konum</p>
            <p className="text-sm font-medium text-slate-charcoal">
              Nilüfer, Bursa, Türkiye
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-body sm:mt-3">
              Çok Yakında Yüz Yüze ve Online Seçeneklerle
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-4 inline-block text-sm font-medium text-slate-body hover:text-slate-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal"
            >
              {siteConfig.phoneDisplay}
            </a>
          </address>
        </div>

        <div className="mt-12 border-t border-ice-blue/60 pt-8 sm:mt-14 sm:pt-10">
          <p className="text-center text-xs font-medium text-slate-body">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            bursapsikologsancar.com — Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
