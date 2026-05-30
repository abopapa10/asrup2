export type BigFiveTrait = "O" | "C" | "E" | "A" | "N";

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export type BigFiveQuestion = {
  id: string;
  trait: BigFiveTrait;
  text: string;
  /** Ters kodlu madde — yüksek katılım düşük boyut puanına dönüşür */
  reversed?: boolean;
};

export const BIG_FIVE_LIKERT_LABELS: readonly {
  value: LikertValue;
  short: string;
  label: string;
}[] = [
  { value: 1, short: "1", label: "Kesinlikle katılmıyorum" },
  { value: 2, short: "2", label: "Katılmıyorum" },
  { value: 3, short: "3", label: "Kararsızım" },
  { value: 4, short: "4", label: "Katılıyorum" },
  { value: 5, short: "5", label: "Kesinlikle katılıyorum" },
] as const;

/** BFI yapısına benzer 15 madde — boyut başına 3 soru */
export const BIG_FIVE_QUESTIONS: readonly BigFiveQuestion[] = [
  {
    id: "o1",
    trait: "O",
    text: "Yeni fikirlere, sanata ve soyut düşünceye açığım.",
  },
  {
    id: "o2",
    trait: "O",
    text: "Farklı kültürler ve bakış açıları beni meraklandırır.",
  },
  {
    id: "o3",
    trait: "O",
    text: "Alışılmış rutinler bana çoğu zaman yeterlidir.",
    reversed: true,
  },
  {
    id: "c1",
    trait: "C",
    text: "İşlerimi planlayarak ve zamanında tamamlamaya özen gösteririm.",
  },
  {
    id: "c2",
    trait: "C",
    text: "Detaylara dikkat etmek benim için önemlidir.",
  },
  {
    id: "c3",
    trait: "C",
    text: "Dağınık bir çalışma ortamında üretken olmam zordur.",
  },
  {
    id: "e1",
    trait: "E",
    text: "Sosyal ortamlarda enerjim artar ve iletişim kurmaktan hoşlanırım.",
  },
  {
    id: "e2",
    trait: "E",
    text: "Yeni insanlarla tanışmak beni genellikle motive eder.",
  },
  {
    id: "e3",
    trait: "E",
    text: "Uzun süre yalnız ve sessiz aktiviteler tercihimdir.",
    reversed: true,
  },
  {
    id: "a1",
    trait: "A",
    text: "Başkalarının duygularına karşı hassasım ve destek olmaya çalışırım.",
  },
  {
    id: "a2",
    trait: "A",
    text: "İş birliği ve uyum, çatışmadan kaçınmaktan daha değerlidir.",
  },
  {
    id: "a3",
    trait: "A",
    text: "Başkalarının hatalarını doğrudan ve sert biçimde eleştiririm.",
    reversed: true,
  },
  {
    id: "n1",
    trait: "N",
    text: "Stresli durumlarda kolayca endişelenir ve gerginleşirim.",
  },
  {
    id: "n2",
    trait: "N",
    text: "Ruh halim gün içinde belirgin dalgalanmalar gösterebilir.",
  },
  {
    id: "n3",
    trait: "N",
    text: "Zorlayıcı olaylarda genellikle sakin ve dengeli kalırım.",
    reversed: true,
  },
] as const;

export const BIG_FIVE_TRAIT_META: Record<
  BigFiveTrait,
  {
    name: string;
    english: string;
    colorClass: string;
  }
> = {
  O: {
    name: "Deneyime Açıklık",
    english: "Openness",
    colorClass: "from-violet-400/80 to-violet-500/60",
  },
  C: {
    name: "Sorumluluk",
    english: "Conscientiousness",
    colorClass: "from-slate-600/70 to-slate-700/50",
  },
  E: {
    name: "Dışadönüklük",
    english: "Extraversion",
    colorClass: "from-amber-400/80 to-amber-500/60",
  },
  A: {
    name: "Uyumluluk",
    english: "Agreeableness",
    colorClass: "from-emerald-400/70 to-emerald-500/50",
  },
  N: {
    name: "Duygusal Denge",
    english: "Neuroticism (ters: istikrar)",
    colorClass: "from-rose-400/70 to-rose-500/50",
  },
};

export type BigFiveScores = Record<BigFiveTrait, number>;

export type BigFivePercentiles = Record<BigFiveTrait, number>;

export function createEmptyAnswers(): (LikertValue | null)[] {
  return Array.from({ length: BIG_FIVE_QUESTIONS.length }, () => null);
}

function scoreItem(raw: LikertValue, reversed?: boolean): number {
  return reversed ? ((6 - raw) as LikertValue) : raw;
}

export function calculateBigFivePercentiles(
  answers: readonly (LikertValue | null)[]
): BigFivePercentiles | null {
  if (answers.length !== BIG_FIVE_QUESTIONS.length) return null;
  if (answers.some((a) => a === null)) return null;

  const sums: BigFiveScores = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  const counts: BigFiveScores = { O: 0, C: 0, E: 0, A: 0, N: 0 };

  BIG_FIVE_QUESTIONS.forEach((q, i) => {
    const raw = answers[i]!;
    const scored = scoreItem(raw, q.reversed);
    sums[q.trait] += scored;
    counts[q.trait] += 1;
  });

  const percentiles = {} as BigFivePercentiles;
  (Object.keys(sums) as BigFiveTrait[]).forEach((trait) => {
    const mean = sums[trait] / counts[trait];
    percentiles[trait] = Math.round(((mean - 1) / 4) * 100);
  });

  return percentiles;
}

function level(pct: number): "low" | "mid" | "high" {
  if (pct >= 67) return "high";
  if (pct <= 33) return "low";
  return "mid";
}

export function getTraitInterpretation(
  trait: BigFiveTrait,
  percentile: number
): string {
  const lvl = level(percentile);

  const copy: Record<BigFiveTrait, Record<typeof lvl, string>> = {
    O: {
      low: "Yeni deneyimlere ve soyut düşünceye daha temkinli yaklaşırsınız; pratik, kanıtlanmış yöntemler size güven verir. Rutin ve somut hedefler motivasyonunuzu destekler.",
      mid: "Hem yeniliğe açıksınız hem de tanıdık yapılarda istikrar ararsınız; bağlama göre keşif ile düzen arasında geçiş yapabilirsiniz.",
      high: "Merak, hayal gücü ve kavramsal düşünme belirgindir; sanat, fikir ve farklı perspektifler sizi besler. Değişime uyum sağlama eğiliminiz yüksektir.",
    },
    C: {
      low: "Planlama ve detay takibinde esnek ve spontane bir tarzınız vardır; son ana kadar hareket etmek size doğal gelebilir. Yapılandırılmış çerçeveler bazen kısıtlayıcı hissedilir.",
      mid: "Hem düzen hem esneklik arasında denge kurarsınız; önemli hedeflerde disiplinli, diğer alanlarda daha akışkan olabilirsiniz.",
      high: "Öz-disiplin, planlama ve sorumluluk alma eğiliminiz güçlüdür; hedeflere sistematik ilerlemek size tatmin verir. Güvenilirlik ve detay odaklılık çevreniz tarafından fark edilir.",
    },
    E: {
      low: "Enerjinizi içe dönük aktivitelerle yenilersiniz; kalabalık ve yoğun sosyal ortamlar sizi yorabilir. Derinlemesine, seçici ilişkiler size daha anlamlı gelir.",
      mid: "Sosyal ve yalnız zaman arasında bağlama göre geçiş yaparsınız; ne ortam ne de yalnızlık tek başına idealdir.",
      high: "Sosyal etkileşimden enerji alırsınız; iletişim kurmak, paylaşmak ve görünür olmak motivasyonunuzu artırır. Yeni insanlarla temas sizi canlandırır.",
    },
    A: {
      low: "Doğrudan iletişim ve rekabetçi duruş size doğal gelebilir; eleştiriyi net ifade etmekte çekingen değilsinizdir. Uzlaşma her zaman öncelik olmayabilir.",
      mid: "Hem iş birliğine hem kendi sınırlarınıza saygı gösterebilirsiniz; duruma göre yumuşak veya net bir tutum benimseyebilirsiniz.",
      high: "Empati, uyum ve başkalarının ihtiyaçlarına duyarlılık belirgindir; çatışmadan kaçınma ve destek sunma eğiliminiz yüksektir. İlişkilerde güven inşa etmekte güçlüsünüzdür.",
    },
    N: {
      low: "Duygusal dalgalanmalarınız genelde ölçülüdür; stres altında sakin kalma ve toparlanma kapasiteniz güçlüdür. Endişe eşiğiniz nispeten yüksektir.",
      mid: "Stres ve duygusal tepkiler yaşam olaylarına göre değişir; hem hassasiyet hem dayanıklılık dönemsel olarak görülebilir.",
      high: "Stres, endişe ve duygusal reaktivite daha belirgindir; belirsizlik ve eleştiri ruh halinizi hızlı etkileyebilir. Duygusal farkındalık ve regülasyon becerileri geliştirmek faydalı olabilir.",
    },
  };

  return copy[trait][lvl];
}
