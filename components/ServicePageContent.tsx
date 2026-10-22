import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { JsonLdScript } from "@/components/JsonLdScript";
import { LandingHero } from "@/components/LandingHero";
import { PortraitFrame } from "@/components/PortraitFrame";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";
import { buildServiceJsonLd } from "@/lib/page-structured-data";
import type { Service } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type ServicePageContentProps = {
  service: Service;
  /** Ana sayfa hero + çerçeveli portre yerleşimi */
  homeLikeLayout?: boolean;
};

const homeLikeProof = [
  "Hacettepe Üniversitesi Psikoloji",
  "Nilüfer Özlüce ofis",
  `${GOOGLE_REVIEW_COUNT} Google yorumu`,
  "Yüz yüze ve online",
] as const;

export function ServicePageContent({
  service,
  homeLikeLayout = false,
}: ServicePageContentProps) {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Konular", href: "/#hizmetler" },
    { label: service.title },
  ];

  return (
    <>
      <JsonLdScript data={buildServiceJsonLd(service)} />

      {homeLikeLayout ? (
        <LandingHero
          size="page"
          eyebrow="Konu"
          title={service.title}
          subtitle="Psikolog A. Alparslan Sancar · Hacettepe · Nilüfer Özlüce"
          lead={service.intro}
          proofPoints={homeLikeProof}
          whatsappSource={`${service.slug}-hero`}
          portraitSrc={siteConfig.images.portraitHeroBand}
          portraitAlt={`${service.title} — Psikolog A. Alparslan Sancar, Nilüfer Özlüce`}
          topSlot={<SeoBreadcrumb items={breadcrumbItems} />}
        />
      ) : null}

      <article
        className={`border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32 ${
          homeLikeLayout ? "border-b" : "border-t"
        }`}
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
          {homeLikeLayout ? null : (
            <FadeIn instant>
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-body">
                <Link href="/" className="link-editorial">
                  Ana Sayfa
                </Link>
                <span className="mx-2 text-ice-blue" aria-hidden>
                  /
                </span>
                <Link href="/#hizmetler" className="link-editorial">
                  Konular
                </Link>
                <span className="mx-2 text-ice-blue" aria-hidden>
                  /
                </span>
                <span className="text-slate-charcoal">{service.title}</span>
              </nav>

              <p className="eyebrow eyebrow-cta mb-4">Konu</p>
              <h1 className="heading-section max-w-3xl">{service.title}</h1>
              <p className="body-lead mt-6 max-w-2xl">{service.intro}</p>
            </FadeIn>
          )}

          <div
            className={`grid gap-5 md:grid-cols-3 ${
              homeLikeLayout ? "" : "mt-12 sm:mt-16"
            } sm:gap-6`}
          >
            {service.highlights.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05} as="section">
                <div className="editorial-card h-full">
                  <h2 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 grid items-start gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                Süreç Nasıl İşler?
              </h2>
              <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-[1.85] text-slate-body sm:text-base">
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="body-lead mt-8 max-w-2xl">{service.closing}</p>
            </FadeIn>

            {homeLikeLayout ? (
              <FadeIn
                delay={0.08}
                className="mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-none"
              >
                <PortraitFrame
                  src={siteConfig.images.portraitAbout}
                  alt="Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
                  variant="clinical"
                  align="right"
                  imageClassName="object-cover object-[50%_18%]"
                />
              </FadeIn>
            ) : null}
          </div>

          <div className="mt-12 sm:mt-16">
            <CtaBlock variant="banner" />
          </div>
        </div>
      </article>
    </>
  );
}
