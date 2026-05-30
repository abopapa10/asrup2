/**
 * WHO ASRS v1.1 Part A (6 madde) + ek tarama maddeleri.
 * Ölçek: 0 = Hiçbir zaman … 4 = Çok sık (resmî ASRS puanlaması).
 */
export type AsrsLikertValue = 0 | 1 | 2 | 3 | 4;

export type AdhdScreeningLevel = "low" | "borderline" | "high";

export type PositiveThreshold = "often" | "sometimes";

export type AdhdQuestion = {
  id: string;
  text: string;
  /** ASRS Part A — resmî tarama algoritması */
  isPartA: boolean;
  positiveThreshold?: PositiveThreshold;
};

export const ASRS_LIKERT: readonly {
  value: AsrsLikertValue;
  short: string;
  label: string;
}[] = [
  { value: 0, short: "0", label: "Hiçbir zaman" },
  { value: 1, short: "1", label: "Nadiren" },
  { value: 2, short: "2", label: "Bazen" },
  { value: 3, short: "3", label: "Sıklıkla" },
  { value: 4, short: "4", label: "Çok sık" },
] as const;

/** 12 madde: ASRS Part A (6) + Part B esinli ek maddeler (6) */
export const ADHD_SCREENING_QUESTIONS: readonly AdhdQuestion[] = [
  {
    id: "a1",
    isPartA: true,
    text: "Bir projenin veya görevin son ayrıntılarını tamamlamakta ne sıklıkla zorlanırsınız?",
  },
  {
    id: "a2",
    isPartA: true,
    text: "İşleri düzen gerektiren bir düzende yapmakta ne sıklıkla zorlanırsınız?",
  },
  {
    id: "a3",
    isPartA: true,
    text: "Randevu, toplantı veya yükümlülükleri hatırlamakta ne sıklıkla sorun yaşarsınız?",
  },
  {
    id: "a4",
    isPartA: true,
    positiveThreshold: "sometimes",
    text: "Çok düşünme gerektiren bir işe başlamaktan kaçınma veya erteleme eğiliminiz ne sıklıkta olur?",
  },
  {
    id: "a5",
    isPartA: true,
    text: "Ellerinizle veya ayaklarınızla duramama, yerinde duramama hâliniz ne sıklıkta olur?",
  },
  {
    id: "a6",
    isPartA: true,
    text: "Aşırı aktif hissetme veya sürekli hareket etme ihtiyacınız ne sıklıkta olur?",
  },
  {
    id: "b1",
    isPartA: false,
    text: "Dikkat gerektiren işlerde dikkatsizlik veya özensiz hata yapma ne sıklıkta olur?",
  },
  {
    id: "b2",
    isPartA: false,
    text: "Uzun süre (okuma, toplantı, rapor) dikkati sürdürmekte ne sıklıkla zorlanırsınız?",
  },
  {
    id: "b3",
    isPartA: false,
    text: "Doğrudan size konuşulduğunda dinlemeyi sürdürmekte ne sıklıkla güçlük çekersiniz?",
  },
  {
    id: "b4",
    isPartA: false,
    text: "Talimatları izleyerek işleri veya ev işlerini bitirmekte ne sıklıkla zorlanırsınız?",
  },
  {
    id: "b5",
    isPartA: false,
    text: "Görevleri veya aktiviteleri organize etmekte ne sıklıkla zorlanırsınız?",
  },
  {
    id: "b6",
    isPartA: false,
    positiveThreshold: "sometimes",
    text: "Uzun süre zihinsel çaba gerektiren işlerden (form, rapor, plan) kaçınma ne sıklıkta olur?",
  },
] as const;

export const ADHD_LEVEL_META: Record<
  AdhdScreeningLevel,
  {
    title: string;
    subtitle: string;
    badgeClass: string;
  }
> = {
  low: {
    title: "Düşük Olasılık",
    subtitle: "ASRS Part A tarama eşiğinin altında",
    badgeClass: "bg-emerald-500/15 text-emerald-900 ring-emerald-500/30",
  },
  borderline: {
    title: "Sınırda / Takip Edilmeli",
    subtitle: "Üç Part A maddesi pozitif — klinik değerlendirme düşünülebilir",
    badgeClass: "bg-amber-500/15 text-amber-900 ring-amber-500/35",
  },
  high: {
    title: "Yüksek DEHB Olasılığı",
    subtitle: "ASRS Part A’da dört veya daha fazla madde pozitif",
    badgeClass: "bg-rose-500/15 text-rose-900 ring-rose-500/35",
  },
};

export type AdhdScreeningResult = {
  level: AdhdScreeningLevel;
  partAPositiveCount: number;
  supplementaryPositiveCount: number;
  compositePct: number;
};

export function createEmptyAdhdAnswers(): (AsrsLikertValue | null)[] {
  return Array.from({ length: ADHD_SCREENING_QUESTIONS.length }, () => null);
}

export function isQuestionPositive(
  question: AdhdQuestion,
  value: AsrsLikertValue
): boolean {
  const threshold = question.positiveThreshold ?? "often";
  if (threshold === "sometimes") return value >= 2;
  return value >= 3;
}

export function calculateAdhdScreeningResult(
  answers: readonly (AsrsLikertValue | null)[]
): AdhdScreeningResult | null {
  if (answers.length !== ADHD_SCREENING_QUESTIONS.length) return null;
  if (answers.some((a) => a === null)) return null;

  let partAPositiveCount = 0;
  let supplementaryPositiveCount = 0;
  let sum = 0;

  ADHD_SCREENING_QUESTIONS.forEach((q, i) => {
    const value = answers[i]!;
    sum += value;
    const positive = isQuestionPositive(q, value);
    if (q.isPartA && positive) partAPositiveCount += 1;
    if (!q.isPartA && positive) supplementaryPositiveCount += 1;
  });

  const mean = sum / ADHD_SCREENING_QUESTIONS.length;
  const compositePct = Math.round((mean / 4) * 100);

  let level: AdhdScreeningLevel;
  if (partAPositiveCount >= 4) {
    level = "high";
  } else if (partAPositiveCount === 3) {
    level = "borderline";
  } else if (partAPositiveCount <= 2 && supplementaryPositiveCount >= 5) {
    level = "borderline";
  } else {
    level = "low";
  }

  return {
    level,
    partAPositiveCount,
    supplementaryPositiveCount,
    compositePct,
  };
}

/** Üç cümlelik uzman yorumu — tanı iddiası içermez */
export function getAdhdExpertCommentary(result: AdhdScreeningResult): string {
  const { level, partAPositiveCount, supplementaryPositiveCount } = result;

  if (level === "low") {
    return [
      `ASRS Part A taramasında ${partAPositiveCount}/6 madde eşik üzerinde; bu sonuç düşük olasılık bandını işaret eder ve tek başına DEHB dışlaması anlamına gelmez.`,
      "Günlük işlevde belirgin odaklanma, dürtüsellik veya organizasyon güçlüğü yaşıyorsanız şikâyetlerinizi bir uzmana anlatmanız yine de değerlidir.",
      "Bu araç yalnızca farkındalık ve ön tarama içindir; resmî ASRS tam formu veya klinik görüşme yerine geçmez.",
    ].join(" ");
  }

  if (level === "borderline") {
    return [
      `Part A’da ${partAPositiveCount}/6 madde pozitif; ek maddelerde ${supplementaryPositiveCount}/6 eşik üstü yanıt — sınırda / takip edilmeli bant.`,
      "Bu profil, yetişkin DEHB için daha kapsamlı klinik değerlendirme (öykü, işlevsellik, ayırıcı tanı) düşünülmesini destekleyebilir; anksiyete, depresyon ve uyku bozuklukları benzer belirtiler üretebilir.",
      "Sonuç tanı değildir; bir klinik psikolog veya psikiyatrist ile yapılandırılmış görüşme, doğru yönlendirme için gereklidir.",
    ].join(" ");
  }

  return [
    `ASRS Part A algoritmasına göre ${partAPositiveCount}/6 kritik madde pozitif — yetişkin DEHB açısından yüksek olasılık tarama sonucu.`,
    "Kronik dikkat dağınıklığı, erteleme, dürtüsellik ve iş/ilişki işlevselliğinde bozulma yaşıyorsanız gecikmeden kapsamlı değerlendirme önerilir; ilaç ve psikoterapi seçenekleri multidisipliner planla ele alınır.",
    "Bu test tanı koymaz; yüksek sonuç, uzman klinik psikolog veya psikiyatrik değerlendirme için güçlü bir ön sinyal olarak yorumlanmalıdır.",
  ].join(" ");
}

export function shouldShowClinicalCta(level: AdhdScreeningLevel): boolean {
  return level === "borderline" || level === "high";
}
