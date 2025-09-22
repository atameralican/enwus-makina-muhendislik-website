import React from "react";
import post5 from "assets/images/faaliyetler/arge/arge5.webp";
import post4 from "assets/images/faaliyetler/arge/arge1.webp";
import post3 from "assets/images/faaliyetler/arge/arge2.webp";
import post2 from "assets/images/faaliyetler/arge/arge3.webp";
import post1 from "assets/images/faaliyetler/arge/arge4.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "../components/SeoHelmet";

const Arge = () => {
  const images = [post1, post2, post3, post4,post5];

  return (
    <>
      <SeoHelmet
        title="AR-GE - Enwus Makina Mühendislik"
        description="AR-GE ve mühendislik hizmetleri ile yenilikçi çözümler üretiyoruz. Tasarımdan prototipe, testten ürün geliştirmeye kadar tüm süreçlerde profesyonel destek."
        keywords="AR-GE hizmetleri, mühendislik çözümleri, ürün geliştirme, prototipleme, mühendislik analizi, simülasyon hizmetleri, tasarım mühendisliği, teknoloji geliştirme, AR-GE danışmanlığı, ürün tasarımı, mühendislik test, inovasyon hizmetleri, teknoloji transferi, AR-GE projesi, mühendislik araştırma, Ankara AR-GE, makina mühendisliği, ürün optimizasyonu"
        url="https://www.enwus.com/arge"
        image="https://www.enwus.com/static/media/arge.c48ccc65e76e195a0ce0.webp"
        schemaData={argeSchema}
      />
      <FaaliyetlerPageComponent
        title="AR-GE ve Mühendislik"
        images={images}
        children={
          <>
            <p>
              Firmamızın yenilikçi vizyonunu taşıyan AR-GE ve Mühendislik
              Departmanı, sektörel gelişmeleri yakından takip ederek müşteri
              ihtiyaçlarına özel, yüksek katma değerli çözümler üretmektedir.
              Teknolojiyi etkin biçimde kullanan ve sürekli gelişimi hedefleyen
              ekibimiz, tasarımdan prototiplemeye, testten ürün geliştirmeye
              kadar tüm süreçlerde aktif rol almaktadır. AR-GE çalışmalarımızda
              temel amacımız; ürünlerimizin performansını artırmak, maliyetleri
              optimize etmek ve çevresel sürdürülebilirliği destekleyen yeni
              teknolojiler geliştirmektir. Bu doğrultuda üniversiteler,
              teknoparklar ve çeşitli araştırma kuruluşları ile iş birlikleri
              sürdürülmektedir. Mühendislik birimimiz ise ürün geliştirme
              süreçlerinde kalite, dayanıklılık ve işlevselliği merkeze alarak
              mühendislik analizleri, simülasyonlar ve test süreçleriyle
              tasarımlarımıza yön vermektedir. Ürün yaşam döngüsünün her
              aşamasında sistematik yaklaşım ve detaylı mühendislik
              prensipleriyle çalışmaktayız. Sahip olduğumuz bilgi birikimi,
              deneyimli kadromuz ve güçlü altyapımız sayesinde, hem yerli hem de
              uluslararası pazarlarda rekabet gücü yüksek çözümler sunmaya devam
              ediyoruz.
            </p>
          </>
        }
      />
    </>
  );
};

export default Arge;


const argeSchema = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "name": "AR-GE ve Mühendislik - Enwus Makina",
  "description": "AR-GE ve mühendislik hizmetleri ile yenilikçi çözümler üretiyoruz",
  "url": "https://www.enwus.com/arge",
  "image": "https://www.enwus.com/static/media/arge.c48ccc65e76e195a0ce0.webp",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ostim OSB, 1271. Sk. No:12",
    "addressLocality": "Ankara",
    "postalCode": "06374",
    "addressCountry": "TR"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Ürün Geliştirme",
        "description": "Tasarımdan prototipe, testten ürün geliştirmeye kadar profesyonel destek"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mühendislik Analizi",
        "description": "Simülasyon ve test süreçleriyle tasarım optimizasyonu"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Teknoloji Transferi",
        "description": "Üniversite ve araştırma kuruluşları iş birlikleri"
      }
    }
  ],
  "knowsAbout": [
    "Ürün Geliştirme",
    "Prototipleme",
    "Mühendislik Simulasyonu",
    "Teknoloji İnovasyonu",
    "AR-GE Projeleri"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AR-GE Merkezi Belgesi"
    }
  ]
};
