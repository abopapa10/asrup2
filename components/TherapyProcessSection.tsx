import {
  ArrowRight,
  ClipboardCheck,
  Ear,
  Handshake,
  Route,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { homeProcess } from "@/lib/home-seo-content";

const firstSessionBullets = [
  "Ne olduğu ve günlük yaşama nasıl yansıdığı",
  "Yüz yüze veya online tercih",
  "Tempo, sıklık ve gizlilik çerçevesi",
] as const;

type TherapyProcessSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow?: string;
  heading?: string;
  headingAs?: "h2" | "h3";
};

export function TherapyProcessSection({
  id = "gorusme-sureci",
  headingId = "therapy-process-heading",
  eyebrow = homeProcess.eyebrow,
  heading = homeProcess.heading,
  headingAs = "h2",
}: TherapyProcessSectionProps = {}) {
  const HeadingTag = headingAs;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-ice-blue/50 bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
          <HeadingTag id={headingId} className="heading-section">
            {heading}
          </HeadingTag>
          <p className="body-lead mt-4 sm:mt-6">{homeProcess.intro}</p>
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
                <p className="therapy-process-step">Adım 01</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                  İlk görüşme
                </h3>
                <p className="mt-1 text-sm font-medium text-neon-turquoise/90">
                  Dinleme ve çerçeve
                </p>
                <p className="mt-4 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                  İlk görüşmede hikâye, tetikleyiciler ve beklenti konuşulur.
                  Amaç etiket yapıştırmak değil; çalışmanın uygun olup olmadığını
                  birlikte görmektir.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {firstSessionBullets.map((item) => (
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
                <p className="mt-5 rounded-lg border border-ice-blue/80 bg-soft-sky/25 px-4 py-3 text-sm leading-relaxed text-slate-body">
                  Acil tıbbi durumlarda 112 ve yerel acil sağlık hizmetleri
                  önceliklidir; sitedeki yazılar bunun yerine geçmez.
                </p>
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
                alt="Sakin bir çalışma masası — psikolojik görüşme temposunu temsilen"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-charcoal/55 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-medium leading-snug text-white">
                Tempo kişiye göre belirlenir; tek bir hız yoktur.
              </p>
            </div>
            <p className="therapy-process-step mt-5">Adım 02</p>
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal">
              İhtiyaçların değerlendirilmesi
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              Bireysel mi, çift mi, yüz yüze mi online mı — bu kararlar
              ihtiyaçla birlikte netleşir. Uygun değilse başka bir yol
              önerilir.
            </p>
            <div className="mt-5 grid gap-3">
              <div className="therapy-process-pill">
                <Ear strokeWidth={1.5} className="h-4 w-4 shrink-0" aria-hidden />
                <span>Ölçülü ve açık bir dil</span>
              </div>
              <div className="therapy-process-pill">
                <ClipboardCheck
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0"
                  aria-hidden
                />
                <span>Gizlilik ve etik sınır</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-5 sm:mt-6">
          <article className="therapy-process-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="therapy-process-step">Adım 03</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
                  Hedef ve seans düzeni
                </h3>
                <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                  Hedefler birlikte yazılır. Seanslar çoğu zaman düzenli bir
                  ritimle ilerler; süre ve sıklık iletişimde netleşir. Kesin
                  seans sayısı veya iyileşme tarihi verilmez. Ara değerlendirme
                  gerektiğinde tempo yeniden konuşulur; süreç kişiye kilitlenmiş
                  bir protokol değildir.
                </p>
              </div>
              <Route
                strokeWidth={1.25}
                className="hidden h-16 w-16 text-ice-blue lg:block"
                aria-hidden
              />
            </div>
            <Link
              href="/#iletisim"
              className="link-editorial mt-6 inline-flex items-center gap-1 text-base font-semibold"
            >
              İletişime geçin
              <ArrowRight strokeWidth={1.5} className="h-4 w-4" aria-hidden />
            </Link>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
