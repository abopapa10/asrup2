export type LikertValue = 1 | 2 | 3 | 4 | 5;

export type AttachmentStyleId = "secure" | "anxious" | "avoidant";

export type BoundaryProfileId = "porous" | "rigid" | "enmeshment" | "balanced";

export type QuestionScale =
  | "attachmentAnxiety"
  | "attachmentAvoidance"
  | "boundaryPorous"
  | "boundaryRigid"
  | "boundaryEnmeshment";

export type BoundaryAttachmentQuestion = {
  id: string;
  text: string;
  scale: QuestionScale;
  reversed?: boolean;
};

export const BOUNDARY_ATTACHMENT_LIKERT: readonly {
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

/** Bağlanma (ECR benzeri) ve sınır boyutları — 14 madde */
export const BOUNDARY_ATTACHMENT_QUESTIONS: readonly BoundaryAttachmentQuestion[] =
  [
    {
      id: "ax1",
      scale: "attachmentAnxiety",
      text: "Yakın ilişkide partnerimin ilgisinin azalacağından sık endişelenirim.",
    },
    {
      id: "ax2",
      scale: "attachmentAnxiety",
      text: "Reddedilme veya terk edilme korkusu günlük düşüncelerimi etkiler.",
    },
    {
      id: "ax3",
      scale: "attachmentAnxiety",
      text: "Sevilmediğimi hissettiğimde güvence aramak için mesaj veya arama yapma ihtiyacı duyarım.",
    },
    {
      id: "ax4",
      scale: "attachmentAnxiety",
      text: "Partnerim mesajlara geç yanıt verdiğinde içimde huzursuzluk oluşur.",
    },
    {
      id: "av1",
      scale: "attachmentAvoidance",
      text: "Duygusal yakınlık ve derin paylaşım beni çoğu zaman rahatsız eder.",
    },
    {
      id: "av2",
      scale: "attachmentAvoidance",
      text: "İlişkide sorunları konuşmak yerine mesafe koymayı veya konuyu kapatmayı tercih ederim.",
    },
    {
      id: "av3",
      scale: "attachmentAvoidance",
      text: "Bağımlı veya zayıf görünmekten kaçınırım; kendi başıma halletmeyi seçerim.",
    },
    {
      id: "av4",
      scale: "attachmentAvoidance",
      text: "Partnerim duygusal olarak çok yaklaştığında içimden uzaklaşmak veya soğumak ister.",
    },
    {
      id: "bp1",
      scale: "boundaryPorous",
      text: "Hayır demekte zorlanır, başkalarının isteklerini kendi ihtiyacımın önüne koyabilirim.",
    },
    {
      id: "bp2",
      scale: "boundaryPorous",
      text: "Çatışmadan kaçınmak için sınırlarımı esnetmek bana sık görünür.",
    },
    {
      id: "br1",
      scale: "boundaryRigid",
      text: "Yakınlık kurulduğunda kontrolü kaybedeceğim endişesiyle duvar örmeye eğilimliyim.",
    },
    {
      id: "br2",
      scale: "boundaryRigid",
      text: "Duygularımı paylaşmak zayıflık gibi hissettirir; çoğu zaman kendimi kapalı tutarım.",
    },
    {
      id: "be1",
      scale: "boundaryEnmeshment",
      text: "Partnerimin veya ailemin ruh halini kendi duygusal durumumdan ayırt etmekte zorlanırım.",
    },
    {
      id: "be2",
      scale: "boundaryEnmeshment",
      text: "Onaylanmak ve sevilmek için kendi görüşümü veya ihtiyacımı geri planda bırakabilirim.",
    },
  ] as const;

export const ATTACHMENT_STYLE_META: Record<
  AttachmentStyleId,
  {
    title: string;
    subtitle: string;
    badgeClass: string;
  }
> = {
  secure: {
    title: "Güvenli Bağlanma",
    subtitle: "Yakınlık ve özerklik arasında denge eğilimi",
    badgeClass: "bg-emerald-500/15 text-emerald-800 ring-emerald-500/30",
  },
  anxious: {
    title: "Kaygılı Bağlanma",
    subtitle: "Yakınlık arzusu ile terk edilme korkusunun birlikte görülmesi",
    badgeClass: "bg-amber-500/15 text-amber-900 ring-amber-500/35",
  },
  avoidant: {
    title: "Kaçıngan Bağlanma",
    subtitle: "Özerklik koruma ve duygusal mesafe eğilimi",
    badgeClass: "bg-slate-500/12 text-slate-800 ring-slate-500/25",
  },
};

export const BOUNDARY_PROFILE_META: Record<
  BoundaryProfileId,
  {
    title: string;
    subtitle: string;
  }
> = {
  porous: {
    title: "Geçirgen Sınırlar",
    subtitle: "Hayır diyememe ve aşırı uyum eğilimi",
  },
  rigid: {
    title: "Katı Sınırlar",
    subtitle: "Duygusal mesafe ve kontrol odaklı koruma",
  },
  enmeshment: {
    title: "İç İçe Geçme (Enmeshment)",
    subtitle: "Benlik ile diğerinin duygularının karışması",
  },
  balanced: {
    title: "Dengeli Sınır Eğilimi",
    subtitle: "İhtiyaç ifadesi ile empati arasında göreli denge",
  },
};

export type ScalePercentiles = Record<QuestionScale, number>;

export type BoundaryAttachmentResult = {
  attachment: AttachmentStyleId;
  boundary: BoundaryProfileId;
  percentiles: ScalePercentiles;
  anxietyPct: number;
  avoidancePct: number;
};

export function createEmptyBoundaryAnswers(): (LikertValue | null)[] {
  return Array.from(
    { length: BOUNDARY_ATTACHMENT_QUESTIONS.length },
    () => null
  );
}

function scoreItem(raw: LikertValue, reversed?: boolean): number {
  return reversed ? ((6 - raw) as LikertValue) : raw;
}

function meanToPercentile(mean: number): number {
  return Math.round(((mean - 1) / 4) * 100);
}

export function calculateBoundaryAttachmentResult(
  answers: readonly (LikertValue | null)[]
): BoundaryAttachmentResult | null {
  if (answers.length !== BOUNDARY_ATTACHMENT_QUESTIONS.length) return null;
  if (answers.some((a) => a === null)) return null;

  const sums: Record<QuestionScale, number> = {
    attachmentAnxiety: 0,
    attachmentAvoidance: 0,
    boundaryPorous: 0,
    boundaryRigid: 0,
    boundaryEnmeshment: 0,
  };
  const counts: Record<QuestionScale, number> = { ...sums };

  BOUNDARY_ATTACHMENT_QUESTIONS.forEach((q, i) => {
    const scored = scoreItem(answers[i]!, q.reversed);
    sums[q.scale] += scored;
    counts[q.scale] += 1;
  });

  const percentiles = {} as ScalePercentiles;
  (Object.keys(sums) as QuestionScale[]).forEach((scale) => {
    percentiles[scale] = meanToPercentile(sums[scale] / counts[scale]);
  });

  const anxietyPct = percentiles.attachmentAnxiety;
  const avoidancePct = percentiles.attachmentAvoidance;

  const attachment = classifyAttachment(anxietyPct, avoidancePct);
  const boundary = classifyBoundary(percentiles);

  return {
    attachment,
    boundary,
    percentiles,
    anxietyPct,
    avoidancePct,
  };
}

function classifyAttachment(
  anxiety: number,
  avoidance: number
): AttachmentStyleId {
  const lowAnxiety = anxiety < 42;
  const lowAvoidance = avoidance < 42;
  const highAnxiety = anxiety >= 58;
  const highAvoidance = avoidance >= 58;

  if (lowAnxiety && lowAvoidance) return "secure";
  if (highAnxiety && highAvoidance) {
    return anxiety >= avoidance ? "anxious" : "avoidant";
  }
  if (highAnxiety && !highAvoidance) return "anxious";
  if (highAvoidance && !highAnxiety) return "avoidant";
  if (anxiety > avoidance + 8) return "anxious";
  if (avoidance > anxiety + 8) return "avoidant";
  if (lowAnxiety || lowAvoidance) return "secure";
  return anxiety >= avoidance ? "anxious" : "avoidant";
}

function classifyBoundary(p: ScalePercentiles): BoundaryProfileId {
  const porous = p.boundaryPorous;
  const rigid = p.boundaryRigid;
  const enmesh = p.boundaryEnmeshment;
  const max = Math.max(porous, rigid, enmesh);

  if (max < 48) return "balanced";

  if (porous === max && porous >= rigid && porous >= enmesh) return "porous";
  if (rigid === max && rigid >= porous && rigid >= enmesh) return "rigid";
  if (enmesh === max) return "enmeshment";
  if (porous >= rigid && porous >= enmesh) return "porous";
  if (rigid >= enmesh) return "rigid";
  return "enmeshment";
}

export function getCombinedExpertAnalysis(
  result: BoundaryAttachmentResult
): string {
  const { attachment, boundary, anxietyPct, avoidancePct } = result;
  const parts: string[] = [];

  if (attachment === "secure") {
    parts.push(
      "Bağlanma profilinizde güvenli bir eğilim öne çıkıyor: yakınlık kurmaktan çekinmezken, partnerinizin özerkliğine de alan tanıyabilirsiniz. Bu, ilişkide hem duygusal paylaşım hem de sınır saygısı için sağlam bir zemin oluşturur."
    );
  } else if (attachment === "anxious") {
    parts.push(
      `Kaygılı bağlanma eğiliminiz belirgin (kaygı boyutu yaklaşık %${anxietyPct}). Yakınlık arzusu ile terk edilme korkusu bir arada işleyebilir; partnerinizin davranışlarını sık yorumlama ve güvence arama döngüleri oluşabilir. Bu örüntü patoloji değil, erken bağlanma deneyimlerinden öğrenilmiş bir uyum stratejisidir.`
    );
  } else {
    parts.push(
      `Kaçıngan bağlanma eğiliminiz öne çıkıyor (kaçınma boyutu yaklaşık %${avoidancePct}). Duygusal yakınlık ve bağımlılık hissi sizi geri çekebilir; sorunları konuşmak yerine mesafe koyma veya kendi başınıza çözme tercih edebilirsiniz. Partneriniz bunu soğukluk sanabilir; aslında çoğu zaman öz-koruma amaçlıdır.`
    );
  }

  if (boundary === "balanced") {
    parts.push(
      "Sınır profilinizde göreli bir denge görülüyor: hem kendi ihtiyaçlarınızı ifade etme hem de başkalarına empati gösterme kapasiteniz birlikte var. Gelişim alanı olarak, yorgunluk veya stres altında eski otomatik tepkileri fark etmek faydalı olur."
    );
  } else if (boundary === "porous") {
    parts.push(
      "Geçirgen sınırlar eğilimi, hayır demekte zorlanma ve çatışmadan kaçınmak için kendi limitlerinizi esnetmeyi içerebilir. Zamanla tükenmişlik, öfke birikimi veya pasif-agresif ifadeler ortaya çıkabilir; yapıcı adım, küçük ve net bir “hayır” pratiği ile başlamaktır."
    );
  } else if (boundary === "rigid") {
    parts.push(
      "Katı sınırlar, duygusal yakınlıktan korunma ve kontrol ihtiyacıyla ilişkilidir. Güvenlik hissi sağlasa da partneriniz mesafeli algılayabilir. Kademeli duygu paylaşımı ve güvenli ilişkide “yavaş açılma” egzersizleri, duvarları yumuşatmadan güven inşa eder."
    );
  } else {
    parts.push(
      "İç içe geçme (enmeshment) eğilimi, kendi duygunuzla başkasının duygusunu ayırt etmede zorlanmayı ve onay için benliği geri çekmeyi içerebilir. “Bu benim duygum mu, onun mu?” sorusu ve düzenli öz-bakım ritüelleri, sağlıklı ayrışmayı destekler."
    );
  }

  parts.push(
    "Bu özet öz-farkındalık içindir; bağlanma stili yaşam boyu değişebilir ve çift/ bireysel terapide güvenli bağlanmaya doğru yeniden öğrenme mümkündür. Yoğun ilişki sıkıntısı, şiddet veya panik belirtilerinde yüz yüze profesyonel destek önceliklidir."
  );

  return parts.join(" ");
}
