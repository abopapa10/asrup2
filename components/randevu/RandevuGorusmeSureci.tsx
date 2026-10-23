import {
  ClipboardCheck,
  Ear,
  Handshake,
  Route,
  Target,
} from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { randevuGorusmeSureci as copy } from "@/lib/seo-content/nilufer-bursa-psikolog-randevu";

const frameIcons = [Ear, ClipboardCheck] as const;

/**
 * Randevu sayfası görüşme süreci — TherapyProcessSection kart dokusu,
 * somut ilk görüşme / çerçeve / planlama içeriği.
 */
export function RandevuGorusmeSureci() {
  return (
    <section
      id="gorusme-sureci"
      aria-labelledby="gorusme-sureci-heading"
      className="border-t border-ice-blue/50 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{copy.eyebrow}</p>
          <h2 id="gorusme-sureci-heading" className="heading-section">
            {copy.heading}
          </h2>
          <p className="body-lead mt-4 sm:mt-6">{copy.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-12">
          <FadeIn
            as="article"
            className="therapy-process-card relative overflow-hidden lg:col-span-7"
          >
            <div className="therapy-process-card-accent" aria-hidden />
            <div className="relative z-[1] flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="therapy-process-icon-wrap shrink-0">
                <Handshake strokeWidth={1.5} className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="therapy-process-step">{copy.first.step}</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                  {copy.first.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-neon-turquoise/90">
                  {copy.first.subtitle}
                </p>
                <p className="mt-4 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                  {copy.first.body}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {copy.first.points.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-body"
                    >
                      <Target
                        strokeWidth={1.75}
                        className="mt-0.5 h-4 w-4 shrink-0 text-neon-turquoise"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            as="article"
            delay={0.05}
            className="therapy-process-card lg:col-span-5"
          >
            <div className="relative h-36 overflow-hidden rounded-lg sm:h-40">
              <Image
                src="/images/stres.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-charcoal/55 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-medium leading-snug text-white">
                {copy.frame.caption}
              </p>
            </div>
            <p className="therapy-process-step mt-5">{copy.frame.step}</p>
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal">
              {copy.frame.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              {copy.frame.body}
            </p>
            <div className="mt-5 grid gap-3">
              {copy.frame.pills.map((item, index) => {
                const Icon = frameIcons[index] ?? ClipboardCheck;
                return (
                  <div key={item} className="therapy-process-pill">
                    <Icon
                      strokeWidth={1.5}
                      className="h-4 w-4 shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-5 sm:mt-6">
          <article className="therapy-process-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="therapy-process-step">{copy.plan.step}</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
                  {copy.plan.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                  {copy.plan.body}
                </p>
              </div>
              <Route
                strokeWidth={1.25}
                className="hidden h-16 w-16 text-ice-blue lg:block"
                aria-hidden
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.plan.splits.map((item, index) => (
                <div
                  key={item.label}
                  className={
                    index === 0
                      ? "therapy-process-split therapy-process-split-fast"
                      : "therapy-process-split therapy-process-split-careful"
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-charcoal">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal">
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-body">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
