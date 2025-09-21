import React from "react";
import post4 from "assets/images/home-page/banner-kucuk.webp";
import post3 from "assets/images/home-page/banner-kucuk.webp";
import post2 from "assets/images/home-page/banner-kucuk.webp";
import post1 from "assets/images/home-page/banner-kucuk.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const Savunma = () => {
  const images = [post1, post2, post3, post4];
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
        children={<p>Savunma Sanayi Page</p>}
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
