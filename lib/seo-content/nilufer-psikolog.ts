import type { SeoLandingPage } from "@/lib/seo-pages";

export const niluferPsikolog: SeoLandingPage = {
  slug: "nilufer-psikolog",
  group: "lokasyon",
  parent: { label: "Lokasyonlar" },

  meta: {
    title: "Nilüfer Psikolog | Bursa Nilüfer'de Psikoterapi",
    description:
      "Bursa Nilüfer'de bireysel terapi, çift terapisi ve online terapi seansları. Erişilebilir konum, sakin klinik ortam ve etik çerçeve içinde yürütülen psikoterapi süreci.",
    canonicalPath: "/lokasyon/nilufer-psikolog",
    keywords: [
      "Nilüfer psikolog",
      "Bursa Nilüfer psikolog",
      "Nilüfer psikoterapi",
      "Bursa psikolog",
      "bireysel terapi Nilüfer",
      "çift terapisi Bursa",
      "klinik psikolog Nilüfer",
    ],
  },

  hero: {
    eyebrow: "Lokasyon · Bursa",
    h1: "Nilüfer'de Psikolog & Psikoterapi",
    lead: "Bursa Nilüfer'de yetişkin bireyler ve çiftler için psikoterapi seansları. Erişilebilir bir konum, sakin bir klinik ortam ve mesleki etik çerçeveye bağlı bir süreç.",
    intro:
      "Yüz yüze seanslar Nilüfer kliniğimizde; online seçenek ise aynı klinik standart ve gizlilik çerçevesinde yürütülmektedir.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Nilüfer konumu ve klinik atmosfer",
      paragraphs: [
        "Klinik, Nilüfer ilçesinin merkezi noktalarından erişilebilir bir konumda planlanmaktadır. Toplu taşıma ve özel araçla rahatlıkla ulaşılabilir; danışan trafiği gözetilerek seanslar arası makul aralıklar bırakılır.",
        "Bekleme alanı; danışanların başka bir danışanla karşılaşmasının önüne geçecek şekilde tasarlanır. Bu detay, özellikle [panik atak](/hizmetler/panik-atak-terapisi-bursa) ya da sosyal kaygı yaşayan danışanlar için seans öncesi tetikleyici yükü düşürür.",
        "Klinik atmosferi sade, sıcak ve dramatik olmayan bir görsel dile sahiptir. Amaç; danışanın ilk dakikadan itibaren güvende hissetmesidir.",
      ],
    },
    {
      kind: "narrative",
      heading: "Hangi durumlarda başvurulur?",
      paragraphs: [
        "Nilüfer kliniğimizde yetişkin bireyler için geniş bir klinik tablo yelpazesinde destek sunulur. Kaygı, panik tepki, depresif tablolar, ilişkisel zorluklar, yaşam geçişleri ve mesleki tükenme bunlar arasındadır.",
        "Hangi süreç için başvuracağınızdan emin değilseniz; ilk görüşme bunu birlikte değerlendirmenin zeminidir. Klinik değerlendirme sonrasında uygun çerçeve birlikte planlanır.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Nilüfer kliniğinde sunulan başlıca alanlar",
      intro:
        "Aşağıdaki alanlar; Nilüfer kliniğinde yetişkin danışanlar için planlanan başlıca çalışma başlıklarıdır.",
      groups: [
        {
          title: "Bireysel destek alanları",
          items: [
            "Kaygı ve süreklilik gösteren stres tabloları",
            "Panik atak ve eşlik eden kaçınma örüntüleri",
            "Depresyon ve duygudurum dalgalanmaları",
            "Tükenmişlik ve mesleki yorgunluk",
            "Kayıp ve yas süreçleri",
          ],
        },
        {
          title: "İlişkisel ve çift çalışmaları",
          items: [
            "İletişim kopuklukları ve tekrarlayan çatışmalar",
            "Güven sorunları ve ilişkisel kırılmalar",
            "Evlilik ve uzun süreli birliktelik kararları",
            "Aile içi rol değişimleri",
          ],
        },
        {
          title: "Yaşam geçişleri",
          items: [
            "Şehir, iş ya da ilişki değişimleri",
            "Ebeveynliğe geçiş ve sonrası",
            "Erken yetişkinlik dönemi belirsizlikleri",
            "Yaşam anlamı ve değer arayışı",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Randevu süreci ve seans yapısı",
      paragraphs: [
        "Randevu talepleri WhatsApp veya telefon ile asistanımıza ulaşılarak başlatılır. İlk görüşme için müsaitlik durumuna göre saat aralıkları paylaşılır.",
        "İlk seans öncesinde kısa bir bilgilendirme metni iletilir; danışan, sürecin ana hatlarını seans öncesinden okuyabilir.",
        "Seanslar yaklaşık 50 dakika sürer ve genellikle haftalık planlanır. Şehir dışından ya da yoğun program nedeniyle yüz yüze seansa erişimi kısıtlı olan danışanlar için aynı klinik standartla yürütülen [online seans](/online-terapi) seçeneği uygundur.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Nilüfer kliniğinde tutarlı, etik ve danışan gizliliğine bağlı bir çerçeveye bağlıyız. Ofis ortamı; sade görsel dilin ötesinde, mesleki disiplinin somutlandığı bir alandır.",
      pillars: [
        {
          label: "01",
          title: "Tek seans bile bir başlangıçtır",
          body: "İlk görüşme yalnızca \u201cuzun bir terapinin başlangıcı\u201d olarak değil; danışanın bulunduğu noktayı net görmek için yeterli bir klinik buluşma olarak ele alınır.",
        },
        {
          label: "02",
          title: "Etik çerçeve ve danışan gizliliği",
          body: "Tüm seanslar mesleki etik ilkeler çerçevesinde yürütülür. Süreçle ilgili bilgiler danışanın açık onayı olmadan üçüncü kişilerle paylaşılmaz.",
        },
        {
          label: "03",
          title: "Esnek ama disiplinli süreç",
          body: "Yüz yüze ve online seans seçenekleri; danışanın yaşam akışına göre planlanır. Esneklik, sürecin disiplininden ödün vermeden sağlanır.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Nilüfer dışından danışan kabul ediyor musunuz?",
      answer:
        "Evet. Bursa'nın farklı ilçelerinden ve şehir dışından danışanlarımız bulunmaktadır. Uzak danışanlar için online seans seçeneği uygundur.",
    },
    {
      question: "Klinik konumu ve otopark imkânı nasıl?",
      answer:
        "Klinik konumu Nilüfer'in merkezi noktalarından erişilebilir biçimdedir. Çevrede otopark seçenekleri bulunmaktadır; detaylı yönlendirme randevu öncesi paylaşılır.",
    },
    {
      question: "Seans saatleri nelerdir?",
      answer:
        "Seanslar genellikle hafta içi mesai saatleri içinde planlanır. Mesai öncesi erken saatler ve mesai sonrası geç saatler için sınırlı kontenjan bulunmaktadır.",
    },
    {
      question: "İlk görüşme için nasıl hazırlanmalıyım?",
      answer:
        "İlk görüşme için özel bir hazırlık gerekmez. Aklınıza gelen sorular varsa not etmeniz fayda sağlayabilir; ancak gündemi birlikte oluşturmak da ilk seansın doğal bir parçasıdır.",
    },
    {
      question: "Sigorta veya kurumsal anlaşma var mı?",
      answer:
        "Güncel anlaşmalı kurum bilgisi randevu sürecinde paylaşılır. Bu konudaki sorular için WhatsApp veya telefon ile asistanımıza ulaşmanız uygundur.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Nilüfer kliniğindeki yüz yüze seanslar ve online seans seçenekleri için randevu talebi; aynı gün içinde yanıtlanır.",
  },

  related: [
    {
      label: "Bireysel Terapi",
      href: "/bireysel-terapi",
      description: "Yetişkin bireysel terapi sürecinin genel çerçevesi.",
    },
    {
      label: "Çift Terapisi",
      href: "/cift-terapisi",
      description: "İlişki ve evlilik dinamiklerinde klinik destek.",
    },
    {
      label: "Anksiyete Terapisi",
      href: "/hizmetler/anksiyete-terapisi-bursa",
      description: "Kaygı tabloları için yapılandırılmış klinik yaklaşım.",
    },
  ],
};
