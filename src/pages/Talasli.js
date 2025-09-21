import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import post1 from "assets/images/faaliyetler/talasli/talasli1.webp";
import post2 from "assets/images/faaliyetler/talasli/talasli2.webp";
import post3 from "assets/images/faaliyetler/talasli/talasli3.webp";
import post4 from "assets/images/faaliyetler/talasli/talasli4.webp";
import post5 from "assets/images/faaliyetler/talasli/talasli5.webp";
import post6 from "assets/images/faaliyetler/talasli/talasli6.webp";
import post7 from "assets/images/faaliyetler/talasli/talasli7.webp";
import post8 from "assets/images/faaliyetler/talasli/talasli8.webp";
import SeoHelmet from "components/SeoHelmet";

const Talasli = () => {
  const images = [post1, post2, post3, post4, post5, post6, post7, post8];
  return (
    <>
      <SeoHelmet
            title="Talasli İmalat - Enwus Makina Mühendislik"
            description="Yüksek hassasiyetli CNC torna, freze ve dik işleme hizmetleri. Alüminyum, çelik, paslanmaz malzemelerde prototip ve seri üretim. Ankara Ostim talaşlı imalat."
            keywords="CNC torna işleme, CNC freze hizmetleri, talaşlı imalat Ankara, hassas parça üretimi, CNC dik işleme, prototip imalatı, seri üretim hizmetleri, alüminyum işleme, çelik torna, paslanmaz çelik işleme, CAD CAM programlama, özel parça imalatı, Ostim CNC işleme, metal işleme teknolojisi, kalıp parçası üretimi, hassas tolerans işleme, 3D teknik çizim, CNC tezgah işleme, savunma sanayi parçaları"
            url="https://www.enwus.com/talasli-imalat"
            image="https://www.enwus.com/static/media/talasli5.add86f71c17fc7f57812.webp"
            schemaData={talasliImalatSchema}
          />
      <FaaliyetlerPageComponent
        title="Talaşlı İmalat"
        children={
          <>
            <p>
              Firmamız, talaşlı imalat alanında yüksek hassasiyet ve kalite
              standartlarına uygun çözümler sunmaktadır. CNC torna, dik işleme
              ve freze makinelerimizle; karmaşık geometrilere sahip, milimetrik
              hassasiyet gerektiren parçaların üretimini başarıyla
              gerçekleştiriyoruz. Prototip üretimden seri imalata kadar her
              aşamada, müşteri taleplerine özel çözümler geliştiriyor, teknik
              çizim ve ölçülere birebir sadık kalarak çalışıyoruz.
            </p>
            <strong>Hizmet kapsamımız:</strong>
            <ul>
              <li>CNC torna &amp; dik işleme</li>
              <li>Frezeleme ve delme işlemleri</li>
              <li>
                Alüminyum, çelik, paslanmaz çelik, pirinç ve plastik gibi
                malzemelerin işlenmesi
              </li>
              <li>Tek parça ve seri üretim hizmetleri</li>
              <li>3D teknik çizime uygun özel parça üretimi</li>
              <li>Kalite kontrol ve ölçüm raporlama</li>
            </ul>
            <p>
              {" "}
              Enwus Makina Mühendislik olarak talaşlı imalatta; yüksek doğruluk,
              hızlı teslimat ve teknik danışmanlık hizmetlerimizle iş
              ortaklarımıza değer katıyoruz.
            </p>
          </>
        }
        images={images}
      />
    </>
  );
};

export default Talasli;


const talasliImalatSchema = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "name": "Talaşlı İmalat - Enwus Makina",
  "description": "Yüksek hassasiyetli CNC torna, freze ve dik işleme hizmetleri",
  "url": "https://www.enwus.com/talasli-imalat",
  "image": "https://www.enwus.com/static/media/talasli5.add86f71c17fc7f57812.webp",
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
        "name": "CNC Torna İşleme",
        "description": "Yüksek hassasiyetli CNC torna ile metal parça üretimi"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "CNC Freze Hizmetleri",
        "description": "Kompleks geometrilerde frezeleme işlemleri"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "CNC Dik İşleme",
        "description": "Hassas toleranslarda dikey işleme merkezi hizmetleri"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Prototip İmalatı",
        "description": "Tek parça ve seri üretim öncesi prototip çalışmaları"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Kalite Kontrol",
        "description": "3D ölçüm ve kalite kontrol raporlama"
      }
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "TSE Kalite Belgesi"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "ISO 9001:2015 Belgesi"
    }
  ],
  "numberOfEmployees": "10-50",
  "foundingDate": "2008",
  "industry": "Metal İşleme"
};
