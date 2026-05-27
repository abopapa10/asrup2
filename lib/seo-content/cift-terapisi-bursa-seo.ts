import type { SeoLandingPage } from "@/lib/seo-pages";

export const ciftTerapisiBursaSeo: SeoLandingPage = {
  slug: "cift-terapisi-bursa",
  group: "hizmetler",
  parent: { label: "Hizmetler", href: "/#hizmetler" },

  meta: {
    title: "Çift Terapisi Bursa | İlişki ve Evlilik Terapisi",
    description:
      "Bursa'da çift terapisi: iletişim sorunları, güven kırıkları, tekrarlayan çatışmalar ve duygusal uzaklaşma için yapılandırılmış klinik destek.",
    canonicalPath: "/hizmetler/cift-terapisi-bursa",
    keywords: [
      "çift terapisi Bursa",
      "evlilik terapisi Bursa",
      "ilişki terapisi",
      "güven sorunları",
      "Bursa psikolog",
      "Nilüfer çift terapisi",
    ],
  },

  hero: {
    eyebrow: "Hizmet · Bursa Nilüfer",
    h1: "Çift Terapisi — Bursa",
    lead: "İlişkilerde sorunlar çoğu zaman tek bir tartışmadan değil, tekrar eden iletişim döngülerinden büyür. Çift terapisi bu döngüleri görünür kılar ve yeni bir ilişki dili kurmayı hedefler.",
    intro:
      "Süreçte amaç bir tarafı haklı çıkarmak değil, iki tarafın da duyulabildiği güvenli bir çerçeve oluşturmaktır.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Çift terapisine hangi noktada başvurulur?",
      paragraphs: [
        "Birçok çift terapiye 'ayrılık noktasında' başvurmak gerektiğini düşünür. Oysa erken başvuru, ilişkiyi yıpratan döngülerin daha kısa sürede dönüştürülmesini sağlar.",
        "İletişimde tekrar eden kırılmalar, duygusal uzaklaşma, güven kaybı ve çözülmeyen gündemler terapi için güçlü başvuru nedenleridir.",
        "Çift terapisi aynı zamanda ilişkiyi sürdürme kararı kadar, ilişkiyi nasıl sürdüreceğini yeniden konuşma alanıdır.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Sık başvuru başlıkları",
      intro:
        "Aşağıdaki alanlar çift terapisinde en sık çalışılan konulardır.",
      groups: [
        {
          title: "İletişim ve çatışma",
          items: [
            "Aynı tartışmaların tekrar etmesi",
            "Savunma, eleştiri ve geri çekilme döngüsü",
            "Duyguların ifade edilememesi",
            "Küçük konuların hızla büyümesi",
          ],
        },
        {
          title: "Güven ve yakınlık",
          items: [
            "Güven kırıkları",
            "Kıskançlık ve kontrol davranışları",
            "Duygusal/bedensel yakınlıkta azalma",
            "İlişkide yalnız hissetme",
          ],
        },
        {
          title: "Yaşam döngüsü geçişleri",
          items: [
            "Evlilik/nişan dönemi kararları",
            "Ebeveynliğe geçiş",
            "Aile sınırları",
            "İş-yaşam dengesi nedeniyle artan gerilim",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Süreç nasıl ilerler?",
      paragraphs: [
        "İlk görüşmede ilişkinin ana döngüleri, tetikleyiciler ve tarafların beklentileri birlikte değerlendirilir.",
        "Sonraki seanslarda çiftin iletişim biçimi üzerinde çalışılır; duygu regülasyonu, sınır, sorumluluk ve onarım adımları yapılandırılır.",
        "Bazı durumlarda eşzamanlı [bireysel terapi](/bireysel-terapi) süreci de önerilebilir. Bu, ilişkinin bireysel yansımalarını daha sağlıklı çalışmaya yardımcı olur.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Çift terapisinde tarafsız, etik ve ilişkiyi merkeze alan bir çerçeveyle çalışırız.",
      pillars: [
        {
          label: "01",
          title: "Taraf değil süreç odaklı yaklaşım",
          body: "Seanslarda amaç suçlu aramak değil; ilişkiyi yoran döngüyü birlikte görünür kılmaktır.",
        },
        {
          label: "02",
          title: "Güvenli konuşma alanı",
          body: "Her iki tarafın da söz hakkı eşittir; yargılayıcı değil düzenleyici bir dil esas alınır.",
        },
        {
          label: "03",
          title: "Şeffaf hedefler",
          body: "Çalışma hedefleri ve ilerleme ölçütleri açık biçimde belirlenir, süreç içinde birlikte güncellenir.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Çift terapisinde iki kişi birden mi gelmeli?",
      answer:
        "İdeal olarak evet. Ancak bazı durumlarda süreç tek taraflı ön görüşmeyle başlatılıp sonrasında çift seansına geçilebilir.",
    },
    {
      question: "Çift terapisi ne kadar sürer?",
      answer:
        "Süre, ilişkinin dinamiklerine göre değişir. Düzenli seanslarla birkaç hafta içinde iletişim kalitesinde ölçülebilir değişim görülebilir.",
    },
    {
      question: "Aldatma sonrası terapi işe yarar mı?",
      answer:
        "Uygun klinik çerçeveyle güvenin yeniden inşası üzerinde çalışılabilir. Bu süreç yapılandırılmış ve zaman alan bir onarım çalışmasıdır.",
    },
    {
      question: "Seanslarda özel paylaşımlar gizli kalır mı?",
      answer:
        "Danışan gizliliği temel ilkedir. Çift terapisi çerçevesinde süreç kuralları ilk görüşmede netleştirilir.",
    },
    {
      question: "Online çift terapisi mümkün mü?",
      answer:
        "Evet. Uygunluk durumunda online formatta çift terapisi yürütülebilir.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Çift terapisi için ilk görüşme ve süreç bilgilendirmesi aynı gün içinde paylaşılır.",
  },

  related: [
    {
      label: "İlişkilerde Güven Problemleri",
      href: "/makale/iliskilerde-guven-problemleri",
      description: "İlişkide güvenin nasıl sarsıldığı ve nasıl yeniden kurulabileceği.",
    },
    {
      label: "Balat Psikolog",
      href: "/lokasyon/balat-psikolog",
      description: "Balat ve çevresinden başvuru için lokasyon bilgisi.",
    },
    {
      label: "Bireysel Terapi",
      href: "/bireysel-terapi",
      description: "Çift terapisine eşlik eden bireysel destek süreci.",
    },
  ],
};
