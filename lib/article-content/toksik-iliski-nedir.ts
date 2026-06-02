import type { ArticleBlock, ArticleFaqItem } from "@/lib/article-types";

export const toksikIliskiNedirMetaTitle =
  "Toksik İlişki Nedir? Belirtileri ve Kurtulma Yolları - Kapsamlı Rehber";

export const toksikIliskiNedirMetaDescription =
  "Toksik ilişki nedir, nasıl anlaşılır? Manipülasyon, gaslighting ve toksik insan belirtilerini incelediğimiz, iyileşme sürecine dair bilimsel rehberimiz.";

export const toksikIliskiNedirExcerpt =
  "Toksik ilişki nedir, belirtileri nelerdir? Gaslighting, love bombing, narsistik döngü ve toksik ilişkiden kurtulma yolları — bağlanma teorisi ışığında kapsamlı rehber.";

export const toksikIliskiNedirFaq: readonly ArticleFaqItem[] = [
  {
    question: "Toksik ilişki nedir, her çatışmalı ilişki toksik midir?",
    answer:
      "Her çatışma toksik değildir; sağlıklı ilişkilerde de anlaşmazlık olur. Toksik ilişkide ise sürekli değersizleştirme, manipülasyon, güven kırılması ve bireyin öz-değer kaybı örüntü halindedir.",
  },
  {
    question: "Gaslighting nasıl anlaşılır?",
    answer:
      "Partnerinizin sizin algınızı, hafızanızı veya duygularınızı sürekli sorgulaması, olayları tersyüz etmesi ve 'abartıyorsun' demesi gaslighting işaretidir. Zamanla gerçekliğe olan güveniniz zayıflar.",
  },
  {
    question: "Toksik ilişkiden kurtulmak için no contact şart mı?",
    answer:
      "Fiziksel veya duygusal güvenlik riski varsa no contact (sıfır iletişim) çoğu uzman tarafından önerilir. Ortak çocuk veya iş zorunluluğunda sınırlı, yazılı iletişim planlanabilir.",
  },
  {
    question: "Toksik ilişki sonrası terapi ne kadar sürer?",
    answer:
      "Süre kişiye ve travma derinliğine bağlıdır. Travma bilgili terapi, BDT veya EMDR ile birçok danışan aylar içinde işlevsellik ve öz-değer kazanımı rapor eder; süreç bireyselleştirilir.",
  },
];

export const toksikIliskiNedirBlocks: readonly ArticleBlock[] = [
  {
    type: "p",
    text: "İlişki, doğası gereği karşılıklı duygusal yatırım, bağlanma ve birlikte anlam üretme ihtiyacını taşır. Bowlby'nin bağlanma teorisi, erken bakım veren deneyimlerinin yetişkin romantik ilişkilerdeki güven, yakınlık ve ayrılık kaygısı örüntülerini şekillendirdiğini vurgular. Çoğu ilişki zaman zaman gerilim yaşar; ancak **toksik ilişki nedir** sorusu, bu gerilimin sürekli bir tüketim, kontrol ve psikolojik zarar döngüsüne dönüştüğü bağlamları işaret eder. Popüler dilde 'toksik' sözcüğü, ilişkinin bireyin ruhsal ve bedensel sağlığını sistematik biçimde aşındırdığı durumları tanımlamak için kullanılır; klinik literatürde benzer dinamikler 'ilişkisel şiddet', 'duygusal istismar' veya 'kontrol edici ilişki örüntüsü' çerçeveleriyle de ele alınır.",
  },
  {
    type: "p",
    text: "Bir ilişkinin zamanla nasıl zarar mekanizmasına evrildiğini anlamak; yalnızca 'kötü partner' etiketlemekten öte, **sağlıksız ilişki nasıl anlaşılır** sorusuna yapılandırılmış yanıt aramayı gerektirir. Bu rehber; psikolojik tanım, **toksik ilişki belirtileri**, **toksik partner özellikleri**, **gaslighting ve manipülasyon** biçimleri, sağlıklı–toksik karşılaştırması, sağlık etkileri ve **toksik ilişkiden kurtulma yolları** ekseninde ilerler. İlişki dinamiklerinizi nesnelleştirmek için [sınır ve bağlanma testimizi](/testler/iliskilerde-sinir-ve-baglanma) veya [çift terapisi](/cift-terapisi) sayfamızı inceleyebilirsiniz.",
  },
  {
    type: "callout",
    text: "İlişkinizin dinamiklerini daha iyi anlamak için [İlişkilerde Sınır ve Bağlanma Testi](/testler/iliskilerde-sinir-ve-baglanma) çözün; yoğun belirtilerde [çift terapisi](/cift-terapisi) veya [bireysel terapi](/bireysel-terapi) için profesyonel destek alın.",
  },

  {
    type: "h2",
    text: "Toksik Ne Demek? Kavramın Kökeni ve Günlük Kullanımı",
  },
  {
    type: "p",
    text: "'Toksik' sözcüğü Latince toxin (zehir) kökenlidir; metaforik olarak 'zehirli ortam' veya 'sürekli zarar veren dinamik' anlamında kullanılır. Sosyal medyada **toksik ilişki nedir** aramalarının artması, genç yetişkinlerin ilişki sözlüğünü genişletmesiyle ilişkilidir. Klinik dilde her 'toksik' partner tanı etiketi değildir; önemli olan davranış örüntüsünün tekrarlanması, asimetrik güç ve bireyin iyileşme şansının kısıtlanmasıdır. Bu rehber, popüler kavramı bilimsel çerçeveye oturtmayı hedefler.",
  },

  {
    type: "h2",
    text: "Psikolojide Toksik İlişki Tanımı",
  },
  {
    type: "p",
    text: "Akademik psikolojide 'toksik ilişki' tek bir DSM tanısı değildir; davranış örüntüleri kümesi olarak tanımlanır. Nesne ilişkileri kuramı (Klein, Winnicott), içselleştirilmiş ebeveyn–çocuk temsillerinin yetişkin ilişkilerde tekrarlandığını öne sürer: değersizleştirilmiş self, idealize edilmiş partner veya sürekli terk edilme korkusu gibi internal working modeller, toksik döngüleri sürdürebilir. Bağlanma perspektifinden kaygılı bağlanma (hyperactivation: sürekli yakınlık arama, kıskançlık) ve kaçıngan bağlanma (deaktivasyon: duygusal mesafe) kombinasyonları, şiddetli iniş–çıkışlı ilişkilere zemin hazırlayabilir.",
  },
  {
    type: "p",
    text: "Gottman'ın dört atlısı (eleştiri, savunma, aşağılama, duvar örme) sağlıksız çatışma örüntülerini tanımlar; toksik ilişkide bu dörtlünün kronik ve asimetrik işlemesi sık görülür — yani bir taraf sürekli aşağılama ve kontrol uygularken diğer taraf suçluluk ve uyum içinde kalır. **Narsistik ilişki döngüsü** literatüründe idealizasyon (love bombing), değersizleştirme ve terk etme–geri dönme (hoovering) evreleri tanımlanır; bu döngü, partnerin özgüvenini aşındırırken bağlılığı artırır (trauma bonding).",
  },
  {
    type: "ul",
    items: [
      "Duygusal istismar: küçümseme, tehdit, sessizlikle cezalandırma.",
      "Kontrol: para, sosyal çevre, giyim, dijital hesaplar üzerinde baskı.",
      "Manipülasyon: suçluluk yükleme, mağdur rolü, gerçekliği çarpıtma.",
      "Asimetrik güç: bir tarafın sürekli 'haklı' ve üstün konumda olması.",
    ],
  },

  {
    type: "h2",
    text: "Bir İlişkinin Toksik Olduğunu Nasıl Anlarsınız? (Toksik İlişki Belirtileri)",
  },
  {
    type: "p",
    text: "**Toksik ilişki belirtileri** tek bir kavga ile değil, tekrarlayan örüntülerle değerlendirilir. Aşağıdaki alt başlıklar, klinik gözlem ve danışan öykülerinden sık raporlanan işaretleri özetler. Kendinizi bu maddelerde sürekli buluyorsanız, durumu yalnız başınıza çözmek zorunda olmadığınızı unutmayın.",
  },

  {
    type: "h3",
    text: "Sürekli Suçluluk Hissi ve Manipülasyon",
  },
  {
    type: "p",
    text: "Toksik dinamiklerde suçluluk, genellikle ilişkinin 'işletme maliyeti' haline gelir. Partnerinizin duygusal patlaması, sizin bir şeyi yanlış yaptığınız mesajıyla sonuçlanır — oysa tetikleyici çoğu zaman sınır koymanız veya hayır demenizdir. Bu, **gaslighting ve manipülasyon** spektrumunun giriş kapısıdır: 'Sen beni böyle yaptın' narrative'i, sorumluluğu size yükler. Zamanla öz-değeriniz partnerinizin ruh haline bağlanır; onun mutlu olması sizin görevinizmiş gibi hissedersiniz.",
  },

  {
    type: "h3",
    text: "Gaslighting: Gerçekliğinizi Sorgulatan Psikolojik Şiddet",
  },
  {
    type: "p",
    text: "Gaslighting terimi, Patrick Hamilton'ın oyunundan sinemaya, oradan klinik dile geçmiştir. Partner olayları inkâr eder, sizin hafızanızı veya algınızı sorgular ('bunu hiç söylemedim', 'çok hassassın'). Amaç, güvenilir algı kaynağınızı zayıflatarak kontrolü artırmaktır. Uzun süreli gaslighting; depresyon, anksiyete ve 'kendi kafamda mı deli oluyorum' hissiyle birlikte rapor edilir. **Sağlıksız ilişki nasıl anlaşılır** sorusunun en net yanıtlarından biri, dışarıdan güvendiğiniz birinin 'bu normal değil' demesidir.",
  },
  {
    type: "ul",
    items: [
      "Konuşulanların sonradan inkâr edilmesi.",
      "Duygularınızın abartılı veya mantıksız bulunması.",
      "Arkadaş ve ailenizin partneriniz tarafından 'kötü niyetli' gösterilmesi.",
      "Kanıt gösterdiğinizde bile tartışmanın kaydırılması.",
    ],
  },

  {
    type: "h3",
    text: "Love Bombing (Sevgi Bombardımanı) ve Değersizleştirme Döngüsü",
  },
  {
    type: "p",
    text: "Love bombing; ilişkinin başında aşırı ilgi, hediye, iltifat ve 'ruh ikizim' mesajlarıyla hızlı bağlanma yaratır. Bu faz, dopamin ve oksitosin salınımıyla bağımlılık benzeri bir bağ oluşturur. Ardından gelen değersizleştirme fazında aynı kişi soğuk, eleştirel veya görünmez olur — danışan 'eski haline döndürmek' için daha çok çaba harcar. **Narsistik ilişki döngüsü** bu iniş–çıkışı sistematik biçimde tekrarlar; her geri dönüş umut taşır, her düşüş daha derin yaralar açar.",
  },

  {
    type: "h3",
    text: "Aşırı Kıskançlık, Kısıtlama ve Dijital Takip",
  },
  {
    type: "p",
    text: "Kıskançlık, güvensizlik maskesi altında kontrol aracına dönüşebilir: telefon kontrolü, konum paylaşımı zorunluluğu, sosyal medya şifreleri, arkadaş listesinden kişi silme talepleri. Dijital takip (stalking, gizli hesaplar) günümüzde **toksik ilişki belirtileri** arasında öne çıkar. 'Seni seviyorum, o yüzden kontrol ediyorum' çerçevesi, sağlıklı güvenin tam tersidir.",
  },

  {
    type: "h3",
    text: "İletişimsizlik ve Cezalandırma Yöntemi (Silent Treatment)",
  },
  {
    type: "p",
    text: "Silent treatment (sessizlikle cezalandırma), günlerce konuşmama, görmezden gelme veya duygusal soğuklukla partneri cezalandırmaktır. Bu, pasif-agresif kontrol biçimidir ve bağlanma sistemini tetikler — kaygılı bağlanan bireyler için terk edilme alarmı yaratır. Sağlıklı ilişkide mola ve sakinleşme vardır; toksik ilişkide ise amaç güç göstermek ve boyun eğdirmektir.",
  },
  {
    type: "callout",
    text: "Belirtileri kendi ilişkinizde tarıyorsanız: [İlişkilerde Sınır ve Bağlanma Testi](/testler/iliskilerde-sinir-ve-baglanma) ile geçirgen/katı sınır ve bağlanma eğilimlerinizi görün.",
  },

  {
    type: "h2",
    text: "Toksik Partner Özellikleri: Kimlerle İlişki Yürütmek Zordur?",
  },
  {
    type: "p",
    text: "**Toksik partner özellikleri** her bireyde aynı görünmez; ancak klinik örüntüler ortaktır. Aşağıdaki başlıklar tanı koymaz; farkındalık sağlar. Narsisistik kişilik örgütlenmesi olan herkes şiddet uygulamaz; ancak empati yoksunluğu ve grandiyözlük, ilişkide sürekli yaralanma riskini artırır.",
  },
  {
    type: "h3",
    text: "Narsistik Eğilimler ve İdealizasyon–Aşağılama",
  },
  {
    type: "p",
    text: "Partner sürekli özel, üstün veya haklı hissetme ihtiyacı duyar; eleştiriye aşırı tepki verir. Başkalarının başarısını küçümser veya kıskançlıkla karşılar. İlişkide siz 'en mükemmel' iken bir anda 'yetersiz' olursunuz — bu **narsistik ilişki döngüsünün** tipik yüzüdür.",
  },
  {
    type: "h3",
    text: "Sınır Tanımazlık ve Empati Yoksunluğu",
  },
  {
    type: "p",
    text: "Hayır dediğinizde ısrar, fiziksel veya dijital alanınıza saygısızlık, duygularınızın önemsenmemesi empati yoksunluğu işaretidir. Partner kendi acısını anlatırken sizinkini geçersiz kılar ('benim derdim daha büyük').",
  },
  {
    type: "h3",
    text: "Sürekli Mağdur Rolü ve Sorumluluk Aktarma",
  },
  {
    type: "p",
    text: "Her çatışmada mağdur pozisyonu alır; siz agresör ilan edilirsiniz. Geçmiş travmaları sürekli gerekçe olarak sunulur; sizin ihtiyaçlarınız ikinci planda kalır. Bu örüntü, **toksik ilişkiden kurtulma yolları** ararken suçluluk tuzağını güçlendirir.",
  },

  {
    type: "h2",
    text: "Sağlıklı İlişki ile Toksik İlişki Arasındaki Farklar",
  },
  {
    type: "p",
    text: "Aşağıdaki tablo, dört temel kriterde sağlıklı ve toksik ilişki dinamiklerini karşılaştırır. Tek bir satırda kendinizi sürekli toksik sütunda bulmanız, ilişkiyi yeniden değerlendirme zamanının geldiğine işaret edebilir.",
  },
  {
    type: "table",
    caption: "Sağlıklı ve toksik ilişki karşılaştırması — iletişim, güven, alan ve çatışma çözümü.",
    headers: ["Kriter", "Sağlıklı İlişki", "Toksik İlişki"],
    rows: [
      [
        "**İletişim**",
        "Açık, saygılı diyalog; duygular ifade edilir ve dinlenir.",
        "İnkâr, aşağılama, sessizlikle ceza; konu sürekli kaydırılır.",
      ],
      [
        "**Güven**",
        "Tutarlılık, şeffaflık; güvenlik hissi zamanla artar.",
        "Kıskançlık, sorgulama, ihanet tehdidi; sürekli tetikte olma.",
      ],
      [
        "**Bireysel Alan**",
        "Arkadaşlık, hobiler ve yalnız kalma hakkı korunur.",
        "İzolasyon, kontrol, 'ben sensiz yapamam' bağımlılığı.",
      ],
      [
        "**Çatışma Çözme**",
        "Uzlaşma, özür, davranış değişikliği hedeflenir.",
        "Kazan–kaybet; suçluluk yükleme; aynı konular tekrarlar.",
      ],
    ],
  },

  {
    type: "h2",
    text: "Toksik İlişkilerin Bireysel Sağlığa Zararları",
  },
  {
    type: "p",
    text: "Kronik ilişkisel stres, HPA eksenini sürekli aktive eder; kortizol yükü uyku bozukluğu, bağışıklık baskılanması ve somatik şikayetlere (baş ağrısı, sindirim sorunları) yol açabilir. McEwen'in allostatik yük kavramı, süregelen psikososyal stresin bedensel aşınmayı artırdığını gösterir. Ruhsal düzlemde yaygın kaygı, depresif tablolar, panik atak, dissosiyasyon ve travma sonrası stres belirtileri rapor edilir.",
  },
  {
    type: "p",
    text: "Özgüven kaybı ve öz-değerin partnerin onayına bağlanması, iş ve sosyal işlevselliği düşürür. İzolasyon, dış destek ağını zayıflatarak döngüyü kilitler. Bazı danışanlar madde kullanımı, yeme bozukluğu veya kendine zarar verme davranışlarında artış bildirir. Bu tablo, **toksik ilişkiden kurtulma yolları**nın yalnızca 'ayrılmak' değil, tıbbi ve psikolojik toparlanmayı da içermesi gerektiğini gösterir.",
  },
  {
    type: "ul",
    items: [
      "Kronik stres ve uyku–iştah düzeninde bozulma.",
      "Yaygın kaygı, depresyon veya panik atak eğilimi.",
      "Özgüven çöküşü ve karar verme güçlüğü.",
      "Sosyal izolasyon ve aile/arkadaş ilişkilerinde kopukluk.",
      "Travma bağlı flashback ve güvensizlik (sonraki ilişkilerde de).",
    ],
  },

  {
    type: "h2",
    text: "Toksik İlişkiden Kurtulma Yolları ve İyileşme Süreci",
  },
  {
    type: "p",
    text: "**Toksik ilişkiden kurtulma yolları** kişiye, güvenlik düzeyine ve ekonomik bağımlılığa göre değişir. Fiziksel şiddet varsa öncelik güvenlik planıdır (kadın sığınma evleri, 183 ALO Sosyal Destek, polis). Duygusal istismarda da profesyonel rehberlik önerilir.",
  },

  {
    type: "h3",
    text: "Farkındalık ve Durumu Kabul Etme",
  },
  {
    type: "p",
    text: "İlk adım, örüntüyü adlandırmaktır: 'Bu ilişki beni sürekli küçültüyor ve tüketiyor.' Kabul, suçluluk duygusunu tamamen silmez; ancak değişim için zemin açar. Günlük kayıt tutmak (olay, düşünce, duygu) gaslighting sonrası gerçekliği yeniden inşa etmeye yardımcı olur.",
  },

  {
    type: "h3",
    text: "Sınır Çizme ve No Contact (Sıfır İletişim) Kuralı",
  },
  {
    type: "p",
    text: "Sınır; net, tekrarlanabilir ve sonuçları olan kurallardır ('şifremi paylaşmıyorum', 'beni aşağılayan konuşmada kalmıyorum'). No contact, hoovering ve döngüyü kırmak için en etkili yöntemlerden biridir; ortak çocuk varsa sınırlı, yazılı ve mümkünse aracılı iletişim planlanır. Ayrılık sonrası sosyal medyadan uzak durmak, ortak mekanlardan kaçınmak toparlanmayı hızlandırır.",
  },

  {
    type: "h3",
    text: "Sosyal Destek Mekanizmalarını Aktive Etme",
  },
  {
    type: "p",
    text: "İzolasyonu tersine çevirin: güvendiğiniz arkadaş, aile veya destek gruplarıyla bağlantı kurun. Partnerinizin 'onlar seni kullanıyor' narrative'ine karşı, dış perspektifi koruyun. Destek ağı, ayrılık kararını somutlaştırır.",
  },

  {
    type: "h3",
    text: "Profesyonel Psikolojik Destek Almanın Önemi",
  },
  {
    type: "p",
    text: "Travma bilgili terapi, bilişsel-davranışçı terapi, EMDR veya [çift terapisi](/cift-terapisi) (ilişki devam edecekse ve şiddet yoksa) süreçleri yapılandırılabilir. Şiddet varsa çift terapisi önerilmez; önce bireysel güvenlik ve bireysel terapi. [Bursa bireysel terapi](/bireysel-terapi) ve [EMDR](/hizmetler/emdr-terapisi-bursa) sayfalarımızdan süreç hakkında bilgi alabilirsiniz.",
  },

  {
    type: "h2",
    text: "Çocuklar ve Ortak Yaşam: Toksik Dinamiklerin Genişlemesi",
  },
  {
    type: "p",
    text: "Toksik ilişki yalnızca romantik çiftleri etkilemez; çocuklar duygusal istismarı modelleyerek bağlanma örüntülerini içselleştirebilir. Ortak evde sürekli yüksek gerilim, çocukta kaygı ve regülasyon güçlüğüne yol açabilir. Ayrılık planlanırken çocuğun güvenliği ve yaş uygunlu bilgilendirme (çatışma ortasında kullanılmaması) önemlidir. Ekonomik bağımlılık, göçmenlik statüsü veya dini–kültürel baskı, **toksik ilişkiden kurtulma yolları**nı karmaşıklaştırır; bu durumlarda hukuki ve sosyal hizmetlerle koordinasyon gerekir.",
  },

  {
    type: "h2",
    text: "Toksik İlişki Sonrası İyileşme: Beklentiler ve Zaman Çizelgesi",
  },
  {
    type: "p",
    text: "İyileşme doğrusal değildir; ayrılık sonrası özlem ve idealizasyon geri dönüş dalgaları normaldir. Beyin, bağlanma sistemini bağımlılık benzeri süreçlerle işler; bu yüzden 'mantıken biliyorum ama özledim' çelişkisi yaşanır. Düzenli uyku, beslenme, fiziksel aktivite ve anlamlı rutinler sinir sistemini regüle eder. Yeni ilişkiye acele etmek yerine öz-değer ve sınır becerilerini güçlendirmek, tekrarlayan **toksik ilişki belirtileri**ne düşme riskini azaltır.",
  },
  {
    type: "p",
    text: "Sonuç olarak **toksik ilişki nedir** sorusu, yalnızca popüler bir etiket değil; kontrol, manipülasyon ve sürekli zarar örüntüsünün psikolojik tanımıdır. **Sağlıksız ilişki nasıl anlaşılır** sorusuna dürüst cevap vermek, ilk iyileşme adımıdır. Yalnız değilsiniz; profesyonel destek ve güvenli bir çevre, **toksik ilişkiden kurtulma yolları**nın en güçlü bileşenleridir.",
  },
  {
    type: "callout",
    text: "İlişkinizin dinamiklerini anlamak için [testler merkezimize](/testler) göz atın; [WhatsApp randevu](/#iletisim) ile Bursa'da yüz yüze veya online destek planlayabilirsiniz. Acil şiddet durumunda 112 veya Kadın Destek Hattı 183.",
  },
  {
    type: "p",
    text: "Bu makale genel bilgilendirme sunar; kişisel kriz veya şiddet durumunda yerel acil hatlar ve uzman klinik değerlendirme önceliklidir.",
  },
];
