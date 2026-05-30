import { FadeIn } from "@/components/FadeIn";

type TestArticlePlaceholderProps = {
  testTitle: string;
};

/**
 * Alt sayfa makale alanı — içerik sonraki adımda doldurulacak (~2000 kelime).
 */
export function TestArticlePlaceholder({ testTitle }: TestArticlePlaceholderProps) {
  return (
    <FadeIn as="section" className="border-t border-ice-blue/50 pt-14 sm:pt-20">
      <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Bilimsel çerçeve</p>
      <h2 className="heading-section max-w-3xl">
        {testTitle} hakkında kapsamlı rehber
      </h2>
      <p className="body-lead mt-4 max-w-2xl sm:mt-6">
        Bu bölümde testin kuramsal temeli, kanıt düzeyi, yorumlama sınırları ve
        klinik bağlamda nasıl okunması gerektiği anlatılacaktır. İçerik bir sonraki
        adımda eklenecektir.
      </p>

      <div
        className="mt-10 space-y-8 sm:mt-12"
        aria-hidden
      >
        {[
          "Kuramsal arka plan ve tarihsel gelişim",
          "Boyutlar / alt ölçekler nasıl okunur?",
          "Kanıt düzeyi ve sınırlılıklar",
          "Terapi süreciyle ilişkisi",
        ].map((heading) => (
          <div key={heading} className="space-y-3">
            <div className="h-5 w-48 max-w-full rounded bg-ice-blue/50" />
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-ice-blue/30" />
              <div className="h-3 w-[92%] rounded bg-ice-blue/25" />
              <div className="h-3 w-[85%] rounded bg-ice-blue/20" />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm leading-relaxed text-slate-body/80 sm:mt-12">
        Makale metni yayınlandığında bu alanda kaynakça ve SSS blokları da yer
        alacaktır.
      </p>
    </FadeIn>
  );
}
