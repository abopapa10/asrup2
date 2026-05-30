import type { ArticleBlock } from "@/lib/article-types";

export const stresVeTukenmislikAnaliziArticleBlocks: readonly ArticleBlock[] = [
  {
    type: "p",
    text: "Stres ve tükenmişlik, modern yaşamın en sık karşılaşılan ruhsal ve bedensel yük deneyimleridir; ancak ikisi sıklıkla birbirinin yerine kullanılır. Klinik psikoloji perspektifinden stres, bireyin çevresel taleplerle baş etme kapasitesi arasındaki algılanan uyumsuzluğa verilen bilişsel, duygusal ve fizyolojik yanıt bütünüdür. Tükenmişlik (burnout) ise özellikle kronik iş veya bakım yükü bağlamında gelişen, kaynakların tükenmesi ve anlamın aşınmasıyla karakterize edilen mesleki bir sendromdur. Bu makale, stresin akut ve kronik fizyolojisinden Maslach tükenmişlik modeline, stres ile tükenmişlik arasındaki klinik ayrıma, belirti profillerine ve kanıta dayalı müdahalelere kadar bütüncül bir çerçeve sunmaktadır.",
  },
  {
    type: "p",
    text: "Okuyucuların [stres ve tükenmişlik testi](#stress-burnout-test) gibi öz-değerlendirme araçlarını — örneğin Algılanan Stres Ölçeği (PSS) benzeri kısa taramaları — bilimsel sınırları içinde kullanabilmesi; belirtiler yoğunlaştığında yalnızca öz yardım tekniklerine güvenmek yerine [bireysel terapi](/bireysel-terapi) ve gerektiğinde [anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa) veya [depresyon terapisi](/hizmetler/depresyon-terapisi-bursa) süreçlerine başvurabileceğini görmesi amaçlanmaktadır. Aşağıdaki bilgiler genel psikoloji bilgilendirmesi niteliğindedir.",
  },
  {
    type: "callout",
    text: "Klinik etik notu: Bu içerik tanı koyma aracı değildir. Stres ve tükenmişlik öz-bildirim ölçekleri veya çevrimiçi testler, major depresyon, anksiyete bozuklukları veya tükenmişlik sendromu tanısının yerini tutamaz. Ruhsal sağlık değerlendirmesi yalnızca eğitimli klinik psikolog veya psikiyatristler tarafından yapılandırılmış görüşme ve geçerli klinik ölçeklerle yapılmalıdır.",
  },

  {
    type: "h2",
    text: "Stres Nedir? Akut ve Kronik Stresin Fizyolojisi",
  },
  {
    type: "p",
    text: "Stres kavramının bilimsel kökeni, Hans Selye'nin (1936, 1956) Genel Uyum Sendromu (General Adaptation Syndrome, GAS) çerçevesine dayanır. Selye, organizmanın her türlü aşınma etkenine benzer bir üç aşamalı yanıt verdiğini öne sürmüştür: alarm (alarm reaction), direnç (stage of resistance) ve tükenme (stage of exhaustion). Alarm aşamasında hipotalamus-hipofiz-adrenal (HPA) ekseni aktive olur; hipotalamus kortikotropin salgılatıcı hormon (CRH) salgılar, hipofiz ACTH üretir ve adrenal bezler kortizol salınımını artırır. Eşzamanlı olarak sempatik sinir sistemi adrenalin (epinefrin) ve noradrenalin salınımını hızlandırır; bu birleşik yanıt, savaş-kaç-teslim ol (fight-flight-freeze) refleksinin fizyolojik altyapısını oluşturur.",
  },
  {
    type: "p",
    text: "Akut stres, kısa süreli ve belirgin bir tetikleyiciye (sınav, sunum, trafik kazası tehdidi, ani iş baskısı) verilen yanıttır. Bu bağlamda kortizol ve adrenalin salınımı odaklanmayı artırır, glukoz mobilizasyonunu hızlandırır, kalp atım hızını yükseltir ve kas tonusunu güçlendirir; organizma tehdit veya taleple baş etmek için enerji ve dikkat kaynağını geçici olarak yoğunlaştırır. Akut stres sona erdiğinde — tetikleyici ortadan kalktığında veya baş etme stratejisi devreye girdiğinde — parasempatik sinir sistemi devreye girer; kalp hızı yavaşlar, solunum derinleşir ve HPA ekseni geri çekilme (recovery) moduna geçer. Bu döngü, evrimsel açıdan işlevseldir ve kısa vadede performansı destekleyebilir. Sorun, stresörün sık sık tekrarlanması ve toparlanma penceresinin kapanmasıdır; bu noktada akut yanıt kronik yük haline dönüşür.",
  },
  {
    type: "p",
    text: "Kronik stres ise stresörün sürekli veya sık tekrarlanması, toparlanma fırsatının kısıtlanması ve bireyin kaynaklarının (zaman, sosyal destek, uyku, ekonomik güvenlik) yetersiz kalması durumunda ortaya çıkar. Bruce McEwen (1998, 2007), kronik stresin 'allostatic load' (allostatik yük) yarattığını vurgulamıştır: beden tehdidi ortadan kalkmadan sürekli uyum çabası gösterdiğinde, HPA ekseni hiperaktivasyon ve ardından kortizol disregülasyonu gelişebilir. Robert Sapolsky (2004), kronik yüksek kortizol düzeylerinin hipokampusta bellek süreçlerini, bağışıklık sistemini ve kardiyovasküler sağlığı olumsuz etkilediğini; özellikle kontrolsüzlük ve öngörülemezlik algısının stres yanıtını şiddetlendirdiğini kapsamlı biçimde özetlemiştir.",
  },
  {
    type: "p",
    text: "Richard Lazarus ve Susan Folkman'ın (1984) bilişsel değerlendirme (cognitive appraisal) modeli, stresin yalnızca olayın kendisinden değil, bireyin olayı birincil değerlendirmede (bu benim için tehdit mi, kayıp mı, meydan okuma mı?) ve ikincil değerlendirmede (baş etme kaynaklarım yeterli mi?) nasıl yorumladığından kaynaklandığını vurgular. Aynı iş yükü, bir birey için yönetilebilir bir meydan okuma iken başka bir birey için bunaltıcı tehdit olabilir; bu ayrım, stres müdahalelerinde yalnızca çevresel stresörü azaltmanın yeterli olmayabileceğini, bilişsel ve kaynak temelli müdahalelerin de gerekli olduğunu gösterir.",
  },
  {
    type: "ul",
    items: [
      "Selye GAS: Alarm → direnç → tükenme; kronik stresde üçüncü aşamaya yaklaşma riski.",
      "HPA ekseni: CRH–ACTH–kortizol zinciri; kronik aktivasyonda allostatik yük (McEwen).",
      "Sempatik aktivasyon: Adrenalin/noradrenalin; savaş-kaç-teslim ol refleksi (Sapolsky).",
      "Akut stres: Kısa süreli, işlevsel mobilizasyon; toparlanma ile geri dönüş.",
      "Kronik stres: Süregelen yük, kortizol disregülasyonu, bağışıklık ve uyku etkileri.",
      "Lazarus–Folkman: Birincil ve ikincil değerlendirme; öznel stres algısı.",
      "Algılanan Stres Ölçeği (PSS, Cohen et al.): Son bir ayda yaşanan stresin öznel algısı; araştırma ve tarama aracı.",
    ],
  },

  {
    type: "h2",
    text: "Modern Dünyanın Pandemisi: Tükenmişlik Sendromu (Burnout) Nedir?",
  },
  {
    type: "p",
    text: "Tükenmişlik sendromu, Christina Maslach ve meslektaşlarının (1981, 1996) yıllar süren mesleki tükenme araştırmalarıyla tanımlanan, özellikle insanlara yönelik hizmet ve bakım mesleklerinde — ancak günümüzde beyaz yaka, eğitim, sağlık ve teknoloji sektörlerinde de yaygın — görülen kronik iş stresi yanıtıdır. Maslach Tükenmişlik Envanteri (MBI), tükenmişliği üç boyutta ölçer: duygusal tükenme (emotional exhaustion) — duygusal kaynakların tamamen boşalması hissi; duyarsızlaşma veya depersonalizasyon (depersonalization / cynicism) — işe, müşterilere veya meslektaşlara karşı mesafe, sinizm ve duygusal soğuma; kişisel başarı veya yeterlilik hissinde azalma (reduced personal accomplishment) — yetkinlik ve anlam inancının aşınması.",
  },
  {
    type: "p",
    text: "Maslach ve Leiter (2016), tükenmişliğin gelişiminde iş yükü, kontrol, ödül, topluluk, adalet ve değerler uyumu gibi altı iş alanı faktörünün rol oynadığını vurgulamıştır. Yüksek talep + düşük kontrol + yetersiz ödül + zayıf destek + algılanan adaletsizlik + değer çatışması kombinasyonu, tükenmişlik riskini belirgin biçimde artırır. Bu model, tükenmişliği bireysel 'zayıflık' olarak değil, kişi–çevre etkileşiminin ürünü olarak konumlandırır; müdahalelerin yalnızca bireysel başa çıkmayı değil, kurumsal ve yapısal düzenlemeleri de kapsaması gerektiğini hatırlatır.",
  },
  {
    type: "p",
    text: "Tükenmişlik evreleri literatürde farklı aşama modelleriyle tanımlanmıştır. Erken evrede yorgunluk, uyku bozukluğu ve motivasyon dalgalanmaları görülür; orta evrede duygusal tükenme belirginleşir, işe karşı sinizm ve mesafe artar; ileri evrede kişisel başarı inancı çöker, depresif örüntüler, somatik şikâyetler ve işten uzaklaşma (presenteeism veya tam çekilme) sıklaşır. Dünya Sağlık Örgütü (WHO, 2019; ICD-11), tükenmişliği 'iş yerinde kronik stresin yönetilememesi sonucu ortaya çıkan bir sendrom' olarak sınıflandırmış; duygusal tükenme, işe karşı olumsuz tutum ve mesleki etkinlikte azalma boyutlarını vurgulamıştır. WHO tanımı, tükenmişliği depresyon veya anksiyete bozukluğu olarak kodlamaz; klinik ayrım önemlidir.",
  },
  {
    type: "p",
    text: "Tükenmişlik ile depresyon arasında örtüşme yüksektir; ancak tükenmişlik bağlamı öncelikle iş veya rolle sınırlıdırken, major depresyon yaşamın çoğu alanına yayılır. Tükenmişlikte umutsuzluk sıklıkla 'işe ve kuruma' yöneliktir; depresyonda ise genelleşmiş değersizlik ve özsuçluluk daha belirgindir. Klinik değerlendirmede bu ayrım, tedavi hedeflerinin (iş değişikliği, sınır koyma, bilişsel yeniden yapılandırma, farmakolojik destek gerekliliği) doğru belirlenmesi için kritiktir.",
  },
  {
    type: "ul",
    items: [
      "Maslach üç boyut: Duygusal tükenme, duyarsızlaşma/sinizm, kişisel başarıda azalma.",
      "MBI: Mesleki tükenmişliğin standart ölçüm aracı; klinik ve araştırma kullanımı.",
      "Evreler: Erken yorgunluk → duygusal tükenme ve sinizm → yeterlilik çöküşü ve çekilme.",
      "WHO ICD-11: Mesleki sendrom; kronik iş stresi yönetilememesi; depresyon tanısı değil.",
      "İş alanı faktörleri: Talep, kontrol, ödül, topluluk, adalet, değerler (Maslach–Leiter).",
      "Depresyonla örtüşme: Klinik görüşme ile ayrım; bağlama duyarlı müdahale planı.",
    ],
  },

  {
    type: "callout",
    text: "Acil durum ve kriz kaynakları: Kendinize veya başkasına zarar verme, intihar düşüncesi veya kontrol kaybı hissi yaşıyorsanız derhal 112'yi arayın veya en yakın acil servise başvurun. Türkiye'de 182 İntihar Önleme Hattı ve 183 SABIM sosyal destek hatları 7/24 hizmet vermektedir. Tükenmişlik ve kronik stres yoğun olsa bile bu durumlar acil psikiyatrik değerlendirme gerektirebilir; yalnızca internet kaynaklarına güvenmeyin.",
  },

  {
    type: "h2",
    text: "Stres ile Tükenmişlik Arasındaki Farklar Nelerdir?",
  },
  {
    type: "p",
    text: "Stres ve tükenmişlik klinik olarak ilişkili ancak aynı kavram değildir. Stres, her bireyin yaşamında periyodik olarak deneylediği genel bir uyum baskısıdır; süresi, şiddeti ve bağlamı değişkenlik gösterir. Tükenmişlik ise stresin özellikle mesleki veya rol temelli kronik birikiminin belirli bir sendrom düzeyine ulaşmasıdır. Metaforik olarak stres 'yük taşıma' deneyimidir; tükenmişlik ise yükün uzun süre taşınması sonucu taşıyıcının kendisinin aşınması ve anlamının sönmesidir.",
  },
  {
    type: "p",
    text: "Zaman boyutu açısından akut stres saatler veya günler içinde yükselip düşebilir; kronik stres haftalar ve aylar sürer. Tükenmişlik tipik olarak aylar ve yıllar içinde kümülatif olarak gelişir; tek bir yoğun proje sonrası birkaç günlük yorgunluk tükenmişlik tanısı için yeterli değildir. Bağlam açısından stres ev, sağlık, ekonomi, ilişki ve iş alanlarının herhangi birinde ortaya çıkabilir; tükenmişlik tanımı iş (veya benzeri rol) merkezlidir — öğrenci tükenmişliği, ebeveyn tükenmişliği literatürde ayrı kavramlar olarak ele alınır.",
  },
  {
    type: "p",
    text: "Duygusal profil farklılık gösterir. Akut stres altında kaygı, gerginlik ve hiper-uyarılma ön plandadır. Tükenmişlikte ise duygusal tükenme (boşalma), duyarsızlaşma (ilgisizlik, sinizm) ve umutsuzluk üçlüsü baskındır; başlangıçtaki aşırı çaba ve mükemmeliyetçilik, ilerleyen evrelerde çekilme ve işlev kaybına dönüşebilir. Fizyolojik olarak her ikisi de HPA ekseni ve sempatik aktivasyonu içerir; ancak tükenmişlikte kronik kortizol yükü, immun baskılanma ve nöroendokrin yıpranma (McEwen, Sapolsky) daha belirgindir.",
  },
  {
    type: "p",
    text: "Ölçüm açısından Cohen ve arkadaşlarının Algılanan Stres Ölçeği (PSS; 1983, 1994) genel stres algısını değerlendirir; 'son bir ayda hayatınız ne kadar öngörülemez ve kontrol edilemez hissettirdi?' gibi maddeler içerir. Maslach Burnout Inventory (MBI) ise mesleki tükenmişliğe özgüdür. Klinisyen, danışanın şikâyetlerini yalnızca PSS yüksekliğiyle açıklamaz; iş bağlamı, duyarsızlaşma ve yeterlilik inancı ayrıca sorgulanır. [Stres ve tükenmişlik testi](#stress-burnout-test) gibi birleşik öz-değerlendirme araçları farkındalık sağlayabilir; ancak tanısal karar yalnızca yapılandırılmış klinik görüşmeyle verilir.",
  },
  {
    type: "ul",
    items: [
      "Stres: Genel uyum baskısı; akut veya kronik; çoklu yaşam alanları.",
      "Tükenmişlik: Kronik rol/iş yükü sendromu; Maslach üç boyut; WHO mesleki çerçeve.",
      "Süre: Stres dalgalı; tükenmişlik kümülatif ve uzun süreli.",
      "Duygu: Stresde kaygı/gerginlik; tükenmişlikte boşalma, sinizm, yetersizlik.",
      "PSS vs. MBI: Genel algılanan stres vs. mesleki tükenmişlik ölçümü.",
      "Klinik ayrım: Depresyon, anksiyete ve somatizasyon ile birlikte değerlendirme zorunlu.",
    ],
  },

  {
    type: "h2",
    text: "Kronik Stres ve Tükenmişliğin Belirtileri: Fiziksel, Zihinsel ve Davranışsal Sinyaller",
  },
  {
    type: "p",
    text: "Kronik stres ve tükenmişlik, beden ve zihin düzeyinde örtüşen ancak ağırlık merkezleri farklı belirti kümeleri üretir. Fiziksel düzeyde en sık raporlananlar: kronik yorgunluk (dinlenmeye rağmen geçmeyen bitkinlik), uyku bozuklukları (uykuya dalamama, gece uyanmaları, erken sabah uyanışı), baş ve boyun ağrıları, kas gerginliği, sindirim şikâyetleri (mide yanması, irritabl bağırsak benzeri örüntüler), sık enfeksiyonlar (bağışıklık baskılanması), çarpıntı ve nefes darlığı hissi (anksiyete ile birlikte), libido azalması ve adet düzensizlikleri (kadınlarda) görülebilir. Sapolsky ve McEwen'in vurguladığı allostatik yük, bu somatik tablonun nörobiyolojik açıklamasını sunar.",
  },
  {
    type: "p",
    text: "Zihinsel ve duygusal belirtiler arasında konsantrasyon güçlüğü, unutkanlık, karar vermede zorlanma, irritabilite, duygusal dalgalanma veya duygusal küntlük (numbing), yoğun kaygı, umutsuzluk, suçluluk ve değersizlik hisleri sayılabilir. Tükenmişlikte özellikle işe karşı anlamsızlık ('artık hiçbir şeyin anlamı yok'), başkalarına karşı duygusal mesafe ve kendi yetkinliğine dair çöküş dikkat çeker. Depresyon spektrumunda olan belirtiler — özellikle genelleşmiş umutsuzluk, intihar düşüncesi, belirgin kilo ve uyku değişimi — [depresyon terapisi](/hizmetler/depresyon-terapisi-bursa) değerlendirmesi gerektirebilir; stres veya tükenmişlik ile karıştırılmamalıdır.",
  },
  {
    type: "p",
    text: "Davranışsal düzeyde erteleme, iş performansında düşüş, absenteeism (devamsızlık) ve presenteeism (işte fiziksel olarak bulunup zihinsel olarak uzak kalma), artan madde kullanımı (kafein, alkol, yemek), sosyal çekilme, hobilerden vazgeçme, aile ve ilişkilerde çatışma veya tamamen kapanma sık görülür. Tükenmiş bireyler bazen aşırı çalışma (overwork) ile erteleme arasında gidip gelir: bir dönem kontrolü kaybetmemek için daha fazla mesai, ardından tükenme nedeniyle tamamen durma. Bu döngü, [bireysel terapi](/bireysel-terapi) sürecinde davranışsal hedefler ve sınır koyma becerileriyle ele alınır.",
  },
  {
    type: "p",
    text: "Anksiyete bozuklukları ile örtüşme yaygındır: sürekli endişe, bedensel gerilim, panik benzeri ataklar kronik stres altında yoğunlaşabilir. Bu tablo [anksiyete terapisi](/hizmetler/anksiyete-terapisi-bursa) kapsamında BDT ve maruz bırakma temelli müdahalelerle ele alınabilir. Belirtilerin en az iki hafta sürmesi, işlevsellikte belirgin bozulma ve birden fazla alanda yayılma, klinik görüşme için güçlü gerekçelerdir.",
  },
  {
    type: "ul",
    items: [
      "Fiziksel: Kronik yorgunluk, uyku bozukluğu, baş-boyun ağrısı, sindirim, sık hastalık.",
      "Zihinsel: Konsantrasyon kaybı, kaygı, umutsuzluk, anlamsızlık, duygusal küntlük.",
      "Davranışsal: Performans düşüşü, çekilme, aşırı çalışma–erteleme döngüsü, madde artışı.",
      "Tükenmişliğe özgü: Sinizm, depersonalizasyon, mesleki yeterlilik inancının çöküşü.",
      "Ayırt edici: Depresyon ve anksiyete bozukluğu belirtileri için ayrı klinik değerlendirme.",
      "Erken müdahale: Belirtiler hafifken destek almak, ileri evre riskini azaltır.",
    ],
  },

  {
    type: "h2",
    text: "Stres Yönetimi Teknikleri ve Tükenmişlikten Kurtulma Yolları: Psikoterapinin Rolü",
  },
  {
    type: "p",
    text: "Stres yönetimi ve tükenmişlikten kurtulma, tek bir teknikle çözülemez; biyolojik regülasyon, bilişsel yeniden yapılandırma, davranışsal sınır koyma ve gerektiğinde profesyonel psikoterapi katmanlarını içeren bütüncül bir plan gerektirir. Aaron Beck'in bilişsel terapi geleneği (Beck, 1979; Beck & Haigh, 2014), stres ve tükenmişlikte işlevsel olmayan inançları ('hiç hayır diyemem', 'dinlenmek tembelliktir', 'değerim performansıma bağlı') sistematik biçimde sorgulamayı hedefler. Bilişsel Davranışçı Terapi (BDT), bu inançları kanıt toplama, bilişsel yeniden yapılandırma ve davranış deneyleriyle test eder; mükemmeliyetçilik ve işlevsel olmayan baş etme şemaları tükenmişlik literatüründe en sık hedeflenen yapılardır.",
  },
  {
    type: "p",
    text: "Davranışsal müdahaleler arasında zaman yönetimi, önceliklendirme, dijital sınırlar (mesai sonrası e-posta kontrolünü sınırlama), mikro molalar ve uyku hijyeni yer alır. Fizyolojik regülasyon için Progressive Kas Gevşetmesi (PMR; Jacobson, 1938) ve yapılandırılmış nefes egzersizleri (diyafragmatik nefes, 4-7-8 ritmi, kutu nefesi) parasempatik aktivasyonu destekler; kalp hızı değişkenliği (HRV) ve kas tonusunda gevşeme ile stres yanıtının sönümlenmesi hedeflenir. Jon Kabat-Zinn'in (1990) Mindfulness-Based Stress Reduction (MBSR) programı, farkındalık temelli stres azaltma için en geniş kanıt tabanına sahip müdahalelerden biridir; otomatik stres tepkisine duraklama (pause) ve duygu kabulü becerileri kazandırır.",
  },
  {
    type: "p",
    text: "Psikoterapinin rolü, öz-bakım listelerinin ötesine geçer. Yapılandırılmış [bireysel terapi](/bireysel-terapi) sürecinde klinisyen, danışanın stres–tükenmişlik öyküsünü, iş ve ilişki bağlamını, birlikte görülen ruhsal bozukluk belirtilerini ve koruyucu faktörleri değerlendirir. Kronik stres altında gelişen major depresyon veya yaygın anksiyete bozukluğu varsa, BDT veya kabul ve kararlılık terapisi (ACT) yanında psikiyatrik konsültasyon gerekebilir. Tükenmişlikte iş değişikliği, ücretli izin, kurumsal destek veya rol yeniden tanımlama gibi yapısal adımlar terapötik hedeflerin parçası olabilir; terapist yalnızca 'daha fazla gevşe' demekle kalmaz, değerler ve sınırlar üzerinde çalışır.",
  },
  {
    type: "p",
    text: "Kanıta dayalı ek yaklaşımlar arasında problem odaklı başa çıkma eğitimi (Lazarus modelinden türeyen müdahaleler), duygu düzenleme becerileri, assertiveness (kendini ifade) training ve grup destek programları sayılabilir. Kurumsal düzeyde tükenmişlik önleme, bireysel tekniklerle sınırlıdır; adil iş yükü, özerklik, anlamlı geri bildirim ve psikolojik güvenlik kültürü Maslach–Leiter çerçevesinde koruyucu faktörlerdir. Birey düzeyinde ise [stres ve tükenmişlik testi](#stress-burnout-test) sonuçları, düzenli öz gözlem ve profesyonel destek kombinasyonu sürdürülebilir iyileşme için en güvenilir yoldur.",
  },
  {
    type: "callout",
    text: "Önemli: Nefes egzersizi, PMR, mindfulness veya çevrimiçi stres testleri tek başına tedavi değildir; şiddetli depresyon, panik bozukluğu, travma sonrası stres veya aktif intihar düşüncesi varsa yalnızca öz yardıma güvenmeyin. Klinik psikolog eşliğinde yapılandırılmış psikoterapi — gerektiğinde psikiyatri iş birliğiyle — tükenmişlik ve kronik stresin altında yatan örüntüleri ele almanın güvenli ve etkili yoludur.",
  },
  {
    type: "ul",
    items: [
      "BDT (Beck): İşlevsel olmayan inançlar, mükemmeliyetçilik, bilişsel yeniden yapılandırma.",
      "PMR ve nefes: Parasempatik aktivasyon; kas gevşetme, HRV desteği.",
      "MBSR (Kabat-Zinn): Farkındalık, stres tepkisine duraklama; kanıta dayalı grup programı.",
      "Davranışsal: Sınır koyma, uyku hijyeni, dijital detoks, problem odaklı başa çıkma.",
      "Psikoterapi: Bireysel değerlendirme, depresyon/anksiyete eşlik eden tablolar, iş bağlamı.",
      "Kurumsal: Talep–kontrol dengesi, anlam ve adalet; bireysel müdahaleyi tamamlar.",
      "İlgili hizmetler: Anksiyete ve depresyon terapisi sayfaları; klinik yönlendirme.",
    ],
  },
  {
    type: "p",
    text: "Sonuç olarak stres, Selye'nin GAS modelinden Lazarus'un bilişsel değerlendirmesine, HPA ekseni ve savaş-kaç yanıtından McEwen ve Sapolsky'nin allostatik yük kavramına kadar geniş bir bilimsel çerçeveye sahiptir. Tükenmişlik, Maslach'ın üç boyutlu modeli ve WHO'nun mesleki sendrom tanımıyla kronik iş stresinin özgül bir sonucudur. PSS genel stres algısını ölçerken MBI mesleki tükenmişliği hedefler; klinik ayrım depresyon ve anksiyete ile birlikte düşünülmelidir. Belirtiler fiziksel, zihinsel ve davranışsal düzeyde birikir; erken fark etmek müdahaleyi kolaylaştırır. BDT, PMR, nefes çalışmaları ve MBSR gibi teknikler destekleyicidir; yapılandırılmış psikoterapi ve gerektiğinde psikiyatri desteği ise sürdürülebilir iyileşmenin temelidir. [Bireysel terapi](/bireysel-terapi) sürecine başlamak, öz-değerlendirme sonuçlarını profesyonel bir çerçevede yorumlamanın en güvenli adımıdır.",
  },

  {
    type: "h3",
    text: "Kaynakça",
  },
  {
    type: "ul",
    items: [
      "Beck, A. T. (1979). Cognitive therapy and the emotional disorders. Penguin.",
      "Cohen, S., Kamarck, T., & Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24(4), 385–396.",
      "Kabat-Zinn, J. (1990). Full catastrophe living: Using the wisdom of your body and mind to face stress, pain, and illness. Delacorte.",
      "Lazarus, R. S., & Folkman, S. (1984). Stress, appraisal, and coping. Springer.",
      "Maslach, C., & Jackson, S. E. (1981). The measurement of experienced burnout. Journal of Organizational Behavior, 2(2), 99–113.",
      "Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: Recent research and its implications for psychiatry. World Psychiatry, 15(2), 103–111. https://doi.org/10.1002/wps.20311",
      "McEwen, B. S. (1998). Stress, adaptation, and disease: Allostasis and allostatic load. Annals of the New York Academy of Sciences, 840(1), 33–44.",
      "Sapolsky, R. M. (2004). Why zebras don't get ulcers (3rd ed.). Henry Holt.",
      "Selye, H. (1956). The stress of life. McGraw-Hill.",
      "World Health Organization. (2019). International Classification of Diseases, 11th Revision (ICD-11). WHO. (QD85 Burnout syndrome of occupational origin)",
    ],
  },
];
