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
    question: "Bursa psikolog kimdir?",
    answer:
      "Psikolog A. Alparslan Sancar, Hacettepe Üniversitesi Psikoloji mezunudur. Bursa Nilüfer Özlüce’de (Time Özlüce) yüz yüze çalışır; kaygı, ilişki ve bireysel süreçler üzerine yazar ve görüşür. WhatsApp veya telefon ile ulaşılır.",
  },
  {
    question: "Bursa psikolog ile klinik psikolog aynı mı?",
    answer:
      "Hayır. Klinik psikolog unvanı lisans sonrası klinik psikoloji yüksek lisansı ve ilgili yeterliliklerle tanımlanır. Bu sitedeki çalışma, Hacettepe Psikoloji mezunu bir psikolog olarak Nilüfer Özlüce’de yürür; kaygı, ilişki ve bireysel süreçler üzerine görüşülür.",
  },
  {
    question: "Yüz yüze ofis nerede?",
    answer:
      "Ofis Nilüfer Özlüce, Time Özlüce binasındadır: Ahmet Taner Kışlalı Bulvarı No:27, Ertuğrul. FSM, Beşevler ve İhsaniye’den kısa mesafededir. Harita ve adres iletişim bölümündedir.",
  },
  {
    question: "Bursa psikolog randevu nasıl alınır?",
    answer:
      "WhatsApp veya telefon yeterlidir. Aynı gün içinde dönüş yapılır; yüz yüze veya online tercihi netleşir. Garantili kontenjan vaadi yoktur.",
  },
  {
    question: "Psikolog Bursa yüz yüze mi, online mı?",
    answer:
      "İkisi de mümkün. Yoğun program veya Bursa dışından yazanlar için görüntülü görüşme, yüz yüze ile aynı gizlilik çerçevesinde planlanabilir.",
  },
  {
    question: "Eğitim geçmişiniz nedir?",
    answer:
      "Hacettepe Üniversitesi Psikoloji Bölümü mezunuyum. Üniversite eğitimi ağırlıklı olarak bilişsel-davranışçı çerçevedeydi; ardından birey odaklı psikoterapi alanında uzmanlaştım.",
  },
  {
    question: "Yazılar tıbbi tavsiye midir?",
    answer:
      "Hayır. Makaleler ve testler genel bilgilendirme niteliğindedir; bireysel tanı veya tedavi planı yerine geçmez.",
  },
] as const;
