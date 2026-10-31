import { Check } from "lucide-react";

const credentials = [
  "Hacettepe Üniversitesi Psikoloji Bölümü",
  "Birey Odaklı Psikoterapi uzmanlık eğitimi",
  "Bilişsel-davranışçı kuramsal zemin",
  "700+ danışan tecrübesi",
] as const;

/** Sunucu render — opacity:0 animasyonu LCP ölçümünü geciktirmez */
export function CredentialList({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-3 sm:space-y-4 ${className}`} role="list">
      {credentials.map((item) => (
        <li key={item} className="flex items-start gap-3 sm:gap-4">
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-turquoise/20 sm:h-7 sm:w-7"
            aria-hidden
          >
            <Check
              strokeWidth={2.5}
              className="h-3.5 w-3.5 text-neon-turquoise sm:h-4 sm:w-4"
            />
          </span>
          <span className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-lg">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
