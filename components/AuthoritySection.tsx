import { FadeIn } from "@/components/FadeIn";
import { PortraitFrame } from "@/components/PortraitFrame";
import { siteConfig } from "@/lib/site-config";

const philosophy = [
  {
    label: "01",
    title: "Kuramsal birikim",
    body: "Hacettepe Psikoloji eğitimi ve insancıl ekoldeki uzmanlık, yazıların omurgasını oluşturur.",
  },
  {
    label: "02",
    title: "Etik ve gizlilik",
    body: "Mesleki etik ilkeler ve mahremiyet, kamuya açık içerikte de sınırdır.",
  },
  {
    label: "03",
    title: "Bilimsel ekoller",
    body: "Birey Odaklı çerçeve temelde olmak üzere Bilişsel-Davranışçı ve Psikodinamik dil, referans olarak yer alır.",
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
            Bursa Psikolog A. Alparslan Sancar
          </h2>

          <blockquote className="blockquote-accent mt-8 hidden sm:mt-10 lg:block">
            &ldquo;Bilimsel yeterlilik ve samimiyete dayalı iletişimin
            iyileştiriliciğine inanıyorum.&rdquo;
          </blockquote>

          <div className="mx-auto mt-8 w-full max-w-[18rem] sm:mt-10 sm:max-w-[22rem] lg:hidden">
            <PortraitFrame
              src={siteConfig.images.portraitFull}
              alt="Bursa Psikolog A. Alparslan Sancar — tam profil portre"
              variant="full"
            />
          </div>

          <blockquote className="blockquote-accent mt-8 sm:mt-10 lg:hidden">
            &ldquo;Bilimsel yeterlilik ve samimiyete dayalı iletişimin
            iyileştiriliciğine inanıyorum.&rdquo;
          </blockquote>

          <p className="body-lead mt-8 sm:mt-10">
            Bursa&apos;da başlayan meslek yaşamı, İstanbul Beşiktaş
            deneyimiyle derinleşti. Bugün Bursa Nilüfer&apos;de bilimsel
            disiplin, etik ilkeler ve ölçülü bir dil ile psikolojiye dair
            içerik üretmeye devam ediyorum.
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

        <FadeIn delay={0.08} className="hidden lg:sticky lg:top-28 lg:block" as="article">
          <PortraitFrame
            src={siteConfig.images.portraitFull}
            alt="Bursa Psikolog A. Alparslan Sancar — tam profil portre"
            variant="full"
          />
        </FadeIn>
      </div>
    </section>
  );
}
