import React from "react";
import post1 from "assets/images/faaliyetler/sacKesim/1.webp";
import post2 from "assets/images/faaliyetler/sacKesim/2.webp";
import post3 from "assets/images/faaliyetler/sacKesim/3.webp";
import post4 from "assets/images/faaliyetler/sacKesim/4.webp";
import post5 from "assets/images/faaliyetler/sacKesim/5.webp";
import post6 from "assets/images/faaliyetler/sacKesim/6.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const SacKesimBukum = () => {
  const images = [post1, post2, post3, post4, post5, post6];
  return (
    <>
      <SeoHelmet
        title="Sac Kesim Büküm - Enwus Makina Mühendislik"
        description="Lazer kesim, plazma kesim, CNC abkant büküm ve silindir büküm hizmetleri. DKP, paslanmaz, galvaniz sac işleme. Hassas tolerans ve hızlı teslimat."
        keywords="lazer kesim hizmetleri, plazma kesim teknolojisi, CNC abkant büküm, silindir büküm imalatı, sac metal işleme, DKP sac kesimi, paslanmaz sac büküm, galvaniz sac işleme, hassas sac kesim, CNC sac büküm, metal şekillendirme, sac konstrüksiyon, özel sac parçalar, Ankara lazer kesim, Ostim sac işleme, endüstriyel sac çözümleri, sac imalat hizmetleri, hassas tolerans büküm"
        url="https://www.enwus.com/sac-kesim-bukum"
        image=""
        schemaData={sacKesimBukumSchema}
      />
      <FaaliyetlerPageComponent
        title="Sac Kesim, Abkant Büküm ve Silindir Büküm"
        children={
          <>
            <p>
              Enwus Makina Mühendislik olarak, modern üretim teknolojilerine
              dayalı sac işleme çözümlerimizle sanayiye yüksek hassasiyetli
              ürünler sunuyoruz. Lazer ve plazma kesim, abkant büküm ve silindir
              büküm hizmetlerimizle; projelerinize tam uyumlu, dayanıklı ve
              estetik parçalar üretiyoruz.
            </p>
            <strong>Hizmet kapsamımız:</strong>
            <ul>
              <li>
                Lazer ve Plazma Kesim: İnce ve kalın sac malzemelerde hızlı ve
                hassas kesim
              </li>
              <li>
                {" "}
                Abkant Büküm: CNC kontrollü makinelerle istenilen açı ve
                ölçülerde büküm
              </li>
              <li>
                {" "}
                Silindir Büküm: Silindirik formda parça üretimi, boru ve gövde
                imalatı
              </li>
              <li>
                {" "}
                Paslanmaz, DKP, galvanizli sac gibi farklı malzeme tiplerinde
                işleme
              </li>
              <li> Özel şekilli parçaların üretimi</li>
              <li> Teknik çizim ve proje desteği</li>
            </ul>
            <p>
              Hassas toleranslar ve kaliteli yüzeyler elde etmede uzmanlaşan
              firmamız, sac işleme süreçlerinde müşterilerine güvenilir,
              ekonomik ve hızlı çözümler sunar. Üretimde yüksek verimlilik
              sağlayarak, projelerinizin zamanında ve sorunsuz tamamlanmasına
              katkı sağlıyoruz.
            </p>
          </>
        }
        images={images}
      />
    </>
  );
};

export default SacKesimBukum;



const sacKesimBukumSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Sac Metal İşleme Hizmetleri",
  "name": "Sac Kesim Büküm - Enwus Makina",
  "description": "Lazer kesim, plazma kesim, CNC abkant büküm ve silindir büküm hizmetleri",
  "url": "https://www.enwus.com/sac-kesim-bukum",
  "provider": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Lazer Kesim Hizmetleri",
      "description": "CO2 ve Fiber lazer ile hassas sac kesim işlemleri"
    },
    {
      "@type": "Offer",
      "name": "Plazma Kesim",
      "description": "Kalın sac malzemelerde hızlı ve ekonomik kesim"
    },
    {
      "@type": "Offer",
      "name": "CNC Abkant Büküm",
      "description": "Programlanabilir büküm makineleri ile şekillendirme"
    },
    {
      "@type": "Offer",
      "name": "Silindir Büküm İmalatı",
      "description": "Silindirik form verme ve boru şekillendirme"
    },
    {
      "@type": "Offer",
      "name": "Özel Sac Parçaları",
      "description": "DKP, paslanmaz ve galvaniz sac işleme"
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "availableLanguage": ["tr", "en"]
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "ISO 9001 Kalite Belgesi"
    }
  ]
};