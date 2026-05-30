/** PSS ve Maslach (MBI) konseptlerine dayalı öz-bildirim ölçeği */
export type StressScale = "perceivedStress" | "burnout";

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export type StressBurnoutQuestion = {
  id: string;
  scale: StressScale;
  text: string;
  reversed?: boolean;
};

export type StressLevelCategory = "low" | "medium" | "high";

export const STRESS_BURNOUT_LIKERT: readonly {
  value: LikertValue;
  short: string;
  label: string;
}[] = [
  { value: 1, short: "1", label: "Hiç" },
  { value: 2, short: "2", label: "Nadiren" },
  { value: 3, short: "3", label: "Bazen" },
  { value: 4, short: "4", label: "Sık sık" },
  { value: 5, short: "5", label: "Çok sık" },
] as const;

export const STRESS_BURNOUT_QUESTIONS: readonly StressBurnoutQuestion[] = [
  {
    id: "pss1",
    scale: "perceivedStress",
    text: "Son bir ayda beklenmedik olaylar beni sık sık rahatsız etti.",
  },
  {
    id: "pss2",
    scale: "perceivedStress",
    text: "Günlük hayatımdaki olayları kontrol edemediğimi hissettim.",
  },
  {
    id: "pss3",
    scale: "perceivedStress",
    text: "Son bir ayda stresli ve gergin hissettim.",
  },
  {
    id: "pss4",
    scale: "perceivedStress",
    text: "İşlerin üstesinden gelemeyeceğimi düşündüm.",
  },
  {
    id: "pss5",
    scale: "perceivedStress",
    text: "Önemli sorunları ele alma gücümün olduğunu hissettim.",
    reversed: true,
  },
  {
    id: "pss6",
    scale: "perceivedStress",
    text: "Günlük sıkıntılara karşı başa çıkabildim.",
    reversed: true,
  },
  {
    id: "pss7",
    scale: "perceivedStress",
    text: "Yaşamımdaki değişikliklere uyum sağlamak zordu.",
  },
  {
    id: "mbi1",
    scale: "burnout",
    text: "İş, okul veya günlük sorumluluklarım yüzünden duygusal olarak tükenmiş hissediyorum.",
  },
  {
    id: "mbi2",
    scale: "burnout",
    text: "Gün sonunda enerjim tamamen bitmiş oluyor.",
  },
  {
    id: "mbi3",
    scale: "burnout",
    text: "İnsanlara veya görevlere karşı duygusal olarak uzaklaştım.",
  },
  {
    id: "mbi4",
    scale: "burnout",
    text: "Sabah kalkmakta zorlanıyorum çünkü yapacağım işler beni tüketiyor.",
  },
  {
    id: "mbi5",
    scale: "burnout",
    text: "Yaptığım işin anlamlı ve değerli olduğunu hissediyorum.",
    reversed: true,
  },
  {
    id: "mbi6",
    scale: "burnout",
    text: "Son haftalarda motivasyonum belirgin şekilde düştü.",
  },
  {
    id: "mbi7",
    scale: "burnout",
    text: "Başarılarımın takdir edileceğine inanıyorum.",
    reversed: true,
  },
] as const;

export const STRESS_LEVEL_META: Record<
  StressLevelCategory,
  {
    title: string;
    subtitle: string;
    badgeClass: string;
    barClass: string;
  }
> = {
  low: {
    title: "Düşük / Sağlıklı",
    subtitle: "Algılanan stres ve tükenmişlik belirtileri düşük bantta",
    badgeClass: "bg-emerald-500/15 text-emerald-900 ring-emerald-500/30",
    barClass: "from-emerald-400/80 to-emerald-500/60",
  },
  medium: {
    title: "Orta / Yönetilebilir",
    subtitle: "Stres yükü fark edilir; yapılandırılmış önlem ve dinlenme önerilir",
    badgeClass: "bg-amber-500/15 text-amber-900 ring-amber-500/35",
    barClass: "from-amber-400/80 to-amber-500/60",
  },
  high: {
    title: "Yüksek / Risk Grubu",
    subtitle: "Klinik değerlendirme ve profesyonel destek düşünülmeli",
    badgeClass: "bg-rose-500/15 text-rose-900 ring-rose-500/35",
    barClass: "from-rose-400/75 to-rose-500/55",
  },
};

export type StressBurnoutResult = {
  level: StressLevelCategory;
  compositePct: number;
  stressPct: number;
  burnoutPct: number;
};

export function createEmptyStressAnswers(): (LikertValue | null)[] {
  return Array.from({ length: STRESS_BURNOUT_QUESTIONS.length }, () => null);
}

function scoreItem(raw: LikertValue, reversed?: boolean): number {
  return reversed ? ((6 - raw) as LikertValue) : raw;
}

function scalePercentile(
  answers: readonly LikertValue[],
  questions: readonly StressBurnoutQuestion[],
  scale: StressScale
): number {
  const filtered = questions.filter((q) => q.scale === scale);
  let sum = 0;
  STRESS_BURNOUT_QUESTIONS.forEach((q, i) => {
    if (q.scale !== scale) return;
    sum += scoreItem(answers[i], q.reversed);
  });
  const mean = sum / filtered.length;
  return Math.round(((mean - 1) / 4) * 100);
}

function classifyLevel(compositePct: number): StressLevelCategory {
  if (compositePct < 40) return "low";
  if (compositePct <= 65) return "medium";
  return "high";
}

export function calculateStressBurnoutResult(
  answers: readonly (LikertValue | null)[]
): StressBurnoutResult | null {
  if (answers.length !== STRESS_BURNOUT_QUESTIONS.length) return null;
  if (answers.some((a) => a === null)) return null;

  const scored = answers as LikertValue[];
  let total = 0;
  STRESS_BURNOUT_QUESTIONS.forEach((q, i) => {
    total += scoreItem(scored[i], q.reversed);
  });
  const mean = total / STRESS_BURNOUT_QUESTIONS.length;
  const compositePct = Math.round(((mean - 1) / 4) * 100);

  const stressPct = scalePercentile(
    scored,
    STRESS_BURNOUT_QUESTIONS,
    "perceivedStress"
  );
  const burnoutPct = scalePercentile(scored, STRESS_BURNOUT_QUESTIONS, "burnout");

  return {
    level: classifyLevel(compositePct),
    compositePct,
    stressPct,
    burnoutPct,
  };
}

export function getStressExpertCommentary(
  result: StressBurnoutResult
): string {
  const { level, compositePct, stressPct, burnoutPct } = result;

  if (level === "low") {
    return [
      `Bileşik skorunuz yaklaşık %${compositePct} düzeyinde; algılanan stres (%${stressPct}) ve tükenmişlik (%${burnoutPct}) belirtileri genel olarak sağlıklı bir bantta görünüyor.`,
      "Bu profil, günlük stresörlerle başa çıkma kapasitenizin çoğu zaman yeterli olduğunu düşündürür; koruyucu alışkanlıkları (uyku, sınır, düzenli dinlenme) sürdürmeniz önerilir.",
      "Belirtiler son haftalarda belirgin arttıysa yine de kısa bir öz-değerlendirme tekrarı yapın; öz-bildirim ölçekleri anlık durumu yansıtır.",
    ].join(" ");
  }

  if (level === "medium") {
    return [
      `Skorunuz orta / yönetilebilir bantta (%${compositePct}); algılanan stres %${stressPct}, tükenmişlik %${burnoutPct} düzeyinde.`,
      "Bu düzey, iş-yaşam dengesi, uyku, sosyal destek ve yapılandırılmış gevşeme egzersizleriyle çoğu zaman geri çekilebilir; ancak ihmal edilirse kronikleşme riski artar.",
      "İki haftadan uzun süren yorgunluk, uyku bozukluğu veya motivasyon kaybı devam ederse bir klinik psikologla görüşmek, erken müdahale açısından değerlidir.",
    ].join(" ");
  }

  return [
    `Skorunuz yüksek / risk bantında (%${compositePct}); algılanan stres %${stressPct}, tükenmişlik %${burnoutPct} ile birlikte klinik açıdan anlamlı bir yük işaret edebilir.`,
    "Kronik stres ve tükenmişlik; uyku bozuklukları, depresif belirtiler, somatik şikayetler, ilişki gerilimi ve işlevsellik kaybına yol açabilir. Bu test tanı koymaz; ancak profesyonel değerlendirme için güçlü bir öz-farkındalık sinyalidir.",
    "Günlük işlevselliğinizi ciddi düzeyde kısıtlayan yorgunluk, umutsuzluk, intihar düşüncesi, panik atak veya madde kullanımına başvuru varsa gecikmeden psikiyatrist veya klinik psikolog desteği alın. [Bireysel terapi](/bireysel-terapi) ve gerekirse [anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa) süreçleri, bilişsel-davranışçı çerçevede stres ve tükenmişlikle çalışmak için yapılandırılabilir.",
  ].join(" ");
}
