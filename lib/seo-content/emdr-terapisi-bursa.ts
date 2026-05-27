import type { SeoLandingPage } from "@/lib/seo-pages";

export const emdrTerapisiBursa: SeoLandingPage = {
  slug: "emdr-terapisi-bursa",
  group: "hizmetler",
  parent: { label: "Hizmetler", href: "/#hizmetler" },

  meta: {
    title: "EMDR Terapisi Bursa | Travmatik Anılar İçin Klinik Destek",
    description:
      "Bursa'da EMDR terapisi: travmatik anıların işlenmesi, tetiklenme ve hipervijilans belirtilerinde yapılandırılmış klinik süreç.",
    canonicalPath: "/hizmetler/emdr-terapisi-bursa",
    keywords: [
      "EMDR terapisi Bursa",
      "travma terapisi",
      "tetiklenme",
      "hipervijilans",
      "Bursa psikolog",
      "Nilüfer psikolog",
    ],
  },

  hero: {
    eyebrow: "Hizmet · Bursa Nilüfer",
    h1: "EMDR Terapisi — Bursa",
    lead: "Geçmişte yaşanmış zorlayıcı deneyimlerin bugünkü yaşamı etkilemeye devam ettiği durumlarda EMDR, yapılandırılmış ve kanıta dayalı bir terapi yaklaşımıdır.",
    intro:
      "EMDR süreci her danışan için aynı hızda ilerlemez; güvenli hazırlık aşaması ve klinik uygunluk değerlendirmesi önceliklidir.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "EMDR hangi durumlarda düşünülür?",
      paragraphs: [
        "Bazı danışanlar geçmiş bir olayı 'bitmiş' olarak bilir ama beden ve zihin hâlâ alarmdadır. Ani tetiklenmeler, yoğun irkilme, kaçınma davranışları ve gece zihin durmaması bu tabloya eşlik edebilir.",
        "EMDR, bu anıların sinir sistemi üzerindeki yükünü azaltmayı hedefleyen yapılandırılmış bir yöntemdir.",
        "Süreç yalnızca olay anlatımına dayanmaz; hazırlık, düzenleme ve güvenli işleme adımlarını birlikte içerir.",
      ],
    },
    {
      kind: "symptoms",
      heading: "EMDR terapisinden kimler yararlanabilir?",
      intro:
        "Aşağıdaki belirtiler süreklilik kazanıyorsa klinik değerlendirme önerilir.",
      groups: [
        {
          title: "Travma sonrası belirtiler",
          items: [
            "Tetikleyicilerle aniden yükselen yoğun kaygı",
            "Kabuslar, uyku bölünmeleri",
            "Ani irkilme ve bedensel alarm hali",
            "Kaçınma davranışlarının artması",
          ],
        },
        {
          title: "Duygusal ve bilişsel etkiler",
          items: [
            "Sürekli suçluluk veya utanç düşünceleri",
            "Güvensizlik ve kontrol kaybı hissi",
            "Konsantrasyon güçlüğü",
            "Yakın ilişkilerde zorlanma",
          ],
        },
        {
          title: "Yaşam alanına etkiler",
          items: [
            "İş ve sosyal hayatta daralma",
            "Güvenli hissettiği alanların azalması",
            "Günlük rutinin bozulması",
            "Bedensel yorgunluk ve gerginlik",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "EMDR süreci nasıl ilerler?",
      paragraphs: [
        "İlk aşamada klinik değerlendirme ve hazırlık yapılır. Danışanın regülasyon kapasitesi güçlendirilmeden doğrudan anı işleme aşamasına geçilmez.",
        "Uygunluk sağlandığında hedef anılar üzerinde yapılandırılmış EMDR protokolü uygulanır. Seans sonrası stabilizasyon adımları süreçte kritik rol oynar.",
        "EMDR, çoğu zaman [travma terapisi](/hizmetler/travma-terapisi-bursa) ve bireysel psikoterapi çerçevesiyle birlikte planlanır.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "EMDR uygulamalarında güvenlik, hazırlık ve danışanın kapasitesine saygı temel ilkedir.",
      pillars: [
        {
          label: "01",
          title: "Önce stabilizasyon",
          body: "Regülasyon becerileri güçlendirilmeden yoğun anı işlemeye geçilmez.",
        },
        {
          label: "02",
          title: "Kişiye özel tempo",
          body: "Süreç danışanın hazır oluşuna göre ilerler; hız baskısı uygulanmaz.",
        },
        {
          label: "03",
          title: "Etik çerçeve",
          body: "Tüm seanslar danışan gizliliği ve mesleki etik ilkeler içinde yürütülür.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "EMDR herkes için uygun mudur?",
      answer:
        "Her danışan için doğrudan uygun olmayabilir. Klinik değerlendirme ile uygunluk belirlenir.",
    },
    {
      question: "EMDR kaç seansta sonuç verir?",
      answer:
        "Süre, hedef anı sayısı ve danışanın klinik öyküsüne göre değişir. Net bir seans sayısı vaat edilmez.",
    },
    {
      question: "Seans sonrası tetiklenme olur mu?",
      answer:
        "Bazı danışanlarda seans sonrası duygusal hareketlilik olabilir. Bu nedenle stabilizasyon ve takip adımları sürecin parçasıdır.",
    },
    {
      question: "EMDR online uygulanabilir mi?",
      answer:
        "Bazı durumlarda online protokoller uygulanabilir; ancak uygunluk klinik değerlendirmeyle belirlenir.",
    },
    {
      question: "EMDR ilaç yerine geçer mi?",
      answer:
        "Hayır. İlaç kararı psikiyatri hekiminindir. Gerekli durumlarda birlikte planlanabilir.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "EMDR uygunluğu ve süreç planlaması için ilk görüşme talebi aynı gün içinde yanıtlanır.",
  },

  related: [
    {
      label: "Travma Terapisi Bursa",
      href: "/hizmetler/travma-terapisi-bursa",
      description: "Travma odaklı geniş klinik çerçeve.",
    },
    {
      label: "Bursa'da Deprem Anksiyetesi",
      href: "/makale/bursa-deprem-anksiyetesi",
      description: "Travma sonrası kaygı belirtilerini ele alan kapsamlı yazı.",
    },
    {
      label: "Nilüfer Psikolog",
      href: "/lokasyon/nilufer-psikolog",
      description: "Yüz yüze klinik seans lokasyonu.",
    },
  ],
};
