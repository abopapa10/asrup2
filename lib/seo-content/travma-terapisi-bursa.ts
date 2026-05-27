import type { SeoLandingPage } from "@/lib/seo-pages";

export const travmaTerapisiBursa: SeoLandingPage = {
  slug: "travma-terapisi-bursa",
  group: "hizmetler",
  parent: { label: "Hizmetler", href: "/hizmetler" },

  meta: {
    title: "Travma Terapisi Bursa | Travma Sonrası Psikolojik Destek",
    description:
      "Bursa'da travma terapisi: tetiklenme, kaçınma, hipervijilans ve duygusal zorlanmalarda güvenli, aşamalı ve etik klinik destek.",
    canonicalPath: "/hizmetler/travma-terapisi-bursa",
    keywords: [
      "travma terapisi Bursa",
      "travma sonrası stres",
      "tetiklenme",
      "EMDR Bursa",
      "hipervijilans",
      "Bursa psikolog",
    ],
  },

  hero: {
    eyebrow: "Hizmet · Bursa Nilüfer",
    h1: "Travma Terapisi — Bursa",
    lead: "Travmatik yaşantılar yalnızca geçmişte kalmayabilir; beden ve zihin bugünde alarm vermeye devam edebilir. Travma terapisi bu alarmı güvenli biçimde düzenlemeyi hedefler.",
    intro:
      "Süreçte önce güvenlik ve regülasyon, sonra anı işleme adımları ele alınır. Danışanın temposu temel belirleyicidir.",
    showCta: true,
  },

  sections: [
    {
      kind: "narrative",
      heading: "Travma belirtileri nasıl görünür?",
      paragraphs: [
        "Travma sonrası belirtiler her danışanda aynı görünmez. Kimi danışanda ani tetiklenmeler ve bedensel alarm hali ön plandayken, kimilerinde duygusal uyuşma ve ilişkilerden uzaklaşma görülebilir.",
        "Sık görülen bir başka tablo, olayın zihinde tekrar tekrar canlanması veya tersine olaya dair parçalı bir hatırlama biçimidir.",
        "Bu belirtiler kişilik zayıflığı değil, sinir sisteminin zorlayıcı yaşantıya verdiği anlaşılabilir bir tepkidir.",
      ],
    },
    {
      kind: "symptoms",
      heading: "Hangi belirtilerde destek alınmalı?",
      intro:
        "Aşağıdaki belirtiler birkaç haftadan uzun sürüyorsa travma odaklı klinik değerlendirme önerilir.",
      groups: [
        {
          title: "Bedensel ve duygusal alarm",
          items: [
            "Ani irkilme ve tetikte olma",
            "Çarpıntı, nefes darlığı, kas gerginliği",
            "Öfke patlamaları veya duygusal donukluk",
            "Uyku bozuklukları ve kabuslar",
          ],
        },
        {
          title: "Bilişsel ve davranışsal belirtiler",
          items: [
            "İstenmeyen anı geri dönüşleri",
            "Tetikleyici ortamlardan kaçınma",
            "Konsantrasyon düşüklüğü",
            "Güvenlik davranışlarının artması",
          ],
        },
        {
          title: "Yaşam etkisi",
          items: [
            "İşlevsellikte düşüş",
            "İlişkisel kopukluk",
            "Sosyal yaşam alanının daralması",
            "Gelecek planı kurmakta zorlanma",
          ],
        },
      ],
    },
    {
      kind: "narrative",
      heading: "Travma terapisi aşamaları",
      paragraphs: [
        "İlk aşama güvenlik ve stabilizasyondur. Danışanın sinir sistemi regülasyon becerileri güçlendirilmeden yoğun işleme adımlarına geçilmez.",
        "Uygunluk halinde travma anılarının işlenmesi için yapılandırılmış yöntemler (örneğin [EMDR](/hizmetler/emdr-terapisi-bursa)) planlanabilir.",
        "Her aşamada danışanın onayı, süreç hızı ve güvenli hissetmesi temel belirleyicidir.",
      ],
    },
    {
      kind: "trust",
      heading: "Klinik yaklaşımımız",
      intro:
        "Travma çalışmalarında en kritik ilke, danışanı yeniden zorlanmaya sürüklemeden güvenli bir iyileşme hattı kurmaktır.",
      pillars: [
        {
          label: "01",
          title: "Güvenlik önceliği",
          body: "Süreçte danışanın duygusal güvenliği, yöntem hızından daha önemlidir.",
        },
        {
          label: "02",
          title: "Aşamalı ilerleme",
          body: "Travma terapisi adım adım yürütülür; danışanın kapasitesini aşan müdahalelerden kaçınılır.",
        },
        {
          label: "03",
          title: "Şeffaf ve etik süreç",
          body: "Yöntem seçimi, hedefler ve olası etkiler danışanla açık biçimde konuşularak ilerlenir.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Travma terapisi ne kadar sürer?",
      answer:
        "Süre, travma öyküsü ve belirtilerin yoğunluğuna göre değişir. Süreç kişiye özel planlanır.",
    },
    {
      question: "EMDR olmadan travma terapisi yapılabilir mi?",
      answer:
        "Evet. Travma terapisi farklı yöntemlerle yürütülebilir; EMDR bunlardan biridir.",
    },
    {
      question: "Travma anılarını anlatmak şart mı?",
      answer:
        "Detay paylaşımı her zaman zorunlu değildir. Güvenli çerçeve içinde danışanın hazır oluşuna göre ilerlenir.",
    },
    {
      question: "Travma sonrası panik atak görülebilir mi?",
      answer:
        "Evet, görülebilir. Bu durumda panik belirtileri de birlikte değerlendirilir.",
    },
    {
      question: "Online travma terapisi mümkün mü?",
      answer:
        "Bazı vakalarda mümkündür; uygunluk ve güvenlik değerlendirmesi ilk aşamada yapılır.",
    },
  ],

  cta: {
    eyebrow: "Randevu",
    caption:
      "Travma sonrası belirtiler için güvenli ve aşamalı bir terapi planı talebi aynı gün içinde yanıtlanır.",
  },

  related: [
    {
      label: "EMDR Terapisi Bursa",
      href: "/hizmetler/emdr-terapisi-bursa",
      description: "Travma anı işleme süreçlerinde kullanılan yapılandırılmış yaklaşım.",
    },
    {
      label: "Panik Atak Terapisi Bursa",
      href: "/hizmetler/panik-atak-terapisi-bursa",
      description: "Travma sonrası eşlik eden panik belirtileri için destek.",
    },
    {
      label: "Görükle Psikolog",
      href: "/lokasyon/gorukle-psikolog",
      description: "Görükle'den başvuran danışanlar için yüz yüze/online erişim yapısı.",
    },
  ],
};
