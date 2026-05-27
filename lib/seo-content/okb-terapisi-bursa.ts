import type { SeoLandingPage } from "@/lib/seo-pages";

export const okbTerapisiBursa: SeoLandingPage = {
  slug: "okb-terapisi-bursa",
  group: "hizmetler",
  parent: { label: "Hizmetler", href: "/#hizmetler" },

  meta: {
    title: "OKB Terapisi Bursa | Obsesif Kompulsif Bozukluk Desteği",
    description:
      "Bursa'da OKB terapisi: takıntı düşünceler, kontrol etme, tekrar etme ve zihinsel kompulsiyonlarda yapılandırılmış klinik süreç.",
    canonicalPath: "/hizmetler/okb-terapisi-bursa",
    keywords: [
      "OKB terapisi Bursa",
      "obsesif kompulsif bozukluk",
      "takıntı düşünceler",
      "kontrol etme davranışı",
      "Bursa psikolog",
      "Nilüfer psikolog",
    ],
  },

  hero: {
    eyebrow: "Hizmet · Bursa Nilüfer",
    h1: "OKB Terapisi — Bursa",
    lead: "Tekrarlayan, istemsiz düşünceler ve bu düşünceleri azaltmak için yapılan kontrol/tekrar davranışları günlük yaşamı daraltabilir. OKB, klinik destekle çalışılabilen bir tablodur.",
    intro:
      "Terapi süreci, yalnızca belirtileri bastırmaya değil, obsesyon-kompulsiyon döngüsünü anlamaya ve işlevselliği geri kazanmaya odaklanır.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "OKB günlük yaşama nasıl yerleşir?",
      paragraphs: [
        "OKB çoğu danışanda tek bir belirtiyle başlamaz; küçük kontrol davranışlarının zamanla artmasıyla görünür olur. Kapıyı tekrar tekrar kontrol etmek, zihinden belirli cümleleri geçirmek, temizlik ritüellerinin uzaması bu örüntüye eşlik edebilir.",
        "Kısa vadede rahatlatan bu davranışlar, uzun vadede kaygıyı besler ve zaman kaybı, yorgunluk, ilişki gerilimi gibi sonuçlar üretir.",
        "Terapi süreci bu döngüyü suçlama dili olmadan, klinik ve şefkatli bir çerçevede ele alır.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Hangi belirtiler için başvurulur?",
      intro:
        "Aşağıdaki belirtiler düzenli hale geldiyse klinik değerlendirme önerilir.",
      groups: [
        {
          title: "Obsesyonlar (istemsiz düşünceler)",
          items: [
            "Kirlenme, zarar verme, hata yapma korkuları",
            "Ahlaki veya dini içerikli istenmeyen düşünceler",
            "Belirsizliğe tahammülde zorlanma",
            "Sürekli emin olma ihtiyacı",
          ],
        },
        {
          title: "Kompulsiyonlar (rahatlatma davranışları)",
          items: [
            "Tekrar tekrar kontrol etme",
            "Aşırı temizlik/yıkama",
            "Sayma, sıralama, tekrar etme",
            "Zihinsel dua veya cümle tekrarları",
          ],
        },
        {
          title: "Yaşam etkisi",
          items: [
            "Günlük işlerde belirgin zaman kaybı",
            "İş/okul performansında düşüş",
            "Aile ve ilişki gerilimi",
            "Yorgunluk ve tükenmişlik",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "OKB terapisi süreci",
      paragraphs: [
        "İlk aşamada obsesyon-kompulsiyon döngüsü ayrıntılı değerlendirilir: tetikleyiciler, kaçınmalar, güvence arama davranışları ve günlük yaşam etkisi birlikte haritalandırılır.",
        "Süreçte danışanın tolerans penceresi gözetilerek yapılandırılmış maruz bırakma ve bilişsel yeniden çerçeveleme adımları planlanır.",
        "OKB tablosu çoğu zaman [anksiyete](/hizmetler/anksiyete-terapisi-bursa) ve aşırı düşünme örüntüleriyle birlikte seyrettiği için bütüncül bir planlama yapılır.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "OKB'de amaç iradeyi zorlamak değil; döngüyü bilimsel ve sürdürülebilir biçimde çözmektir.",
      pillars: [
        {
          label: "01",
          title: "Döngü odaklı değerlendirme",
          body: "Belirtiler tek tek değil, obsesyon-kompulsiyon döngüsünün bütünü içinde ele alınır.",
        },
        {
          label: "02",
          title: "Adım adım maruziyet",
          body: "Danışanın kapasitesine uygun küçük adımlar tercih edilir; ani ve zorlayıcı uygulamalardan kaçınılır.",
        },
        {
          label: "03",
          title: "Etik ve şeffaf süreç",
          body: "Kullanılan yöntemler, hedefler ve süreç beklentisi danışanla açık biçimde paylaşılır.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "OKB sadece temizlik takıntısı mıdır?",
      answer:
        "Hayır. OKB; kontrol etme, emin olma, zihinsel tekrarlar gibi birçok farklı örüntüde görülebilir.",
    },
    {
      question: "OKB tamamen geçer mi?",
      answer:
        "Süreç kişiye göre değişir. Terapi ile belirtilerin şiddeti ve yaşam üzerindeki etkisi belirgin biçimde azaltılabilir.",
    },
    {
      question: "İlaç kullanmak şart mı?",
      answer:
        "İlaç kararı psikiyatri hekimine aittir. Bazı danışanlarda terapi tek başına, bazılarında kombine süreç uygundur.",
    },
    {
      question: "Online OKB terapisi mümkün mü?",
      answer:
        "Evet, birçok durumda online format uygulanabilir. Uygunluk ilk değerlendirmede belirlenir.",
    },
    {
      question: "Kaç seansta değişim görülür?",
      answer:
        "Belirti yoğunluğu ve süresine göre değişmekle birlikte düzenli seanslarda birkaç hafta içinde işlevsellikte fark edilir iyileşme görülebilir.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "OKB belirtileri için klinik değerlendirme ve terapi planı talebi aynı gün içinde yanıtlanır.",
  },

  related: [
    {
      label: "Anksiyete Terapisi Bursa",
      href: "/hizmetler/anksiyete-terapisi-bursa",
      description: "OKB ile birlikte seyreden kaygı döngülerine yönelik destek.",
    },
    {
      label: "Aşırı Düşünme ile Baş Etme",
      href: "/makale/asiri-dusunme-ile-bas-etme",
      description: "Zihinsel tekrar döngülerini daha iyi anlamaya yardımcı içerik.",
    },
    {
      label: "Nilüfer Psikolog",
      href: "/lokasyon/nilufer-psikolog",
      description: "Yüz yüze seans lokasyonu ve başvuru bilgileri.",
    },
  ],
};
