export type Article = {
  slug: string;
  image: string;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  excerpt: string;
  content: readonly string[];
};

export const articles: readonly Article[] = [
  {
    slug: "bursa-evlilik-danismanligi",
    image: "/images/articles/makale-evlilik.webp",
    date: "12 Mart 2026",
    dateISO: "2026-03-12",
    category: "Çift Terapisi",
    title: "Bursa'da Evlilik Danışmanlığı Süreci Nasıl İşler?",
    excerpt:
      "Nilüfer'de çift terapisi ve evlilik danışmanlığı adımları, seans yapısı ve ilk görüşme beklentileri.",
    content: [
      "Evlilik danışmanlığı; çiftin ortak hedeflerini, iletişim kalıplarını ve çatışma çözüm becerilerini güçlendirmeyi amaçlar. Süreç, her iki tarafın gönüllü katılımı ve gizlilik ilkeleri üzerine kurulur.",
      "İlk seanslarda ilişki öyküsü, tetikleyici konular ve güvenli sınır alanları değerlendirilir. Ardından çiftin ihtiyacına göre seans sıklığı ve çalışma planı oluşturulur.",
      "Bursa Nilüfer'deki kliniğimizde yüz yüze çift terapisi; online seçeneklerle birlikte hibrit olarak da planlanabilir.",
    ],
  },
  {
    slug: "bursa-online-terapi-rehberi",
    image: "/images/articles/makale-online.webp",
    date: "8 Mart 2026",
    dateISO: "2026-03-08",
    category: "Online Terapi",
    title: "Online Terapi Güvenli mi? Bursa'dan Uzaktan Seans Rehberi",
    excerpt:
      "Görüntülü terapi seansları, gizlilik, teknik hazırlık ve online sürecin yüz yüze terapiyle karşılaştırması.",
    content: [
      "Online terapi; mesleki etik kurallar ve KVKK çerçevesinde, şifreli görüşme platformları üzerinden yürütülür. Danışan mahremiyeti yüz yüze seanslarla aynı düzeyde korunur.",
      "Seans öncesi sessiz ortam, stabil internet ve kulaklık kullanımı sürecin verimliliğini artırır. İlk görüşmede teknik ve klinik beklentiler netleştirilir.",
      "Bursa dışından veya yoğun programı olan danışanlar için online terapi, bireysel ve çift çalışmalarında etkili bir alternatiftir.",
    ],
  },
  {
    slug: "bursa-psikolog-seans-ucreti",
    image: "/images/articles/makale-ucret.png",
    date: "28 Şubat 2026",
    dateISO: "2026-02-28",
    category: "Bursa Psikolog",
    title: "Bursa Psikolog Seans Ücretleri ve Süreç Rehberi",
    excerpt:
      "Seans süresi, terapi türü ve profesyonel standartlar çerçevesinde şeffaf bilgilendirme.",
    content: [
      "Psikoterapi seans ücretleri; uzmanlık alanı, seans süresi ve terapi formatına (yüz yüze / online) göre mesleki standartlar çerçevesinde belirlenir.",
      "Standart seans süresi genellikle 50 dakikadır. İlk görüşmede klinik değerlendirme yapılır; süreç ve sıklık birlikte planlanır.",
      "Güncel ücret ve randevu bilgisi için WhatsApp veya telefon ile asistanımıza ulaşabilirsiniz.",
    ],
  },
  {
    slug: "kaygi-ve-stres-yonetimi",
    image: "/images/articles/makale-kaygi.png",
    date: "20 Şubat 2026",
    dateISO: "2026-02-20",
    category: "Bireysel Terapi",
    title: "Kaygı ve Kronik Stres Yönetiminde Bireysel Terapi",
    excerpt:
      "Yetişkinlerde kaygı bozukluğu, panik ve iş stresi için klinik değerlendirme ve terapi hedefleri.",
    content: [
      "Kaygı ve kronik stres; uyku, konsantrasyon ve ilişkiler üzerinde birikerek yaşam kalitesini düşürebilir. Bireysel terapi bu döngüyü anlamlandırmayı ve yönetmeyi hedefler.",
      "Klinik değerlendirme sonrası bilişsel-davranışçı teknikler, duygu düzenleme ve yaşam tarzı düzenlemeleri kişiye özel planlanır.",
      "Erken başvuru, semptomların kronikleşmesini önlemede önemli bir koruyucu faktördür.",
    ],
  },
  {
    slug: "cift-iletisimi-ipuclari",
    image: "/images/articles/makale-cift.webp",
    date: "10 Şubat 2026",
    dateISO: "2026-02-10",
    category: "Çift Terapisi",
    title: "Çift İletişiminde Sık Yapılan Hatalar ve Çözüm Yolları",
    excerpt:
      "Savunmaya geçme, stonewalling ve eleştiri döngülerini kırmak için pratik çerçeveler.",
    content: [
      "Çift iletişiminde en sık karşılaşılan zorluklar; eleştiri, savunma, aşağılama ve duygusal çekilme (stonewalling) döngüsüdür. Bu kalıplar uzun vadede güveni zedeler.",
      "Terapi sürecinde aktif dinleme, duygu adlandırma ve zaman aşımı (time-out) gibi yapılandırılmış araçlar öğretilir.",
      "Profesyonel destek, çiftin kendi başına çıkamadığı kör noktaları güvenli bir ortamda çalışmayı mümkün kılar.",
    ],
  },
] as const;

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Günlük sabit seed — sunucu/istemci hydration uyumu için Math.random kullanılmaz */
export function pickFeaturedArticles<T>(
  items: readonly T[],
  count: number,
  seed = new Date().toISOString().slice(0, 10)
): T[] {
  const pool = [...items];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  for (let i = pool.length - 1; i > 0; i--) {
    hash = (hash * 1103515245 + 12345) >>> 0;
    const j = hash % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}
