import React from "react";
import post5 from "assets/images/faaliyetler/savunma/savunma5.webp";
import post4 from "assets/images/faaliyetler/savunma/savunma4.webp";
import post3 from "assets/images/faaliyetler/savunma/savunma3.webp";
import post2 from "assets/images/faaliyetler/savunma/savunma2.webp";
import post1 from "assets/images/faaliyetler/savunma/savunma1.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const Savunma = () => {
  const images = [post1, post2, post3, post4,post5];
  return (
    <>
      <SeoHelmet
            title="Savunma Sanayi - Enwus Makina Mühendislik"
            description="Savunma sanayine özel hassas parça üretimi ve mühendislik çözümleri. NATO standartları, kritik komponent imalatı ve güvenlik sertifikalı üretim süreçleri."
            keywords="savunma sanayi imalat, NATO standart parçaları, kritik komponent üretimi, askeri parça imalatı, güvenlik sertifikalı üretim, savunma mühendisliği, hassas silah parçaları, özel güvenlik ürünleri, savunma teknolojileri, askeri ekipman üretimi, TSE-K sertifikalı imalat, milli savunma parçaları, Ankara savunma sanayi, güvenilir tedarikçi, kalite güvence sistemi, savunma AR-GE, stratejik parça üretimi, savunma sanayicisi"
            url="https://www.enwus.com/savunma-sanayi"
            schemaData={savunmaSanayiSchema}
          />
      <FaaliyetlerPageComponent
        title="Savunma Sanayi"
        images={images}
        children={
          <>
          <p>
  Savunma sanayisi; yüksek hassasiyet, mutlak güvenlik, dayanıklılık ve ileri teknoloji entegrasyonunu gerektiren bir alandır. Enwus Makina Mühendislik olarak, bu kritik sektörün beklentilerini karşılamak için tasarım, üretim ve montaj süreçlerimizde ölçülebilir kalite, doğruluk ve güvenilirlik ilkelerini benimsiyoruz.
</p>
<p className="fw-bold">Hizmetlerimiz & Yeteneklerimiz</p>
<ul>
  <li>
    <p className="fw-bold">Yüksek Hassasiyetli Talaşlı İmalat</p>
    <p>Kritik parçalarınız için CNC tezgâhları ile milimetrik doğrulukta üretim. Hassas yüzey kontrolü, tolerans uyumu ve parça tekrarında tutarlılık sağlıyoruz.</p>
  </li>
  <li>
    <p className="fw-bold">Kaynaklı İmalat & Montaj</p>
    <p>Kaynak süreçlerimiz (MIG, TIG, otomatik kaynak vb.), kaynak sonrası işlemler ve montaj hizmetleriyle bütünleşik çözümler sunuyoruz. Güçlü kaynak birleşimleri ve mekanik dayanıklılık ön plandadır.</p>
  </li>
  <li>
    <p className="fw-bold">Sac Metal İşleme & Prototip Geliştirme</p>
    <p>Sac kesim, büküm, delik açma gibi sac metal işlemleri; prototipleme ve küçük seri üretim ile yenilikçi ürün geliştirme destekleriyle size özel çözümler üretiyoruz.</p>
  </li>
  <li>
    <p className="fw-bold">Antistatik Kauçuk Ürün</p>
    <p>Özel tasarım ve mühimmat taşıma parçaları için yüzey direnci 10^6 – 10^11 ohm olarak üretim gerçekleştirilmektedir.</p>
  </li>
  <li>
    <p className="fw-bold">Proje Yönetimi & Sürdürülebilir Üretim</p>
    <p>Tasarım aşamasından test ve montaja kadar tüm adımlarda kalite güvence süreçleri, verimlilik analizleri ve çevresel sürdürülebilirlik kriterleri uygulanmaktadır.</p>
  </li>
</ul>

<p className="fw-bold">Avantajlarımız</p>
<ul>
  <li>Türk savunma sanayisinin standartlarına uygunluk ve yerli/yabancı sertifikalar ile belgelendirilmiş üretim.</li>
  <li>Modern makine parkı ve tecrübeli mühendis & teknisyen kadrosu ile yüksek kapasite.</li>
  <li>Proje teslim süreleri ve maliyet optimizasyonunda hassas planlama.</li>
  <li>Gizlilik, güvenlik ve projelerin hassasiyetine göre uygun koruma önlemleri.</li>
</ul>
<p>
  Enwus Makina Mühendislik, savunma sanayiindeki stratejik iş ortaklarına güvenli, yenilikçi ve yerli çözümler sunmaya hazırdır. Özel bir parça imalatından entegre sistem montajına kadar her projede yanınızdayız.
</p>
<p>
  Bizimle iletişime geçin; taleplerinizi teknik uzmanlarımızla birlikte en ideal şekilde karşılayalım.
</p>
          </>
        }
      />
    </>
  );
};

export default Savunma;


const savunmaSanayiSchema = {
  "@context": "https://schema.org",
  "@type": "DefenseContractor",
  "name": "Savunma Sanayi - Enwus Makina",
  "description": "NATO standartlarında savunma sanayi parçaları üretimi",
  "url": "https://www.enwus.com/savunma-sanayi",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Kritik Komponent Üretimi",
      "description": "Savunma sanayine özel hassas parça imalatı"
    },
    {
      "@type": "Offer",
      "name": "NATO Standart Parçaları",
      "description": "Uluslararası standartta güvenlik parçaları"
    },
    {
      "@type": "Offer",
      "name": "Güvenlik Sertifikalı Üretim",
      "description": "Kontrollü üretim ortamında özel imalat"
    }
  ],
  "knowsAbout": [
    "NATO Standartları",
    "Kritik Komponent Üretimi",
    "Güvenlik Sertifikasyonu",
    "Hassas Parça İmalatı",
    "Savunma Teknolojileri"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NATO Tedarikçi Sertifikası"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "TSE-K Güvenlik Belgesi"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AQAP Kalite Güvence Belgesi"
    }
  ],
  "securityClearance": "Gizli",
  "areaServed": "TR"
};
