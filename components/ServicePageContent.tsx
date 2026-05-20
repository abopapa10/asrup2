import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import type { Service } from "@/lib/services";

type ServicePageContentProps = {
  service: Service;
};

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <article className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-body">
            <Link href="/" className="link-editorial">
              Ana Sayfa
            </Link>
            <span className="mx-2 text-ice-blue" aria-hidden>
              /
            </span>
            <Link href="/#hizmetler" className="link-editorial">
              Hizmetler
            </Link>
            <span className="mx-2 text-ice-blue" aria-hidden>
              /
            </span>
            <span className="text-slate-charcoal">{service.title}</span>
          </nav>

          <p className="eyebrow eyebrow-cta mb-4">Hizmet</p>
          <h1 className="heading-section max-w-3xl">{service.title}</h1>
          <p className="body-lead mt-6 max-w-2xl">{service.intro}</p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
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

        <FadeIn className="mt-12 sm:mt-16">
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

        <div className="mt-12 sm:mt-16">
          <CtaBlock variant="banner" />
        </div>
      </div>
    </article>
  );
}
