import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { PortraitFrame } from "@/components/PortraitFrame";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { contactCopy } from "@/lib/contact-copy";
import { siteConfig } from "@/lib/site-config";

type LandingHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  lead?: string;
  extraParagraphs?: readonly string[];
  proofPoints?: readonly string[];
  showCta?: boolean;
  whatsappSource: string;
  portraitSrc: string;
  portraitAlt: string;
  titleId?: string;
  /** Ana sayfa büyük display; diğer sayfalar uzun H1 için biraz daha sıkı. */
  size?: "home" | "page";
  topSlot?: ReactNode;
  /** Lead/paragrafların altında, CTA öncesi (ör. konum bağlantısı). */
  leadAfter?: ReactNode;
};

const titleClass = {
  home: "heading-display text-[2rem] leading-[1.08] sm:text-[2.65rem] lg:text-[3.25rem] xl:text-[3.5rem]",
  page: "heading-display text-[1.85rem] leading-[1.1] sm:text-[2.35rem] lg:text-[2.75rem]",
} as const;

/**
 * Ana sayfa hero yerleşimi: mobilde alt başlık → fotoğraf → açıklama;
 * masaüstünde fotoğraf sağ sütunda.
 */
export function LandingHero({
  eyebrow,
  title,
  subtitle,
  lead,
  extraParagraphs,
  proofPoints,
  showCta = true,
  whatsappSource,
  portraitSrc,
  portraitAlt,
  titleId = "hero-heading",
  size = "page",
  topSlot,
  leadAfter,
}: LandingHeroProps) {
  return (
    <section
      aria-labelledby={titleId}
      className="relative overflow-x-hidden border-b border-ice-blue/40 bg-hero-mesh"
    >
      <div
        className="pointer-events-none absolute left-0 top-20 hidden h-px w-24 bg-neon-turquoise/70 lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-32 hidden h-32 w-px bg-gradient-to-b from-neon-turquoise/50 to-transparent lg:block"
        aria-hidden
      />

      {topSlot ? (
        <div className="mx-auto max-w-editorial px-5 pt-8 sm:px-6 sm:pt-10 lg:px-12">
          {topSlot}
        </div>
      ) : null}

      <div
        className={`mx-auto grid max-w-editorial items-center gap-6 px-5 sm:gap-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:grid-rows-[auto_auto_auto] lg:gap-x-16 lg:gap-y-8 lg:px-12 xl:grid-cols-[minmax(0,1fr)_19rem] ${
          topSlot
            ? "py-10 sm:py-16 lg:py-20 xl:py-24"
            : "py-16 sm:py-24 lg:py-28 xl:py-32"
        }`}
      >
        <div className="max-w-2xl lg:col-start-1 lg:row-start-1">
          <p className="eyebrow eyebrow-cta mb-5 sm:mb-7">{eyebrow}</p>

          <h1 id={titleId} className={titleClass[size]}>
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-5 max-w-2xl text-lg font-medium leading-snug tracking-[-0.02em] text-slate-charcoal sm:mt-6 sm:text-xl lg:text-[1.5rem] lg:leading-[1.45]">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mx-auto w-full max-w-[15.5rem] sm:max-w-[17rem] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-center">
          <PortraitFrame
            src={portraitSrc}
            alt={portraitAlt}
            variant="compact"
            align="right"
            priority={size === "home"}
            imageClassName="object-cover object-[50%_18%]"
          />
        </div>

        <div className="max-w-2xl lg:col-start-1 lg:row-start-2">
          {lead ? <p className="body-lead max-w-xl">{lead}</p> : null}

          {extraParagraphs && extraParagraphs.length > 0 ? (
            <div className={`max-w-xl space-y-4 ${lead ? "mt-4" : ""}`}>
              {extraParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {leadAfter}

          {proofPoints && proofPoints.length > 0 ? (
            <ul
              className={`flex max-w-2xl flex-wrap gap-x-5 gap-y-2 ${
                lead || extraParagraphs?.length ? "mt-6 sm:mt-7" : ""
              }`}
            >
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-slate-charcoal"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-turquoise"
                  />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {showCta ? (
          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-4 lg:col-start-1 lg:row-start-3">
            <WhatsAppLink source={whatsappSource} className="btn-whatsapp sm:flex-1">
              <WhatsAppIcon />
              {contactCopy.whatsappLabel}
            </WhatsAppLink>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="btn-phone sm:flex-1"
            >
              <Phone strokeWidth={1.25} className="h-5 w-5 shrink-0" />
              {contactCopy.phoneLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
