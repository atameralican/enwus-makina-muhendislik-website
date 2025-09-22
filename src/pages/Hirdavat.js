import React from "react";
import post1 from "assets/images/faaliyetler/hirdavat/hirdavat1.webp";
import post2 from "assets/images/faaliyetler/hirdavat/hirdavat2.webp";
import post3 from "assets/images/faaliyetler/hirdavat/hirdavat3.webp";
import post4 from "assets/images/faaliyetler/hirdavat/hirdavat4.webp";
import post5 from "assets/images/faaliyetler/hirdavat/hirdavat5.webp";
import post6 from "assets/images/faaliyetler/hirdavat/hirdavat6.webp";
import post7 from "assets/images/faaliyetler/hirdavat/hirdavat7.webp";
import post8 from "assets/images/faaliyetler/hirdavat/hirdavat7.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const Hirdavat = () => {
  const images = [post1, post2, post3, post4, post5, post6, post7, post8];
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
              <strong>Enwus Makina Mühendislik</strong>, Kurumsal müşterilerimize; inşaattan sanayiye, otomotive kadar pek çok sektöre yönelik hırdavat ve teknik malzeme tedariki sağlamaktayız. Amacımız, kaliteli ürünleri en uygun fiyatlarla müşterilerimizle buluşturmak, ihtiyaçlara yönelik en doğru ve hızlı çözümleri sunmaktır.
            </p>
            <strong className="fw-bold"> Genel Hırdavat Ürünleri</strong>
            <ul>
              <li>Ex-proof el aletleri (Kıvılcım çıkarmaz)</li>
              <li>Yer işaretleme bantları</li>
              <li>Anti-Korozyon Bandı</li>
              <li>Civata somun, pul, rondela grupları</li>
              <li>Pirinç bağlantı elemanları</li>
              <li>El aletleri: Tornavidalar, pense, çekiç, keski, anahtar takımları</li>
              <li>Elektrikli el aletleri ve aksesuarları</li>

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
