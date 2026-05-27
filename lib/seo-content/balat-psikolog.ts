import type { SeoLandingPage } from "@/lib/seo-pages";

export const balatPsikolog: SeoLandingPage = {
  slug: "balat-psikolog",
  group: "lokasyon",
  parent: { label: "Lokasyonlar" },

  meta: {
    title: "Balat Psikolog | Bursa Balat ve Çevresi İçin Psikoterapi",
    description:
      "Balat ve çevresinde yaşayan danışanlar için Bursa'da etik ve premium psikoterapi süreci. Yüz yüze ve online seçeneklerle sürdürülebilir destek.",
    canonicalPath: "/lokasyon/balat-psikolog",
    keywords: [
      "Balat psikolog",
      "Bursa Balat psikolog",
      "Balat terapi",
      "Nilüfer psikolog",
      "Bursa klinik psikolog",
      "online terapi Bursa",
    ],
  },

  hero: {
    eyebrow: "Lokasyon · Bursa",
    h1: "Balat ve Çevresinde Psikolojik Destek",
    lead: "Balat'ta yaşayan danışanlar için terapi sürecini, şehir temposu ve günlük programla uyumlu biçimde planlıyoruz. Amaç; sürdürülebilir ve güvenli bir psikolojik destek hattı oluşturmaktır.",
    intro:
      "Yüz yüze seanslar Nilüfer kliniğimizde, gerektiğinde online formatla birlikte yürütülür.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Balat bağlamında başvuru dinamikleri",
      paragraphs: [
        "Balat'ta yaşayan danışanlarda sık görülen tablo; yüksek tempolu iş ve aile akışı içinde duygusal yüklerin geri plana itilmesidir. Bir süre sonra bu yük; uyku, ilişki ve odaklanma alanlarında görünür hale gelir.",
        "Danışanların önemli bir kısmı \"çok kötü değilim ama iyi de hissetmiyorum\" ifadesiyle başvurur. Bu ifade, erken müdahale için değerli bir eşiktir.",
        "Terapi süreci, bu eşiği geciktirmeden değerlendirmek ve zorlanmaları kalıcı hale gelmeden ele almak için yapılandırılır.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Balat'tan başvuran danışanlarda öne çıkan başlıklar",
      intro:
        "Aşağıdaki başlıklar en sık karşılaşılan alanlardır.",
      groups: [
        {
          title: "Kaygı ve stres örüntüleri",
          items: [
            "Sürekli zihinsel meşguliyet",
            "Kas gerginliği ve bedensel huzursuzluk",
            "Belirsizliğe tahammülde düşüş",
            "Aşırı kontrol etme ihtiyacı",
          ],
        },
        {
          title: "Duygusal yorgunluk",
          items: [
            "Motivasyon kaybı",
            "İçe çekilme",
            "Duygusal tepkilerde donukluk",
            "İşlevsellikte düşüş",
          ],
        },
        {
          title: "İlişki ve aile dinamikleri",
          items: [
            "İletişimde tekrar eden çatışmalar",
            "Güven ve yakınlık sorunları",
            "Ebeveynlik rollerinde zorlanma",
            "Sınır koyma güçlükleri",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Terapi planı ve süreç açıklığı",
      paragraphs: [
        "İlk görüşmede klinik değerlendirme yapılır; danışanın hangi alanlarda zorlandığı ve bu zorlanmaların günlük yaşama etkisi birlikte netleştirilir.",
        "Süreç boyunca seans hedefleri açık şekilde belirlenir ve düzenli aralıklarla gözden geçirilir. Böylece terapi; neyin neden çalışıldığı görülen bir çerçeveye dönüşür.",
        "Gerektiğinde [bireysel terapi](/bireysel-terapi), [çift terapisi](/hizmetler/cift-terapisi-bursa) ve online format birlikte planlanabilir.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Balat'tan başvuran danışanlarla da aynı ilke geçerlidir: ölçülü, etik ve danışan merkezli süreç.",
      pillars: [
        {
          label: "01",
          title: "Erken başvurunun değeri",
          body: "Sorunların ağırlaşmasını beklemeden başvurmak; terapinin daha kısa sürede daha işlevsel sonuçlar üretmesini kolaylaştırır.",
        },
        {
          label: "02",
          title: "Yöntem değil danışan merkezde",
          body: "Kullanılan teknikler danışanın ihtiyacına göre seçilir; tek bir kalıp her danışana uygulanmaz.",
        },
        {
          label: "03",
          title: "Süreç boyunca şeffaf iletişim",
          body: "Terapi hedefleri, seans planı ve ilerleme düzeyi düzenli olarak birlikte değerlendirilir.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Balat'tan yüz yüze seansa gelmek zor olur mu?",
      answer:
        "Seans saatleri ulaşım akışına göre planlandığında süreç sürdürülebilir hale gelir. Gerekirse online format da kullanılabilir.",
    },
    {
      question: "Hangi konular için destek alabilirim?",
      answer:
        "Kaygı, stres, depresif belirtiler, ilişki zorlukları, tükenmişlik ve yaşam geçişleri için destek alabilirsiniz.",
    },
    {
      question: "Çift terapisi için de başvurabilir miyiz?",
      answer:
        "Evet. İlişki ve evlilik dinamikleri için çift terapisi süreci planlanabilir.",
    },
    {
      question: "Seanslar kaç dakika sürüyor?",
      answer:
        "Seanslar yaklaşık 50 dakika sürer ve çoğunlukla haftalık planlanır.",
    },
    {
      question: "Randevu dönüşü ne kadar sürer?",
      answer:
        "Randevu talepleri çoğunlukla aynı gün içinde yanıtlanır.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Balat ve çevresinde yaşayan danışanlar için uygun seans planı, ilk iletişimde net ve şeffaf biçimde paylaşılır.",
  },

  related: [
    {
      label: "Nilüfer Psikolog",
      href: "/lokasyon/nilufer-psikolog",
      description: "Yüz yüze klinik görüşmelerin yürütüldüğü lokasyon.",
    },
    {
      label: "Çift Terapisi Bursa",
      href: "/hizmetler/cift-terapisi-bursa",
      description: "İlişki iletişimi ve güven sorunları için yapılandırılmış süreç.",
    },
    {
      label: "Duygusal Tükenmişlik Belirtileri",
      href: "/makale/duygusal-tukenmislik-belirtileri",
      description: "Yüksek tempoda duygusal yorgunluğu erken fark etmeye yardımcı içerik.",
    },
  ],
};
