import { Check, Phone } from "lucide-react";
import { ContactLocationSection } from "@/components/ContactLocationSection";
import { JsonLdScript } from "@/components/JsonLdScript";
import { PortraitFrame } from "@/components/PortraitFrame";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoCTA } from "@/components/seo/SeoCTA";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { SeoTestimonial } from "@/components/seo/SeoTestimonial";
import { IliskiselYaklasimSection } from "@/components/randevu/IliskiselYaklasimSection";
import { RandevuGorusmeSureci } from "@/components/randevu/RandevuGorusmeSureci";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { contactCopy } from "@/lib/contact-copy";
import { buildCiftTerapisiRandevuJsonLd } from "@/lib/page-structured-data";
import {
  ciftRandevuContact,
  ciftRandevuFaqs,
  ciftRandevuGorusme,
  ciftRandevuHero,
  ciftRandevuIdentity,
  ciftRandevuProcess,
  ciftRandevuReviews,
} from "@/lib/seo-content/bursa-cift-terapisi-randevu";
import { siteConfig } from "@/lib/site-config";

const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: ciftRandevuHero.h1 },
];

export function CiftTerapisiRandevuLandingPage() {
  return (
    <>
      <JsonLdScript data={buildCiftTerapisiRandevuJsonLd()} />

      <section
        aria-labelledby="hero-heading"
        className="relative overflow-x-hidden border-b border-ice-blue/40 bg-hero-mesh"
      >
        <div className="mx-auto max-w-editorial px-5 pt-8 sm:px-6 sm:pt-10 lg:px-12">
          <SeoBreadcrumb items={breadcrumbItems} />
        </div>

        <div className="mx-auto max-w-editorial px-5 py-10 sm:px-6 sm:py-16 lg:px-12 lg:py-20 xl:py-24">
          <p className="eyebrow eyebrow-cta mb-5 sm:mb-7">
            {ciftRandevuHero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="heading-display max-w-4xl text-[1.85rem] leading-[1.1] sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            {ciftRandevuHero.h1}
          </h1>
          <p className="body-lead mt-6 max-w-2xl">{ciftRandevuHero.lead}</p>

          <ul className="mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 sm:mt-7">
            {ciftRandevuHero.proofPoints.map((point) => (
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

          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <WhatsAppLink
              source="cift-randevu-hero"
              className="btn-whatsapp sm:flex-1"
            >
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
        </div>
      </section>

      <section
        aria-labelledby="randevu-identity-heading"
        className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-editorial items-start gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:gap-20">
          <div>
            <h2 id="randevu-identity-heading" className="heading-section">
              {ciftRandevuIdentity.heading}
            </h2>

            <div className="mx-auto mt-8 w-full max-w-[20rem] sm:mt-10 sm:max-w-[22rem] lg:hidden">
              <PortraitFrame
                src={siteConfig.images.portraitHeroBand}
                alt="Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
                variant="clinical"
                align="left"
                imageClassName="object-cover object-[50%_18%]"
              />
            </div>

            <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5" role="list">
              {ciftRandevuIdentity.credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 sm:gap-4">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-turquoise/20 sm:h-7 sm:w-7"
                    aria-hidden
                  >
                    <Check
                      strokeWidth={2.5}
                      className="h-3.5 w-3.5 text-neon-turquoise sm:h-4 sm:w-4"
                    />
                  </span>
                  <span className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-xl text-sm leading-[1.9] text-slate-body sm:mt-10 sm:text-base">
              {ciftRandevuIdentity.bio}
            </p>
          </div>

          <div className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:sticky lg:top-28 lg:block lg:max-w-none">
            <PortraitFrame
              src={siteConfig.images.portraitHeroBand}
              alt="Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
              variant="clinical"
              align="right"
              imageClassName="object-cover object-[50%_18%]"
            />
          </div>
        </div>

        <div
          id="yorumlar"
          className="mx-auto mt-12 max-w-editorial scroll-mt-28 px-5 sm:mt-16 sm:px-6 lg:mt-20 lg:px-12"
        >
          <SeoTestimonial
            hideHeader
            supportingCarousel
            featuredId={ciftRandevuReviews.featuredId}
            supportingIds={ciftRandevuReviews.supportingIds}
          />
        </div>
      </section>

      <ContactLocationSection
        id="randevu-iletisim"
        headingId="randevu-contact-heading"
        eyebrow={ciftRandevuContact.eyebrow}
        heading={ciftRandevuContact.heading}
        intro={ciftRandevuContact.intro}
        whatsappSource="cift-randevu-contact-card"
        tone="white"
      />

      <section
        aria-labelledby="randevu-process-heading"
        className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          <h2 id="randevu-process-heading" className="heading-section max-w-3xl">
            {ciftRandevuProcess.heading}
          </h2>
          <p className="body-lead mt-5 max-w-3xl sm:mt-6">
            {ciftRandevuProcess.intro}
          </p>

          <div className="mt-12 grid items-start gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                {ciftRandevuProcess.infoHeading}
              </h3>
              <p className="mt-5 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
                {ciftRandevuProcess.infoBody}
              </p>
              <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-4">
                <WhatsAppLink
                  source="cift-randevu-bilgi"
                  className="btn-whatsapp sm:flex-1"
                >
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
            </div>

            <div className="mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-none">
              <PortraitFrame
                src={ciftRandevuProcess.photoSrc}
                alt={ciftRandevuProcess.photoAlt}
                variant="clinical"
                align="right"
                imageClassName="object-cover object-[50%_18%]"
              />
            </div>
          </div>
        </div>
      </section>

      <RandevuGorusmeSureci copy={ciftRandevuGorusme} />

      <IliskiselYaklasimSection />

      <article className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-editorial space-y-20 px-5 sm:space-y-28 sm:px-6 lg:px-12 lg:space-y-32">
          <SeoFaq heading="Sık Sorulan Sorular" items={ciftRandevuFaqs} />

          <SeoCTA
            eyebrow="İletişim alanı"
            heading="Randevu İçin Bize Ulaşın"
            caption="Uygun tarih-saat, yüz yüze veya online ve Nilüfer Özlüce konumu WhatsApp veya telefonla netleşir. Aynı gün içinde dönüş."
            whatsappSource="cift-randevu-landing-cta"
          />
        </div>
      </article>
    </>
  );
}
