import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { JsonLdScript } from "@/components/JsonLdScript";
import {
  buildFooterSeoFaqJsonLd,
  footerSeoAccordionItems,
} from "@/lib/footer-seo-accordion";

/**
 * Footer üstü SEO accordion — native `<details>`/`<summary>`, JS gerektirmez.
 * FAQPage JSON-LD görünür soru-cevaplarla birebir eşleşir.
 */
export function FooterSeoAccordion() {
  return (
    <>
      <JsonLdScript data={buildFooterSeoFaqJsonLd()} />
      <section
        aria-labelledby="footer-seo-accordion-heading"
        className="border-t border-ice-blue/50 bg-soft-sky/10 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <p className="eyebrow eyebrow-cta mb-3 sm:mb-4">Bursa psikolog rehberi</p>
          <h2
            id="footer-seo-accordion-heading"
            className="heading-section max-w-2xl text-left text-2xl sm:text-[1.75rem]"
          >
            Bursa&apos;da psikolog arayanlar için klinik bilgi
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-[1.85] text-slate-body sm:text-base sm:leading-[1.9]">
            <strong className="font-medium text-slate-charcoal">Bursa psikolog</strong>
            , <strong className="font-medium text-slate-charcoal">psikolog randevu</strong>{" "}
            ve <strong className="font-medium text-slate-charcoal">psikolog bursa</strong>{" "}
            aramalarında süreç, yaklaşım ve uzmanlık hakkında özet bilgiler.
          </p>

          <div className="footer-seo-accordion mt-10 flex flex-col gap-3 sm:mt-12 sm:gap-4">
            {footerSeoAccordionItems.map((item) => (
              <details key={item.heading} className="footer-seo-item group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-soft-sky/20 sm:gap-6 sm:px-7 sm:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-slate-charcoal [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                    {item.heading}
                  </h3>
                  <span
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-ice-blue bg-white transition-all duration-500 ease-gallery group-open:rotate-180 group-open:border-neon-turquoise/60 group-open:bg-neon-turquoise/15"
                    aria-hidden
                  >
                    <ChevronDown
                      strokeWidth={1.25}
                      className="h-4 w-4 text-slate-body"
                    />
                  </span>
                </summary>

                <div className="footer-seo-panel">
                  <div className="footer-seo-panel-inner px-5 pb-5 sm:px-7 sm:pb-7">
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={`${item.heading}-p-${pIndex}`}
                        className={
                          pIndex === 0
                            ? "text-sm leading-[1.9] text-slate-body sm:text-[0.9375rem] sm:leading-[1.92]"
                            : "mt-4 text-sm leading-[1.9] text-slate-body sm:mt-5 sm:text-[0.9375rem] sm:leading-[1.92]"
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-slate-body sm:mt-10">
            <Link href="/bireysel-terapi" className="link-editorial font-semibold">
              Bireysel terapi
            </Link>
            ,{" "}
            <Link href="/online-terapi" className="link-editorial font-semibold">
              online terapi
            </Link>{" "}
            ve{" "}
            <Link
              href="/hizmetler/anksiyete-terapisi-bursa"
              className="link-editorial font-semibold"
            >
              anksiyete terapisi
            </Link>{" "}
            sayfalarından hizmet detaylarına ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
