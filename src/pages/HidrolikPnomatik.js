import React from "react";
import post1 from "assets/images/faaliyetler/hidrolik/1.webp";
import post2 from "assets/images/faaliyetler/hidrolik/2.webp";
import post3 from "assets/images/faaliyetler/hidrolik/3.webp";
import post4 from "assets/images/faaliyetler/hidrolik/4.webp";
import post5 from "assets/images/faaliyetler/hidrolik/5.webp";
import post6 from "assets/images/faaliyetler/hidrolik/6.webp";
import post7 from "assets/images/faaliyetler/hidrolik/7.webp";
import post8 from "assets/images/faaliyetler/hidrolik/8.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const HidrolikPnomatik = () => {
  const images = [post1, post2, post3, post4, post5, post6, post7, post8];
  return (
    <>
    <SeoHelmet
        title="Hidrolik Pnomatik - Enwus Makina Mühendislik"
        description="Ankara'da hidrolik ve pnömatik sistem tasarımı, kurulumu ve bakımı. CNC tezgah hidroliği, endüstriyel otomasyon, silindir üretimi ve teknik servis hizmetleri."
        keywords="hidrolik sistem kurulumu, pnömatik sistem tasarımı, Ankara hidrolik servis, hidrolik silindir onarımı, pnömatik valf montajı, CNC hidrolik sistemleri, endüstriyel hidrolik çözümler, hidrolik güç ünitesi, pnömatik otomasyon, hidrolik pompası, pnömatik silindir, hidrolik bakım servisi, Ostim hidrolik, otomasyon sistemi kurulumu, hidrolik yedek parça, pnömatik devre tasarımı, hidrolik hortum değişimi, iş makinesi hidroliği"
        url="https://www.enwus.com/hidrolik-pnomatik"
        image="https://www.enwus.com/static/media/hidrolik.697ffb80218fd626604f.webp"
        schemaData={hidroliklPnomatikSchema}
      />
      <FaaliyetlerPageComponent
        title="Hidrolik Pnömatik"
        children={
          <>
            <p>
              {" "}
              <strong>Enwus Makina Mühendislik</strong> olarak hidrolik ve
              pnömatik sistemler alanında uzmanlaşmış, kaliteli hizmet
              anlayışıyla sektörde fark yaratan bir mühendislik firmasıyız.
              Kuruluşumuzdan bu yana, endüstriyel tesisler, otomasyon
              sistemleri, inşaat ve iş makineleri başta olmak üzere birçok
              farklı sektöre özel çözümler sunmaktayız. Müşteri memnuniyetini
              temel ilke edinen firmamız, güçlü teknik kadrosu, yüksek kaliteli
              ekipmanları ve yenilikçi yaklaşımıyla her zaman en iyisini sunmayı
              hedeflemektedir.
            </p>
            <strong>Hidrolik Sistem Tasarımı ve Kurulumu</strong>
            <ul>
              <li>Endüstriyel ve mobil hidrolik sistem tasarımı</li>
              <li>Özel üretim hidrolik güç üniteleri</li>
              <li>Hidrolik silindir üretimi ve onarımı</li>
              <li>Hortum, valf, pompa ve filtre sistemleri kurulumu</li>
            </ul>
            <strong>Pnömatik Sistem Çözümleri</strong>
            <ul>
              <li>Pnömatik devre tasarımı ve montajı</li>
              <li>Silindir, valf ve hava hazırlık grubu temini</li>
              <li>Otomasyon sistemleri ile entegrasyon</li>
              <li>Enerji verimliliği ve bakım danışmanlığı</li>
            </ul>
            <strong>Periyodik Bakım ve Teknik Servis</strong>
            <ul>
              <li>Hidrolik ve pnömatik sistemlerde arıza tespiti</li>
              <li>Yerinde bakım ve onarım hizmeti</li>
              <li>Uzun ömürlü ve sorunsuz çalışma için periyodik kontrol</li>
            </ul>
            <strong>Yedek Parça Temini ve Satış</strong>
            <ul>
              <li>Orijinal ve uyumlu yedek parça tedariği</li>
              <li>Hızlı temin ve uygun fiyat garantisi</li>
              <li>Tüm marka ve modellere özel çözümler</li>
            </ul>
          </>
        }
        images={images}
      />
    </>
  );
};

export default HidrolikPnomatik;

const hidroliklPnomatikSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Hidrolik ve Pnömatik Sistemler",
  "name": "Hidrolik Pnömatik Sistemler - Enwus Makina",
  "description": "Ankara'da hidrolik ve pnömatik sistem tasarımı, kurulumu ve bakımı",
  "url": "https://www.enwus.com/hidrolik-pnomatik",
  "image": "https://www.enwus.com/static/media/hidrolik.697ffb80218fd626604f.webp",
  "provider": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik",
    "url": "https://www.enwus.com",
    "logo": "https://www.enwus.com/static/media/logo-kucuk-beyaz.60bd22569041796544bb.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ostim OSB, 1271. Sk. No:12",
      "addressLocality": "Ankara",
      "addressRegion": "Ankara",
      "postalCode": "06374",
      "addressCountry": "TR"
    },
    "telephone": "+90-506-878-5766"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "39.9334",
      "longitude": "32.8597"
    },
    "geoRadius": "100000"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Hidrolik Sistem Tasarımı",
      "description": "Endüstriyel ve mobil hidrolik sistem tasarımı ve kurulumu"
    },
    {
      "@type": "Offer",
      "name": "Pnömatik Sistem Çözümleri",
      "description": "Pnömatik devre tasarımı, montajı ve otomasyon entegrasyonu"
    },
    {
      "@type": "Offer",
      "name": "Teknik Servis ve Bakım",
      "description": "Hidrolik ve pnömatik sistemlerde arıza tespiti ve onarım"
    },
    {
      "@type": "Offer",
      "name": "Yedek Parça Temini",
      "description": "Orijinal ve uyumlu yedek parça tedariği"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "TSE Kalite Belgesi"
    }
  ]
};