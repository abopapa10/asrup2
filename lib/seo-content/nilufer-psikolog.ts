import type { SeoLandingPage } from "@/lib/seo-pages";

export const niluferPsikolog: SeoLandingPage = {
  slug: "nilufer-psikolog",
  group: "lokasyon",
  parent: { label: "Lokasyonlar", href: "/lokasyon" },

  meta: {
    title: "Nilüfer Psikolog | Bursa Nilüfer Özlüce",
    description:
      "Nilüfer Özlüce'de Bursa Psikolog A. Alparslan Sancar — eğitim, psikoloji yazıları ve kişisel iletişim.",
    canonicalPath: "/lokasyon/nilufer-psikolog",
    ogImageAlt: "Nilüfer psikolog Bursa — Özlüce ofis",
    keywords: [
      "nilüfer psikolog",
      "nilüfer psikolog tavsiye",
      "bursa nilüfer psikolog",
      "özlüce psikolog",
      "nilüfer psikolog ücretleri",
      "nilüfer psikolog randevu",
      "emdr terapisi bursa nilüfer",
      "çift terapisi nilüfer",
    ],
  },

  hero: {
    eyebrow: "Bursa · Nilüfer · Psikolog",
    h1: "Nilüfer Psikolog | Bursa Nilüfer Özlüce",
    lead: "Bursa Nilüfer'de yetişkin bireyler ve çiftler için psikoterapi seansları. Erişilebilir bir konum, sakin bir klinik ortam ve mesleki etik çerçeveye bağlı bir süreç.",
    intro:
      "Nilüfer Özlüce adres bilgisi bu sitede yer alır. Sayfa; psikoloji yazıları ve kişisel iletişim içindir.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Nilüfer konumu ve klinik atmosfer",
      paragraphs: [
        "Klinik, Nilüfer Özlüce'de Time Özlüce binasında, Ahmet Taner Kışlalı Bulvarı No:27 adresinde yer alır. Toplu taşıma ve özel araçla rahatlıkla ulaşılabilir; danışan trafiği gözetilerek seanslar arası makul aralıklar bırakılır.",
        "Bekleme alanı; danışanların başka bir danışanla karşılaşmasının önüne geçecek şekilde tasarlanır. Bu detay, özellikle [panik atak](/hizmetler/panik-atak-terapisi-bursa) ya da sosyal kaygı yaşayan danışanlar için seans öncesi tetikleyici yükü düşürür.",
        "Klinik atmosferi sade, sıcak ve dramatik olmayan bir görsel dile sahiptir. Amaç; danışanın ilk dakikadan itibaren güvende hissetmesidir.",
      ],
    },
    {
      kind: "narrative",
      heading: "Hangi durumlarda başvurulur?",
      paragraphs: [
        "Sitedeki yazılar kaygı, panik tepki, duygudurum, ilişkisel zorluklar ve tükenmişlik gibi başlıkları genel bir dille ele alır.",
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
        "Mesajlar WhatsApp veya telefon ile asistanımıza ulaşılarak başlatılır. İlk görüşme için müsaitlik durumuna göre saat aralıkları paylaşılır.",
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
      question: "Nilüfer dışından iletişime geçilebilir mi?",
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
    eyebrow: "İletişim",
    caption:
      "Nilüfer kliniğindeki yüz yüze seanslar ve online seans seçenekleri için iletişim; aynı gün içinde yanıtlanır.",
  },

  related: [
    {
      label: "Anksiyete Terapisi Bursa",
      href: "/hizmetler/anksiyete-terapisi-bursa",
      description: "Kaygı tabloları için yapılandırılmış klinik yaklaşım.",
    },
    {
      label: "OKB Terapisi Bursa",
      href: "/hizmetler/okb-terapisi-bursa",
      description: "Takıntı ve kontrol döngülerinde özel çalışma alanı.",
    },
    {
      label: "Panik Atak Terapisi Bursa",
      href: "/hizmetler/panik-atak-terapisi-bursa",
      description: "Panik döngüsü ve kaçınma davranışları için klinik destek.",
    },
  ],
};
