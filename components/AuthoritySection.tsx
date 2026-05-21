import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";
import { siteConfig } from "@/lib/site-config";

const philosophy = [
  {
    label: "01",
    title: "Klinik Değerlendirme",
    body: "Her süreç, danışanın ihtiyaçlarına özel yapılandırılmış klinik değerlendirme ile başlar.",
  },
  {
    label: "02",
    title: "Etik İlkeler & Gizlilik",
    body: "Danışan gizliliği ve mesleki etik; terapi ilişkisinin değişmez temelidir.",
  },
  {
    label: "03",
    title: "Bilimsel Ekoller",
    body: "Birey Odaklı Psikoterapi Tekniği temelde olmakla birlikte, Psikodinamik ve Bilişsel Davranışçı tekniklerle desteklenmektedir.",
  },
] as const;

export function AuthoritySection() {
  return (
    <section
      id="klinik-felsefe"
      aria-labelledby="authority-heading"
      className="border-t border-ice-blue/50 bg-mesh-sky py-20 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-editorial items-start gap-12 px-5 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <FadeIn as="article">
          <p className="eyebrow eyebrow-cta mb-4 sm:mb-5">Klinik Felsefe</p>
          <h2 id="authority-heading" className="heading-section">
            Psikolog A. Alparslan Sancar
          </h2>

          <blockquote className="blockquote-accent mt-8 sm:mt-10">
            &ldquo;Bilimsel yeterlilik ve samimiyete dayalı iletişimin
            iyileştiriliciğine inanıyorum.&rdquo;
          </blockquote>

          <p className="body-lead mt-8 sm:mt-10">
            İstanbul&apos;daki yoğun klinik pratikten Bursa Nilüfer&apos;e taşınan
            deneyim; aynı ölçüde danışan gizliliği, etik ilkeler ve bilimsel
            disiplinle sürdürülür.
          </p>

          <ul className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {philosophy.map((item) => (
              <li
                key={item.label}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ice-blue pt-8 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:pt-10"
              >
                <span className="font-display text-xl font-semibold tracking-[-0.02em] text-neon-turquoise sm:text-2xl">
                  {item.label}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-charcoal sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.85] text-slate-body">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:sticky lg:top-28" as="article">
          <PortraitFrame
            src={siteConfig.images.portraitFull}
            alt="Psikolog A. Alparslan Sancar — tam profil portre"
            variant="full"
          />
        </FadeIn>
      </div>
    </section>
  );
}
