import type { ArticleBlock } from "../article-types";

export const depremArticleMetaTitle =
  "Bursa'da Deprem Anksiyetesi ve Psikolojik Etkileri";

export const depremArticleMetaDescription =
  "Deprem kaygısı, hipervijilans ve travma psikolojisi hakkında klinik bir değerlendirme. Bursa'da anksiyete terapisi, EMDR ve BDT ile psikolojik destek süreçleri.";

export const depremArticleBlocks: readonly ArticleBlock[] = [
  // ─── Giriş ───────────────────────────────────────────────────────────────────
  {
    type: "p",
    text: "Zemin sallandığında insan bedeni ve zihni birkaç saniye içinde tam bir alarm durumuna geçer. Bu tepki binlerce yıllık evrimsel sürecin ürünüdür ve hayatta kalmak için işlevseldir. Ancak deprem geçtikten sonra, hatta hiç deprem yaşanmadan salt haberler ve sosyal medya aracılığıyla da aynı alarm sisteminin uzun süre aktif kalmaya devam ettiğini görmek mümkündür. Bursa'da ve çevresinde yaşayan pek çok kişi, geride bırakılan depremlerin izleriyle ve gelecekte yaşanabilecek olanlara dair derin bir belirsizlikle başa çıkmaya çalışmaktadır. Bu belirsizlik; bazen uyku bozukluğuna, bazen süregelen bir gerginlik haline, bazen de günlük işlevselliği ciddi biçimde etkileyen kaygı örüntülerine dönüşebilir.",
  },
  {
    type: "p",
    text: "Deprem kaygısı başlı başına bir tanı değildir; daha çok bir çerçevedir. Bu çerçevenin içinde travma sonrası stres belirtileri, genelleşmiş anksiyete, özgül fobi, panik bozukluğu veya bunların farklı bileşimleri yer alabilir. Klinik pratikte en çok rastlanan tablo; depremin doğrudan ya da dolaylı biçimde deneyimlenmiş olmasına bağlı olarak süregelen tetikte olma hali, yoğun kaygı dalgaları ve giderek genişleyen kaçınma davranışlarıdır. Bu yazı, söz konusu tablonun psikolojik arka planını anlamayı; hangi tepkilerin normal, hangilerinin klinik değerlendirme gerektirdiğini açıklamayı ve Bursa'da psikolog desteğinin bu süreçte nasıl işlev üstlenebileceğini aktarmayı amaçlamaktadır.",
  },
  {
    type: "p",
    text: "Burada yer alan bilgiler genel psikoloji bilgilendirmesi amacı taşır; bireysel tanı ya da tedavi niteliği taşımaz. Her bireyin deneyimi özgündür ve klinik değerlendirme ancak yüz yüze ya da online bireysel görüşme aracılığıyla mümkündür. Bununla birlikte kaygı belirtilerini tanımak, bunların kaynağını anlamak ve ne zaman destek aranabileceğini bilmek; insanların kendi deneyimlerine daha bilinçli bir gözle bakmasına katkı sağlayabilir.",
  },

  // ─── 1. Depremin Ardından Gelen Normal Tepkiler ──────────────────────────────
  {
    type: "h2",
    text: "Depremin Ardından Gelen Normal Tepkiler",
  },
  {
    type: "p",
    text: "Yaşanan ya da haberi duyulan bir deprem, neredeyse herkeste anlık bir stres tepkisi yaratır. Kalp hızı artar, kaslar gerilir, zihin tehlikeye odaklanır; bu tepkilerin tamamı sağlıklı ve beklenen fizyolojik yanıtlardır. İlk birkaç gün ile haftalarda yaşanan sinirlilik, uyku bozukluğu, gece uyandırıcı rüyalar, sürekli haber takibi, konsantrasyon güçlüğü ve her zemin titremesine aşırı dikkat gösterme gibi belirtiler, psikoloji literatüründe akut stres tepkisi olarak tanımlanır. Bu tepkiler; beynin ve bedenin olağanüstü bir duruma verdiği işlevsel yanıtlardır.",
  },
  {
    type: "p",
    text: "Travma psikolojisi araştırmaları, deprem ya da benzeri afetlerin ardından yaşanan semptomların büyük çoğunluğunun ilk dört ila altı hafta içinde belirgin biçimde azaldığını göstermektedir. Sosyal destek ağının güçlü olması, bilgi erişiminin dengeli kalması ve gündelik rutinlere mümkün olduğunca devam edilmesi bu iyileşme sürecini kolaylaştıran faktörler arasında yer alır. Ancak belirtiler azalmak yerine devam ediyor ya da giderek yoğunlaşıyorsa, bu durum klinikte ciddi biçimde değerlendirmeyi gerektirir.",
  },
  {
    type: "p",
    text: "İlk aşamada neredeyse herkesin yaşadığı bu tepkileri patolojik olmadan anlamlandırmak; hem bireyin kendisine hem de yakınlarına büyük bir rahatlama sağlayabilir. 'Neden bu kadar korkuyorum, neden geçmiyor?' sorusu çoğunlukla gereksiz bir utanç duygusunu da beraberinde getirir. Oysa sinir sisteminizin bu tepkileri sergilemesi, tam olarak olması gereken şeydir. Sorun, bu tepkilerin süre ve yoğunluk olarak normalin çok ötesine taştığı noktada başlar.",
  },

  // ─── 2. Anksiyete ve Travma Psikolojisi ─────────────────────────────────────
  {
    type: "h2",
    text: "Anksiyete ve Travma Psikolojisi",
  },
  {
    type: "h3",
    text: "Travma Sonrası Stres Bozukluğu ve Deprem Deneyimi",
  },
  {
    type: "p",
    text: "Travma Sonrası Stres Bozukluğu (TSSB), can güvenliğini tehdit eden olayların ardından gelişebilen klinik bir tablodur. Deprem, bu olayların en güçlü tetikleyicileri arasında yer alır. TSSB'nin dört ana semptom kümesi şöyle özetlenebilir: tekrarlayan izlenim ve anılar (flaşbekler, kabuslar), olayı hatırlatan şeylerden kaçınma, duygulanım ve biliş üzerindeki olumsuz değişimler (kendini suçlama, duygusal körelme) ve aşırı uyarılmışlık, yani hipervijilans ve abartılı irkilme tepkisi. Bu semptomların bir aydan uzun sürmesi ve işlevselliği bozması, TSSB tanısı için temel kriterler arasındadır.",
  },
  {
    type: "p",
    text: "Deprem kaygısı konusunda psikolog değerlendirmesi açısından önemli bir nokta şudur: doğrudan deprem yaşamamış olmak, TSSB ya da travma belirtileri geliştirmeye engel değildir. Medya ve sosyal medya aracılığıyla yoğun biçimde maruz kalınan görüntüler ve haberler; daha önce yaşanmış travmaları reaktive edebilir, mevcut kaygı düzeyini belirgin biçimde artırabilir ya da 'ikincil travma' olarak da bilinen vikarial travma tablosunu tetikleyebilir. Bu açıdan 2023 Kahramanmaraş depremleri, pek çok insanın doğrudan etkilenmediği halde derin bir psikolojik iz bırakması nedeniyle dikkat çekici bir örnek oluşturmuştur.",
  },
  {
    type: "h3",
    text: "Genelleşmiş Anksiyete ve Deprem Odağı",
  },
  {
    type: "p",
    text: "Deprem kaygısı, bazı bireylerde TSSB yerine genelleşmiş anksiyete bozukluğu çerçevesinde gelişir. Bu kişiler depremden önce de kaygıya yatkın olabilir; ancak deprem, kaygının yoğunlaştığı ve anlam yüklediği ana tema haline gelir. Sürekli 'ya deprem olursa?' sorusuyla zihinsel meşguliyet, beraberinde uyku güçlüğü, kronik yorgunluk, kas gerginliği ve konsantrasyon sorunları getirir. Kaygı belirtileri herhangi bir yaşam alanını etkiliyor, iş verimini düşürüyor ya da ilişkileri zorlaştırıyorsa klinik değerlendirme önerilir.",
  },

  // ─── 3. Hipervijilans ────────────────────────────────────────────────────────
  {
    type: "h2",
    text: "Hipervijilans: Sinir Sisteminin Kronik Alarm Hali",
  },
  {
    type: "p",
    text: "Hipervijilans, tehdit algısının normalin çok ötesinde aktif tutulduğu bir uyarılmışlık durumudur. Deprem bağlamında bu; binanın her sesini dikkatle izlemek, asansör yerine merdiveni tercih etmek, araç geçişinden kaynaklanan titremeyi deprem olarak yorumlamak, ağır araçlar yakından geçerken paniklemek ya da gece zemin hafif sallanır gibi bir hissiyatla uyanmak biçiminde kendini gösterebilir. Bu hiperalert durum, bedenin sempatik sinir sisteminin (savaş-kaç-don tepkisi) kronik aktivasyonuyla doğrudan bağlantılıdır.",
  },
  {
    type: "p",
    text: "Sempatik sinir sistemi uzun süre aktif kaldığında kortizol ve adrenalin seviyeleri yüksek seyreder. Bu durum kısa vadede dikkat ve performans artışı sağlayabilir; ancak uzun vadede bağışıklık sistemini zayıflatır, kas-iskelet sisteminde kronik ağrılara yol açar, uyku kalitesini düşürür ve sindirim sistemini bozar. Sürekli tetikte olmak, bireyin yorgunluğu kaçınılmaz kılar: zihin ve beden gereksiz yere enerji harcar, gerçek tehditlerle başa çıkma kapasitesi ise paradoks biçimde azalır.",
  },
  {
    type: "p",
    text: "Parasempatik sinir sistemini (dinlenme ve sindirim sistemi) güçlendiren stratejiler; nefes düzenleme egzersizleri, progresif kas gevşemesi ve bilinçli beden farkındalığı uygulamaları, hipervijilansı tek başına tedavi etmez; ancak bedenin sükûnet kapasitesini yeniden kazanmasına katkı sağlar. Terapi sürecinde bu teknikler, kaygıyı besleyen bilişsel kalıplarla çalışmanın yanı sıra bedensel düzenleme becerisini de geliştirmek için kullanılır.",
  },

  // ─── 4. Belirsizlik İntoleransı ──────────────────────────────────────────────
  {
    type: "h2",
    text: "Belirsizliğe Tahammülsüzlük",
  },
  {
    type: "p",
    text: "İnsan zihni belirsizlikten kaçınmak üzere evrimsel olarak yapılandırılmıştır. Tehdit net ve tanımlıysa beyin ona yanıt üretebilir; ancak tehdit ne zaman, nerede ve nasıl gerçekleşeceği bilinmeyen bir olduğunda zihin bu boşluğu doldurmak için sürekli çalışır. Deprem, tam da bu nedenle özel bir kaygı kaynağıdır: öngörülemeyen, kontrol edilemeyen ve kaçınılması mümkün olmayan bir olgudur. Belirsizliğe tahammülsüzlük düzeyi yüksek olan bireyler bu durumu özellikle zorlayıcı bulur.",
  },
  {
    type: "p",
    text: "Belirsizlik intoleransı; kaygıyı azaltmak amacıyla pek çok güvenlik davranışı geliştirilmesine zemin hazırlar. Deprem haberlerini kompulsif biçimde takip etmek, her sabah AFAD bültenlerini kontrol etmek, binanın zemin sınıfını ve statik hesaplarını araştırmak, deprem çantasını defalarca gözden geçirmek ya da yatmadan önce çıkış yollarını zihinde canlandırmak bu davranışlar arasındadır. Kısa vadede hafif bir rahatlama sağlayan bu davranışlar, uzun vadede beyne 'tehlike gerçekten var ve sen bununla ancak kontrol ederek başa çıkabilirsin' mesajını pekiştirir. Böylece kaygı azalmak yerine sürer.",
  },
  {
    type: "p",
    text: "Belirsizlikle işlevsel bir ilişki kurmanın yolu, belirsizliği ortadan kaldırmaktan değil; belirsizliğin varlığına rağmen seçim yapabildiğinizi ve günlük yaşamınızı sürdürebildiğinizi deneyimlemekten geçer. Bu bir tür bilişsel ve davranışsal esneklik çalışmasıdır ve terapi sürecinin temel hedeflerinden birini oluşturur.",
  },

  // ─── 5. Bursa Yerel Bağlam ───────────────────────────────────────────────────
  {
    type: "h2",
    text: "Bursa'da Deprem Kaygısı: Kentsel ve Coğrafi Bağlam",
  },
  {
    type: "p",
    text: "Bursa, tektonik açıdan hassas bir coğrafi konuma sahiptir. Tarihsel kayıtlar incelendiğinde kentte çeşitli dönemlerde deprem hasarı yaşandığı görülmektedir. Özellikle Nilüfer ilçesinde hızla yükselen kentleşme dalgasıyla birlikte yeni yapı stoğu oluştururken, Osmangazi ve Yıldırım'da eski yapı stoğu zemin özellikleriyle birleşmektedir. Bu kentsel gerçeklik; Bursa'da yaşayan bireylerin deprem kaygısını soyut bir olasılık değil, somut bir yaşam meselesi olarak deneyimlemesini anlaşılır kılar.",
  },
  {
    type: "p",
    text: "Mudanya ve Gemlik gibi kıyı ilçelerinde yaşayanlar için ise Marmara Denizi'nin sismik yapısına ilişkin kaygılar ayrı bir boyut taşır. 1999 İzmit depremi ve akabinde oluşan tsunami tehlike değerlendirmeleri; bu ilçelerde deprem kaygısının coğrafi bir bilinçle iç içe geçtiğini göstermektedir. Kişinin nerede yaşadığı, ne tür bir yapıda oturduğu ve daha önce ne tür deprem deneyimleri yaşadığı; kaygının biçimini ve yoğunluğunu doğrudan etkiler.",
  },
  {
    type: "p",
    text: "Bursa psikolog değerlendirmelerinde sıkça gündeme gelen konu şudur: bireyin deprem konusundaki endişeleri gerçekçi ve bilgiye dayalıysa bu bir farkındalıktır ve desteklenmesi gereken bir hazırlık motivasyonuna dönüşebilir. Ancak bu endişeler günlük yaşamı yönetme kapasitesini aşıp başlı başına bir kayıp haline geliyorsa artık klinikte ele alınması gereken bir alan söz konusudur. Deprem hazırlığı ile deprem anksiyetesi birbirinden farklı şeylerdir; birini iyi yönetmek, diğerini otomatik olarak ortadan kaldırmaz.",
  },

  // ─── 6. Marmara Hafızası ve Son Depremler ────────────────────────────────────
  {
    type: "h2",
    text: "Marmara Depremi, Kahramanmaraş ve Kolektif Bellek",
  },
  {
    type: "p",
    text: "1999 yılında gerçekleşen 17 Ağustos Marmara depremi, Türkiye tarihinin en ağır afetlerinden biridir. On yedi bini aşkın insanın hayatını kaybettiği bu felaket; yalnızca doğrudan etkilenen bölgeler için değil, haberleri izleyen tüm ülke için derin bir psikolojik iz bırakmıştır. O dönemde yetişkin olan bireyler bugün hâlâ o geceyi anlatırken seslerinin kısıldığını, bedenlerinin gerildiğini ifade ediyor. Bu, travma anılarının nasıl güçlü biçimde kodlandığını ve yıllar sonra bile canlılığını koruyabildiğini gösteren çarpıcı bir örnektir.",
  },
  {
    type: "p",
    text: "Travma psikolojisi açısından bu kolektif hafıza, bireysel bir kırılganlık kaynağı işlevi görmektedir. 1999 sonrasında büyüyen nesil, ebeveynlerinin ve toplumun bu travmayı nasıl taşıdığını gözlemleyerek büyümüştür; bu da depreme yönelik kaygının kuşaklar arası aktarım mekanizmalarıyla pekiştiğini düşündürmektedir. 2023 Kahramanmaraş depremleri bu birikmiş hassasiyeti yeniden harekete geçirmiş; hem psikolojik hem de sosyal düzeyde ciddi bir sarsılma yaratmıştır. Bursa da dahil olmak üzere ülkenin pek çok şehrinde deprem anksiyetesine bağlı bireysel terapi başvurularının önemli ölçüde arttığı gözlemlenmiştir.",
  },
  {
    type: "p",
    text: "Kahramanmaraş depremi aynı zamanda afet hazırlığına, yapı güvenliğine ve kurumlara duyulan güvenin sorgulandığı bir dönem olmuştur. Bu güven erozyonu, bireyin kendi güvenliğini yönetme kapasitesine olan inancını da zedeleyebilir. 'Ne yaparsam yapayım yeterli olmayabilir' inancı, kaygıyı aşırı derecede pekiştiren bir bilişsel kalıptır. Terapi sürecinde bu tür inançlarla doğrudan çalışmak, kaygı yönetiminde kritik bir adım oluşturur.",
  },

  // ─── 7. Sosyal Medya ve Alarm Hali ──────────────────────────────────────────
  {
    type: "h2",
    text: "Sosyal Medya, Haber Akışı ve Alarm Döngüsü",
  },
  {
    type: "p",
    text: "Sosyal medya, deprem haberlerini anlık olarak yaydığı için hem bilgi kaynağı hem de kaygı yükseltici bir mecra haline gelmiştir. Resmi kurumların paylaşımlarının yanı sıra doğrulanmamış haberler, büyütülmüş başlıklar ve sansasyonel içerikler; bireylerin tehdit algısını sürekli canlı tutmaktadır. Araştırmalar, haber kanallarını ve sosyal medyayı yoğun biçimde takip eden bireylerin, doğrudan afet bölgesinde olmaksızın yüksek düzeyde kaygı ve travma benzeri belirtiler yaşayabildiğini göstermektedir.",
  },
  {
    type: "p",
    text: "İnsan beyninin olumsuzluk önyargısı (negativity bias) nedeniyle tehdit içerikli bilgileri nötr ya da olumlu bilgilere kıyasla çok daha hızlı ve derin işlediği bilinmektedir. Bu evrimsel mekanizma tehlike anında hayat kurtarıcıdır; ancak saatler boyu deprem haberi ya da anlık bildirim alırken aşırı aktif hale gelir. Beyin, gerçek bir tehlike yokken de tehlike varmış gibi tepki vermeye devam eder. Günde birkaç kez deprem uygulaması kontrol etmek ya da her yeni sarsıntı haberini takip etmek bu örüntüyü güçlendirir.",
  },
  {
    type: "p",
    text: "Bu konuda klinik pratikte sıkça verilen psikoeğitim; medya tüketimini tamamen kesmek değil, bilinçli sınırlamaktır. Haberleri sabah ve akşam belirli zaman dilimleriyle kısıtlamak, güvenilmez kaynaklardan uzak durmak ve özellikle yatmadan önce haber akışını kapatmak, sinir sisteminin gün içinde sükûnet bulabilmesi için yapılabilecek pratik adımlar arasındadır. Beynin alarm durumundan çıkması için tehdide maruz kalmaksızın zaman geçirmesi gerekir; bu fırsatı bilinçli olarak yaratmak, kaygı döngüsünü kırmada önemli bir yer tutar.",
  },

  // ─── 8. Çocuklar ve Aile ─────────────────────────────────────────────────────
  {
    type: "h2",
    text: "Çocuklarda Deprem Kaygısı ve Aile Dinamiği",
  },
  {
    type: "h3",
    text: "Çocukların Kaygıyı İfade Biçimleri",
  },
  {
    type: "p",
    text: "Çocuklar deprem kaygısını yetişkinlerden farklı biçimlerde ve farklı kanallar üzerinden ifade eder. Okul öncesi dönemdeki çocuklar; altını ıslatma, ebeveynle aynı yatağa girme isteği, karanlıktan korkma ve her sesten irkilme gibi gelişimsel olarak daha erken dönemlere özgü regresif davranışlar sergileyebilir. Okul çağı çocuklarında ise kaygı çoğunlukla bedensel belirtilerle örtülü biçimde ortaya çıkar: açıklanamayan karın ağrıları, baş ağrıları, sabah okula gitmek istememe. Bu belirtiler aile tarafından zaman zaman 'kaçamak' olarak yorumlanır; oysa büyük ihtimalle kaygının bedensel bir ifadesidir.",
  },
  {
    type: "p",
    text: "Ergenlerde tablo farklı görünür. Kimi ergen deprem konusunu sürekli araştırır, sismik verileri takip eder ve bu bilgiyi çevresindekilerle paylaşmak konusunda obsesif bir ilgi geliştirir. Kimi ergen ise tam tersi biçimde konudan kaçar, sohbetleri keser ve kaygısını öfke ya da sosyal çekilme biçiminde dışa vurur. Her iki örüntü de altta yatan kaygının farklı yüzleridir ve hangisi daha belirginse ona göre farklı bir yaklaşım gerektirir.",
  },
  {
    type: "h3",
    text: "Ebeveyn Tutumunun Belirleyiciliği",
  },
  {
    type: "p",
    text: "Ebeveynlerin depreme karşı tutumu ve bu tutumu nasıl dışa vurduğu, çocuğun kaygı düzeyini doğrudan etkiler. Kendi kaygısını sözel olarak saklamaya çalışan ancak beden dili ve ses tonu aracılığıyla yansıtan ebeveynlerin çocuklarında da yüksek kaygı geliştiği gözlemlenmiştir; çünkü çocuklar sözel olmayan mesajlara büyüklere kıyasla çok daha duyarlıdır. Aşırı koruyucu tutumlar da benzer biçimde çocuğa 'gerçekten çok tehlikeli bir durumdasın' mesajı ileterek kaygıyı besler.",
  },
  {
    type: "p",
    text: "Sağlıklı bir ebeveyn tutumu; çocuğun duygularını normalleştirmek, yaşına uygun dürüst ve kısa bilgiler vermek, pratik hazırlıkları aile aktivitesi olarak deneyimletmek ve günlük rutinin devamlılığını korumaktan oluşur. 'Deprem olabilir, biz de bunun için hazırlanıyoruz; çantamız var, nereye gideceğimizi biliyoruz' gibi cümleler çocukta kontrol ve yetkinlik hissini destekler. Çocuğun sorusuna 'hiçbir şey olmaz' diye geçiştirmek ise hem güven verici değil hem de uzun vadede çocuğun ebeveyne olan güvenini zedeleyen bir yanıttır.",
  },
  {
    type: "p",
    text: "Aile sistemi bir bütün olarak değerlendirildiğinde, bir bireyin deprem kaygısının diğer üyeler üzerindeki etkisi de göz ardı edilemez. Bir ebeveynin yüksek kaygısı diğer ebeveyne, çocuklara ve hatta geniş aile ağına sıçrayabilir. Bu nedenle Bursa anksiyete terapisi bağlamında aile seansları ya da ebeveyn danışmanlığı, bireysel terapinin tamamlayıcı bir parçası olarak düşünülebilir.",
  },

  // ─── 9. Korunma ve Kontrol Davranışları ─────────────────────────────────────
  {
    type: "h2",
    text: "Korunma Davranışları ve Obsesif Kontrol Döngüsü",
  },
  {
    type: "p",
    text: "Deprem hazırlığı klinik açıdan son derece akılcı ve desteklenen bir davranış biçimidir. Deprem çantası hazırlamak, güvenli noktaları önceden belirlemek, su ve temel erzak depolamak; olası bir depremin yarattığı belirsizliği azaltmak için yapılabilecek somut adımlardır. Bu tür hazırlıklar kaygıyı doğrudan azaltmasa da bireye bir kontrol ve hazır olma hissi verebilir; bu his de kaygı döngüsünü kısaltabilir.",
  },
  {
    type: "p",
    text: "Sorunlu alan, hazırlık davranışlarının sınırlarını aştığı ve güvenlik döngüsüne girdiği noktadır. Çantayı her gün kontrol etmek, tarih geçmiş ürünleri değiştirmekle yetinmeyip listeyi tekrar tekrar gözden geçirmek, binanın statik hesaplarını araştırmak için saatler harcamak, evin her odasına her gece sarsılma ihtimalini hesaplamak; bunlar artık pratik hazırlık değil obsesif kontrol döngüsüdür. Bu döngü; kaygıyı gidermek yerine kaygının üst katmanını hafifçe düşürür, ancak altta yatan kaygıyı besler.",
  },
  {
    type: "p",
    text: "Bilişsel davranışçı terapi çerçevesinde bu tür güvenlik davranışları, kaygının sürmesine aktif olarak katkıda bulunan etkenler olarak ele alınır. Terapide bu davranışları fark etmek, işlevini anlamak ve kademeli olarak azaltmak; bireyin kontrol etmeden de güvende olabileceği deneyimini yeniden inşa etmesini sağlar. Bu kolay bir süreç değildir; ilk etapta kaygıda geçici bir artış bile görülebilir. Ancak uzun vadede kaygıyı besleyen döngüden çıkmanın en etkili yolu da budur.",
  },

  // ─── 10. Panik ve Kaygı Bozukluğu Sınırı ────────────────────────────────────
  {
    type: "h2",
    text: "Panik Atak ve Klinik Kaygı Bozukluğu",
  },
  {
    type: "p",
    text: "Panik atak; çarpıntı, nefes darlığı, titreme, terleme, baş dönmesi, uyuşma, bulantı ve 'ölüyorum ya da deli oluyorum' hissinin birleşiminden oluşan, dakikalar içinde zirveye ulaşan yoğun bir anksiyete dalgasıdır. Deprem sırasında ya da deprem haberi alındığında tetiklenebilir; ancak zamanla zeminin titremesi, asansör kullanımı ya da yüksek binada bulunmak gibi durumlar da tetikleyici haline gelebilir. Panik atak kendi başına medikal olarak tehlikeli değildir; ancak yaşayan kişi için son derece rahatsız edici ve korkutucu bir deneyimdir.",
  },
  {
    type: "p",
    text: "Panik atakların sıklaşması, kişinin bu atakları tetikleyebilecek durumlardan kaçınmaya başlamasıyla sonuçlanabilir; bu örüntü panik bozukluğu olarak tanımlanır. Deprem bağlamında bu; yüksek katlara çıkmamak, asansör kullanmamak, deprem riski yüksek olarak algılanan binalara girmemek ya da şehir merkezinden uzaklaşmayı düşünmek gibi giderek genişleyen kaçınma davranışlarına dönüşebilir. Kaçınma ne kadar genişlerse yaşam alanı o kadar daralır; bu daralma başlı başına yaşam kalitesini düşüren bir kayıp haline gelir.",
  },
  {
    type: "p",
    text: "Deprem kaygısının klinik anksiyete bozukluğuna dönüştüğünün temel göstergesi işlevsellik kaybıdır. Kaygı; uyku bozukluğuna yol açıyorsa, konsantrasyonu ciddi biçimde düşürüyorsa, sosyal yaşamı ya da iş hayatını kısıtlıyorsa, panik atakları tetikliyorsa veya depresif belirtilerle iç içe geçiyorsa Bursa klinik psikolog değerlendirmesi için başvurmak anlamlı olacaktır. Tanısız başlanan müdahaleler zaman zaman semptom giderimi sağlasa da altta yatan yapıyı ele almadan sürdürülebilir bir iyileşme elde etmek güçtür.",
  },

  // ─── 11. Terapi Süreci Bursa'da ──────────────────────────────────────────────
  {
    type: "h2",
    text: "Bursa'da Terapi Süreci Nasıl İşler?",
  },
  {
    type: "p",
    text: "Bireysel terapi süreci; ilk görüşmede klinik değerlendirmeyle başlar. Bu görüşmede belirtilerin ne zaman başladığı, ne sıklıkla yaşandığı, hangi bağlamlarda tetiklendiği ve günlük yaşam üzerindeki etkileri ayrıntılı biçimde ele alınır. Bireyin genel yaşam öyküsü, geçmiş travma deneyimleri ve mevcut destek kaynakları da değerlendirmeye dahil edilir. İlk görüşme aynı zamanda terapist ile danışanın birbirini tanıdığı ve sürecin nasıl yürütüleceğine dair karşılıklı bir anlayış oluşturduğu bir zemin işlevi görür.",
  },
  {
    type: "p",
    text: "Bursa psikolog tavsiye bağlamında şunu belirtmek gerekir: her danışanın deneyimi benzersizdir ve bu nedenle terapi süreci standart bir protokol olmaktan ziyade kişiye özgü biçimde planlanır. Kimi danışan için bedensel belirtilerle ve duygu düzenlemeyle çalışmak ön plandayken, kimi danışan için bilişsel kalıpları incelemek daha merkezi bir yer tutar. Süreç belirlenen hedeflere göre genellikle haftada bir seans olarak yapılandırılır ve ilerleme düzenli olarak gözden geçirilir.",
  },
  {
    type: "p",
    text: "Bursa anksiyete terapisi sürecinde kimi zaman grup terapisi seçeneği de değerlendirilebilir. Deprem deneyimini paylaşan bireylerden oluşan psikoeğitim grupları; hem bilgi edinmeyi hem de benzer deneyimlere sahip kişilerle bağlantı kurmayı mümkün kılar. Bu gruplar terapötik sürecin bir parçası olmaktan ziyade tamamlayıcı bir destek işlevi görür ve bireysel terapiyle birlikte ya da onun ardından planlanabilir.",
  },

  // ─── 12. EMDR ve BDT ─────────────────────────────────────────────────────────
  {
    type: "h2",
    text: "EMDR ve Bilişsel Davranışçı Terapi",
  },
  {
    type: "h3",
    text: "Bursa'da EMDR ile Travma İşleme",
  },
  {
    type: "p",
    text: "EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme), ilk olarak TSSB tedavisinde geliştirilen ve günümüzde travma spektrumundaki pek çok klinik tabloda kullanılan yapılandırılmış bir terapi yöntemidir. Temel mekanizması, travmatik anıların yüksek duygu yükünü azaltarak sinir sistemi tarafından daha işlevsel biçimde entegre edilmesine olanak tanımaktır. Belirli bir protokol çerçevesinde yürütülen seans; hedef anının belirlenmesi, duygu ve beden duyumlarının titizlikle takip edilmesi ve bilateral uyarım (çoğunlukla göz hareketleri) uygulanmasından oluşur.",
  },
  {
    type: "p",
    text: "Bursa EMDR uygulamalarında deprem deneyimine bağlı belirgin anılar, tekrarlayan kabuslar, belirli tetikleyicilere karşı aşırı tepkiler ve bedensel donma ya da kaçma tepkileri ele alınabilir. EMDR'nin ayırt edici özelliği; geçmiş travmatik materyali doğrudan sözel anlatı yerine bilateral uyarım eşliğinde çalışmasıdır. Bu yaklaşım, özellikle sözel ifadenin güç olduğu ya da geleneksel konuşma terapisinden yeterince yararlanılamadığı vakalarda tercih edilir.",
  },
  {
    type: "p",
    text: "Araştırmalar, EMDR'nin TSSB tedavisinde bilişsel davranışçı terapi ile karşılaştırılabilir ya da ondan daha hızlı sonuçlar verdiğini göstermektedir. Bursa travma terapisi bağlamında EMDR; hem doğrudan deprem travması yaşamış bireyler için hem de 1999'dan bu yana birikmiş katmanlı travma yapısını taşıyan kişiler için değerli bir seçenek sunmaktadır. Terapist ve danışan birlikte hangi anıların veya tetikleyicilerin öncelikli olarak çalışılacağını belirler.",
  },
  {
    type: "h3",
    text: "Bilişsel Davranışçı Terapi ile Kaygı Örüntüleri",
  },
  {
    type: "p",
    text: "Bilişsel Davranışçı Terapi (BDT), düşünceler, duygular ve davranışlar arasındaki ilişkiyi hedef alan yapılandırılmış bir terapi yaklaşımıdır. Deprem anksiyetesi tedavisinde BDT; felaketleştirici düşünce kalıplarını tanımlama ve test etme, güvenlik davranışlarını kademeli olarak azaltma ve kaçınma örüntülerini kıran davranışsal deneyler aracılığıyla ilerler. 'Deprem her an olacak ve hepimiz mahvolacağız' gibi otomatik düşünceler BDT'de hem sözel düzeyde sınanır hem de davranışsal düzeyde test edilir.",
  },
  {
    type: "p",
    text: "Duyarsızlaştırma (maruz bırakma) egzersizleri BDT'nin temel araçlarından biridir. Kaçınılan durumların hiyerarşik biçimde sıralanması ve kademeli olarak bu durumlara maruz kalınması, kaçınmanın pekiştirdiği tehlike algısını zayıflatır. Örneğin asansör kullanmaktan kaçınan bir danışan; önce asansörün önünde durmak, ardından kapıyı açmak, sonrasında kısa süreli binmek gibi basamaklarla ilerler. Bu basamaklar terapi sürecinde titizlikle planlanır ve danışanın hazırbulunuşluğuna göre ayarlanır.",
  },

  // ─── 13. Online Terapi ───────────────────────────────────────────────────────
  {
    type: "h2",
    text: "Bursa'da Online Terapi Seçeneği",
  },
  {
    type: "p",
    text: "Bursa online terapi, pek çok farklı gereksinimi karşılayan esnek bir terapi formatıdır. Şehir içinde ulaşımı güç olan bölgelerden ya da Bursa dışından bağlananlar için pratik bir çözüm sunar. Özellikle deprem kaygısı nedeniyle binanın dışına çıkmakta güçlük çeken, asansöre binemeyen ya da yoğun kaçınma davranışları sergileyen bireyler için ilk başvuru noktası olarak işlev görebilir; bu bireylere terapiye erişim açısından değerli bir köprü oluşturur.",
  },
  {
    type: "p",
    text: "Online terapi seansları; KVKK mevzuatına uygun, şifreli video konferans platformları üzerinden yürütülür. Seans öncesi sessiz bir ortam, stabil internet bağlantısı ve kulaklık kullanımı sürecin verimliliğini artırır. Klinik etkinlik açısından yapılan çalışmalar; kaygı ve travma semptomları üzerinde online terapinin yüz yüze seanslarla karşılaştırılabilir sonuçlar verdiğini göstermektedir. Terapötik ilişkinin kalitesi kullanılan platform tarafından değil, terapistin klinik yetkinliği ve danışanla kurulan güven tarafından belirlenir.",
  },
  {
    type: "p",
    text: "Online terapi ayrıca yoğun çalışma programı olan, küçük çocukları nedeniyle kliniğe gidemeyen ya da kaygısı nedeniyle yabancı ortamlara adım atmakta güçlük çeken danışanlar için de değerli bir seçenektir. İlk görüşme online olarak gerçekleştirildiğinde format tercihi de o görüşmede birlikte değerlendirilebilir; süreç ilerledikçe yüz yüze seansa geçiş ya da karma bir format da planlanabilir.",
  },

  // ─── 14. Ne Zaman Destek ─────────────────────────────────────────────────────
  {
    type: "h2",
    text: "Ne Zaman Psikolojik Destek Değerlendirilebilir?",
  },
  {
    type: "p",
    text: "Psikolojik destek arama kararı, çoğu zaman 'ne zaman bu kadar ciddi olur?' sorusuna bağlıdır. Aşağıdaki belirtilerin bir ya da birkaçı uzun süredir devam ediyorsa değerlendirme için başvurmak anlamlıdır: birkaç haftayı aşan süregelen uyku bozukluğu, gece boyunca tekrarlayan kabuslar ya da sık sık uyanmalar; sosyal yaşamı, iş hayatını ya da aile ilişkilerini belirgin biçimde etkileyen konsantrasyon ve verimlilik kaybı; belirli katlara, binalara, araçlara ya da dışarı çıkmaya girememe biçiminde genişleyen kaçınma davranışları.",
  },
  {
    type: "p",
    text: "Ek olarak şunlar da değerlendirme için önemli sinyallerdir: çarpıntı, nefes darlığı ya da uyuşma gibi bedensel belirtilerle kendini gösteren panik ataklar; deprem haberlerini, sismik verileri ya da deprem uygulamalarını günde uzun süreler boyunca ve zorlantılı biçimde takip etme; son dönemde yaşanan ya da çok uzak olmayan geçmişteki depremle ilgili tekrar eden anılar ya da flaşbekler; çocuklarda okul reddi, ebeveynden ayrılamama ya da bedensel yakınmalar.",
  },
  {
    type: "p",
    text: "Bu belirtilerden herhangi birinin varlığı, kişinin 'zayıf' ya da 'aşırı duyarlı' olduğu anlamına gelmez. Tersine, bu tepkiler son derece gerçek ve anlaşılırdır. Psikolojik destek; kaygının tamamen ortadan kalkması değil, onunla daha işlevsel bir ilişki kurulması ve yaşam kalitesinin yeniden kazanılması için bir süreç sunar. Erken değerlendirme, semptomların kronikleşmesini önlemede belirleyici bir rol oynar.",
  },

  // ─── 15. Sonuç + CTA ──────────────────────────────────────────────────────────
  {
    type: "h2",
    text: "Sonuç: Kaygıyla Daha Geniş Bir Alan",
  },
  {
    type: "p",
    text: "Deprem kaygısı; öngörülemezlik, kontrol dışılık ve yaşamsal tehdit gibi varoluşsal gerçekliklerin psikolojik bir yansımasıdır. Bu kaygıyı tamamen silmek ya da bastırmak ne pratik olarak mümkündür ne de klinik açıdan istenebilir bir hedef. Gerçekçi hedef; kaygının günlük yaşama hâkimiyetini kırmak, bireyin öz düzenleme kapasitesini artırmak ve tehdit algısının gerçek bir zemin sarsıntısı olmadığı anlarda da sürmesini engellemektir. Psikoterapi, bu hedefe ulaşmak için kanıta dayalı araçlar sunan yapılandırılmış bir destek sürecidir.",
  },
  {
    type: "p",
    text: "Bursa'da pek çok kişi deprem kaygısını normalleştirerek ya da yalnız başına taşıyarak gündelik yaşamını sürdürüyor. 'Herkes böyle hissediyor', 'Bu normal bir şey', 'Yardım almak bu kadar ciddi değil ki' gibi iç sesler başvuruyu geciktirebilir. Oysa erken değerlendirme; semptomların derinleşmesini, kaçınma davranışlarının genişlemesini ve yaşam kalitesinin giderek düşmesini önlemede kritik bir rol oynar. Destek aramak, güçsüzlüğün değil farkındalığın göstergesidir.",
  },
  {
    type: "p",
    text: "Bursa'da deprem kaygısı, yoğun stres veya sürekli tetikte olma hissi günlük yaşamı etkilemeye başladığında psikolojik destek süreci değerlendirilebilir.",
  },
] as const;
