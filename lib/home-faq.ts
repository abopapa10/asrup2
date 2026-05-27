/**
 * Ana sayfa SSS — tek kaynaktan beslenen FAQ verisi.
 *
 * Hem `components/FaqAccordion.tsx` (görsel) hem de
 * `lib/structured-data.ts` (FAQPage JSON-LD) bu dizinin aynısını okur.
 *
 * Google, FAQPage schema ile sayfada görünen sorular birebir
 * eşleşmediğinde rich result vermez. Bu nedenle iki tarafın
 * tek kaynaktan beslenmesi kritik.
 */

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: readonly HomeFaqItem[] = [
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
