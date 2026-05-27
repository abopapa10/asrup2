import type { SeoLandingPage } from "@/lib/seo-pages";

export const mudanyaPsikolog: SeoLandingPage = {
  slug: "mudanya-psikolog",
  group: "lokasyon",
  parent: { label: "Lokasyonlar" },

  meta: {
    title: "Mudanya Psikolog | Bursa'da Yüz Yüze ve Online Psikoterapi",
    description:
      "Mudanya'dan psikolog arayan danışanlar için Bursa Nilüfer kliniğinde yüz yüze ve online psikoterapi. Ulaşım planı, süreç ve klinik çerçeve.",
    canonicalPath: "/lokasyon/mudanya-psikolog",
    keywords: [
      "Mudanya psikolog",
      "Bursa Mudanya psikolog",
      "Mudanya terapi",
      "Nilüfer psikolog",
      "online terapi Bursa",
      "klinik psikolog Bursa",
    ],
  },

  hero: {
    eyebrow: "Lokasyon · Bursa",
    h1: "Mudanya'dan Psikolojik Destek Arayanlar İçin",
    lead: "Mudanya'da yaşayan danışanlar için psikoterapi süreci; ulaşım gerçekliği, seans düzeni ve danışanın günlük ritmi birlikte düşünülerek planlanır.",
    intro:
      "Yüz yüze görüşmeler Nilüfer kliniğimizde; ulaşımın zorlayıcı olduğu dönemlerde online seans seçeneği aynı klinik standartla sürdürülebilir.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Mudanya bağlamında terapiye başlamak",
      paragraphs: [
        "Mudanya'da yaşayan danışanlar için terapi kararını zorlaştıran unsurlardan biri çoğu zaman ulaşım süresidir. Seans öncesi yol stresi, özellikle kaygı ve panik belirtileri yaşayan kişilerde belirgin hissedilebilir.",
        "Bu nedenle seans saatleri danışanın hafta içi akışına göre planlanır. Amaç, terapiyi hayatın dışında bir yük haline getirmek değil; sürdürülebilir bir ritim kurmaktır.",
        "İlk görüşmede bu ritim birlikte konuşulur; süreç gerçek yaşam koşullarına göre tasarlanır.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Mudanya'dan başvuran danışanların sık gündemleri",
      intro:
        "Aşağıdaki başlıklar Mudanya'dan başvuran danışanlarda sık görülür; liste sınırlayıcı değildir.",
      groups: [
        {
          title: "Kaygı ve bedensel belirtiler",
          items: [
            "Sürekli zihinsel tetikte olma",
            "Çarpıntı, göğüste sıkışma, nefes darlığı hissi",
            "Gece uykuya geçmekte zorlanma",
            "Aşırı düşünme ve karar yorgunluğu",
          ],
        },
        {
          title: "Duygudurum ve enerji",
          items: [
            "İsteksizlik, enerji düşüklüğü",
            "Günlük işlevsellikte azalma",
            "Duygusal geri çekilme",
            "Tükenmişlik hissi",
          ],
        },
        {
          title: "İlişkisel başvurular",
          items: [
            "İletişim kopukluğu",
            "Güven ve yakınlık sorunları",
            "Tekrarlayan çatışma döngüleri",
            "Sınır belirleme güçlükleri",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Yüz yüze ve online planlama",
      paragraphs: [
        "Mudanya'dan yüz yüze seansa gelen danışanlar için haftalık düzen kurulurken ulaşım yoğunluğu dikkate alınır. Özellikle ilk haftalarda danışanın sürece adaptasyonunu kolaylaştıran saat aralıkları tercih edilir.",
        "Ulaşımın zorlaştığı dönemlerde [online terapi](/hizmetler/online-terapi-bursa) ile süreç kesintiye uğramadan sürdürülebilir. Bu model, terapi sürekliliğini korumak açısından işlevseldir.",
        "Hibrit yapı tamamen danışanın ihtiyacına göre şekillenir; klinik çerçeve her formatta aynıdır.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Mudanya'dan başvuran danışanlar için de aynı etik standart, aynı gizlilik çerçevesi ve aynı klinik disiplin geçerlidir.",
      pillars: [
        {
          label: "01",
          title: "Gerçek yaşam koşullarına uygun plan",
          body: "Terapi planı idealize edilmiş bir takvime göre değil, danışanın iş, aile ve ulaşım koşulları gözetilerek oluşturulur.",
        },
        {
          label: "02",
          title: "Etik ve gizlilik",
          body: "Tüm seanslar mesleki etik çerçevede yürütülür. Danışan onayı olmadan hiçbir bilgi üçüncü kişilerle paylaşılmaz.",
        },
        {
          label: "03",
          title: "Şeffaf süreç",
          body: "Seans hedefleri, ilerleme ölçütleri ve yöntem seçimi danışanla açık biçimde konuşulur.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Mudanya'dan yüz yüze seans için gelmek zorunda mıyım?",
      answer:
        "Hayır. Süreç tamamen online ya da hibrit biçimde planlanabilir. Klinik uygunluk ilk görüşmede birlikte değerlendirilir.",
    },
    {
      question: "Mudanya'dan gelen danışanlar için seans saatleri esnek mi?",
      answer:
        "Müsaitlik doğrultusunda ulaşımı kolaylaştıran saat aralıkları önceliklendirilir.",
    },
    {
      question: "Hangi konular için başvurabilirim?",
      answer:
        "Anksiyete, panik atak, depresyon, ilişki sorunları, tükenmişlik ve yaşam geçişleri dahil geniş bir klinik yelpazede destek alabilirsiniz.",
    },
    {
      question: "Online görüşmeler yüz yüze kadar etkili mi?",
      answer:
        "Birçok klinik tabloda online format yüz yüze ile benzer etkinliğe sahiptir. Seçim kişisel ihtiyaçlara göre yapılır.",
    },
    {
      question: "Randevuya nasıl başvurabilirim?",
      answer:
        "WhatsApp veya telefon üzerinden asistanımıza ulaşıp uygun saatleri görebilirsiniz.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Mudanya'dan başvuran danışanlar için yüz yüze ve online randevu seçenekleri aynı gün içinde yanıtlanır.",
  },

  related: [
    {
      label: "Nilüfer Psikolog",
      href: "/lokasyon/nilufer-psikolog",
      description: "Yüz yüze seansların yürütüldüğü klinik lokasyonu.",
    },
    {
      label: "Online Terapi Bursa",
      href: "/hizmetler/online-terapi-bursa",
      description: "Ulaşım kısıtı olan danışanlar için sürdürülebilir terapi formatı.",
    },
    {
      label: "Anksiyete Terapisi Bursa",
      href: "/hizmetler/anksiyete-terapisi-bursa",
      description: "Kaygı ve aşırı düşünme örüntüleri için klinik destek.",
    },
  ],
};
