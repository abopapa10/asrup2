import { LandingHero } from "@/components/LandingHero";
import { GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-config";

const proofPoints = [
  "Hacettepe Üniversitesi Psikoloji",
  "Time Özlüce · Nilüfer",
  `${GOOGLE_REVIEW_COUNT} Google yorumu`,
  "Yüz yüze ve online",
] as const;

/**
 * Sunucu bileşeni — hero metni ve CTA ilk HTML yanıtında görünür (LCP için).
 * Giriş animasyonu kullanılmaz; opacity:0 gecikmesi Lighthouse NO_LCP üretir.
 */
export function HeroSection() {
  return (
    <LandingHero
      size="home"
      eyebrow="Bursa · Nilüfer · Psikolog"
      title="Bursa Psikolog"
      subtitle="Psikolog A. Alparslan Sancar · Hacettepe · Nilüfer Özlüce"
      lead="Bursa psikolog arayanlar için Nilüfer Özlüce’de yüz yüze seans; kaygı, ilişki ve bireysel çalışma. WhatsApp veya telefon ile yazmanız yeterlidir."
      proofPoints={proofPoints}
      whatsappSource="hero"
      portraitSrc={siteConfig.images.portraitHeroBand}
      portraitAlt="Bursa Psikolog A. Alparslan Sancar — Nilüfer Özlüce ofisinde"
    />
  );
}
