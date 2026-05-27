import type { SeoLandingPage } from "@/lib/seo-pages";

export const goruklePsikolog: SeoLandingPage = {
  slug: "gorukle-psikolog",
  group: "lokasyon",
  parent: { label: "Lokasyonlar", href: "/lokasyon" },

  meta: {
    title: "Görükle Psikolog | Öğrenci ve Yetişkinler İçin Psikoterapi",
    description:
      "Görükle'de yaşayan öğrenci ve yetişkinler için Bursa'da psikolojik destek. Yüz yüze ve online terapi seçenekleri, etik ve şeffaf süreç.",
    canonicalPath: "/lokasyon/gorukle-psikolog",
    keywords: [
      "Görükle psikolog",
      "Bursa Görükle psikolog",
      "öğrenci psikolog desteği",
      "online terapi Bursa",
      "Nilüfer psikolog",
      "Bursa psikoterapi",
    ],
  },

  hero: {
    eyebrow: "Lokasyon · Bursa",
    h1: "Görükle'de Yaşayanlar İçin Psikolojik Destek",
    lead: "Görükle'de öğrenci hayatı, sınav baskısı, ilişki zorlukları ve gelecek belirsizliği ile birlikte yoğun duygusal yükler görülebilir. Terapi süreci bu yükü birlikte düzenlemeyi hedefler.",
    intro:
      "Seanslar Nilüfer kliniğimizde yüz yüze veya online formatta yürütülebilir; süreç danışanın yaşam ritmine göre planlanır.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Görükle bağlamı: hız, belirsizlik ve yalnızlık",
      paragraphs: [
        "Görükle'de yaşayan danışanların önemli bir kısmı, hayatın aynı anda birçok başlığını taşımaktan yoruluyor: akademik baskı, iş arayışı, şehirde tutunma çabası ve ilişkisel belirsizlikler.",
        "Bu dönemde duygusal zorlanmalar çoğu zaman \"abartı\" olarak değil, \"idare ediyorum ama yoruldum\" hissiyle ifade edilir.",
        "Terapi süreci, bu yükün altında çalışan düşünce-duygu örüntülerini görünür kılmayı ve yaşamı yeniden düzenlemeyi hedefler.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Sık başvuru nedenleri",
      intro:
        "Görükle'den başvuran danışanlarda sık görülen başlıklar aşağıdadır.",
      groups: [
        {
          title: "Akademik ve performans odaklı zorlanmalar",
          items: [
            "Sınav dönemlerinde yoğun kaygı",
            "Erteleme ve odaklanma güçlüğü",
            "Yetersizlik ve başarısızlık korkusu",
            "Aşırı karşılaştırma döngüsü",
          ],
        },
        {
          title: "Duygusal belirtiler",
          items: [
            "Motivasyon kaybı",
            "Duygusal dalgalanma",
            "Yalnızlık hissi",
            "Geri çekilme eğilimi",
          ],
        },
        {
          title: "İlişkisel ve kimliksel süreçler",
          items: [
            "Sınır koymakta zorlanma",
            "Yakın ilişkilerde güven sorunu",
            "Aileden ayrışma süreci",
            "Gelecek yöneliminde belirsizlik",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Seans planlaması ve erişim",
      paragraphs: [
        "Görükle'den yüz yüze seansa gelen danışanlarda, ders ve iş saatleriyle uyumlu bir planlama yapılır. Süreklilik için küçük ama gerçekçi bir seans ritmi hedeflenir.",
        "Ders programı veya dönem yoğunluğu nedeniyle yüz yüze devamın zorlaştığı dönemlerde [online terapi](/hizmetler/online-terapi-bursa) devreye alınabilir.",
        "Bu esneklik özellikle genç yetişkin danışanlarda terapinin yarıda kalmasını önler.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Görükle'den başvuran danışanlarda da temel ilke; danışanın temposuna saygı duyan, etik ve ölçülü bir klinik çerçevedir.",
      pillars: [
        {
          label: "01",
          title: "Yargılamayan klinik alan",
          body: "Duygusal zorlanmalar başarı ya da karakter meselesi gibi ele alınmaz; danışanın yaşadığı bağlam içinde anlaşılır.",
        },
        {
          label: "02",
          title: "Süreç şeffaflığı",
          body: "İlk görüşmeden itibaren seans hedefleri, yöntem ve beklenen çerçeve açık biçimde paylaşılır.",
        },
        {
          label: "03",
          title: "Etik ve gizlilik",
          body: "Danışan gizliliği süreçte temel ilkedir. Açık onay olmadan hiçbir bilgi paylaşılmaz.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Görükle'de öğrenciler için terapi uygun mu?",
      answer:
        "Evet. Öğrenci yaşamındaki akademik baskı, uyum süreci ve ilişkisel zorluklar için terapi önemli bir destek alanı olabilir.",
    },
    {
      question: "Seanslar sadece yüz yüze mi oluyor?",
      answer:
        "Hayır. Yüz yüze ve online seçenekleri birlikte planlanabilir.",
    },
    {
      question: "İlk seansta ne konuşulur?",
      answer:
        "Başvuru nedeni, günlük yaşam etkisi, geçmiş destek deneyimleri ve süreç beklentileri ele alınır.",
    },
    {
      question: "Aileme söylemeden destek alabilir miyim?",
      answer:
        "Yasal koşullar içinde, danışan gizliliği korunur. Süreçle ilgili bilgiler açık onay olmadan paylaşılmaz.",
    },
    {
      question: "Randevuya nasıl başvururum?",
      answer:
        "WhatsApp veya telefon üzerinden asistanımıza ulaşıp uygun saatleri öğrenebilirsiniz.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Görükle'de yaşayan danışanlar için uygun seans formatı (yüz yüze/online) ilk görüşmede birlikte planlanır.",
  },

  related: [
    {
      label: "Online Terapi Bursa",
      href: "/hizmetler/online-terapi-bursa",
      description: "Ders ve iş temposuna uyumlu terapi formatı.",
    },
    {
      label: "Anksiyete Terapisi Bursa",
      href: "/hizmetler/anksiyete-terapisi-bursa",
      description: "Sınav ve performans kaygısı dahil anksiyete örüntüleri için destek.",
    },
    {
      label: "İlk Terapi Seansı Nasıl Geçer?",
      href: "/makale/ilk-terapi-seansi-nasil-gecer",
      description: "Başvuru öncesi belirsizliği azaltan kapsamlı rehber.",
    },
  ],
};
