export type MbtiPole = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type MbtiDimension = "EI" | "SN" | "TF" | "JP";

export type MbtiType =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export type MbtiQuestion = {
  id: string;
  dimension: MbtiDimension;
  text: string;
  options: readonly [
    { label: string; pole: MbtiPole },
    { label: string; pole: MbtiPole },
  ];
};

export const MBTI_QUESTIONS: readonly MbtiQuestion[] = [
  {
    id: "ei-1",
    dimension: "EI",
    text: "Yoğun bir günün ardından enerjinizi yenilemek için genellikle ne yaparsınız?",
    options: [
      { label: "Kısa bir sohbet veya sosyal temas beni toparlar.", pole: "E" },
      { label: "Yalnız kalmak ve içe dönmek beni toparlar.", pole: "I" },
    ],
  },
  {
    id: "ei-2",
    dimension: "EI",
    text: "Yeni bir ortamda tanışma sürecinde sizi en iyi tanımlayan ifade hangisidir?",
    options: [
      { label: "Kolayca iletişim kurar, çevreyi keşfetmeye açık olurum.", pole: "E" },
      { label: "Önce gözlemler, güven oluşunca paylaşım yaparım.", pole: "I" },
    ],
  },
  {
    id: "ei-3",
    dimension: "EI",
    text: "Bir problemi çözerken düşüncelerinizi nasıl işlersiniz?",
    options: [
      { label: "Düşüncelerimi konuşarak ve dışa vurarak netleştiririm.", pole: "E" },
      { label: "Önce içimde tartar, sonra ifade etmeyi tercih ederim.", pole: "I" },
    ],
  },
  {
    id: "ei-4",
    dimension: "EI",
    text: "Uzun süreli sosyal etkinliklerden sonra tipik deneyiminiz nedir?",
    options: [
      { label: "Enerjim devam eder veya hafifçe yükselmiş hissederim.", pole: "E" },
      { label: "Zihinsel ve duygusal yorgunluk hissedip dinlenmeye ihtiyaç duyarım.", pole: "I" },
    ],
  },
  {
    id: "sn-1",
    dimension: "SN",
    text: "Yeni bir bilgiyi değerlendirirken önceliğiniz genellikle nedir?",
    options: [
      { label: "Somut veriler, ölçülebilir örnekler ve kanıtlanmış gerçekler.", pole: "S" },
      { label: "Örüntüler, olasılıklar ve geleceğe dair çıkarımlar.", pole: "N" },
    ],
  },
  {
    id: "sn-2",
    dimension: "SN",
    text: "Bir projeye başlarken hangi yaklaşım size daha doğal gelir?",
    options: [
      { label: "Adım adım, uygulanabilir ve test edilmiş yöntemlerle ilerlemek.", pole: "S" },
      { label: "Genel vizyonu kurup sonra ayrıntıları şekillendirmek.", pole: "N" },
    ],
  },
  {
    id: "sn-3",
    dimension: "SN",
    text: "Günlük yaşamda dikkatinizi en çok ne çeker?",
    options: [
      { label: "Şu anki gerçekler, beş duyuyla algılanan ayrıntılar.", pole: "S" },
      { label: "Söylenmeyen anlamlar, semboller ve olası bağlantılar.", pole: "N" },
    ],
  },
  {
    id: "sn-4",
    dimension: "SN",
    text: "Bir anı hatırlarken genellikle hangisine odaklanırsınız?",
    options: [
      { label: "Olayın somut detaylarına: kim, ne, nerede, nasıl.", pole: "S" },
      { label: "Olayın size hissettirdiklerine ve taşıdığı anlama.", pole: "N" },
    ],
  },
  {
    id: "tf-1",
    dimension: "TF",
    text: "Zor bir karar verirken sizi daha çok yönlendiren unsur nedir?",
    options: [
      { label: "Mantıksal tutarlılık, adillik ve uzun vadeli sonuçlar.", pole: "T" },
      { label: "İnsanların duygusal ihtiyaçları ve ilişkisel etkiler.", pole: "F" },
    ],
  },
  {
    id: "tf-2",
    dimension: "TF",
    text: "Bir yakınınız sizi eleştirdiğinde ilk tepkiniz genelde nasıldır?",
    options: [
      { label: "Eleştirinin doğruluğunu ve argümanını analiz ederim.", pole: "T" },
      { label: "İlişkideki duygusal tonu ve incinme düzeyini değerlendiririm.", pole: "F" },
    ],
  },
  {
    id: "tf-3",
    dimension: "TF",
    text: "Takım içinde çatışma çıktığında hangi rol size daha yakındır?",
    options: [
      { label: "Tarafsız kriterler belirleyip çözümün mantığını netleştirmek.", pole: "T" },
      { label: "Tarafların duygularını dinleyip uzlaşma zemini oluşturmak.", pole: "F" },
    ],
  },
  {
    id: "tf-4",
    dimension: "TF",
    text: "Birini desteklerken önceliğiniz çoğunlukla hangisidir?",
    options: [
      { label: "Durumu objektif çerçevede analiz etmek ve net öneriler sunmak.", pole: "T" },
      { label: "Empati kurmak ve duygusal güvenli alan sağlamak.", pole: "F" },
    ],
  },
  {
    id: "jp-1",
    dimension: "JP",
    text: "Günlük planlarınızla ilgili sizi en iyi yansıtan ifade hangisidir?",
    options: [
      { label: "Liste, takvim ve önceden belirlenmiş yapı beni rahatlatır.", pole: "J" },
      { label: "Esneklik ve anlık koşullara göre uyum beni rahatlatır.", pole: "P" },
    ],
  },
  {
    id: "jp-2",
    dimension: "JP",
    text: "Bir görevi tamamlama biçiminiz genellikle nasıldır?",
    options: [
      { label: "Son tarihten önce bitirmeyi ve kapanışı net hissetmeyi severim.", pole: "J" },
      { label: "Son ana kadar seçenekleri açık tutmayı tercih ederim.", pole: "P" },
    ],
  },
  {
    id: "jp-3",
    dimension: "JP",
    text: "Belirsizlikle karşılaştığınızda tipik tepkiniz nedir?",
    options: [
      { label: "Hızlıca çerçeve çizer, karar ve plan oluştururum.", pole: "J" },
      { label: "Durumu gözlemler, gerektiğinde yön değiştiririm.", pole: "P" },
    ],
  },
  {
    id: "jp-4",
    dimension: "JP",
    text: "Çalışma ortamınızda sizi daha verimli kılan düzen hangisidir?",
    options: [
      { label: "Belirgin kurallar, öncelikler ve tamamlanmış adımlar.", pole: "J" },
      { label: "Akışa göre şekillenen, yaratıcı esneklik alanı.", pole: "P" },
    ],
  },
] as const;

export const MBTI_TYPE_PROFILES: Record<
  MbtiType,
  { title: string; summary: string }
> = {
  INTJ: {
    title: "Mimar (INTJ)",
    summary:
      "Uzun vadeli sistemler kurma eğiliminiz güçlüdür; duyguları veri ve stratejiyle birlikte değerlendirirsiniz. Bağımsızlık ve tutarlılık sizin için temel motivasyon kaynaklarıdır. İlişkilerde doğrudan iletişim tercih eder, ancak duygusal ifadeyi zaman zaman erteleyebilirsiniz.",
  },
  INTP: {
    title: "Mantıkçı (INTP)",
    summary:
      "Kavramsal düşünme ve analitik merak ön plandadır; fikirleri derinlemesine test etmekten keyif alırsınız. Duygusal konularda mesafe koyma eğilimi, çatışmadan kaçınma ihtiyacıyla birleşebilir. Yapılandırılmış hedefler sizi harekete geçirmede etkili bir çerçeve sunar.",
  },
  ENTJ: {
    title: "Komutan (ENTJ)",
    summary:
      "Organizasyon, liderlik ve sonuç odaklılık belirgin özelliklerinizdendir. Zor kararları nesnellikle alır, duygusal maliyeti göz ardı etmemeye çalışırsınız. Yoğun tempo altında dinlenme ve empati pratiği sürdürülebilirlik için önemlidir.",
  },
  ENTP: {
    title: "Tartışmacı (ENTP)",
    summary:
      "Yenilik, argümantasyon ve zihinsel esneklik sizi tanımlar; rutin tekrarlar motivasyonunuzu düşürebilir. Duygusal derinlik bazen fikir düzleminde kalır; yakın ilişkilerde somut ilgi göstermek dengeyi güçlendirir. Merakınızı yönlendiren net hedefler odaklanmanıza yardımcı olur.",
  },
  INFJ: {
    title: "Savunucu (INFJ)",
    summary:
      "İçgörü, değerler ve anlam arayışı güçlüdür; başkalarının ihtiyaçlarını sezgisel biçimde okuyabilirsiniz. Sınır koymakta zorlanma ve aşırı sorumluluk hissi tükenmişliğe yol açabilir. Kendi duygusal ihtiyaçlarınızı ifade etmek, verdiğiniz desteğin kalitesini artırır.",
  },
  INFP: {
    title: "Arabulucu (INFP)",
    summary:
      "Otantiklik, empati ve değer uyumu sizin için merkezdedir; çatışmadan kaçınma eğilimi içsel gerilim yaratabilir. Duygusal derinlik zengin olsa da karar vermede erteleme görülebilir. Küçük, somut adımlarla ilerlemek idealizminizi sürdürülebilir kılar.",
  },
  ENFJ: {
    title: "Önder (ENFJ)",
    summary:
      "İlişki kurma, motive etme ve topluluk dinamiklerini okuma beceriniz güçlüdür. Başkalarına odaklanma, kendi ihtiyaçlarınızı ikinci plana atmanıza neden olabilir. Net sınırlar ve öz-bakım, verici rolünüzü uzun vadede korur.",
  },
  ENFP: {
    title: "Kampanyacı (ENFP)",
    summary:
      "Enerji, yaratıcılık ve insan odaklı merak belirgindir; yeni başlangıçlar sizi canlandırır. Dikkat dağınıklığı ve duygusal dalgalanmalar planlı ilerlemeyi zorlaştırabilir. Yapılandırılmış rutinler, özgürlük ihtiyacınızla dengelendiğinde verim artar.",
  },
  ISTJ: {
    title: "Lojistikçi (ISTJ)",
    summary:
      "Güvenilirlik, düzen ve sorumluluk bilinci yüksektir; kurallara ve taahhütlere bağlılık gösterirsiniz. Duygusal ifade daha ölçülü olabilir; değişime uyum zaman alabilir. Esneklik pratiği, istikrarınızı korurken adaptasyonu kolaylaştırır.",
  },
  ISFJ: {
    title: "Savunmacı (ISFJ)",
    summary:
      "Destekleyicilik, sadakat ve pratik yardım eğiliminiz belirgindir. Çatışmadan kaçınma ve aşırı özveri kendi ihtiyaçlarınızı gölgeleyebilir. İhtiyaçlarınızı açıkça dile getirmek, ilişkilerdeki dengeyi güçlendirir.",
  },
  ESTJ: {
    title: "Yönetici (ESTJ)",
    summary:
      "Organizasyon, netlik ve uygulama becerisi ön plandadır; sonuç odaklı bir çalışma tarzınız vardır. Duygusal nüansları gözden kaçırma riski, özellikle yakın ilişkilerde gerilim yaratabilir. Aktif dinleme, liderlik tarzınızı daha kapsayıcı kılar.",
  },
  ESFJ: {
    title: "Danışman (ESFJ)",
    summary:
      "Uyum, topluluk ve başkalarının refahına duyarlılık güçlüdür. Onay arayışı ve eleştiriye aşırı duyarlılık öz-değerinizi etkileyebilir. Kendi sınırlarınızı korumak, verici rolünüzü sağlıklı sürdürür.",
  },
  ISTP: {
    title: "Usta (ISTP)",
    summary:
      "Pratik problem çözme, sakinlik ve bağımsızlık öne çıkar; kriz anlarında soğukkanlı kalabilirsiniz. Duygusal paylaşım daha seçici olabilir; uzun vadeli planlama ikinci planda kalabilir. İlişkilerde düzenli iletişim, yakınlığı derinleştirir.",
  },
  ISFP: {
    title: "Maceracı (ISFP)",
    summary:
      "Estetik duyarlılık, şimdiki an ve değer odaklı yaşam tarzı belirgindir. Çatışmadan kaçınma ve içe kapanma stres altında artabilir. Küçük hedefler ve ifade kanalları (sanat, hareket), duygusal düzenlemenizi destekler.",
  },
  ESTP: {
    title: "Girişimci (ESTP)",
    summary:
      "Hareket, risk alma ve anlık uyum beceriniz güçlüdür; somut sonuçlar sizi motive eder. Uzun vadeli planlama ve duygusal derinlik bazen geri planda kalır. Duraklama anları ve öz-yansıtma, dürtüselliği dengelemenize yardımcı olur.",
  },
  ESFP: {
    title: "Eğlendirici (ESFP)",
    summary:
      "Sosyal enerji, spontanlık ve duygusal ifade canlıdır; çevrenize moral taşırsınız. Dikkat dağınıklığı ve kaçınma eğilimi zor duyguları erteleyebilir. Yapılandırılmış öz-bakım rutinleri, enerjinizi sürdürülebilir kılar.",
  },
};

export type MbtiScores = Record<MbtiPole, number>;

export function createEmptyScores(): MbtiScores {
  return { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
}

/** Eşitlikte ilk harf (E, S, T, J) tercih edilir — klasik kısa testlerde yaygın pratik. */
export function calculateMbtiType(scores: MbtiScores): MbtiType {
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  const jp = scores.J >= scores.P ? "J" : "P";
  return `${ei}${sn}${tf}${jp}` as MbtiType;
}
