import React from "react";
import post1 from "assets/images/faaliyetler/hirdavat/hirdavat-1.webp";
import post2 from "assets/images/faaliyetler/hirdavat/hirdavat-2.webp";
import post3 from "assets/images/faaliyetler/hirdavat/hirdavat-3.webp";
import post4 from "assets/images/faaliyetler/hirdavat/hirdavat-4.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const Hirdavat = () => {
  const images = [post1, post2, post3, post4];
  return (
    <>
      <SeoHelmet
            title="Hırdavat - Enwus Makina Mühendislik"
            description="Endüstriyel ve genel hırdavat malzemeleri tedariki. Civata, somun, el aletleri, elektrikli aletler, iş güvenliği malzemeleri. Toptan ve perakende satış."
            keywords="endüstriyel hırdavat malzemeleri, civata somun tedariki, el aletleri satışı, elektrikli el aletleri, matkap ucu satışı, testere ağzı, kesici takım, aşındırıcı ürünler, iş güvenliği malzemeleri, baret eldiven maske, kompresör aksesuarları, kaynak makinesi satışı, Ankara hırdavat mağazası, toptan hırdavat, endüstriyel malzeme tedariki, teknik hırdavat ürünleri, oto yedek parça, mobilya aksesuarları"
            url="https://www.enwus.com/hirdavat"
            image="https://www.enwus.com/static/media/hirdavat-1.b7925f09c38aebe2c373.webp"
            schemaData={hirdavatSchema}
          />
      <FaaliyetlerPageComponent
        title="Hırdavat"
        children={
          <>
            <p>
              <strong>Enwus Makina Mühendislik</strong>, yılların verdiği
              tecrübe ve müşteri memnuniyeti odaklı hizmet anlayışıyla, hırdavat
              sektöründe geniş ürün yelpazesi ve kaliteli hizmet anlayışı ile
              öne çıkan köklü bir kuruluştur. Kuruluşumuzdan bu yana hem
              bireysel hem de kurumsal müşterilerimize; inşaattan sanayiye,
              mobilyadan otomotive kadar pek çok sektöre yönelik hırdavat ve
              teknik malzeme tedariki sağlamaktayız. Amacımız, kaliteli ürünleri
              en uygun fiyatlarla müşterilerimizle buluşturmak, ihtiyaçlara
              yönelik en doğru ve hızlı çözümleri sunmaktır.
            </p>
            <strong> Genel Hırdavat Ürünleri</strong>
            <ul>
              <li>Civata, somun, pul, rondela grupları</li>
              <li>
                Matkap ucu, testere, zımpara, kesici ve aşındırıcı ürünler
              </li>
              <li>
                El aletleri: Tornavidalar, pense, çekiç, keski, anahtar
                takımları
              </li>
              <li>Elektrikli el aletleri ve aksesuarları</li>
              <li>
                Dolap, menteşe, ray sistemleri ve mobilya bağlantı elemanları
              </li>
              <li>Endüstriyel tip el aletleri ve sarf malzemeleri</li>
              <li>
                Kompresör bağlantı elemanları, hava tabancaları ve hortum
                sistemleri
              </li>
              <li>Kaynak makineleri ve ekipmanları</li>
              <li>
                İş güvenliği malzemeleri (baret, gözlük, eldiven, maske vs.)
              </li>
              <li>Endüstriyel temizlik ve bakım ürünleri</li>
            </ul>
          </>
        }
        images={images}
      />
    </>
  );
};

export default Hirdavat;

const hirdavatSchema = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "name": "Hırdavat - Enwus Makina Mühendislik",
  "description": "Endüstriyel ve genel hırdavat malzemeleri tedariki",
  "url": "https://www.enwus.com/hirdavat",
  "image": "https://www.enwus.com/static/media/hirdavat-1.b7925f09c38aebe2c373.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ostim OSB, 1271. Sk. No:12",
    "addressLocality": "Ankara",
    "postalCode": "06374",
    "addressCountry": "TR"
  },
  "telephone": "+90-506-878-5766",
  "priceRange": "₺₺",
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "El Aletleri",
        "description": "Tornavida, pense, çekiç ve anahtar takımları"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Bağlantı Elemanları",
        "description": "Civata, somun, pul ve rondela çeşitleri"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Elektrikli El Aletleri",
        "description": "Matkap, testere, kesici ve aşındırıcı ürünler"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "İş Güvenliği Malzemeleri",
        "description": "Baret, eldiven, maske ve güvenlik ekipmanları"
      }
    }
  ],
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "TRY"
};
