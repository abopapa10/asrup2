/**
 * Sınav kaygısı öz-bildirim ölçeği — Spielberger Test Anxiety Inventory (TAI)
 * ve Liebert–Morris Sınav Kaygısı Envanteri konseptlerine dayalı kısa form.
 * Tanı aracı değildir; eğitim ve öz-farkındalık amaçlıdır.
 */

export type ExamAnxietyLikert = 1 | 2 | 3 | 4 | 5;

export type ExamAnxietyQuestion = {
  id: string;
  text: string;
  /** Düşük kaygı = yüksek puan; skorlama ters çevrilir */
  reversed?: boolean;
};

export type ExamAnxietyLevel = "low" | "medium" | "high";

export const EXAM_ANXIETY_LIKERT: readonly {
  value: ExamAnxietyLikert;
  short: string;
  label: string;
}[] = [
  { value: 1, short: "1", label: "Hiçbir zaman" },
  { value: 2, short: "2", label: "Nadiren" },
  { value: 3, short: "3", label: "Ara sıra" },
  { value: 4, short: "4", label: "Sıklıkla" },
  { value: 5, short: "5", label: "Her zaman" },
] as const;

export const EXAM_ANXIETY_QUESTIONS: readonly ExamAnxietyQuestion[] = [
  {
    id: "tai1",
    text: "Sınava girmeden önce midemde kramp, bulantı veya iştahsızlık yaşıyorum.",
  },
  {
    id: "tai2",
    text: "Sınav sırasında ellerim titriyor, terliyor veya kasılmalar hissediyorum.",
  },
  {
    id: "tai3",
    text: "Sınavda başarısız olacağım konusunda sürekli endişeleniyorum.",
  },
  {
    id: "tai4",
    text: "Sınav sorularını okurken zihnim boşalıyor veya odaklanamıyorum.",
  },
  {
    id: "tai5",
    text: "Sınava çalışırken kaygım öğrenmemi ve hatırlamamı zorlaştırıyor.",
  },
  {
    id: "tai6",
    text: "Sınav sonucunun geleceğimi veya değerimi tek başına belirleyeceğini düşünüyorum.",
  },
  {
    id: "tai7",
    text: "Sınav salonunda kalp çarpıntısı veya nefes darlığı yaşıyorum.",
  },
  {
    id: "tai8",
    text: "Beklenmedik veya zor sorularla karşılaşınca panikliyorum.",
  },
  {
    id: "tai9",
    text: "Önemli sınavlardan önce uykusuz kalıyorum.",
  },
  {
    id: "tai10",
    text: "Diğer öğrencilerin benden daha başarılı olacağından korkuyorum.",
  },
  {
    id: "tai11",
    text: "Sınavda öğrendiklerimi hatırlayamadığım oluyor.",
  },
  {
    id: "tai12",
    text: "Ailemin veya çevrenin beklentileri beni sınavda gergin yapıyor.",
  },
  {
    id: "tai13",
    text: "Sınavı düşünmek bile bedensel gerginlik uyandırıyor.",
  },
  {
    id: "tai14",
    text: "Sınav kaygım günlük yaşamımı (sosyal, uyku, motivasyon) etkiliyor.",
  },
  {
    id: "tai15",
    text: "Sınav öncesi konsantre olmakta zorlanıyorum.",
  },
  {
    id: "tai16",
    text: "Sınav sonrası hatalarımı aşırı analiz edip kendimi suçluyorum.",
  },
  {
    id: "tai17",
    text: "Sınavlara yetecek kadar çalıştığımda bile yine de yetersiz hissederim.",
  },
  {
    id: "tai18",
    text: "Sınavlara hazırlanırken genel olarak kendime güveniyorum.",
    reversed: true,
  },
] as const;

export const EXAM_ANXIETY_LEVEL_META: Record<
  ExamAnxietyLevel,
  {
    title: string;
    subtitle: string;
    badgeClass: string;
    barClass: string;
  }
> = {
  low: {
    title: "Düşük Kaygı (Normal)",
    subtitle: "Sınav kaygısı genel olarak işlevsel düzeyde",
    badgeClass: "bg-emerald-500/15 text-emerald-900 ring-emerald-500/30",
    barClass: "from-emerald-400/80 to-emerald-500/60",
  },
  medium: {
    title: "Orta Düzey Kaygı",
    subtitle: "Yönetilebilir; makaledeki stratejileri uygulama önerilir",
    badgeClass: "bg-amber-500/15 text-amber-900 ring-amber-500/35",
    barClass: "from-amber-400/80 to-amber-500/60",
  },
  high: {
    title: "Yüksek Kaygı",
    subtitle: "Profesyonel destek düşünülmeli",
    badgeClass: "bg-rose-500/15 text-rose-900 ring-rose-500/35",
    barClass: "from-rose-400/75 to-rose-500/55",
  },
};

export type ExamAnxietyResult = {
  level: ExamAnxietyLevel;
  compositePct: number;
};

export function createEmptyExamAnxietyAnswers(): (ExamAnxietyLikert | null)[] {
  return Array.from({ length: EXAM_ANXIETY_QUESTIONS.length }, () => null);
}

function scoreItem(raw: ExamAnxietyLikert, reversed?: boolean): number {
  return reversed ? ((6 - raw) as ExamAnxietyLikert) : raw;
}

function classifyLevel(compositePct: number): ExamAnxietyLevel {
  if (compositePct < 40) return "low";
  if (compositePct <= 65) return "medium";
  return "high";
}

export function calculateExamAnxietyResult(
  answers: readonly (ExamAnxietyLikert | null)[]
): ExamAnxietyResult | null {
  if (answers.length !== EXAM_ANXIETY_QUESTIONS.length) return null;
  if (answers.some((a) => a === null)) return null;

  const scored = answers as ExamAnxietyLikert[];
  let total = 0;
  EXAM_ANXIETY_QUESTIONS.forEach((q, i) => {
    total += scoreItem(scored[i], q.reversed);
  });
  const mean = total / EXAM_ANXIETY_QUESTIONS.length;
  const compositePct = Math.round(((mean - 1) / 4) * 100);

  return {
    level: classifyLevel(compositePct),
    compositePct,
  };
}

export function getExamAnxietyExpertCommentary(result: ExamAnxietyResult): string {
  const { level, compositePct } = result;

  if (level === "low") {
    return [
      `Sınav kaygısı skorunuz yaklaşık %${compositePct} düzeyinde; bu bant, kaygının çoğu zaman performansı destekleyen normal bir uyarı sistemi olarak işlev gördüğünü düşündürür.`,
      "Hafif gerginlik odaklanmayı artırabilir; düzenli uyku, planlı çalışma ve sınav öncesi kısa nefes egzersizleri bu dengeyi korumaya yardımcı olur.",
      "Belirtiler son haftalarda belirgin arttıysa [sınav kaygısı rehberimizi](/makale/sinav-kaygisi-nedir) okuyarak erken önlem alabilirsiniz.",
    ].join(" ");
  }

  if (level === "medium") {
    return [
      `Skorunuz orta düzey kaygı bandında (%${compositePct}). Bu düzey, birçok öğrencide görülür ve yapılandırılmış çalışma rutinleri, bilişsel yeniden çerçeveleme ve gevşeme teknikleriyle çoğu zaman yönetilebilir.`,
      "[Sınav kaygısı nedir?](/makale/sinav-kaygisi-nedir) makalesindeki sınav öncesi, esnası ve sonrası stratejileri uygulamanız önerilir.",
      "Kaygı iki haftadan uzun süredir performansınızı ciddi düşürüyorsa veya panik atak benzeri belirtiler varsa bir klinik psikologla görüşmek değerlidir.",
    ].join(" ");
  }

  return [
    `Skorunuz yüksek kaygı bandında (%${compositePct}). Sürekli bedensel belirtiler, zihin bulanıklığı, kaçınma veya günlük işlevsellik kaybı profesyonel değerlendirme için anlamlı sinyaller olabilir.`,
    "Bu test tanı koymaz; Spielberger TAI veya Liebert–Morris gibi klinik ölçeklerin yerini tutmaz. Yine de [sınav kaygısı rehberi](/makale/sinav-kaygisi-nedir) ile birlikte [anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa) veya [bireysel terapi](/bireysel-terapi) süreçleri, bilişsel-davranışçı çerçevede sınav kaygısıyla çalışmak için yapılandırılabilir.",
    "İntihar düşüncesi, ağır depresif tablo veya sürekli panik atak varsa gecikmeden psikiyatrist veya acil servise başvurun.",
  ].join(" ");
}
