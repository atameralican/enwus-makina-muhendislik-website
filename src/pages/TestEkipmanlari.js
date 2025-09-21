import React from "react";
import post4 from "assets/images/home-page/banner-kucuk.webp";
import post3 from "assets/images/home-page/banner-kucuk.webp";
import post2 from "assets/images/home-page/banner-kucuk.webp";
import post1 from "assets/images/home-page/banner-kucuk.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const TestEkipmanlari = () => {
  const images = [post1, post2, post3, post4];
  return (
    <>
      <SeoHelmet
        title="Test Ekipmanları - Enwus Makina Mühendislik"
        description="Endüstriyel test ve ölçüm cihazları. Kalite kontrol ekipmanları, hassas ölçüm aletleri, kalirasyon hizmetleri. Güvenilir test çözümleri."
        keywords="endüstriyel test cihazları, kalite kontrol ekipmanları, ölçüm aletleri satışı, test ekipmanı kiralama, kalirasyon hizmetleri, hassas ölçüm, NDT test cihazları, ultrasonik test, penetrant test, manyetik parçacık testi, sertlik ölçüm cihazları, koordinat ölçüm makinesi, test laboratuvarı ekipmanları, Ankara test cihazları, ölçüm standartları, kalibrasyon sertifikası, test ve analiz hizmetleri, metroloji çözümleri"
        url="https://www.enwus.com/test-ekipmanlari"
        schemaData={testEkipmanSchema}
      />
      <FaaliyetlerPageComponent
        title="TestEkipmanlari "
        images={images}
        children={<p>TestEkipmanlari Page</p>}
      />
    </>
  );
};

export default TestEkipmanlari;


const testEkipmanSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Test ve Ölçüm Cihazları",
  "name": "Test Ekipmanları - Enwus Makina",
  "description": "Endüstriyel test ve ölçüm cihazları, kalite kontrol ekipmanları",
  "url": "https://www.enwus.com/test-ekipmanlari",
  "provider": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "NDT Test Cihazları",
      "description": "Tahribatsız muayene ve test ekipmanları"
    },
    {
      "@type": "Offer",
      "name": "Kalirasyon Hizmetleri",
      "description": "Hassas ölçüm cihazlarının kalibrasyonu"
    },
    {
      "@type": "Offer",
      "name": "Kalite Kontrol Ekipmanları",
      "description": "Endüstriyel ölçüm ve kontrol cihazları"
    },
    {
      "@type": "Offer",
      "name": "Sertlik Ölçüm Cihazları",
      "description": "Metal sertlik test ve ölçüm sistemleri"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Metroloji Yeterlilik Belgesi"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Kalirasyon Laboratuvarı Belgesi"
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "availableLanguage": ["tr", "en"]
  }
};