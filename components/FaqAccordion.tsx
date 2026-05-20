"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
const faqs = [
  {
    question: "Bursa psikolog seans ücretleri ne kadar?",
    answer:
      "Seans ücretleri; uzmanlık alanı, seans süresi ve terapi ekolüne göre mesleki standartlar çerçevesinde belirlenir. Güncel bilgi için WhatsApp veya telefon ile asistanımıza ulaşabilirsiniz.",
  },
  {
    question: "Bir psikoterapi seansı ne kadar sürer ve süreç nasıl işler?",
    answer:
      "Standart seans süresi genellikle 50 dakikadır. İlk görüşmede klinik değerlendirme yapılır; terapi hedefleri, sıklık ve süre birlikte planlanır.",
  },
  {
    question: "Çift terapisine tek başıma başvurabilir miyim?",
    answer:
      "Evet. Partneriniz henüz hazır değilse, ilişki dinamiklerini anlamak için tek başınıza çift terapisine başvurabilirsiniz.",
  },
  {
    question: "Randevu süreci nasıl yürütülüyor?",
    answer:
      "WhatsApp veya telefon ile asistanımıza ulaşarak randevu talebi oluşturabilirsiniz. Bursa Nilüfer kliniği açılışına kadar online bilgilendirme devam eder.",
  },
] as const;

export function FaqAccordion() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="section-mesh border-t border-ice-blue/50 py-20 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-6 lg:max-w-3xl lg:px-12">
        <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">SSS</p>
        <h2 id="faq-heading" className="heading-section text-left">
          Bursa Psikoloji Danışmanlığı — Sıkça Sorulan Sorular
        </h2>

        <div className="mt-10 flex flex-col gap-3 sm:mt-16 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <article
                key={faq.question}
                data-open={isOpen}
                className="faq-item"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-soft-sky/15 sm:gap-6 sm:px-7 sm:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-slate-charcoal"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="flex gap-3 sm:gap-5">
                      <span
                        className="mt-0.5 font-display text-xs font-semibold tabular-nums text-neon-turquoise sm:text-sm"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-ice-blue bg-white transition-all duration-500 ease-gallery ${
                        isOpen
                          ? "rotate-180 border-neon-turquoise/60 bg-neon-turquoise/15"
                          : ""
                      }`}
                    >
                      <ChevronDown
                        strokeWidth={1.25}
                        className="h-4 w-4 text-slate-body"
                        aria-hidden
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`accordion-panel ${isOpen ? "accordion-panel-open" : ""}`}
                >
                  <div className="accordion-panel-inner">
                    <div className="px-5 pb-5 pt-0 sm:px-7 sm:pb-7">
                      <div className="faq-answer max-w-prose">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
