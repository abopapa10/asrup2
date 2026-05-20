export type Service = {
  slug: string;
  title: string;
  teaser: string;
  metaDescription: string;
  intro: string;
  highlights: readonly { title: string; body: string }[];
  process: readonly string[];
  closing: string;
};

export const services: readonly Service[] = [
  {
    slug: "bireysel-terapi",
    title: "Bireysel Terapi",
    teaser:
      "Yetişkinlerde kaygı, depresyon ve kronik stres yönetimi. Klinik değerlendirme ile kişiye özel seans planı.",
    metaDescription:
      "Bursa Nilüfer'de yetişkin bireysel terapi: kaygı, depresyon ve stres yönetimi. Uzman klinik psikolog ile kişiye özel seans planı.",
    intro:
      "Bireysel terapi; yetişkinlerde kaygı, depresyon, tükenmişlik ve yaşam geçişlerinde güvenli, yapılandırılmış bir klinik süreç sunar. İlk görüşmede kapsamlı değerlendirme yapılır; terapi hedefleri ve seans sıklığı birlikte belirlenir.",
    highlights: [
      {
        title: "Klinik değerlendirme",
        body: "Semptom öyküsü, işlevsellik ve terapi beklentileri ilk seanslarda netleştirilir.",
      },
      {
        title: "Kanıta dayalı ekoller",
        body: "Bilişsel-davranışçı ve psikodinamik çerçeveler danışanın ihtiyacına göre uyarlanır.",
      },
      {
        title: "Gizlilik ve etik",
        body: "Tüm süreç mesleki etik ilkeler ve danışan mahremiyeti çerçevesinde yürütülür.",
      },
    ],
    process: [
      "İlk görüşme ve klinik değerlendirme (yaklaşık 50 dakika)",
      "Terapi hedeflerinin ve çalışma planının oluşturulması",
      "Düzenli seanslarla ilerleme takibi ve gerektiğinde plan güncellemesi",
    ],
    closing:
      "Bursa psikolog arayışınızda bireysel terapi için WhatsApp veya telefon ile randevu talebi oluşturabilirsiniz.",
  },
  {
    slug: "cift-terapisi",
    title: "Çift Terapisi",
    teaser:
      "İlişkisel iletişim, güven ve evlilik danışmanlığı. Bursa Nilüfer'de yüz yüze çift terapisi.",
    metaDescription:
      "Bursa'da çift terapisi ve evlilik danışmanlığı. İletişim, güven ve çatışma yönetimi için uzman klinik psikolog desteği.",
    intro:
      "Çift terapisi; ilişkide iletişim kopuklukları, güven sorunları ve tekrarlayan çatışma döngülerinde çiftin birlikte çalışmasını destekler. Tek başına başvuru da mümkündür.",
    highlights: [
      {
        title: "İletişim becerileri",
        body: "Savunmacı kalıplar yerine duyulan ve anlaşılan bir diyalog kurulması hedeflenir.",
      },
      {
        title: "Evlilik danışmanlığı",
        body: "Nişan, evlilik ve uzun süreli birlikteliklerde karar ve sınır konuları ele alınır.",
      },
      {
        title: "Yüz yüze seans",
        body: "Bursa Nilüfer kliniğinde çiftler için sakin ve profesyonel ortam.",
      },
    ],
    process: [
      "Çiftin birlikte veya bireysel ön görüşmesi",
      "İlişki dinamiklerinin değerlendirilmesi",
      "Ortak hedefler ve seans yapısının belirlenmesi",
    ],
    closing:
      "Çift terapisi randevusu ve süreç bilgisi için asistanımıza WhatsApp veya telefon ile ulaşın.",
  },
  {
    slug: "online-terapi",
    title: "Online Terapi",
    teaser:
      "Güvenli görüntülü görüşme ile bireysel ve çift terapisi. Bursa ve Türkiye genelinde uzaktan seans.",
    metaDescription:
      "Bursa ve Türkiye genelinde online terapi seansları. Güvenli görüntülü görüşme ile bireysel ve çift terapisi desteği.",
    intro:
      "Online terapi; yoğun iş temposu, farklı şehirde yaşama veya yüz yüze seansa ulaşamama durumlarında etik ve gizlilik ilkeleri korunarak yürütülür.",
    highlights: [
      {
        title: "Esnek erişim",
        body: "Uygun zaman diliminde, güvenli platform üzerinden seans imkânı.",
      },
      {
        title: "Aynı klinik standart",
        body: "Yüz yüze süreçle aynı değerlendirme, kayıt ve etik çerçeve uygulanır.",
      },
      {
        title: "Bireysel ve çift",
        body: "Hem bireysel terapi hem çift terapisi online formatında sunulabilir.",
      },
    ],
    process: [
      "Randevu ve teknik hazırlık bilgilendirmesi",
      "Görüntülü görüşme ile klinik seans (yaklaşık 50 dakika)",
      "Takip seansları ve gerektiğinde hibrit (online + yüz yüze) plan",
    ],
    closing:
      "Online terapi uygunluğu ve randevu için iletişim kanallarımızdan bilgi alabilirsiniz.",
  },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
