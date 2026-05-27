import type { ArticleBlock, ArticleFaqItem } from "../article-types";

export const ilkTerapiSeansiMetaTitle =
  "İlk Terapi Seansı Nasıl Geçer? | Bursa Psikolog";

export const ilkTerapiSeansiMetaDescription =
  "İlk terapi seansında ne konuşulur, nasıl hazırlanılır, ne kadar sürer? İlk görüşme için açık, klinik bir rehber.";

export const ilkTerapiSeansiExcerpt =
  "İlk terapi seansının ne içerdiğini bilmek, başvuru kararını kolaylaştırır. Tanışma seansının amacı, format ve sonrasında neler yaşandığını klinik bir bakışla anlatıyoruz.";

export const ilkTerapiSeansiFaq: readonly ArticleFaqItem[] = [
  {
    question: "İlk seansta her şeyi anlatmak zorunda mıyım?",
    answer:
      "Hayır. İlk seans bir tanışma görüşmesidir. Yalnızca paylaşmaya hazır olduğunuz kadarını paylaşırsınız; yargılayıcı bir değerlendirme yapılmaz.",
  },
  {
    question: "Bir seans ne kadar sürer?",
    answer:
      "Standart bir seans yaklaşık 50 dakikadır. İlk görüşmelerde değerlendirme nedeniyle bu süre bazen 60 dakikaya kadar uzayabilir.",
  },
  {
    question: "Kaç seansta etki görülmeye başlar?",
    answer:
      "Bu, çalışılan tabloya ve danışanın süreçle kurduğu ilişkiye göre değişir. Genellikle 4–6 seans sonrasında belirli bir yön hissi oluşmaya başlar; tabloya göre süreç daha kısa ya da daha uzun planlanabilir.",
  },
  {
    question: "Ne giymeli, neyle gelmeliyim?",
    answer:
      "Özel bir hazırlık gerekmez. Kendinizi rahat hissettiğiniz kıyafetlerle gelmeniz yeterlidir. İsteyen danışanlar küçük notlar getirir; bu zorunlu değildir.",
  },
  {
    question: "İlk seans sonunda terapi başlamış sayılır mı?",
    answer:
      "İlk seans, her iki tarafın da süreç hakkında daha net bir karar vermesini sağlayan bir çerçevedir. Çoğu zaman buradan terapiye geçilir; ancak bazen başka bir uzmana yönlendirme yapmak daha uygun olabilir.",
  },
];

export const ilkTerapiSeansiBlocks: readonly ArticleBlock[] = [
  {
    type: "p",
    text: "İlk terapi seansına gitmeden önce çoğu danışanın aklında benzer sorular vardır: \u201cNeyle başlasam?\u201d, \u201cAğlamamak için kendimi tutmalı mıyım?\u201d, \u201cYa söyleyecek bir şey bulamazsam?\u201d Bu soruların hepsi anlamlıdır ve seansın başında dile getirildiğinde sürecin parçası olur.",
  },
  {
    type: "p",
    text: "Bu yazıda ilk seansın klinik amacı, format ve sonrasında neler yaşandığı netleştiriliyor. Amaç, ilk başvuruyu daha az belirsiz hâle getirmek; süreçle kurulan ilişkide güvenli bir başlangıç noktası sunmaktır.",
  },

  {
    type: "h2",
    text: "İlk görüşmenin amacı",
  },
  {
    type: "p",
    text: "İlk seans, alışılageldik bir \u201cterapi seansı\u201d değildir. Daha çok bir tanışma ve klinik değerlendirme görüşmesidir. Hem siz terapistle kurabileceğiniz ilişkiyi tartabilirsiniz, hem de terapist sürecin haritasını birlikte çizmek için ihtiyaç duyduğu bilgileri toplar.",
  },
  {
    type: "p",
    text: "Bu seansta amaç bir günde iyileşmek ya da büyük yorumlar yapmak değildir. Birlikte yürünecek yolun ana hatlarını belirlemek, beklentileri açık konuşmak ve sürecin sınırlarını netleştirmektir.",
  },

  {
    type: "h2",
    text: "Hangi sorular konuşulur?",
  },
  {
    type: "p",
    text: "Sorular tabloya göre değişir; ancak ilk görüşmede genellikle aşağıdaki başlıklar üzerinden bir çerçeve oluşturulur:",
  },
  {
    type: "ul",
    items: [
      "Sizi terapiye getiren konunun kısa öyküsü",
      "Bu süreçte yaşadığınız zihinsel, bedensel ve davranışsal değişimler",
      "Hayatınızın temel alanları (iş/okul, ilişkiler, aile, sağlık)",
      "Daha önce alınmış destekler — varsa terapi ya da tıbbi tedavi öyküsü",
      "Bu süreçten beklentileriniz ve umutlu olduğunuz noktalar",
    ],
  },
  {
    type: "p",
    text: "Bu soruların hiçbiri \u201cdoğru cevabı\u201d olan sorular değildir. Net olmadığınız yerleri bilmediğinizi söylemeniz, durumun olduğu hâliyle aktarılmasını kolaylaştırır.",
  },

  {
    type: "h2",
    text: "Ne kadar sürer, format nasıldır?",
  },
  {
    type: "p",
    text: "Standart bir psikoterapi seansı yaklaşık 50 dakikadır. İlk görüşmeler değerlendirme nedeniyle 60 dakikaya kadar uzayabilir. Seans yüz yüze ya da [online terapi](/online-terapi) formatında yürütülebilir; ihtiyacınıza ve günlük akışınıza göre birlikte karar verilir.",
  },
  {
    type: "p",
    text: "Görüşmeler genellikle haftalık olarak başlar. Tabloya göre 10 günde bir ya da iki haftalık aralıklara geçilebilir. Bu yapı esnek değildir ama danışanın yaşam akışına saygı duyacak şekilde planlanır.",
  },

  {
    type: "h2",
    text: "Hazırlık şart mı?",
  },
  {
    type: "p",
    text: "Hazırlık zorunlu değildir. Ancak küçük bir not almanın faydalı olduğunu söyleyen danışanlar vardır. Son birkaç haftada zorlandığınız anlar, tekrarlayan düşünceler ya da ele almak istediğiniz spesifik konular kısa cümlelerle yazılabilir.",
  },
  {
    type: "p",
    text: "Aklınızda hiçbir şey olmadan da gelebilirsiniz. Çoğu zaman ilk soruyla birlikte konunun kendi düzeni oluşur; çerçeveyi terapist sizinle birlikte kurar.",
  },

  {
    type: "h2",
    text: "Konuşmaya nereden başlamalı?",
  },
  {
    type: "p",
    text: "İlk seans için sıklıkla duyulan bir tedirginlik şudur: \u201cYa ağlarsam, ya konuşamam, ya konunun başını sonunu kaçırırsam?\u201d Bu tedirginliği seansın başında dile getirmek; aslında konuşmanın doğal akışını başlatan en iyi başlangıç noktalarından biridir.",
  },
  {
    type: "p",
    text: "Bir başka iyi başlangıç; \u201cson zamanlarda en çok ne sıklıkla geri dönen bir his ya da düşünce var?\u201d sorusudur. Net bir konu yoksa, son birkaç haftadaki ruh halinizden başlayabilirsiniz.",
  },

  {
    type: "h2",
    text: "Seans sonrası hisler",
  },
  {
    type: "p",
    text: "İlk seanstan sonra yorgun, duygusal, hatta bir miktar dağılmış hissetmek olağandır. Konuşulan konuların bedende yer etmesi zaman alır. Buna karşılık bazı danışanlar ilk seansın hemen ardından beklenmedik bir hafifleme tarif eder.",
  },
  {
    type: "p",
    text: "Bu farklı tepkilerin hiçbiri \u201cyanlış\u201d değildir. Önemli olan; seans sonrasındaki birkaç gün içinde ne yaşadığınızı bir sonraki görüşmeye taşımaktır. Bu paylaşımlar sürecin yönüne dair önemli ipuçları içerir.",
  },

  {
    type: "h2",
    text: "Kaç seansta fark edilir?",
  },
  {
    type: "p",
    text: "Bu, en sık sorulan sorudur ve net bir takvim vermek danışanın gerçek yaşantısına saygısızlık olur. Yine de yaygın bir ortalama vermek mümkündür: belirli bir tablonun çalışılması için genellikle 8–16 seans arasında çalışmak yeterli olabilir; süreklilik kazanmış tablolarda süreç daha uzun planlanır.",
  },
  {
    type: "p",
    text: "İlk birkaç seansta beklenen, \u201ctam iyileşme\u201d değil; konuya daha geniş ve daha şefkatli bakmaya başlamaktır. Bu ilk hareket, sonraki tüm sürecin temelini oluşturur. Detaylı bir başlangıç için [Bursa'da bireysel terapi](/bireysel-terapi) sayfasını inceleyebilirsiniz.",
  },
];
