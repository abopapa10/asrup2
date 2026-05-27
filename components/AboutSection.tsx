import { CredentialList } from "@/components/CredentialList";
import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section
      id="hakkimda"
      aria-labelledby="about-heading"
      className="border-b border-ice-blue/40 bg-white"
    >
      <div className="mx-auto max-w-editorial px-5 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <FadeIn>
              <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Hakkımda</p>
              <h2 id="about-heading" className="heading-section">
                Psk. A. Alparslan Sancar
              </h2>
            </FadeIn>

            <div className="mx-auto my-8 w-full max-w-[20rem] sm:max-w-[22rem] lg:hidden">
              <PortraitFrame
                src={siteConfig.images.portraitClinical}
                alt="Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı"
                variant="clinical"
                align="left"
              />
            </div>

            <CredentialList />

            <FadeIn delay={0.2} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Psikolog A. Alparslan Sancar olarak, yetişkin bireyler ve
                çiftlerle psikoterapi süreçleri yürütüyorum. Klinik çalışmamda
                temel amacım; danışanın yalnızca semptomunu değil, o semptomu
                üreten yaşam örüntülerini de birlikte anlamlandırmak.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Eğitim temelim Hacettepe Üniversitesi Psikoloji Bölümü&apos;ne
                dayanır; süreç içinde Bilişsel Davranışçı, Psikodinamik ve
                Birey Odaklı yaklaşımları klinik ihtiyaç doğrultusunda entegre
                edecek şekilde geliştirdim. Bursa Nilüfer kliniğimde yüz yüze,
                gerektiğinde online formatta sürdürülebilir terapi planları
                oluşturuyorum.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
              <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                Çalışma Prensiplerim
              </h3>
              <ul className="space-y-3 text-sm leading-[1.9] text-slate-body sm:text-base">
                <li>
                  <span className="font-semibold text-slate-charcoal">
                    Klinik açıklık:
                  </span>{" "}
                  Seans hedefleri ve süreç adımları danışanla açık biçimde
                  konuşulur.
                </li>
                <li>
                  <span className="font-semibold text-slate-charcoal">
                    Etik sınırlar:
                  </span>{" "}
                  Danışan gizliliği ve mesleki etik ilkeler süreçte değişmez
                  temeldir.
                </li>
                <li>
                  <span className="font-semibold text-slate-charcoal">
                    Kişiye özel tempo:
                  </span>{" "}
                  Tek bir yöntem herkese uygulanmaz; süreç danışanın hazır
                  oluşuna göre planlanır.
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
              <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                Terapi Süreci Nasıl İlerler?
              </h3>
              <ol className="space-y-3 text-sm leading-[1.9] text-slate-body sm:text-base">
                <li>
                  <span className="font-semibold text-slate-charcoal">1.</span>{" "}
                  İlk görüşmede klinik değerlendirme yapılır; başvuru nedeni ve
                  günlük yaşam etkisi netleştirilir.
                </li>
                <li>
                  <span className="font-semibold text-slate-charcoal">2.</span>{" "}
                  Seans hedefleri, sıklık ve çalışma çerçevesi birlikte
                  belirlenir.
                </li>
                <li>
                  <span className="font-semibold text-slate-charcoal">3.</span>{" "}
                  Düzenli aralıklarla ilerleme gözden geçirilir ve plan
                  gerektiğinde birlikte güncellenir.
                </li>
              </ol>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Amaç; hızlı sonuç vaadi değil, danışanın yaşamında sürdürülebilir
                ve ölçülebilir bir iyileşme hattı oluşturmaktır.
              </p>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.08}
            className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:block lg:max-w-none"
          >
            <PortraitFrame
              src={siteConfig.images.portraitClinical}
              alt="Psikolog A. Alparslan Sancar — Bursa klinik portre fotoğrafı"
              priority
              variant="clinical"
              align="right"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
