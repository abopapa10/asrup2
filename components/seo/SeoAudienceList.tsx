import { FadeIn } from "@/components/FadeIn";

type SeoAudienceListProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  bullets: readonly string[];
  /** Etik vurgu / "tanı koyma değildir" türü kısa, küçük puntolu not */
  note?: string;
};

/**
 * Semptom / başvuru başlıklarını premium ve yargısız bir tonda
 * sunan liste. Bullet karakteri olarak ince turkuaz nokta kullanılır.
 */
export function SeoAudienceList({
  eyebrow,
  heading,
  intro,
  bullets,
  note,
}: SeoAudienceListProps) {
  return (
    <FadeIn as="section" className="max-w-3xl">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
          {intro}
        </p>
      ) : null}

      <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 sm:gap-4">
            <span
              className="mt-[0.6rem] block h-1 w-3 shrink-0 bg-neon-turquoise sm:mt-[0.7rem]"
              aria-hidden
            />
            <span className="text-sm leading-[1.85] text-slate-body sm:text-[0.9375rem] sm:leading-[1.9]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {note ? (
        <p className="mt-8 max-w-2xl border-l border-ice-blue pl-4 text-xs leading-[1.85] text-slate-body/85 sm:mt-10 sm:text-[0.8125rem]">
          {note}
        </p>
      ) : null}
    </FadeIn>
  );
}
