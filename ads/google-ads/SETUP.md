# Google Ads — Bursa Psikolog kurulum rehberi

Bu klasör, plandaki 3 Search kampanyasını Ads hesabına aktarmak içindir.
Site tarafında WhatsApp tıklama izleme kodu deploy edildikten sonra Ads’te dönüşüm etiketini bağlayın.

## Önkoşullar

1. Google Ads hesabı açık
2. Konum: **Bursa (il)** — Türkiye geneli kapalı
3. Dil: Türkçe
4. Ağlar: yalnızca **Arama Ağı** (Display / Arama ortakları ilk ay kapalı önerilir)
5. Final URL kökü: `https://bursapsikologsancar.com`

## Bütçe (aylık ~5.000 TL)

| Kampanya | Günlük bütçe | Pay |
|----------|--------------|-----|
| BPS - A Lokal Bursa Nilufer | 90 TL | %55 |
| BPS - B Kaygi | 40 TL | %25 |
| BPS - C Iliski | 35 TL | %20 |

Teklif (ilk 10–14 gün): **Tıklamaları en üst düzeye çıkar** + isteğe bağlı tıklama tavanı, veya Manuel CPC.
WhatsApp dönüşümü ayda ~15–20+ olay görünce **Dönüşümleri en üst düzeye çıkar**’a geçin.

## Kampanya / reklam grubu / final URL

### BPS - A Lokal Bursa Nilufer
| Reklam grubu | Final URL |
|--------------|-----------|
| AG Nilufer Psikolog | `/lokasyon/nilufer-psikolog` |
| AG Nilufer Semt (Test) — başlangıçta duraklatılmış | `/lokasyon/nilufer-psikolog` |
| AG Bursa Psikolog | `/` |
| AG Bursa Randevu Iletisim | `/nilufer-bursa-psikolog-randevu` |
| AG Fiyat | `/makale/bursa-psikolog-fiyatlari` |
| AG Online — başlangıçta duraklatılmış | `/online-terapi` |

Anahtar kelime araştırması (`bursa-psikolog-anahtar-kelimeler.canvas.tsx`) `keywords.csv` ile hizalıdır: Tier A head terimler + randevu/fiyat/kaygı/çift; semt ve online grupları duraklatılmış test. **Klinik psikolog** kelimeleri pozitif listede yoktur — unvan iddiası yok; `negative-keywords.csv` içinde phrase negatif.

### BPS - B Kaygi
| Reklam grubu | Final URL |
|--------------|-----------|
| AG Kaygi Panik | `/hizmetler/anksiyete-terapisi-bursa` |

### BPS - C Iliski
| Reklam grubu | Final URL |
|--------------|-----------|
| AG Iliski Cift | `/hizmetler/cift-terapisi-bursa` |

## İçe aktarma sırası

1. Ads’te 3 kampanyayı ve 8 reklam grubunu yukarıdaki isimlerle oluşturun (veya Editor’da oluşturun). Semt ve Online gruplarını ilk 7 gün duraklatılmış tutun; A grupları veri üretince açın.
2. `import/keywords.csv` → Keywords yükleyin (Campaign / Ad group adları birebir eşleşmeli).
3. `import/negative-keywords.csv` → Negative keywords (Campaign seviyesi; Account satırlarını hesap negatiflerine de ekleyebilirsiniz).
4. `rsa-copy.md` içindeki başlık/açıklamaları her reklam grubuna 1 RSA olarak yapıştırın.
5. Dönüşüm: aşağıdaki “WhatsApp dönüşümü” adımları.

## WhatsApp dönüşümü (site + Ads)

### Site (deploy sonrası)

Vercel / hosting ortam değişkenleri:

```
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_WA_SEND_TO=AW-XXXXXXXXX/YYYYYYYY
```

`AW-...` ve dönüşüm etiketi Ads → Hedefler → Dönüşümler → Yeni → **Web sitesi** → kategori **İletişim** / tıklama ile oluşturulur.
Olay adı sitede: `whatsapp_click` (gtag `conversion` + `send_to`).

### Ads

1. Dönüşüm oluştur: “WhatsApp tıklama”
2. Kaynak: Web sitesi etiketi (gtag) — `send_to` değerini env’e yazın
3. Sayılan: Her / Bir (tercihen **Her**)
4. Kampanyalarda bu dönüşümü birincil hedef yapın (Maximize conversions aşamasında)

## Reklam dili (zorunlu)

Kullan: Bize ulaşın, WhatsApp ile yazın, Nilüfer Özlüce, Hacettepe, Bursa Psikolog, Psikolog Bursa  
Kullanma: Randevu al, danışan kabul, garantili tedavi, en iyi psikolog, klinik psikolog, uzman klinik psikolog

## İlk 14 gün

`optimize-14-days.md` kontrol listesini izleyin.
