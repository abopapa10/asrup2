"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  ATTACHMENT_STYLE_META,
  BOUNDARY_ATTACHMENT_LIKERT,
  BOUNDARY_ATTACHMENT_QUESTIONS,
  BOUNDARY_PROFILE_META,
  calculateBoundaryAttachmentResult,
  createEmptyBoundaryAnswers,
  getCombinedExpertAnalysis,
  type LikertValue,
} from "@/lib/boundary-attachment-test";

type Phase = "intro" | "question" | "result";

const TOTAL = BOUNDARY_ATTACHMENT_QUESTIONS.length;

const relatedTests = [
  {
    href: "/testler/mbti-kisilik-analizi",
    label: "MBTI Kişilik Analizi",
    description: "Dört tercih boyutunda tip profili",
  },
  {
    href: "/testler/bes-faktor-big-five",
    label: "Beş Faktör (Big Five)",
    description: "OCEAN boyutlarında kişilik profili",
  },
] as const;

export function BoundaryAttachmentTestApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyBoundaryAnswers);
  const [transitioning, setTransitioning] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof calculateBoundaryAttachmentResult
  >>(null);

  const question = BOUNDARY_ATTACHMENT_QUESTIONS[index];
  const progress =
    phase === "question"
      ? ((index + 1) / TOTAL) * 100
      : phase === "result"
        ? 100
        : 0;

  const reset = useCallback(() => {
    setPhase("intro");
    setIndex(0);
    setAnswers(createEmptyBoundaryAnswers());
    setTransitioning(false);
    setResult(null);
  }, []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setAnswers(createEmptyBoundaryAnswers());
    setResult(null);
  }, []);

  const selectAnswer = useCallback(
    (value: LikertValue) => {
      if (transitioning || phase !== "question") return;

      const next = [...answers];
      next[index] = value;
      setAnswers(next);
      setTransitioning(true);

      window.setTimeout(() => {
        if (index + 1 >= TOTAL) {
          setResult(calculateBoundaryAttachmentResult(next));
          setPhase("result");
          setTransitioning(false);
          return;
        }
        setIndex((i) => i + 1);
        setTransitioning(false);
      }, 280);
    },
    [answers, index, phase, transitioning]
  );

  const attachmentMeta = result
    ? ATTACHMENT_STYLE_META[result.attachment]
    : null;
  const boundaryMeta = result ? BOUNDARY_PROFILE_META[result.boundary] : null;

  return (
    <div className="mx-auto w-full max-w-xl">
      <header className="text-center">
        <h2 className="font-display text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-charcoal sm:text-4xl lg:text-[2.65rem]">
          İlişki Dinamikleri ve Sınır Testi
        </h2>
        <p className="mt-3 font-display text-lg font-medium tracking-[-0.02em] text-slate-body/90 sm:mt-4 sm:text-xl">
          Bağlanma Stilleri ve Sınır Setleri Analizi
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-body sm:mt-4">
          {TOTAL} madde · Likert ölçeği · Bowlby bağlanma çerçevesi · Tarayıcıda
          hesaplanır
        </p>
      </header>

      {(phase === "question" || phase === "result") && (
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
            <span>
              {phase === "result" ? "Tamamlandı" : `Soru ${index + 1} / ${TOTAL}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div
            className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-ice-blue/80"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-soft-sky via-neon-turquoise to-neon-turquoise/80 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div
        className="editorial-card mt-6 p-5 hover:translate-y-0 sm:mt-7 sm:p-6 lg:p-7"
        role="region"
        aria-live="polite"
        aria-busy={transitioning}
        aria-label="Sınır ve bağlanma testi"
      >
        {phase === "intro" && (
          <div className="text-center">
            <p className="text-sm leading-[1.85] text-slate-body">
              İlişkilerde sınır kurma ve bağlanma eğilimlerinizi değerlendiren
              öz-bildirim ölçeğidir. Her soruda 1–5 arası seçim yapın; sonuçta
              baskın bağlanma stili ve sınır profili gösterilir. Tanı aracı
              değildir.
            </p>
            <button
              type="button"
              onClick={start}
              className="btn-whatsapp mt-5 w-full sm:mt-6"
            >
              Teste Başla
            </button>
          </div>
        )}

        {phase === "question" && question && (
          <div
            key={question.id}
            className={`transition-all duration-300 ease-out ${
              transitioning
                ? "translate-y-2 opacity-0 scale-[0.99]"
                : "translate-y-0 opacity-100 scale-100"
            }`}
          >
            <p className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
              {question.text}
            </p>

            <div
              className="mt-5 grid grid-cols-5 gap-1.5 sm:mt-6 sm:gap-2"
              role="group"
              aria-label="Likert seçenekleri"
            >
              {BOUNDARY_ATTACHMENT_LIKERT.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={transitioning}
                  onClick={() => selectAnswer(opt.value)}
                  title={opt.label}
                  className="flex flex-col items-center rounded-lg border border-ice-blue bg-white px-1 py-2.5 text-center transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/25 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-charcoal disabled:pointer-events-none disabled:opacity-60 sm:px-2 sm:py-3"
                >
                  <span className="font-display text-sm font-semibold text-slate-charcoal sm:text-base">
                    {opt.short}
                  </span>
                </button>
              ))}
            </div>
            <ul className="mt-3 hidden gap-2 text-[0.65rem] leading-tight text-slate-body/70 sm:grid sm:grid-cols-5 sm:text-center">
              {BOUNDARY_ATTACHMENT_LIKERT.map((opt) => (
                <li key={opt.value}>{opt.label}</li>
              ))}
            </ul>
            <p className="mt-3 text-center text-xs text-slate-body/65 sm:hidden">
              1: Kesinlikle katılmıyorum · 5: Kesinlikle katılıyorum
            </p>
          </div>
        )}

        {phase === "result" && result && attachmentMeta && boundaryMeta && (
          <div className="space-y-6">
            <div className="rounded-xl border border-ice-blue/80 bg-soft-sky/20 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Bağlanma stili
              </p>
              <p
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${attachmentMeta.badgeClass}`}
              >
                {attachmentMeta.title}
              </p>
              <p className="mt-2 text-sm text-slate-body">{attachmentMeta.subtitle}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
                <div className="rounded-lg bg-white/80 px-2 py-2">
                  <p className="text-slate-body/70">Kaygı boyutu</p>
                  <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                    %{result.anxietyPct}
                  </p>
                </div>
                <div className="rounded-lg bg-white/80 px-2 py-2">
                  <p className="text-slate-body/70">Kaçınma boyutu</p>
                  <p className="font-display text-lg font-semibold tabular-nums text-slate-charcoal">
                    %{result.avoidancePct}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-ice-blue/80 bg-white p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Sınır profili
              </p>
              <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal">
                {boundaryMeta.title}
              </p>
              <p className="mt-1 text-sm text-slate-body">{boundaryMeta.subtitle}</p>
            </div>

            <div className="border-t border-ice-blue/60 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Uzman özeti
              </p>
              <p className="mt-3 text-sm leading-[1.85] text-slate-body">
                {getCombinedExpertAnalysis(result)}
              </p>
            </div>

            <p className="text-xs leading-relaxed text-slate-body/80">
              ECR veya AAS gibi klinik ölçeklerin yerini tutmaz. Şiddet, istismar
              veya intihar düşüncesi varsa acil profesyonel destek alın.
            </p>

            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border border-ice-blue bg-white px-4 py-2.5 text-sm font-semibold text-slate-charcoal transition-colors hover:border-neon-turquoise/50 hover:bg-soft-sky/25"
            >
              Testi yeniden yap
            </button>

            <div className="border-t border-ice-blue/50 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-body/75">
                Diğer testler
              </p>
              <div className="mt-3 flex flex-col gap-2.5">
                {relatedTests.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-ice-blue bg-white px-4 py-3 transition-all duration-300 ease-gallery hover:border-neon-turquoise/50 hover:bg-soft-sky/20"
                  >
                    <span className="block font-medium text-slate-charcoal">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-body/75">
                      {item.description}
                    </span>
                  </Link>
                ))}
                <Link href="/testler" className="link-editorial mt-1 text-sm font-semibold">
                  Testler merkezine dön
                </Link>
                <Link
                  href="/hizmetler/cift-terapisi-bursa"
                  className="link-editorial text-sm font-semibold"
                >
                  Çift terapisi hizmeti
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
