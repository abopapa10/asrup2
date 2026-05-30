import { FadeIn } from "@/components/FadeIn";

export function TestHubHero() {
  return (
    <FadeIn as="div" className="mx-auto max-w-3xl text-center">
      <p className="eyebrow eyebrow-cta mb-5 inline-block sm:mb-6">
        Psikolojik Testler Merkezi
      </p>
      <header>
      <h1 className="font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-charcoal sm:text-[2.75rem] lg:text-[3.25rem]">
        Kişilik Analizi Testleri
      </h1>
      <p className="mt-4 font-display text-base font-medium leading-snug tracking-[-0.02em] text-slate-body/90 sm:mt-5 sm:text-lg lg:text-xl">
        Bilimsel ve Akademik Temelli MBTI ve Psikolojik Değerlendirme Ölçekleri
      </p>
      <p className="body-lead mx-auto mt-5 max-w-2xl sm:mt-6">
        Tüm testler tarayıcınızda çalışır; sonuçlar cihazınızda hesaplanır. Klinik
        tanı aracı değildir; öz-farkındalık ve psikoeğitim amaçlıdır.
      </p>
      </header>
    </FadeIn>
  );
}
