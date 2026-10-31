/**
 * Ana sayfa SSS — tek kaynaktan beslenen FAQ verisi.
 *
 * Hem `components/FaqAccordion.tsx` (görsel) hem de
 * `lib/structured-data.ts` (FAQPage JSON-LD) bu dizinin aynısını okur.
 */

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: readonly HomeFaqItem[] = [
  {
    question: "Bursa'da psikolog seçerken nelere dikkat edilmeli?",
    answer:
      "Eğitim, kullanılan yaklaşımlar, gizlilik ve ilk görüşmede kurulan güven birlikte okunmalıdır. Unvan ile lisansüstü klinik yeterlilik aynı şey değildir. Bu sitede çalışma, Hacettepe Psikoloji mezunu bir psikolog olarak yürür. Reklam dili veya yakınlık vaadi tek başına yeterli ölçüt değildir.",
  },
  {
    question: "Bursa Nilüfer'de psikolog nerede bulunur?",
    answer:
      "Yüz yüze ofis Time Özlüce’dedir: Ahmet Taner Kışlalı Bulvarı No:27, Ertuğrul, Nilüfer/Bursa. FSM ve Beşevler’den kısa mesafededir. Harita iletişim bölümündedir.",
  },
  {
    question: "Psikolog ile ilk görüşmede neler konuşulur?",
    answer:
      "Ne olduğu, neyin zorladığı, tempo ve yüz yüze ya da online tercih konuşulur. İlk görüşme tanı töreni değildir; çerçeve birlikte netleşir.",
  },
  {
    question: "Psikolojik destek süreci nasıl ilerler?",
    answer:
      "İhtiyaçların değerlendirilmesi, hedef konuşması ve düzenli seans ritmi genel omurgadır. Kesin seans sayısı veya iyileşme süresi yoktur.",
  },
  {
    question: "Bireysel terapi hangi durumlarda değerlendirilebilir?",
    answer:
      "Kaygı, panik, çökkünlük, stres, öfke, özgüven ve tekrarlayan ilişki örüntüleri sık başvuru başlıklarıdır. Uygunluk kişiye göre değişir.",
  },
  {
    question: "Bursa'da çift terapisi nasıl ilerler?",
    answer:
      "Ortak bir ilk görüşme, döngünün adlandırılması ve her iki tarafın gönüllü katılımı temeldir. Aktif şiddet varken standart çift seansı uygun değildir. Genel süreç çift terapisi sayfasında; iletişim ayrı randevu sayfasındadır.",
  },
  {
    question: "Psikolog seans ücretleri nasıl belirlenir?",
    answer:
      "Tek bir sabit rakam kamuya vaat edilmez. Güncel çerçeve iletişimde netleşir; kamuoyuna açık okuma Bursa psikolog fiyatları yazısındadır.",
  },
  {
    question: "Psikolog randevusu nasıl alınır?",
    answer:
      "WhatsApp veya telefon yeterlidir. Aynı gün içinde dönüş yapılır. Nilüfer randevu sayfası adres, süre ve süreç ayrıntısını taşır.",
  },
] as const;
