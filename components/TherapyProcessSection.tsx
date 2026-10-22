import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Ear,
  Handshake,
  MapPin,
  Route,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const firstSessionBullets = [
  "Yaşanan zorluğun temelinde neler olabilir?",
  "Hangi kavramlar bu tabloyu daha anlaşılır kılar?",
  "İlgili yazılarda hangi başlıklara bakılabilir?",
] as const;

const paceExamples = {
  structured: ["Panik atak", "Yoğun kaygı", "Belirli fobiler"],
  gradual: [
    "Derin duygusal yük",
    "İlişki dinamikleri",
    "Yavaş güven inşası gereken süreçler",
  ],
} as const;

const transformationPoints = [
  "Bazen değişim yavaş ilerler.",
  "Bazen kişi bir noktada farkı daha net görür.",
  "Düzenli devam ve birlikte belirlenen ritim sürecin omurgasıdır.",
] as const;

type TherapyProcessSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow?: string;
  heading?: string;
  headingAs?: "h2" | "h3";
};

export function TherapyProcessSection({
  id = "terapi-sureci",
  headingId = "therapy-process-heading",
  eyebrow = "Psikoloji",
  heading = "Psikolojide değişim nasıl anlaşılır?",
  headingAs = "h2",
}: TherapyProcessSectionProps = {}) {
  const HeadingTag = headingAs;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-ice-blue/50 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
          <HeadingTag id={headingId} className="heading-section">
            {heading}
          </HeadingTag>
          <p className="body-lead mt-4 sm:mt-6">
            Psikoloji literatüründe değişim; tek bir formülle değil, bağlam,
            tempo ve kişiye özgü anlam çerçevesiyle ele alınır. Bu bölüm genel
            bir okuma notudur.
          </p>
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
                <p className="therapy-process-step">Not 01</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                  Anlamayı öne almak
                </h3>
                <p className="mt-1 text-sm font-medium text-neon-turquoise/90">
                  Kavram ve bağlam
                </p>
                <p className="mt-4 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                  Yazılarda önce tabloyu adlandırmak değil; düşünce, duygu ve
                  günlük yaşam arasındaki bağı görünür kılmak hedeflenir.
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
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-charcoal/55 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-medium leading-snug text-white">
                Değişim çoğu zaman tek bir anda değil, zaman içinde okunur.
              </p>
            </div>
            <p className="therapy-process-step mt-5">Not 02</p>
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal">
              Kaynak ve ekol
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              Bilişsel-davranışçı ve insancıl çerçeveler, sitedeki yazılarda
              referans alınan başlıca ekollerdir.
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
                <span>Kanıta dayalı kavramlar</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-5 sm:mt-6">
          <article className="therapy-process-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="therapy-process-step">Not 03</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
                  Tek bir hız yoktur
                </h3>
                <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                  Literatürde bazı tablolar daha yapılandırılmış, bazıları daha
                  yavaş ilerleyen çerçevelerle anlatılır. Bu bir vaat değil,
                  kavramsal ayrımdır.
                </p>
              </div>
              <Route
                strokeWidth={1.25}
                className="hidden h-16 w-16 text-ice-blue lg:block"
                aria-hidden
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="therapy-process-split therapy-process-split-fast">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-charcoal">
                  Daha yapılandırılmış tempo
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {paceExamples.structured.map((item) => (
                    <li key={item} className="therapy-process-tag">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-body">
                  Kişi hazırsa kısa sürede belirgin ilerlemeler mümkün olabilir.
                </p>
              </div>
              <div className="therapy-process-split therapy-process-split-careful">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-charcoal">
                  Daha kontrollü tempo
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {paceExamples.gradual.map((item) => (
                    <li key={item} className="therapy-process-tag">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-body">
                  Zorlanılan noktalar aşamalı ve güvenli biçimde ele alınır.
                </p>
              </div>
            </div>
          </article>
        </FadeIn>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-12">
          <FadeIn
            as="article"
            delay={0.1}
            className="therapy-process-card lg:col-span-5"
          >
            <div className="therapy-process-icon-wrap mb-5">
              <Activity strokeWidth={1.5} className="h-7 w-7" aria-hidden />
            </div>
            <p className="therapy-process-step">Not 04</p>
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
              Zaman içinde biriken fark
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              Psikoloji yazınında değişim çoğu zaman ani bir çözüm olarak değil;
              tekrarlayan farkındalık ve küçük düzenlemelerin birikimi olarak
              anlatılır.
            </p>
            <ul className="mt-5 space-y-3">
              {transformationPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-body"
                >
                  <Sparkles
                    strokeWidth={1.75}
                    className="mt-0.5 h-4 w-4 shrink-0 text-neon-turquoise"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn
            as="article"
            delay={0.12}
            className="therapy-process-card relative overflow-hidden lg:col-span-7"
          >
            <div className="relative z-[1]">
              <div className="flex items-start gap-3">
                <MapPin
                  strokeWidth={1.5}
                  className="mt-1 h-6 w-6 shrink-0 text-neon-turquoise"
                  aria-hidden
                />
                <div>
                  <p className="therapy-process-step">Bursa · Nilüfer</p>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
                    Yazılar ve kişisel iletişim
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                Kaygı, stres ve ilişki dinamikleri üzerine sitede açık kaynaklar
                bulunur. Bana ulaşmak isterseniz iletişim bölümü yeterlidir.
              </p>
              <p className="mt-4 font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal">
                İçerikler genel bilgilendirmedir.
              </p>
              <Link
                href="/#iletisim"
                className="link-editorial mt-6 inline-flex items-center gap-1 text-base font-semibold"
              >
                Bize ulaşın
                <ArrowRight strokeWidth={1.5} className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-soft-sky/50 blur-2xl" />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
