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
    question: "Bu site ne için?",
    answer:
      "Site, Bursa Psikolog A. Alparslan Sancar'ın eğitimi, yaklaşımı ve psikolojiye dair kamuya açık yazıları için bir başvuru noktasıdır. Kişisel iletişim bilgileri de burada yer alır.",
  },
  {
    question: "Size nasıl ulaşabilirim?",
    answer:
      "WhatsApp veya telefon ile iletişime geçebilirsiniz. Adres bilgisi Nilüfer Özlüce'dedir.",
  },
  {
    question: "Yazılar tıbbi tavsiye midir?",
    answer:
      "Hayır. Makaleler ve testler genel bilgilendirme niteliğindedir; bireysel tanı veya tedavi planı yerine geçmez.",
  },
  {
    question: "Eğitim geçmişiniz nedir?",
    answer:
      "Hacettepe Üniversitesi Psikoloji Bölümü mezunuyum. Üniversite eğitimi ağırlıklı olarak bilişsel-davranışçı çerçevedeydi; ardından birey odaklı psikoterapi alanında uzmanlaştım.",
  },
] as const;
