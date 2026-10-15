import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export type FooterSeoAccordionItem = {
  heading: string;
  paragraphs: readonly string[];
};

/**
 * Footer üstü SEO accordion — görünür içerik ve FAQPage JSON-LD tek kaynak.
 * Soru metinleri schema `name` ile birebir eşleşmelidir.
 */
export const footerSeoAccordionItems: readonly FooterSeoAccordionItem[] = [
  {
    heading: "Bursa Psikolog A. Alparslan Sancar Kimdir?",
    paragraphs: [
      `${siteConfig.name}, Hacettepe Üniversitesi Psikoloji Bölümü mezunudur. Üniversite eğitimi bilişsel-davranışçı çerçevede şekillenmiş; ardından insancıl ekol içindeki birey odaklı psikoterapi alanında uzmanlaşmıştır.`,
      "Meslek yaşamı Bursa ve İstanbul arasında geçmiştir. Bu sitede psikolojiye dair yazılar, testler ve yaklaşım notları paylaşılır; amaç kamuya açık, ölçülü bir bilgilendirmedir.",
      "İletişim için WhatsApp veya telefon kullanılabilir. Nilüfer Özlüce adres bilgisi sitede yer alır.",
    ],
  },
  {
    heading: "Sitedeki Yazılar Ne Amaçla Yayımlanır?",
    paragraphs: [
      "Makaleler kaygı, ilişkiler, tükenmişlik ve benzeri konularda genel psikoloji bilgisi sunar. İçerikler eğitim ve okuma içindir; bireysel tanı veya tedavi yerine geçmez.",
      "Testler öz-bildirim ölçekleridir; klinik değerlendirme değildir. Sonuçlar bir etiket değil, düşünmeye davettir.",
      "Acil tehlike, kendine zarar verme düşüncesi veya tıbbi acil durumlarda 112 ve yerel acil sağlık hizmetleri önceliklidir.",
    ],
  },
  {
    heading: "Bursa Psikolog Arayışında Nelere Bakılır?",
    paragraphs: [
      "Psikolog seçiminde eğitim geçmişi, etik duruş ve kullanılan dilin ölçülü olup olmadığı birlikte değerlendirilebilir. Genel tavsiye ile bilimsel çerçeve farklıdır.",
      "Bu sitedeki yazılar, yaklaşımı ve kaynakları okuyarak bir izlenim edinmenize yardımcı olabilir. Kişisel iletişim için iletişim bölümü yeterlidir.",
      "Referans, şeffaflık ve gizlilik taahhüdü güven veren ölçütlerdir; nihai karar her zaman okuyucuya aittir.",
    ],
  },
] as const;

export function buildFooterSeoFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#footer-seo-faq`,
    url: absoluteUrl("/"),
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: footerSeoAccordionItems.map((item) => ({
      "@type": "Question" as const,
      name: item.heading,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.paragraphs.join(" "),
      },
    })),
  };
}
