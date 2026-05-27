import { FadeIn } from "@/components/FadeIn";

type SeoLocalContextProps = {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
};

/**
 * Bursa / Nilüfer / Osmangazi gibi yerel bağlamı insani bir
 * dille aktaran metin bloğu. Tek sütun okuma genişliği,
 * yüksek satır aralığı.
 */
export function SeoLocalContext({
  eyebrow,
  heading,
  paragraphs,
}: SeoLocalContextProps) {
  return (
    <FadeIn as="section" className="max-w-3xl">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">{eyebrow}</p>
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
        {paragraphs.map((p, index) => (
          <p
            key={index}
            className="text-sm leading-[1.9] text-slate-body sm:text-[0.9375rem]"
          >
            {p}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}
