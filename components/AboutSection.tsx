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
                Uzman Klinik Psikolog Ahmet Alparslan Sancar
              </h2>
            </FadeIn>

            <div className="mx-auto my-8 w-full max-w-[20rem] sm:max-w-[22rem] lg:hidden">
              <PortraitFrame
                src={siteConfig.images.portraitClinical}
                alt="Uzman Klinik Psikolog Ahmet Alparslan Sancar — Bursa Nilüfer klinik portre fotoğrafı"
                variant="clinical"
                align="left"
              />
            </div>

            <CredentialList />

            <FadeIn delay={0.2} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Psikoloji eğitimimi Hacettepe Üniversitesi&apos;nde tamamladım;
                ardından klinik psikoloji alanında yüz yüze ve online
                danışan çalışmalarımı sürdürdüm. Bursa Nilüfer&apos;de
                açacağımız yeni kliniğimizde bireysel terapi, çift terapisi ve
                online seanslarla hizmet vereceğiz.
              </p>
              <p className="text-sm leading-[1.9] text-slate-body sm:text-base">
                Terapi sürecinde danışan gizliliği, etik ilkeler ve kanıta
                dayalı yöntemler önceliğimdir. Her danışan için klinik
                değerlendirme sonrası kişiye özel bir çalışma planı
                oluşturulur; hedef şeffaf iletişim ve sürdürülebilir yaşam
                kalitesi iyileşmesidir.
              </p>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.08}
            className="mx-auto hidden w-full max-w-[20rem] sm:max-w-[22rem] lg:block lg:max-w-none"
          >
            <PortraitFrame
              src={siteConfig.images.portraitClinical}
              alt="Uzman Klinik Psikolog Ahmet Alparslan Sancar — Bursa Nilüfer klinik portre fotoğrafı"
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
