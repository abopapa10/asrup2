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
  "Öncelikle hangi konulara odaklanmak daha faydalı olur?",
  "İlerleyen seanslarda nasıl bir yol izlenebilir?",
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

export function TherapyProcessSection() {
  return (
    <section
      id="terapi-sureci"
      aria-labelledby="therapy-process-heading"
      className="mt-10 border-t border-ice-blue/50 bg-white pt-24 pb-16 sm:mt-14 sm:pt-32 sm:pb-24 lg:mt-16 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Süreç</p>
          <h2 id="therapy-process-heading" className="heading-section">
            Terapi Süreci Nasıl İşler?
          </h2>
          <p className="body-lead mt-4 sm:mt-6">
            Psikoterapi kişiye özel ilerleyen, güven ilişkisine dayalı ve zamana
            yayılan bir süreçtir. Tek bir yöntem yerine, ihtiyaçlarınıza uygun bir
            yol haritası birlikte oluşturulur.
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
                <p className="therapy-process-step">Adım 01</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
                  İlk terapi seansı
                </h3>
                <p className="mt-1 text-sm font-medium text-neon-turquoise/90">
                  Tanışma ve değerlendirme
                </p>
                <p className="mt-4 text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                  Karşılıklı tanışma, başvuru nedenini anlama ve yaşam
                  dinamiklerini değerlendirme bu görüşmenin merkezindedir.
                  Görüşme sonunda birlikte genel bir çerçeve oluşturulur.
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
                  Gerekirse ek uzman görüşü veya hastane yönlendirmesi ihtiyacı
                  ilk görüşmede açıkça konuşulur.
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
                Her süreç farklı hızda; önemli olan doğru ritmi birlikte kurmak.
              </p>
            </div>
            <p className="therapy-process-step mt-5">Adım 02</p>
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal">
              İlk seanstan sonra
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              Elde edilen bilgiler üzerinde çalışılır; ikinci seanstan itibaren
              uygun noktalarda terapötik müdahalelere kademeli geçilir.
            </p>
            <div className="mt-5 grid gap-3">
              <div className="therapy-process-pill">
                <Ear strokeWidth={1.5} className="h-4 w-4 shrink-0" aria-hidden />
                <span>Danışanı dikkatle dinlemek ve süreci anlamak</span>
              </div>
              <div className="therapy-process-pill">
                <ClipboardCheck
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0"
                  aria-hidden
                />
                <span>Doğru zamanda doğru müdahaleyi uygulamak</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08} className="mt-5 sm:mt-6">
          <article className="therapy-process-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="therapy-process-step">Adım 03</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
                  Her danışanın terapi süreci aynı değildir
                </h3>
                <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                  Önemli olan tek bir yöntem değil; ihtiyaç, hız ve hazır oluşa
                  uygun şekilde birlikte ilerlemektir.
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
            <p className="therapy-process-step">Adım 04</p>
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
              Süreç içinde gelişen dönüşüm
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-slate-body">
              Psikoterapi çoğu zaman anlık bir çözüm değil; düzenli görüşmelerle
              zaman içinde fark edilen bir değişimdir — tıpkı fizik tedavide
              küçük ama düzenli çalışmaların birikimi gibi.
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
                  <p className="therapy-process-step">Bursa &amp; online</p>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal">
                    Psikolog desteği almayı düşünüyorsanız
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem]">
                Kaygı, panik atak, stres, ilişki problemleri veya yaşamınızı
                yoran başka konularda; sizi dikkatle anlamak, ihtiyaçlarınıza
                uygun bir yol belirlemek ve süreci güvenle ilerletmek hedefimizdir.
              </p>
              <p className="mt-4 font-display text-base font-semibold tracking-[-0.02em] text-slate-charcoal">
                Her terapi süreci kişiye özeldir.
              </p>
              <Link
                href="/iletisim"
                className="link-editorial mt-6 inline-flex items-center gap-1 text-base font-semibold"
              >
                İletişime geçin
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
