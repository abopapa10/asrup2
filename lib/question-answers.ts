import { pickFeaturedArticles } from "@/lib/articles";
import type { QuestionAnswerItem } from "@/lib/question-answer-types";

export const questionAnswers: readonly QuestionAnswerItem[] = [
  {
    slug: "aldatilma-korkusu-nasil-yenilir",
    question: "Aldatılma Korkusu Nasıl Yenilir?",
    directAnswer:
      "Aldatılma korkusu, partneri kısıtlayarak veya kontrol ederek yenilmez; çünkü korku kişinin kendi iç dünyasında üretilir. Kısa vadeli kısıtlamalar geçici bir güvenlik hissi verse de uzun vadede korkuyu büyütür ve ilişki güvenini zedeler. Kalıcı çözüm, içsel süreçleri anlamak, bağlanma yaralarını çalışmak ve ilişki çok zarar görmeden profesyonel destek almaktır.",
    excerpt:
      "Aldatılma korkusu nasıl yenilir? Partneri kısıtlamak işe yaramaz; çözüm bireyin içsel süreçlerine odaklanmak ve erken profesyonel destektir.",
    date: "10 Temmuz 2026",
    dateISO: "2026-07-10",
    metaTitle: "Aldatılma Korkusu Nasıl Yenilir? Kısıtlama Değil İçsel Çalışma",
    metaDescription:
      "Aldatılma korkusu nasıl yenilir, nasıl geçer? Partneri kısıtlamak korkuyu büyütür. İçsel süreçler, bağlanma ve profesyonel destekle klinik çözüm çerçevesi.",
    keywords: [
      "aldatılma korkusu nasıl yenilir",
      "aldatılma korkusu nasıl geçer",
      "kıskançlık nasıl yenilir",
      "othello sendromu",
      "ilişkide güven terapisi",
    ],
    content: [
      {
        type: "h2",
        text: "Neden Partneri Kısıtlamak İşe Yaramaz?",
      },
      {
        type: "p",
        text: "Aldatılma korkusu, dışarıdaki bir 'tehlikeyi' ortadan kaldırarak değil; zihnin tehdit üretme biçimini değiştirerek yönetilir. Partnerin hareket alanını daraltmak, kısa süreli bir kontrol hissi verse de korkunun kaynağına dokunmaz. Bu nedenle kısıtlama stratejisi, davranışsal olarak paradoksaldır: Güvenliği artırmayı vaat ederken belirsizlik ve şüpheyi besler.",
      },
      {
        type: "p",
        text: "Klinik çerçevede bu tablo, [Othello sendromu / aldatılma korkusu hastalığı](/makale/othello-sendromu-nedir) spektrumundaki morbid kıskançlık örüntüleriyle de kesişebilir. Yoğunluk arttıkça soruşturma ve kontrol davranışları ilişkiyi soruşturma odasına çevirir; [ilişkilerde güven problemleri](/makale/iliskilerde-guven-problemleri) derinleşir.",
      },
      {
        type: "h2",
        text: "Klinik Gözlem: Kısıtlama Döngüsünün Güven Üzerindeki Etkisi",
      },
      {
        type: "p",
        text: "Aldatılma korkusu kişinin kendi içinde üretilen bir psikolojik durum olduğu için, bunu partneri kısıtlayarak ve böylece daha güvenli hissetmeye çalışarak aşmak mümkün değildir. Üstelik bu kısıtlamalar zamanla korkunun daha da büyümesine yol açar.",
      },
      {
        type: "p",
        text: "Örneğin bir danışanım, partnerinin karşı cinsin bulunduğu iş toplantılarına katılmasını istemiyordu. Partner, danışanını mutlu etmek için bu talebi kabul etmişti; ancak bu taahhüdü sürdürmek pratikte imkânsızdı. Partner aldatmıyor olsa da sözünü tutamaması, ilişkideki güveni zedeliyordu. Yani kısıtlama → geçici rahatlama → sürdürülemez söz → güven kırılması döngüsü, korkuyu azaltmak bir yana, güven zeminini de aşındırıyordu.",
      },
      {
        type: "h3",
        text: "Davranışsal Kısıtlamaların Paradoksal Etkisi",
      },
      {
        type: "p",
        text: "Kısıtlama, kısa vadede kaygıyı düşüren bir güvenlik davranışı gibi işler. Uzun vadede ise zihin şunu öğrenir: 'Tehdit ancak kontrolle yönetilir.' Kontrol bozulduğunda (ki gerçek hayatta bozulur) kaygı daha şiddetli geri döner. Böylece korku büyür; partner ise 'sürekli yetersiz kalan bir güvence kaynağı' konumuna sıkışır. Bu dinamik, [toksik ilişki](/makale/toksik-iliski-nedir) örüntülerindeki zorlayıcı kontrole de kayabilir.",
      },
      {
        type: "h2",
        text: "Aldatılma Korkusunun Kökenleri",
      },
      {
        type: "h3",
        text: "Geçmiş Travmalar ve İhanet Yaşantıları",
      },
      {
        type: "p",
        text: "Önceki ilişkide aldatılma, aile içinde güvenin bozulması veya erken yaşantılardaki terk/ihmal deneyimleri, yeni ilişkide hipervijilansı (aşırı tetikte olmayı) tetikleyebilir. Zihin, geçmişteki yarayı bugünkü partnere taşır; belirsizlikleri otomatik olarak tehdit lehine yorumlar.",
      },
      {
        type: "h3",
        text: "Bağlanma Stilleri ve Onay Arayışı",
      },
      {
        type: "p",
        text: "Kaygılı bağlanma örüntülerinde yakınlık ve terk edilme korkusu birlikte yükselir. Kişi partneri 'yakında tutmak' için kontrol stratejilerine yönelebilir. Bu noktada [İlişkilerde Sınır ve Bağlanma Testi](/testler/iliskilerde-sinir-ve-baglanma), örüntüyü nesnelleştirmeye yardımcı olabilir; amaç etiketlemek değil, farkındalık üretmektir.",
      },
      {
        type: "h2",
        text: "Aldatılma Korkusu Nasıl Geçer? Çözüm Yolları",
      },
      {
        type: "p",
        text: "**Aldatılma korkusu nasıl geçer** sorusunun klinik yanıtı nettir: Bireyin kendine odaklanması; hangi içsel süreçlerin bu korkuyu ürettiğini analiz etmesi gerekir. Partneri 'düzeltmek' veya kısıtlamak yerine, tehdit yorumlarını, güvenlik davranışlarını ve bağlanma yarasını çalışmak kalıcı değişimin yoludur.",
      },
      {
        type: "ul",
        items: [
          "Kısıtlama ve soruşturma davranışlarını fark etmek, kademeli olarak azaltmak.",
          "Belirsizliği felaketleştiren düşünceleri yakalamak ve alternatif açıklamalara alan açmak.",
          "Öz-değer ve terk korkusunu partnerin davranışına endekslemeyi bırakmak.",
          "İlişki çok zarar görmeden [bireysel terapi](/bireysel-terapi) veya uygunsa [çift terapisi](/cift-terapisi) planlamak.",
        ],
      },
      {
        type: "h3",
        text: "Profesyonel Destek Ne Zaman Önceliklidir?",
      },
      {
        type: "p",
        text: "Korku günlük yaşamı, uykuyu veya ilişkiyi bozuyorsa; kontrol talepleri artıyorsa; partner mahremiyetini kaybediyorsa erken müdahale en mantıklı adımdır. Yoğun kaygı zemininde [anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa); travma yükü belirginse [EMDR](/hizmetler/emdr-terapisi-bursa) değerlendirilebilir. [Ana sayfa](/) ve [iletişim](/#iletisim) üzerinden değerlendirme planlanabilir.",
      },
      {
        type: "callout",
        text: "Özet: Aldatılma korkusu partneri kilitleyerek değil, içsel alarm sistemini anlayarak yenilir. Kısıtlama döngüsünü kırmak için [Othello sendromu rehberi](/makale/othello-sendromu-nedir) ve profesyonel destek birlikte düşünülmelidir.",
      },
    ],
    faq: [
      {
        question: "Aldatılma korkusu partneri kısıtlayarak geçer mi?",
        answer:
          "Hayır. Kısıtlama kısa süreli rahatlama verse de korkuyu büyütür ve sürdürülemez taahhütler güveni zedeler. Çözüm bireyin içsel süreçlerine odaklanmaktır.",
      },
      {
        question: "Aldatılma korkusu nasıl geçer?",
        answer:
          "Öz-farkındalık, bağlanma ve tehdit yorumlarını çalışmak, güvenlik davranışlarını azaltmak ve ilişki çok zarar görmeden profesyonel destek almak kalıcı iyileşmeyi destekler.",
      },
      {
        question: "Ne zaman terapiye başvurmalıyım?",
        answer:
          "Kıskançlık ve kontrol talepleri ilişkiyi bozuyorsa, sürekli soruşturma varsa veya kaygı işlevselliği düşürüyorsa erken dönemde bireysel veya çift terapisi önerilir.",
      },
    ],
  },
  {
    slug: "panik-atak-oldurur-mu",
    question: "Panik Atak Öldürür mü?",
    directAnswer:
      "Panik atak, çok yoğun bedensel belirtiler üretse de tek başına öldürücü bir durum değildir. Atak sırasında görülen çarpıntı, nefes darlığı, göğüste sıkışma ve baş dönmesi belirtileri; çoğunlukla sempatik sinir sisteminin alarm yanıtından kaynaklanır. Yani bedeniniz tehdit varmış gibi hızlanır, ancak bu tablo kalp kriziyle aynı şey değildir.",
    excerpt:
      "Panik atak öldürmez; semptomlar sempatik sinir sistemi aktivasyonunun sonucudur. Çarpıntı ve nefes darlığının fizyolojik zemini klinik olarak açıklanabilir.",
    date: "9 Temmuz 2026",
    dateISO: "2026-07-09",
    metaTitle: "Panik Atak Öldürür mü? Klinik ve Fizyolojik Açıklama",
    metaDescription:
      "Panik atak öldürür mü sorusunun kısa ve bilimsel yanıtı: Panik atak belirtileri yoğun olsa da ölümcül değildir. Sempatik sinir sistemi aktivasyonu üzerinden detaylı açıklama.",
    keywords: [
      "panik atak öldürür mü",
      "panik atak çarpıntı",
      "panik atak nefes darlığı",
      "sempatik sinir sistemi",
      "panik atak terapisi bursa",
    ],
    content: [
      {
        type: "h2",
        text: "Panik Atakta Bedende Ne Olur?",
      },
      {
        type: "p",
        text: "Panik atak sırasında beyin, çevrede gerçek bir tehlike olmasa bile alarm sistemi çalıştırır. Bu alarm yanıtı, otonom sinir sisteminin sempatik kolunu aktive eder; kalp daha hızlı atar, kaslar gerilir, nefes ritmi değişir ve dikkat tehdit algısına kilitlenir.",
      },
      {
        type: "p",
        text: "Danışanlar çoğu zaman bu belirtileri 'bedenim kontrolümden çıkıyor' şeklinde yorumlar. Oysa klinik çerçevede bu tablo, bedenin savaş-kaç hazırlığıdır; kalıcı hasar veren bir biyolojik çöküş değildir.",
      },
      {
        type: "h2",
        text: "Çarpıntı ve Nefes Darlığı Neden Bu Kadar Korkutucudur?",
      },
      {
        type: "h3",
        text: "Çarpıntı: Tehlike Değil, Hızlanmış Alarm",
      },
      {
        type: "p",
        text: "Kalp atımının hızlanması, panik atağın en sık görülen belirtilerinden biridir. Bu hızlanma çoğu zaman kalbin zarar gördüğü anlamına gelmez; bedeni olası kaçışa hazırlayan fizyolojik bir artıştır.",
      },
      {
        type: "h3",
        text: "Nefes Darlığı: Hiperventilasyon Döngüsü",
      },
      {
        type: "p",
        text: "Panik anında kişi daha sık ve yüzeysel nefes almaya başlayabilir. Bu durum göğüste sıkışma, boğulma hissi ve sersemlik yaratabilir; belirtiler tehlikeli görünse de çoğu zaman geçicidir ve alarm sistemi sakinleştikçe azalır.",
      },
      {
        type: "h2",
        text: "Panik Atağı Yönetmek Neden Mümkündür?",
      },
      {
        type: "p",
        text: "Panik atağı anlamlandırmak, korku döngüsünü kırmanın ilk adımıdır. [Panik atak terapisi](/hizmetler/panik-atak-terapisi-bursa) ve [anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa) süreçlerinde hem bedensel belirtiler hem de felaketleştiren düşünceler birlikte ele alınır.",
      },
      {
        type: "callout",
        text: "Eğer ataklarınız tekrarlıyor ve günlük yaşamınızı kısıtlıyorsa, [bireysel terapi](/bireysel-terapi) planı oluşturmak belirtilerin şiddetini ve sıklığını belirgin biçimde azaltabilir.",
      },
    ],
    faq: [
      {
        question: "Panik atak kalp krizine dönüşür mü?",
        answer:
          "Panik atak belirtileri kalp krizine benzeyebilir; ancak panik atak tek başına kalp krizine dönüşen bir tablo değildir. Şüpheli tıbbi durumlar hekim tarafından ayrıca değerlendirilmelidir.",
      },
      {
        question: "Panik atakta nefes darlığı neden olur?",
        answer:
          "Nefes ritminin bozulması ve hiperventilasyon, panik atakta nefes darlığı hissini artırır. Alarm sistemi sakinleştikçe bu his genellikle azalır.",
      },
    ],
  },
  {
    slug: "panik-atak-omur-boyu-surer-mi",
    question: "Panik atak ömür boyu sürer mi?",
    directAnswer:
      "Panik atak ömür boyu sürmek zorunda değildir. Panik bozukluk, doğru psikoterapi ve düzenli takip ile büyük ölçüde kontrol altına alınabilen bir klinik tablodur. Erken müdahale, kaçınma davranışlarının kalıcı hale gelmesini önlediği için iyileşme sürecini hızlandırır.",
    excerpt:
      "Panik atak kalıcı ve iyileşmez bir hastalık değildir; BDT, EMDR ve profesyonel destekle belirtiler yönetilebilir, atak döngüsü kırılabilir.",
    date: "9 Temmuz 2026",
    dateISO: "2026-07-09",
    metaTitle: "Panik Atak Ömür Boyu Sürer mi? Tedavi ve İyileşme Süreci",
    metaDescription:
      "Panik atak ömür boyu sürer mi sorusuna klinik yanıt: Panik bozukluk kalıcı beyin hasarı değildir. BDT, EMDR ve profesyonel destekle etkili şekilde kontrol altına alınabilir.",
    keywords: [
      "panik atak ömür boyu sürer mi",
      "panik atak geçer mi",
      "bdt panik atak",
      "emdr panik atak",
      "bursa psikolog panik atak",
    ],
    content: [
      {
        type: "h2",
        text: "Panik Atak Kalıcı Bir Hasar Bırakır mı?",
      },
      {
        type: "p",
        text: "Panik atak, kalıcı bir beyin hasarı tablosu değildir. Daha çok öğrenilmiş korku döngüsü, bedensel duyumlara aşırı alarm tepkisi ve kaçınma davranışları üzerinden devam eden bir süreçtir.",
      },
      {
        type: "p",
        text: "Bu nedenle doğru müdahale ile döngü değiştirilebilir. Kişi belirtileri yorumlama biçimini, bedensel regülasyon becerisini ve kaçınma örüntülerini yeniden yapılandırdığında panik atağın yaşam üzerindeki etkisi belirgin biçimde azalır.",
      },
      {
        type: "h2",
        text: "Hangi Terapi Yaklaşımları Etkilidir?",
      },
      {
        type: "h3",
        text: "BDT ile Korku-Yorum Döngüsünü Kırmak",
      },
      {
        type: "p",
        text: "Bilişsel Davranışçı Terapi (BDT), panik belirtilerini felaketleştirme eğilimini hedefler ve davranışsal kaçınmaları azaltır. Böylece atak korkusu giderek zayıflar.",
      },
      {
        type: "h3",
        text: "EMDR ile Tetikleyici Ağların Düzenlenmesi",
      },
      {
        type: "p",
        text: "Bazı danışanlarda panik döngüsü geçmiş stres deneyimleriyle bağlantılı olabilir. Bu durumda [EMDR terapisi](/hizmetler/emdr-terapisi-bursa), tetikleyici yükü azaltmada önemli bir destek sunabilir.",
      },
      {
        type: "h2",
        text: "İyileşme Süreci Nasıl Sürdürülebilir Olur?",
      },
      {
        type: "ul",
        items: [
          "Belirti geldiğinde felaket senaryosu yerine fizyolojik açıklamayı hatırlamak.",
          "Kaçınma davranışlarını adım adım azaltmak.",
          "Düzenli terapi takibiyle kazanımları günlük yaşama taşımak.",
          "[Ana sayfadaki](/) iletişim kanalları üzerinden profesyonel destek planını ertelememek.",
        ],
      },
    ],
    faq: [
      {
        question: "Panik atak tamamen geçer mi?",
        answer:
          "Birçok danışanda panik belirtileri belirgin ölçüde azalır ve yaşam kalitesi yükselir. Düzenli terapi ve davranışsal uygulamalar sürecin kalıcılığını artırır.",
      },
      {
        question: "Panik atak ilaçsız düzelir mi?",
        answer:
          "Bazı danışanlarda psikoterapiyle güçlü ilerleme mümkündür. Uygun yaklaşım kişiye göre değerlendirilir; gerekli durumlarda psikiyatri desteği de planlanabilir.",
      },
    ],
  },
  {
    slug: "panik-atak-tedavi-edilmezse-ne-olur",
    question: "Panik atak tedavi edilmezse ne olur?",
    directAnswer:
      "Panik atak tedavi edilmediğinde, atakların kendisinden çok kaçınma davranışları büyür ve yaşam alanı daralır. Kişi önce belirli ortamlardan uzak durur, sonra güvenli alanını giderek küçültür. Bu süreç ilerlediğinde sosyal, mesleki ve aile içi işlevsellikte belirgin kayıp oluşabilir.",
    excerpt:
      "Tedavi edilmeyen panik atakta kaçınma davranışları kronikleşebilir, yaşam alanı mahalleden eve ve odaya kadar daralabilir; agorafobik örüntü gelişebilir.",
    date: "9 Temmuz 2026",
    dateISO: "2026-07-09",
    metaTitle: "Panik Atak Tedavi Edilmezse Ne Olur? Agorafobi Riski",
    metaDescription:
      "Panik atak tedavi edilmezse kaçınma davranışları büyür ve yaşam alanı daralır. Klinik gözlemle mahalle-ev-oda daralması ve agorafobiye dönüşüm süreci.",
    keywords: [
      "panik atak tedavi edilmezse ne olur",
      "panik atak agorafobi",
      "kaçınma davranışı",
      "panik atak terapi",
      "bursa panik atak psikolog",
    ],
    content: [
      {
        type: "h2",
        text: "Tedavisiz Panik Atakta Asıl Risk Nedir?",
      },
      {
        type: "p",
        text: "Tedavi edilmeyen panik atakta temel risk, atağın şiddetinden çok kişinin yaşamını daraltan korunma stratejileridir. Kişi, yeni bir atak yaşama ihtimalini azaltmak için ortamlardan kaçınmaya başlar; kısa vadede rahatlama sağlasa da uzun vadede korku öğrenmesini güçlendirir.",
      },
      {
        type: "p",
        text: "Bu döngü devam ettikçe zihin, 'tehlike yokken de tehlike var' varsayımıyla çalışır. Sonuç olarak güvenli alan giderek küçülür ve gündelik işlevsellik ciddi biçimde düşer.",
      },
      {
        type: "h2",
        text: "Klinik Gözlem / Vaka İncelemesi",
      },
      {
        type: "p",
        text: "Bir danışanım, panik atak nedeniyle tedaviye uzun süre başlamayı reddetmişti ve sürecin gerektirdiği iradeyi göstermekte zorlanıyordu. Yıllar içinde korunma davranışları kademeli olarak arttı: önce uzak mahallelere gitmekten korkmaya başladı, ardından evinden çıkamaz hale geldi, daha sonra ise kendi odasının dışına çıkmakta zorlandı.",
      },
      {
        type: "p",
        text: "Bu kronolojik daralma, panik atağın yalnızca anlık bir korku değil, tedavisiz kaldığında çevreyi giderek tehdit olarak kodlayan bir öğrenme döngüsüne dönüşebildiğini gösterir. Zihin, tehdit yokken ortaya çıkan korkuyu açıklamak için çevrede tehdit arar; zamanla aslında güvenli olan alanları da riskli olarak etiketleyebilir.",
      },
      {
        type: "h3",
        text: "Agorafobiye Dönüşümün Psikolojik Zemini",
      },
      {
        type: "p",
        text: "Kişi 'atak gelirse çıkamam, yardım alamam' düşüncesiyle belirli yerlerden uzak durdukça agorafobik örüntü güçlenir. Kaçınma davranışı her seferinde kısa süreli rahatlama sağladığı için tekrar edilir ve korku ağı daha da pekişir.",
      },
      {
        type: "callout",
        text: "Erken dönemde [panik atak terapisi](/hizmetler/panik-atak-terapisi-bursa) desteği almak, kaçınma zincirini kırmak ve yaşam alanını yeniden genişletmek açısından kritik bir adımdır.",
      },
    ],
    faq: [
      {
        question: "Panik atak tedavi edilmezse agorafobi gelişir mi?",
        answer:
          "Her danışanda aynı şekilde ilerlemez; ancak uzun süreli kaçınma davranışları agorafobik örüntü riskini artırabilir. Erken müdahale bu riski azaltır.",
      },
      {
        question: "Kaçınma davranışı neden panik atağı artırır?",
        answer:
          "Kaçınma kısa vadede rahatlatır ama uzun vadede beynin o ortamı tehlikeli öğrenmesine yol açar. Böylece korku döngüsü güçlenir.",
      },
    ],
  },
  {
    slug: "panik-atak-tansiyonu-neden-yukseltir",
    question: "Panik atak tansiyonu neden yükseltir?",
    directAnswer:
      "Panik atakta tansiyonun yükselmesi, bedenin savaş-kaç alarmı sırasında adrenalin ve sempatik aktivitenin artmasıyla ilişkilidir. Bu yükselme çoğu zaman atak anına özgü ve geçicidir. Kişi kendini güvende hissettiğinde, fizyolojik aktivasyon da düşer ve ölçümler normale yaklaşır.",
    excerpt:
      "Panik atakta tansiyon artışı genellikle geçici bir alarm yanıtıdır. Evde yüksek, hastanede daha düşük ölçüm farkı güvenlik algısı ve fizyolojik sakinleşme ile açıklanabilir.",
    date: "9 Temmuz 2026",
    dateISO: "2026-07-09",
    metaTitle: "Panik Atak Tansiyonu Neden Yükseltir? Ev-Hastane Farkı",
    metaDescription:
      "Panik atakta tansiyon neden yükselir? Savaş-kaç mekanizması, adrenalin salınımı ve güvenli alan algısıyla evde yüksek, hastanede düşük ölçüm farkını klinik olarak açıklıyoruz.",
    keywords: [
      "panik atak tansiyonu yükseltir mi",
      "panik atak yüksek tansiyon",
      "savaş kaç mekanizması",
      "adrenalin ve tansiyon",
      "panik atak belirtileri",
    ],
    content: [
      {
        type: "h2",
        text: "Savaş veya Kaç Mekanizması Tansiyonu Nasıl Etkiler?",
      },
      {
        type: "p",
        text: "Panik atak sırasında beyin tehdidi gerçek kabul ettiği için beden savaş-kaç moduna geçer. Bu sırada adrenalin düzeyi yükselir, kalp hızı artar ve damar sistemi kısa süreli bir alarm yanıtı verir; bu da tansiyon ölçümlerine yansıyabilir.",
      },
      {
        type: "p",
        text: "Buradaki kritik nokta, ölçümün çoğunlukla atak anındaki fizyolojik aktivasyonu göstermesidir. Kişi sakinleştiğinde sempatik aktivite azalır ve değerler düşebilir.",
      },
      {
        type: "h2",
        text: "Klinik Gözlem / Vaka İncelemesi",
      },
      {
        type: "p",
        text: "Bir danışanım, panik atak yaşadığı sırada evde ölçtüğü tansiyonun yüksek çıkması nedeniyle kendisini kalıcı hipertansiyon hastası sanıyordu. Seans sırasında şu ikilemi ifade etmişti: 'Evde ölçüyorum yüksek çıkıyor, hemen hastaneye gidiyorum; onlar ölçünce düşük çıkıyor. Bu neden oluyor?'",
      },
      {
        type: "p",
        text: "Bu tabloyu açıklayan temel dinamik şuydu: evde ölçüm, panik anındaki yükselmiş nabız ve korku eşliğinde yapıldığı için değerler artıyordu; hastaneye ulaştığında ise danışan kendisini daha güvende hissediyor, fizyolojik alarm seviyesi düşüyor ve ölçüm de buna paralel olarak daha düşük çıkıyordu.",
      },
      {
        type: "h3",
        text: "Güvenli Alan Algısının Fizyolojik Etkisi",
      },
      {
        type: "p",
        text: "Kişinin 'yardım alabilirim' algısı güçlendiğinde, bedenin alarm sistemi de daha hızlı regüle olur. Bu nedenle [panik atak belirtileri](/makale/panik-atak-belirtileri) doğru okunmalı ve sadece atak anındaki ölçümlere dayanarak kalıcı yargılar oluşturulmamalıdır.",
      },
    ],
    faq: [
      {
        question: "Panik atakta tansiyon yüksekliği kalıcı mıdır?",
        answer:
          "Panik atak sırasında görülen tansiyon artışı çoğu zaman geçicidir ve alarm yanıtıyla ilişkilidir. Klinik değerlendirme, tabloyu doğru ayırt etmek için önemlidir.",
      },
      {
        question: "Neden evde yüksek, hastanede düşük çıkabilir?",
        answer:
          "Atak anında evde ölçüm daha yüksek olabilir; hastanede güvenlik algısı arttığında sempatik aktivite düşer ve ölçüm normalleşebilir.",
      },
    ],
  },
  {
    slug: "panik-atak-zayiflatir-mi",
    question: "Panik atak zayıflatır mı?",
    directAnswer:
      "Panik atak tek başına doğrudan bir 'zayıflama yöntemi' değildir; ancak yoğun stres dönemlerinde iştahın kapanması ve yemek düzeninin bozulması nedeniyle geçici kilo kaybı görülebilir. Bu değişim sağlıklı bir kilo yönetimi değil, stres yanıtının bedensel yansımasıdır. Süreç uzarsa beslenme düzeni ve genel iyilik hali olumsuz etkilenebilir.",
    excerpt:
      "Panik atakta iştah azalması ve mide-bağırsak sistemi etkilenmesi nedeniyle geçici kilo kaybı olabilir; bu durum sağlıklı zayıflama değil stres yanıtıdır.",
    date: "9 Temmuz 2026",
    dateISO: "2026-07-09",
    metaTitle: "Panik Atak Zayıflatır mı? İştah ve Mide-Bağırsak Aksı",
    metaDescription:
      "Panik atak zayıflatır mı sorusunu klinik açıdan açıklıyoruz: stresin mide-bağırsak aksına etkisi, iştah kapanması ve karın ağrısı nedeniyle yemek reddi nasıl gelişir?",
    keywords: [
      "panik atak zayıflatır mı",
      "panik atak iştah kaybı",
      "stres karın ağrısı yemek yiyememe",
      "mide bağırsak aksı",
      "anksiyete ve kilo kaybı",
    ],
    content: [
      {
        type: "h2",
        text: "Stres, İştahı ve Sindirimi Neden Bozar?",
      },
      {
        type: "p",
        text: "Yoğun kaygı anlarında beden, hayatta kalma önceliğiyle çalışır ve sindirim sistemi ikinci plana itilebilir. Bu nedenle mide-bağırsak aksında hassasiyet, karın ağrısı, bulantı hissi ve iştah azalması görülebilir.",
      },
      {
        type: "p",
        text: "Kişi bu belirtileri sık yaşadığında öğün atlama veya yemek yemeyi erteleme davranışı gelişebilir. Bu da kısa dönemde kilo kaybına yol açabilir; ancak klinik açıdan bu, sağlıklı bir zayıflama değil stres temelli bir düzensizliktir.",
      },
      {
        type: "h2",
        text: "Klinik Gözlem / Vaka İncelemesi",
      },
      {
        type: "p",
        text: "Panik atak yaşayan birçok danışanım, stresin yoğunlaştığı dönemlerde karın ağrısı nedeniyle yemek yemeyi reddettiklerini ifade etmiştir. Bu anlatım, iştah kapanmasının sadece psikolojik bir 'isteksizlik' değil, bedensel stres yanıtıyla ilişkili olduğunu göstermektedir.",
      },
      {
        type: "h3",
        text: "Ne Zaman Destek Alınmalı?",
      },
      {
        type: "ul",
        items: [
          "Yemek düzeni belirgin biçimde bozulduysa",
          "Kilo kaybı kontrolsüz ilerliyorsa",
          "Karın ağrısı ve kaygı döngüsü birbirini besliyorsa",
          "[Anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa) veya [bireysel terapi](/bireysel-terapi) ile süreci yapılandırmak gerekiyorsa",
        ],
      },
      {
        type: "callout",
        text: "Panik atak ve iştah sorunları birlikte ilerlediğinde, erken dönemde profesyonel destek almak hem bedensel hem psikolojik toparlanmayı hızlandırır.",
      },
    ],
    faq: [
      {
        question: "Panik atak iştahı tamamen kapatır mı?",
        answer:
          "Her danışanda aynı düzeyde olmaz; ancak yoğun stres dönemlerinde iştah belirgin biçimde azalabilir ve öğün düzeni bozulabilir.",
      },
      {
        question: "Panik atak nedeniyle kilo kaybı normal midir?",
        answer:
          "Geçici kilo kaybı görülebilir; bu genellikle stres yanıtının sonucudur. Süreç uzarsa klinik destek almak önemlidir.",
      },
    ],
  },
] as const;

export function getQuestionAnswerBySlug(slug: string): QuestionAnswerItem | undefined {
  return questionAnswers.find((item) => item.slug === slug);
}

export function pickDailyQuestionAnswers(
  count: number,
  seed = new Date().toISOString().slice(0, 10)
): QuestionAnswerItem[] {
  return pickFeaturedArticles(questionAnswers, count, seed);
}
