/** Goleman (1995) çerçevesinde beş bileşen — öz-bildirim Likert ölçeği */
export type EqDimension = "SA" | "SR" | "M" | "E" | "SS";

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export type EqQuestion = {
  id: string;
  dimension: EqDimension;
  text: string;
  reversed?: boolean;
};

export const EQ_LIKERT_LABELS: readonly {
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

export const EQ_QUESTIONS: readonly EqQuestion[] = [
  {
    id: "sa1",
    dimension: "SA",
    text: "Duygularımı yaşadığım anda genellikle fark eder ve adlandırabilirim.",
  },
  {
    id: "sa2",
    dimension: "SA",
    text: "Güçlü ve gelişime açık yönlerimi gerçekçi biçimde değerlendirebilirim.",
  },
  {
    id: "sa3",
    dimension: "SA",
    text: "Stres altında ne hissettiğimi anlamakta sık zorlanırım.",
    reversed: true,
  },
  {
    id: "sr1",
    dimension: "SR",
    text: "Öfke veya hayal kırıklığı anında dürtüsel tepkilerimi yönetebilirim.",
  },
  {
    id: "sr2",
    dimension: "SR",
    text: "Duygusal dalgalanmalarım günlük kararlarımı sürekli sabote etmez.",
  },
  {
    id: "sr3",
    dimension: "SR",
    text: "Olumsuz duygularımı fark ettiğimde kısa sürede dengeye dönebilirim.",
  },
  {
    id: "m1",
    dimension: "M",
    text: "Uzun vadeli hedefler için istikrarlı çaba göstermeye çalışırım.",
  },
  {
    id: "m2",
    dimension: "M",
    text: "Engeller karşısında motivasyonumu yeniden toparlayabilirim.",
  },
  {
    id: "m3",
    dimension: "M",
    text: "İçsel tatmin ve anlam, dış onaydan daha belirleyicidir.",
  },
  {
    id: "e1",
    dimension: "E",
    text: "Başkalarının duygusal ihtiyaçlarını ve bakış açılarını genellikle sezerim.",
  },
  {
    id: "e2",
    dimension: "E",
    text: "Farklı görüşlere saygı gösterir, yargılamadan dinlemeye çalışırım.",
  },
  {
    id: "e3",
    dimension: "E",
    text: "Başkalarının duygusal durumu beni pek etkilemez.",
    reversed: true,
  },
  {
    id: "ss1",
    dimension: "SS",
    text: "Çatışmaları yapıcı ve saygılı biçimde çözmeye yönelirim.",
  },
  {
    id: "ss2",
    dimension: "SS",
    text: "Takım veya grup içinde uyum ve iletişim kurmakta rahatım.",
  },
  {
    id: "ss3",
    dimension: "SS",
    text: "İlişkilerde net ve yapıcı geri bildirim verebilirim.",
  },
] as const;

export const EQ_DIMENSION_META: Record<
  EqDimension,
  {
    name: string;
    english: string;
    colorClass: string;
  }
> = {
  SA: {
    name: "Özfarkındalık",
    english: "Self-awareness",
    colorClass: "from-violet-400/80 to-violet-500/60",
  },
  SR: {
    name: "Özdenetim",
    english: "Self-regulation",
    colorClass: "from-slate-600/70 to-slate-700/50",
  },
  M: {
    name: "Motivasyon",
    english: "Motivation",
    colorClass: "from-amber-400/80 to-amber-500/60",
  },
  E: {
    name: "Empati",
    english: "Empathy",
    colorClass: "from-emerald-400/70 to-emerald-500/50",
  },
  SS: {
    name: "Sosyal Beceriler",
    english: "Social skills",
    colorClass: "from-sky-400/75 to-neon-turquoise/70",
  },
};

export const EQ_DIMENSION_ORDER: readonly EqDimension[] = [
  "SA",
  "SR",
  "M",
  "E",
  "SS",
];

export type EqPercentiles = Record<EqDimension, number>;

export type EqResult = {
  overall: number;
  percentiles: EqPercentiles;
  strongest: EqDimension;
  growth: EqDimension;
};

export function createEmptyEqAnswers(): (LikertValue | null)[] {
  return Array.from({ length: EQ_QUESTIONS.length }, () => null);
}

function scoreItem(raw: LikertValue, reversed?: boolean): number {
  return reversed ? ((6 - raw) as LikertValue) : raw;
}

function meanToPercentile(mean: number): number {
  return Math.round(((mean - 1) / 4) * 100);
}

export function calculateEqResult(
  answers: readonly (LikertValue | null)[]
): EqResult | null {
  if (answers.length !== EQ_QUESTIONS.length) return null;
  if (answers.some((a) => a === null)) return null;

  const sums: EqPercentiles = { SA: 0, SR: 0, M: 0, E: 0, SS: 0 };
  const counts: EqPercentiles = { SA: 0, SR: 0, M: 0, E: 0, SS: 0 };

  EQ_QUESTIONS.forEach((q, i) => {
    const scored = scoreItem(answers[i]!, q.reversed);
    sums[q.dimension] += scored;
    counts[q.dimension] += 1;
  });

  const percentiles = {} as EqPercentiles;
  EQ_DIMENSION_ORDER.forEach((dim) => {
    percentiles[dim] = meanToPercentile(sums[dim] / counts[dim]);
  });

  const overall = Math.round(
    EQ_DIMENSION_ORDER.reduce((acc, dim) => acc + percentiles[dim], 0) /
      EQ_DIMENSION_ORDER.length
  );

  let strongest: EqDimension = "SA";
  let growth: EqDimension = "SA";
  let maxScore = -1;
  let minScore = 101;

  EQ_DIMENSION_ORDER.forEach((dim) => {
    const p = percentiles[dim];
    if (p > maxScore) {
      maxScore = p;
      strongest = dim;
    }
    if (p < minScore) {
      minScore = p;
      growth = dim;
    }
  });

  return { overall, percentiles, strongest, growth };
}

export function getEqExpertAnalysis(result: EqResult): string {
  const strong = EQ_DIMENSION_META[result.strongest].name;
  const grow = EQ_DIMENSION_META[result.growth].name;
  const o = result.overall;

  let level: string;
  if (o >= 75) {
    level =
      "Genel duygusal zeka profiliniz güçlü bir bantta; duyguları fark etme, düzenleme ve ilişkisel bağlamda kullanma kapasiteniz belirgin.";
  } else if (o >= 50) {
    level =
      "Genel EQ düzeyiniz orta-üst bantta; günlük ilişki ve iş yaşamında işlevsel bir duygusal beceri setine sahipsiniz, seçilmiş alanlarda derinleşme faydalı olur.";
  } else {
    level =
      "Genel EQ skorunuz gelişime açık bir profil gösteriyor; bu bir yetersizlik etiketi değil, hedefli pratik ve destekle güçlenebilecek beceriler alanıdır.";
  }

  return [
    level,
    `En belirgin güç alanınız ${strong} boyutunda (%${result.percentiles[result.strongest]}); bu bileşen günlük kararlarınızda ve ilişkilerinizde doğal bir kaynak olarak işlev görüyor.`,
    `Gelişim için en çok fırsat sunan alan ${grow} (%${result.percentiles[result.growth]}); Mayer ve Goleman çerçevesinde bu boyuta yönelik bilinçli egzersizler, mindfulness veya yapılandırılmış geri bildirim çalışmaları ölçülebilir ilerleme sağlayabilir.`,
  ].join(" ");
}
