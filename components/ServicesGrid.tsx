import { ArrowUpRight, Brain, Heart, Video } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/lib/services";

const icons = {
  "bireysel-terapi": Brain,
  "cift-terapisi": Heart,
  "online-terapi": Video,
} as const;

export function ServicesGrid() {
  return (
    <section
      id="hizmetler"
      aria-labelledby="services-heading"
      className="section-mesh border-t border-ice-blue/40 py-20 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn>
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Uzmanlık Alanları</p>
          <h2 id="services-heading" className="heading-section max-w-2xl">
            Çalışma Alanlarımız ve Hizmetler
          </h2>
          <p className="body-lead mt-4 max-w-xl sm:mt-6">
            Bursa psikolog hizmetlerimiz; bireysel terapi, çift terapisi ve online
            terapi alanlarında, Nilüfer&apos;de yüz yüze ve uzaktan seçeneklerle.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.slug as keyof typeof icons];
            return (
              <FadeIn key={service.slug} delay={index * 0.05} as="article">
                <div className="editorial-card group">
                  <div className="mb-6 flex items-start justify-between sm:mb-8">
                    <div className="flex h-10 w-10 items-center justify-center border border-ice-blue bg-soft-sky/25 sm:h-11 sm:w-11">
                      <Icon
                        strokeWidth={1.25}
                        className="h-5 w-5 text-slate-charcoal"
                        aria-hidden
                      />
                    </div>
                    <ArrowUpRight
                      strokeWidth={1.25}
                      className="h-4 w-4 text-ice-blue transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-turquoise"
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.8] text-slate-body sm:mt-4 sm:leading-[1.85]">
                    {service.teaser}
                  </p>
                  <Link
                    href={`/${service.slug}`}
                    className="link-editorial mt-8 sm:mt-10"
                  >
                    Detayları incele
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
