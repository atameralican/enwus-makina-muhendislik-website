import React from "react";
import kaynak1 from "assets/images/faaliyetler/kaynak/kaynak-1.webp";
import kaynak2 from "assets/images/faaliyetler/kaynak/kaynak-2.webp";
import kaynak3 from "assets/images/faaliyetler/kaynak/kaynak-3.webp";
import kaynak4 from "assets/images/faaliyetler/kaynak/kaynak-4.webp";
import kaynak5 from "assets/images/faaliyetler/kaynak/kaynak-5.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import SeoHelmet from "components/SeoHelmet";

const Kaynakli = () => {
  const images = [kaynak1, kaynak2, kaynak3, kaynak4, kaynak5];
  return (
    <>
      <SeoHelmet
        title="Kaynakli İmalat - Enwus Makina Mühendislik"
        description="Profesyonel MIG, TIG, gazaltı kaynak hizmetleri. Çelik konstrüksiyon, makine şaseleri, taşıyıcı sistemler ve özel proje kaynak imalatları. Ankara kaynak servisi."
        keywords="MIG TIG kaynak hizmetleri, çelik konstrüksiyon kaynağı, gazaltı kaynak uygulaması, makine şasesi kaynağı, taşıyıcı sistem kaynağı, nokta kaynağı hizmetleri, kaynak konstrüksiyon, endüstriyel kaynak hizmetleri, Ankara kaynak servisi, özel pozisyon kaynağı, NDT kaynak kontrolü, kaynak kalite kontrol, paslanmaz kaynak, alüminyum kaynağı, basınçlı kap kaynağı, sertifikalı kaynakçı, kaynak mühendisliği, Ostim kaynak hizmetleri"
        url="https://www.enwus.com/kaynakli-imalat"
        image="https://www.enwus.com/static/media/kaynak.bd588001d9d079c31d79.webp"
        schemaData={kaynakliImalatSchema}
      />
      <FaaliyetlerPageComponent
        title="Kaynaklı İmalat"
        children={
          <>
            <p>
              Enwus Makina Mühendislik, kaynaklı imalat alanında endüstriyel
              standartlara uygun, güçlü ve dayanıklı birleştirme çözümleri
              sunmaktadır. Alanında uzman kaynak personelimiz ve modern
              ekipmanlarımız sayesinde; yapı parçaları, taşıyıcı sistemler ve
              özel projeler için yüksek mukavemetli kaynak uygulamaları
              gerçekleştiriyoruz.
            </p>
            <strong>Uyguladığımız kaynak teknikleri:</strong>
            <ul>
              <li>MIG (Metal İnert Gaz) Kaynağı</li>
              <li>TIG (Tungsten İnert Gaz) Kaynağı</li>
              <li>Gazaltı Kaynak Uygulamaları</li>
              <li>Nokta Kaynağı ve Özel Pozisyon Kaynakları</li>
            </ul>
            <strong>Kaynaklı imalat hizmet kapsamımız:</strong>
            <ul>
              <li> Projeye özel kaynak konstrüksiyonları</li>
              <li> Kaynaklı çelik yapı ve iskelet üretimi</li>
              <li> Makine şaseleri ve taşıyıcı sistem montajları</li>
              <li> Test edilmiş ve kontrol edilmiş kaynak dikişleri</li>
              <li> Kaynak sonrası taşlama ve yüzey temizliği</li>
              <li>
                {" "}
                İhtiyaç halinde tahribatsız test (NDT) ve muayene hizmetleri
              </li>
            </ul>
            <p>
              Firmamız, yüksek dayanıklılık gerektiren parçalarda kalite ve
              güvenliği esas alarak çalışır. Her projeye özel teknik çizim ve
              şartnamelere uygun üretim gerçekleştirir, mükemmel kaynak kalitesi
              ile ürünlerinizin performansını en üst seviyeye çıkarır.
            </p>
          </>
        }
        images={images}
      />
    </>
  );
};

export default Kaynakli;


const kaynakliImalatSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Kaynaklı İmalat Hizmetleri",
  "name": "Kaynaklı İmalat - Enwus Makina",
  "description": "Profesyonel MIG, TIG, gazaltı kaynak hizmetleri",
  "url": "https://www.enwus.com/kaynakli-imalat",
  "image": "https://www.enwus.com/static/media/kaynak.bd588001d9d079c31d79.webp",
  "provider": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "MIG Kaynak Hizmetleri",
      "description": "Metal İnert Gaz kaynağı ile endüstriyel birleştirme"
    },
    {
      "@type": "Offer",
      "name": "TIG Kaynak Uygulamaları",
      "description": "Tungsten İnert Gaz kaynağı ile hassas birleştirme"
    },
    {
      "@type": "Offer",
      "name": "Gazaltı Kaynak",
      "description": "Çelik konstrüksiyon ve yapısal kaynak uygulamaları"
    },
    {
      "@type": "Offer",
      "name": "Çelik Konstrüksiyon",
      "description": "Kaynaklı çelik yapı ve taşıyıcı sistem imalatı"
    },
    {
      "@type": "Offer",
      "name": "NDT Muayene",
      "description": "Tahribatsız test ve kaynak kalite kontrolü"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Sertifikalı Kaynakçı Belgesi"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NDT Seviye 2 Belgesi"
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "availableLanguage": ["tr", "en"]
  }
};