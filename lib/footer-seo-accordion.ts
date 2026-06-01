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
    heading: "Bursa Psikolog Hizmetlerinde Hangi Yaklaşımları Uyguluyoruz?",
    paragraphs: [
      `${siteConfig.name}, Bursa psikolog arayan danışanlar için bireysel terapi, çift terapisi ve online psikoterapi hizmetlerini klinik değerlendirme ile birlikte sunar. Nilüfer merkezli yüz yüze görüşmelerin yanı sıra Türkiye genelinde güvenli görüntülü seans seçenekleri planlanabilir.`,
      "Bursa psikolog hizmetleri kapsamında kaygı bozuklukları, panik atak, depresif belirtiler, tükenmişlik, ilişki çatışmaları ve yaşam geçişleri gibi alanlarda kanıta dayalı çerçeveler uygulanır. Bilişsel-davranışçı terapi (BDT), birey odaklı psikoterapi ve gerektiğinde EMDR gibi travma odaklı yaklaşımlar danışanın hedeflerine göre yapılandırılır.",
      "İlk görüşmede semptom öyküsü, işlevsellik ve terapi beklentileri netleştirilir; seans sıklığı ve süre birlikte belirlenir. Tüm süreç mesleki etik, gizlilik ve danışan mahremiyeti ilkeleri çerçevesinde yürütülür.",
    ],
  },
  {
    heading: "Bursa'da Psikolog Randevu Süreci Nasıl Planlanır?",
    paragraphs: [
      "Psikolog randevu talebi WhatsApp veya telefon üzerinden asistan hattına iletilir; uygun gün ve saat seçenekleri paylaşılır. İlk seans genellikle yaklaşık 50 dakika sürer ve klinik değerlendirme ile terapi planının oluşturulmasına ayrılır.",
      "Bursa'da yüz yüze psikolog randevu için Nilüfer bölgesindeki klinik adresi doğrulanır; ulaşım ve park bilgisi randevu öncesinde iletilir. Online psikolog randevu tercih eden danışanlar için görüntülü görüşme bağlantısı ve teknik hazırlık adımları önceden paylaşılır.",
      "Randevu iptali veya erteleme politikası seans öncesinde bilgilendirme ile netleştirilir. Acil psikiyatrik durumlarda psikoterapi randevusu yerine en yakın acil servis veya 112 hattına başvuru önceliklidir.",
    ],
  },
  {
    heading: "Neden Doğru Bir Psikolog Bursa Arayışında Uzmanlık Önemlidir?",
    paragraphs: [
      "Psikolog Bursa aramasında uzmanlık alanı, eğitim geçmişi ve kullanılan terapi ekolü terapi sonucunu doğrudan etkiler. Genel destek ile klinik psikoterapi farklıdır; yapılandırılmış değerlendirme olmadan verilen öneriler yüzeysel kalabilir.",
      "Doğru eşleşme; kaygı, depresyon, OKB, travma veya çift sorunları gibi alanlarda deneyim, danışanla terapist arasındaki güven ilişkisi ve düzenli seans takibi ile şekillenir. Uzman klinik psikolog desteği, semptomları etiketlemek yerine işlevselliği ve yaşam kalitesini hedefler.",
      "Bursa psikolog seçiminde referans, şeffaf ücretlendirme, gizlilik taahhüdü ve multidisipliner yönlendirme (gerekirse psikiyatri konsültasyonu) güven veren kriterlerdir. Terapi süreci iş birliği gerektirir; uzman rehberliği bu sürecin güvenli ve ölçülebilir ilerlemesini destekler.",
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
