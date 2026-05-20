"use client";

import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const credentials = [
  "Hacettepe Üniversitesi Psikoloji Bölümü",
  "700'ün üzerinde danışan tecrübesi",
  "Yalnızca bilimsel olarak temellenmiş yöntemler",
] as const;

export function CredentialList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className={`credential-list mt-8 space-y-4 sm:mt-10 sm:space-y-5 ${revealed ? "credential-list-visible" : ""}`}
      role="list"
    >
      {credentials.map((item) => (
        <li key={item} className="credential-reveal flex items-start gap-3 sm:gap-4">
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
