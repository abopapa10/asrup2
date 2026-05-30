/**
 * Psikolojik Testler Merkezi — tek kaynak registry.
 * Hub listesi, metadata ve dinamik `/testler/[slug]` rotaları buradan beslenir.
 */

export type PsychologicalTestSlug =
  | "mbti-kisilik-analizi"
  | "bes-faktor-big-five"
  | "iliskilerde-sinir-ve-baglanma"
  | "duygusal-zeka-eq"
  | "stres-ve-tukenmislik-analizi"
  | "yetiskin-dehb-dikkat-eksiligi";

export type PsychologicalTestStatus = "live" | "coming-soon";

export type PsychologicalTestEntry = {
  slug: PsychologicalTestSlug;
  href: `/testler/${PsychologicalTestSlug}`;
  title: string;
  cardLead: string;
  metaTitle: string;
  metaDescription: string;
  questionCount: number;
  durationLabel: string;
  tags: readonly string[];
  status: PsychologicalTestStatus;
};

export const PSYCHOLOGICAL_TESTS_HUB = {
  path: "/testler" as const,
  title: "Kişilik Analizi Testleri",
  subtitle:
    "Bilimsel ve Akademik Temelli MBTI ve Psikolojik Değerlendirme Ölçekleri",
  metaTitle: "Psikolojik Testler Merkezi | MBTI ve Kişilik Analizi",
  metaDescription:
    "MBTI, Big Five, bağlanma, EQ, stres ve yetişkin DEHB (ASRS) tarama testleri. Tarayıcıda çalışan bilimsel psikolojik değerlendirme ölçekleri.",
} as const;

export const psychologicalTests: readonly PsychologicalTestEntry[] = [
  {
    slug: "mbti-kisilik-analizi",
    href: "/testler/mbti-kisilik-analizi",
    title: "MBTI Kişilik Analizi",
    cardLead:
      "Dört tercih boyutunda (E/I, S/N, T/F, J/P) eğilim profilinizi tarayıcıda hesaplayın.",
    metaTitle: "MBTI Kişilik Analizi Testi | Jung, 16 Tip ve Bilimsel Rehber",
    metaDescription:
      "Ücretsiz MBTI kişilik analizi testi: 16 soru, tarayıcıda sonuç. Jung'dan Myers-Briggs'e uzanan 2000+ kelimelik akademik rehber, geçerlilik tartışması ve klinik çerçeve.",
    questionCount: 16,
    durationLabel: "3–4 dk",
    tags: ["MBTI", "Kişilik", "Öz-farkındalık"],
    status: "live",
  },
  {
    slug: "bes-faktor-big-five",
    href: "/testler/bes-faktor-big-five",
    title: "Beş Faktör (Big Five)",
    cardLead:
      "Açıklık, sorumluluk, dışadönüklük, uyumluluk ve duygusal denge boyutlarında profil.",
    metaTitle: "Big Five Kişilik Testi | Beş Faktör Envanteri ve Bilimsel Rehber",
    metaDescription:
      "15 maddelik Big Five (OCEAN) testi: Likert ölçeği, tarayıcıda skor. Goldberg ve Costa & McCrae çerçevesinde 2000+ kelimelik akademik rehber.",
    questionCount: 15,
    durationLabel: "4–5 dk",
    tags: ["Big Five", "OCEAN", "Kişilik"],
    status: "live",
  },
  {
    slug: "iliskilerde-sinir-ve-baglanma",
    href: "/testler/iliskilerde-sinir-ve-baglanma",
    title: "Sınır ve Bağlanma Stilleri",
    cardLead:
      "İlişkilerde sınır kurma, güvenli ve kaygılı bağlanma eğilimlerinizi keşfedin.",
    metaTitle:
      "İlişki Sınır ve Bağlanma Testi | Güvenli, Kaygılı, Kaçıngan Stiller",
    metaDescription:
      "14 maddelik sınır ve bağlanma testi: Bowlby çerçevesinde tarayıcıda sonuç. Geçirgen/katı sınırlar, bağlanma stilleri ve 2000+ kelimelik klinik rehber.",
    questionCount: 14,
    durationLabel: "4–5 dk",
    tags: ["Bağlanma", "İlişki", "Sınır"],
    status: "live",
  },
  {
    slug: "duygusal-zeka-eq",
    href: "/testler/duygusal-zeka-eq",
    title: "Duygusal Zeka (EQ)",
    cardLead:
      "Goleman modelinde özfarkındalık, özdenetim, motivasyon, empati ve sosyal beceriler profiliniz.",
    metaTitle:
      "Duygusal Zeka (EQ) Testi | Goleman Modeli ve Bilimsel Rehber",
    metaDescription:
      "15 maddelik EQ testi: Likert ölçeği, tarayıcıda skor. Salovey-Mayer'den Goleman'a uzanan 2000+ kelimelik duygusal zeka rehberi.",
    questionCount: 15,
    durationLabel: "4–5 dk",
    tags: ["EQ", "Duygusal zeka", "Goleman"],
    status: "live",
  },
  {
    slug: "stres-ve-tukenmislik-analizi",
    href: "/testler/stres-ve-tukenmislik-analizi",
    title: "Stres ve Tükenmişlik",
    cardLead:
      "PSS ve Maslach esinli ölçekle algılanan stres ve burnout seviyenizi tarayıcıda görün.",
    metaTitle:
      "Stres ve Tükenmişlik Testi | PSS, Burnout ve Bilimsel Rehber",
    metaDescription:
      "14 maddelik stres ve tükenmişlik analizi: tarayıcıda skor. Kortizol, Maslach modeli ve stres yönetimi üzerine 2000+ kelimelik klinik rehber.",
    questionCount: 14,
    durationLabel: "3–4 dk",
    tags: ["Stres", "Tükenmişlik", "Burnout"],
    status: "live",
  },
  {
    slug: "yetiskin-dehb-dikkat-eksiligi",
    href: "/testler/yetiskin-dehb-dikkat-eksiligi",
    title: "Yetişkin DEHB Tarama",
    cardLead:
      "ASRS v1.1 Part A tabanlı dikkat eksikliği farkındalık testi — tanı değil, ön tarama.",
    metaTitle:
      "Yetişkin DEHB Testi | ASRS Dikkat Eksikliği Tarama ve Bilimsel Rehber",
    metaDescription:
      "12 maddelik ASRS esinli yetişkin DEHB tarama testi. Dikkat, hiperaktivite, yürütücü işlev ve tedavi üzerine 2000+ kelimelik klinik rehber.",
    questionCount: 12,
    durationLabel: "3–4 dk",
    tags: ["DEHB", "ADHD", "ASRS", "Dikkat"],
    status: "live",
  },
] as const;

export function getPsychologicalTest(
  slug: string
): PsychologicalTestEntry | undefined {
  return psychologicalTests.find((t) => t.slug === slug);
}

export function getAllPsychologicalTestSlugs(): PsychologicalTestSlug[] {
  return psychologicalTests.map((t) => t.slug);
}
