import type { SeoLandingPage } from "@/lib/seo-pages";

export const onlineTerapiBursaSeo: SeoLandingPage = {
  slug: "online-terapi-bursa",
  group: "hizmetler",
  parent: { label: "Hizmetler", href: "/#hizmetler" },

  meta: {
    title: "Online Terapi Bursa | Güvenli ve Etik Psikoterapi",
    description:
      "Bursa'da online terapi: yüz yüze seansa erişimi zor olan danışanlar için güvenli, etik ve sürdürülebilir psikoterapi süreci.",
    canonicalPath: "/hizmetler/online-terapi-bursa",
    keywords: [
      "online terapi Bursa",
      "uzaktan psikolog",
      "online psikoterapi",
      "Bursa psikolog online",
      "Nilüfer psikolog",
      "online çift terapisi",
    ],
  },

  hero: {
    eyebrow: "Hizmet · Bursa",
    h1: "Online Terapi — Bursa",
    lead: "Online terapi, zaman ve ulaşım bariyerlerini azaltırken klinik çerçeveyi koruyan bir destek modelidir. Doğru planlandığında yüz yüze terapiye yakın bir etki sağlar.",
    intro:
      "Bursa içi yoğun tempo, şehir dışı yaşam veya düzenli seyahat gibi durumlarda online format sürdürülebilir bir seçenek sunar.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Online terapi kimler için uygundur?",
      paragraphs: [
        "Yüz yüze seansa düzenli gelemeyen, iş yoğunluğu yüksek, şehir dışında yaşayan veya terapinin devamlılığını korumakta zorlanan danışanlar için online format güçlü bir alternatiftir.",
        "Kaygı, depresyon, tükenmişlik, ilişkisel zorluklar ve yaşam geçişleri gibi birçok tabloda online süreç etkili biçimde yürütülebilir.",
        "Format seçimi klinik uygunluk ve danışanın koşulları birlikte değerlendirilerek yapılır.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Online formatın sık tercih edildiği durumlar",
      intro:
        "Aşağıdaki başlıklar online terapi talebinde sık görülür.",
      groups: [
        {
          title: "Ulaşım ve zaman kısıtı",
          items: [
            "Yoğun şehir içi trafik",
            "Düzensiz iş saatleri",
            "Şehir dışı yaşam",
            "Sık seyahat",
          ],
        },
        {
          title: "Süreç devamlılığı",
          items: [
            "Yüz yüze süreçte sık aksama",
            "Dönemsel taşınma/yer değişikliği",
            "İş/okul dönemlerinde ritim kaybı",
            "Seans ertelemelerinin artması",
          ],
        },
        {
          title: "Klinik tabloya uygunluk",
          items: [
            "Anksiyete ve aşırı düşünme",
            "Depresif belirtiler",
            "Tükenmişlik ve stres",
            "İlişki ve iletişim zorlukları",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Online süreçte kalite nasıl korunur?",
      paragraphs: [
        "Seans öncesinde teknik hazırlık, mahrem alan ayarı ve bağlantı güvenliği netleştirilir. Bu çerçeve, seans kalitesinin temelidir.",
        "Seanslar yüz yüze süreçle aynı klinik standartta yapılandırılır: değerlendirme, hedef belirleme, takip ve yeniden planlama adımları korunur.",
        "İhtiyaç halinde online ve yüz yüze görüşmeler [hibrit bir plan](/lokasyon/nilufer-psikolog) şeklinde birlikte yürütülebilir.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Online terapiyi kolay ama yüzeysel bir model olarak değil, aynı klinik derinliği koruyan profesyonel bir süreç olarak ele alıyoruz.",
      pillars: [
        {
          label: "01",
          title: "Aynı klinik disiplin",
          body: "Online seanslar da yüz yüze seanslarla aynı etik, kayıt ve değerlendirme çerçevesinde yürütülür.",
        },
        {
          label: "02",
          title: "Mahremiyet ve güvenlik",
          body: "Danışan gizliliği online formatta da temel ilkedir; seans güvenliği için net protokoller uygulanır.",
        },
        {
          label: "03",
          title: "Sürdürülebilir ritim",
          body: "Asıl hedef terapiyi başlatmak değil, sürdürülebilir bir ritimle devam ettirmektir.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Online terapi yüz yüze kadar etkili mi?",
      answer:
        "Birçok klinik tabloda benzer etkinlik gösterir. Uygunluk danışanın ihtiyacına göre belirlenir.",
    },
    {
      question: "İlk seans online olabilir mi?",
      answer:
        "Evet. İlk değerlendirme online yapılabilir; süreç gerekirse sonradan yüz yüze formatla devam edebilir.",
    },
    {
      question: "Online seans için özel ekipman gerekir mi?",
      answer:
        "Stabil internet, kamera/mikrofon ve mahrem bir alan yeterlidir.",
    },
    {
      question: "Çift terapisi online yapılabilir mi?",
      answer:
        "Evet, uygunluk durumuna göre online çift terapisi uygulanabilir.",
    },
    {
      question: "Seans süresi ne kadar?",
      answer:
        "Seanslar yaklaşık 50 dakika sürer ve çoğunlukla haftalık planlanır.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Online terapi uygunluğu ve teknik süreç hakkında bilgilendirme için aynı gün dönüş sağlanır.",
  },

  related: [
    {
      label: "Online Terapi İşe Yarıyor Mu?",
      href: "/makale/online-terapi-ise-yariyor-mu",
      description: "Bilimsel ve klinik perspektiften online terapi rehberi.",
    },
    {
      label: "Görükle Psikolog",
      href: "/lokasyon/gorukle-psikolog",
      description: "Yoğun öğrenci ve iş temposu için sürdürülebilir terapi planı.",
    },
    {
      label: "Bireysel Terapi",
      href: "/bireysel-terapi",
      description: "Yüz yüze süreç detaylarını görmek isteyenler için.",
    },
  ],
};
