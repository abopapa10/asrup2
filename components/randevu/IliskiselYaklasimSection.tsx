import { User, UserRound, Users } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { ciftRandevuRelational as copy } from "@/lib/seo-content/bursa-cift-terapisi-randevu";

const triadIcons = {
  Ben: User,
  Sen: UserRound,
  Biz: Users,
} as const;

const { pointOne, pointTwo, pointThree, pointFour } = copy;

/**
 * Çift terapisi randevu sayfası — ilişkisel yaklaşım açıklaması.
 * Mevcut kart dokusu korunur; içerik genel bilgilendirmedir.
 */
export function IliskiselYaklasimSection() {
  return (
    <section
      id="iliskisel-yaklasim"
      aria-labelledby="iliskisel-yaklasim-heading"
      className="border-t border-ice-blue/40 bg-mesh-sky py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{copy.eyebrow}</p>
            <h2 id="iliskisel-yaklasim-heading" className="heading-section">
              {copy.heading}
            </h2>
            <p className="body-lead mt-4 sm:mt-6">{copy.intro}</p>
            <p className="mt-5 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
              {copy.core}
            </p>
          </FadeIn>

          <FadeIn
            as="article"
            delay={0.05}
            className="therapy-process-card"
          >
            <div className="relative h-44 overflow-hidden rounded-lg sm:h-52">
              <Image
                src={copy.articleCard.imageSrc}
                alt={copy.articleCard.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-charcoal/55 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-medium leading-snug text-white">
                {copy.articleCard.caption}
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-12">
          <FadeIn
            as="article"
            className="therapy-process-card relative overflow-hidden lg:col-span-7"
          >
            <div className="therapy-process-card-accent" aria-hidden />
            <p className="therapy-process-step">{pointOne.step}</p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
              {pointOne.title}
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
              {pointOne.body}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-charcoal">
              {pointOne.exampleHeading}
            </p>
            <ul className="mt-3 space-y-2.5">
              {pointOne.example.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-body"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-turquoise"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-[1.85] text-slate-body">
              {pointOne.close}
            </p>
          </FadeIn>

          <FadeIn
            as="article"
            delay={0.05}
            className="therapy-process-card lg:col-span-5"
          >
            <div className="relative mb-5 h-36 overflow-hidden rounded-lg sm:h-40">
              <Image
                src={copy.photoSrc}
                alt={copy.photoAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-charcoal/55 to-transparent" />
            </div>
            <p className="therapy-process-step">{pointTwo.step}</p>
            <h3 className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
              {pointTwo.title}
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-slate-body">
              {pointTwo.body}
            </p>
            <div className="mt-5 grid gap-3">
              {pointTwo.distinction.map((item) => (
                <div key={item.label} className="therapy-process-pill">
                  <span>
                    <span className="font-medium text-slate-charcoal">
                      {item.label}:{" "}
                    </span>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-[1.85] text-slate-body">
              {pointTwo.close}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-5 sm:mt-6">
          <article className="therapy-process-card">
            <p className="therapy-process-step">{pointThree.step}</p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
              {pointThree.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-[1.85] text-slate-body">
              {pointThree.body}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {pointThree.triad.map((item, index) => {
                const Icon =
                  triadIcons[item.label as keyof typeof triadIcons] ?? User;
                return (
                  <div
                    key={item.label}
                    className={
                      index === 2
                        ? "therapy-process-split therapy-process-split-fast"
                        : "therapy-process-split therapy-process-split-careful"
                    }
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="h-5 w-5 text-slate-charcoal"
                      aria-hidden
                    />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-charcoal">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-body">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-[1.85] text-slate-body">
              {pointThree.close}
            </p>
          </article>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-5 sm:mt-6">
          <article className="therapy-process-card">
            <p className="therapy-process-step">{pointFour.step}</p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
              {pointFour.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              {pointFour.body}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {pointFour.theories.map((item) => (
                <div key={item.label} className="therapy-process-pill">
                  <span>
                    <span className="font-medium text-slate-charcoal">
                      {item.label}:{" "}
                    </span>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
