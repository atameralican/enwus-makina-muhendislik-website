import AboutUsCard from "../components/AboutUsCard";
// Images
import arge from "../assets/images/about-us/arge.webp";
import kaynakli from "../assets/images/about-us/kaynakl.webp";
import mekanik from "../assets/images/about-us/mekanik-tesisat.webp";
import montaj from "../assets/images/about-us/montaj.webp";
import talasli from "../assets/images/about-us/talasli.webp";
import sackesim from "../assets/images/about-us/sackesim.webp";
import hidrolikPnomatik from "../assets/images/about-us/hidrolik.webp";
import "../assets/styles/about-us.css";
import SeoHelmet from "components/SeoHelmet";
const AboutUs = () => {
  return (
    <>
    <SeoHelmet
        title="Hakkımızda - Enwus Makina Mühendislik | Endüstriyel Üretim Uzmanı"
        description="2008'den beri Ankara'da hizmet veren makina mühendisliği firması. 5000 m² modern tesis, ISO 9001 kalite sistemi, deneyimli mühendis kadrosu ile güvenilir çözümler."
        keywords="Enwus Makina hakkında, Ankara makina mühendislik firması, ISO 9001 sertifikalı üretim, endüstriyel üretim uzmanı, 5000 m² üretim tesisi, makina mühendisliği deneyimi, Ostim sanayici, kaliteli üretim firması, mühendislik çözümleri Ankara"
        url="https://www.enwus.com/hakkimizda"
        image="https://enwus.com/static/media/hizmetlerBan.a185687c9d75711158bd.webp"
        schemaData={aboutUsSchema}
      />
      <section className="py-5 about-us-section">
        <div className="container">
          <div className="hero-content col-md-8 text-justify text-primary-emphasis lh-base fw-light">
            <h2 className="mb-3 fw-bold text-md-start text-center text-primary-emphasis ">
              Endüstriyel Üretimin Güvenilir Ortağı
            </h2>
            <p className="fw-bold ">
              Ankara merkezli Enwus Makina Mühendislik, talaşlı ve kaynaklı
              imalat başta olmak üzere geniş hizmet yelpazesiyle savunma, makine
              ve endüstriyel sektörlerin önde gelen çözümlerini sunar.
            </p>

            <p className="mb-4">
              Kurulduğumuz günden bu yana, kalite odaklı üretim anlayışımız ve
              müşteri memnuniyetini esas alan yaklaşımımızla sektörümüzde öncü
              kuruluşlardan biri haline geldik.
            </p>
            <p className="mb-4">
              5000 m²'lik modern üretim tesisimizde, son teknoloji CNC
              tezgahları, hassas ölçüm cihazları ve ileri düzey üretim
              ekipmanlarıyla hizmet veriyoruz. Deneyimli mühendis kadromuz ve
              kalifiye çalışanlarımızla, kompleks projeleri başarıyla hayata
              geçiriyoruz.
            </p>
            <p className="mb-4">
              Kalite yönetim sistemimiz ISO 9001:2015 sertifikası ile
              belgelendirilmiş olup, tüm üretim süreçlerimiz uluslararası
              standartlara uygun şekilde yürütülmektedir. Çevre dostu üretim
              politikamız kapsamında ISO 14001 Çevre Yönetim Sistemi
              sertifikasına da sahibiz.
            </p>
            <h3 className="h4  fw-bold">Misyonumuz</h3>
            <p className="mb-4">
              Müşterilerimize en yüksek kalitede üretim çözümleri sunarak, Türk
              sanayisinin gelişimine katkıda bulunmak ve global pazarda ülkemizi
              başarıyla temsil etmek.
            </p>
            <h3 className="h4  fw-bold">Vizyonumuz</h3>
            <p className="mb-4">
              Endüstriyel üretim sektöründe teknoloji ve inovasyonun öncüsü
              olarak, uluslararası pazarda tercih edilen bir marka haline
              gelmek.
            </p>
          </div>

          <div className="row gy-3 gx-5 mt-5">
            <div className="col-md-6">
              <AboutUsCard
                image={arge}
                name="AR-GE ve Mühendislik"
                position={""}
                description="AR-GE ve Mühendislik birimimiz, yenilikçi çözümler geliştirmek ve ürünlerimize değer katmak amacıyla sürekli araştırma ve tasarım faaliyetleri yürütmektedir."
              />
            </div>
            <div className="col-md-6">
              <AboutUsCard
                image={talasli}
                name="Talaşlı İmalat"
                position={""}
                description="CNC torna ve freze makineleri ile hassas parça işleme"
              />
            </div>
            <div className="col-md-6">
              <AboutUsCard
                image={kaynakli}
                name="Kaynaklı İmalat"
                position={{ color: "primary" }}
                description="MIG, TIG ve gazaltı kaynak teknikleriyle güçlü birleştirme"
              />
            </div>
            <div className="col-md-6">
              <AboutUsCard
                image={hidrolikPnomatik}
                name="Hidrolik & Pnömatik Sistemler"
                position={""}
                description="Endüstriyel otomasyon ve akış kontrol çözümleri"
              />
            </div>
            <div className="col-md-6">
              <AboutUsCard
                image={mekanik}
                name="Mekanik Tesisat"
                position={""}
                description="Boru ve ek parçaları flanş,dirsek,tee,redüksüyon,kep,3000Lb - 6000Lb dişli ve Sw fittingsler "
              />
            </div>
            <div className="col-md-6">
              <AboutUsCard
                image={sackesim}
                name="Sac Kesim ve Büküm Silindir"
                position={""}
                description="Lazer/plazma kesim, abkant büküm hizmetleri ve silindir büküm hizmetleri"
              />
            </div>
            <div className="col-md-6">
              <AboutUsCard
                image={montaj}
                name="Montaj Hizmetleri"
                position={""}
                description="Makine ve sistem kurulumlarında profesyonel montaj çözümleri"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

const aboutUsSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Hakkımızda - Enwus Makina Mühendislik",
  "description": "Ankara merkezli Enwus Makina Mühendislik'in kuruluş hikayesi, misyon ve vizyonu",
  "url": "https://www.enwus.com/hakkimizda",
  "mainEntity": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik",
    "description": "Talaşlı ve kaynaklı imalat başta olmak üzere geniş hizmet yelpazesi sunan makina mühendisliği firması",
    "mission": "Müşterilerimize en yüksek kalitede üretim çözümleri sunarak, Türk sanayisinin gelişimine katkıda bulunmak",
    "vision": "Endüstriyel üretim sektöründe teknoloji ve inovasyonun öncüsü olarak, uluslararası pazarda tercih edilen marka olmak",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ostim OSB, 1271. Sk. No:12",
      "addressLocality": "Ankara",
      "postalCode": "06374",
      "addressCountry": "TR"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO 9001:2015 Kalite Yönetim Sistemi"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO 14001 Çevre Yönetim Sistemi"
      }
    ],
    "facilitySize": "5000 square meters",
    "numberOfEmployees": "25-50"
  }
};
