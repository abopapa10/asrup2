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
    title: "Bireysel Süreçler",
    teaser:
      "Kaygı, depresyon ve kronik stres üzerine psikoloji yazıları ve kavramsal çerçeve.",
    metaDescription:
      "Bursa Psikolog A. Alparslan Sancar — bireysel süreçler, kaygı ve duygudurum üzerine bilgilendirici yazılar. Nilüfer Özlüce.",
    intro:
      "Bireysel psikoloji; kaygı, çökkünlük, tükenmişlik ve yaşam geçişlerini anlamaya çalışan bir alandır. Bu sayfa tanıtım veya satış metni değil; kavramları ve okuma yollarını özetler.",
    highlights: [
      {
        title: "Kavramsal harita",
        body: "Belirtiler, bağlam ve işlevsellik birlikte okunur; etiket tek başına açıklama değildir.",
      },
      {
        title: "Kanıta dayalı ekoller",
        body: "Bilişsel-davranışçı ve insancıl çerçeveler, yazılarda kaynak olarak yer alır.",
      },
      {
        title: "Etik dil",
        body: "Mahremiyet ve ölçülü anlatım, kamuya açık içeriklerin de sınırıdır.",
      },
    ],
    process: [
      "Konuyu tanımlamak ve literatürle ilişkilendirmek",
      "Günlük yaşama yansıyan örüntüleri ayırt etmek",
      "İleri okuma ve ilgili yazılara yönelmek",
    ],
    closing:
      "Sorularınız için iletişim bölümünden WhatsApp veya telefon ile ulaşabilirsiniz.",
  },
  {
    slug: "cift-terapisi",
    title: "İlişkiler ve Çift Dinamikleri",
    teaser:
      "İletişim, güven ve çatışma döngüleri üzerine psikoloji notları.",
    metaDescription:
      "İlişki dinamikleri, iletişim ve güven üzerine yazılar — Bursa Psikolog A. Alparslan Sancar.",
    intro:
      "Çift dinamikleri; iletişim kopuklukları, güven ve tekrarlayan çatışma örüntülerini anlamaya yönelik bir psikoloji alanıdır. Sayfa, genel okuma içindir.",
    highlights: [
      {
        title: "İletişim kalıpları",
        body: "Savunma, kaçınma ve duyulmama hissi sık görülen döngülerdir.",
      },
      {
        title: "Güven ve sınır",
        body: "Yakınlık ile özerklik arasındaki gerilim, yazılarda ayrı başlıklarla ele alınır.",
      },
      {
        title: "Kaynaklar",
        body: "İlgili makaleler ve soru-cevap içerikleri bu konuyu genişletir.",
      },
    ],
    process: [
      "Döngüyü tanımlamak",
      "Her iki tarafın deneyimini ayırt etmek",
      "İlgili yazılara geçmek",
    ],
    closing:
      "İletişim için WhatsApp veya telefon yeterlidir.",
  },
  {
    slug: "online-terapi",
    title: "Çevrimiçi Görüşme Formatı",
    teaser:
      "Görüntülü görüşmenin psikoloji alanındaki yeri üzerine kısa bir çerçeve.",
    metaDescription:
      "Çevrimiçi görüşme formatı ve gizlilik üzerine notlar — Bursa Psikolog A. Alparslan Sancar.",
    intro:
      "Çevrimiçi görüşme; mesafe, tempo ve erişim nedeniyle sık konuşulan bir formattır. Bu sayfa, formatın genel çerçevesini özetler.",
    highlights: [
      {
        title: "Erişim",
        body: "Farklı şehirler ve yoğun tempo, görüntülü görüşmeyi pratik kılar.",
      },
      {
        title: "Gizlilik",
        body: "Sakin, özel bir ortam ve güvenli bağlantı temel unsurlardır.",
      },
      {
        title: "Sınırlar",
        body: "Acil tıbbi durumlarda yüz yüze acil sağlık hizmetleri önceliklidir.",
      },
    ],
    process: [
      "Teknik hazırlık ve sessiz ortam",
      "Görüşmenin çerçevesini netleştirmek",
      "Gerektiğinde yüz yüze ile karşılaştırmak",
    ],
    closing:
      "Format hakkında soru sormak için iletişime geçebilirsiniz.",
  },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
