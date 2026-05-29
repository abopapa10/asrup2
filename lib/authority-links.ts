export type AuthorityLinkItem = {
  slug: string;
  href: string;
  label: string;
  description: string;
  cta: string;
};

export const coreServiceLinks: readonly AuthorityLinkItem[] = [
  {
    slug: "okb-terapisi-bursa",
    href: "/hizmetler/okb-terapisi-bursa",
    label: "OKB Terapisi Bursa",
    description:
      "Takıntı ve tekrar davranış döngülerinde yapılandırılmış klinik destek.",
    cta: "OKB yaklaşımını incele",
  },
  {
    slug: "anksiyete-terapisi-bursa",
    href: "/hizmetler/anksiyete-terapisi-bursa",
    label: "Anksiyete Terapisi Bursa",
    description:
      "Yaygın kaygı, aşırı düşünme ve bedensel gerginlik için terapi süreci.",
    cta: "Anksiyete sürecini incele",
  },
  {
    slug: "panik-atak-terapisi-bursa",
    href: "/hizmetler/panik-atak-terapisi-bursa",
    label: "Panik Atak Terapisi Bursa",
    description:
      "Panik döngüsü, kaçınma davranışları ve tetiklenme yönetimi odaklı destek.",
    cta: "Panik atak desteğini incele",
  },
  {
    slug: "emdr-terapisi-bursa",
    href: "/hizmetler/emdr-terapisi-bursa",
    label: "EMDR Terapisi Bursa",
    description:
      "Travmatik anıların işlenmesi ve tetiklenme yükünün azalmasına yönelik çalışma.",
    cta: "EMDR hakkında oku",
  },
  {
    slug: "depresyon-terapisi-bursa",
    href: "/hizmetler/depresyon-terapisi-bursa",
    label: "Depresyon Terapisi Bursa",
    description:
      "İsteksizlik, tükenmişlik ve duygusal geri çekilmede klinik terapi yaklaşımı.",
    cta: "Depresyon sürecini incele",
  },
  {
    slug: "cift-terapisi-bursa",
    href: "/hizmetler/cift-terapisi-bursa",
    label: "Çift Terapisi Bursa",
    description:
      "İletişim, güven ve ilişkisel döngülerde çift odaklı yapılandırılmış seanslar.",
    cta: "Çift terapisini incele",
  },
  {
    slug: "online-terapi-bursa",
    href: "/hizmetler/online-terapi-bursa",
    label: "Online Terapi Bursa",
    description:
      "Yoğun tempo ve ulaşım kısıtlarında sürdürülebilir online psikoterapi modeli.",
    cta: "Online terapiyi incele",
  },
] as const;

/** Terapi yaklaşımı / uzmanlık ekolü sayfaları */
export const therapyApproachLinks: readonly AuthorityLinkItem[] = [
  {
    slug: "birey-odakli-psikoterapi-bursa",
    href: "/hizmetler/birey-odakli-psikoterapi-bursa",
    label: "Birey Odaklı Psikoterapi",
    description:
      "Rogers çizgisinde insancıl ekol; terapötik ilişki ve öz-yönelim odaklı klinik çerçeve.",
    cta: "Birey odaklı yaklaşımı incele",
  },
  {
    slug: "bilissel-davranisci-terapi-bursa",
    href: "/hizmetler/bilissel-davranisci-terapi-bursa",
    label: "BDT (Bilişsel Davranışçı Terapi)",
    description:
      "Beck ve Ellis geleneği; düşünce-duygu-davranış modeli ve kanıta dayalı müdahaleler.",
    cta: "BDT sayfasını incele",
  },
  {
    slug: "regresyon-terapisi-bursa",
    href: "/hizmetler/regresyon-terapisi-bursa",
    label: "Regresyon Terapisi",
    description:
      "Geçmiş deneyimlerin duygu odaklı keşfi; hazırlık, entegrasyon ve etik sınırlar içinde.",
    cta: "Regresyon terapisini incele",
  },
] as const;

export const coreLocationLinks: readonly AuthorityLinkItem[] = [
  {
    slug: "nilufer-psikolog",
    href: "/lokasyon/nilufer-psikolog",
    label: "Nilüfer Psikolog",
    description: "Yüz yüze seansların yürütüldüğü ana klinik lokasyon.",
    cta: "Nilüfer sayfasını incele",
  },
  {
    slug: "osmangazi-psikolog",
    href: "/lokasyon/osmangazi-psikolog",
    label: "Osmangazi Psikolog",
    description: "Osmangazi'den başvuran danışanlar için erişim ve süreç bilgisi.",
    cta: "Osmangazi sayfasını incele",
  },
  {
    slug: "mudanya-psikolog",
    href: "/lokasyon/mudanya-psikolog",
    label: "Mudanya Psikolog",
    description: "Mudanya'dan yüz yüze ve online plan seçenekleri.",
    cta: "Mudanya sayfasını incele",
  },
  {
    slug: "gorukle-psikolog",
    href: "/lokasyon/gorukle-psikolog",
    label: "Görükle Psikolog",
    description: "Öğrenci ve genç yetişkin odaklı başvuru bağlamları.",
    cta: "Görükle sayfasını incele",
  },
] as const;
