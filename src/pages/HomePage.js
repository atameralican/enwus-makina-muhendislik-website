import CoreLayout from "../components/CoreLayout";
import ImgCardComponent from "../components/ImgCardComponent";
//photos
import arge from "../assets/images/home-page/arge.webp";
import mekanik from "../assets/images/home-page/mekanik-kucuk.webp";
import sacKesim from "../assets/images/home-page/sackesim.webp";
import talasli from "../assets/images/home-page/talasli.webp";
import savunma from "../assets/images/faaliyetler/savunma/savunma1.webp";
import kaynakli from "../assets/images/home-page/kaynakli.webp";
import hidrolik from "../assets/images/home-page/hidrolik.webp";
import hirdavat from "../assets/images/home-page/hirdavat.webp";
import banner from "../assets/images/home-page/banner.webp";
import banner_kucuk from "../assets/images/home-page/banner-kucuk.webp";
import SeoHelmet from "components/SeoHelmet";
const HomePage = () => {
  return (
    <>
      <SeoHelmet
        title="Enwus Makina Mühendislik | Endüstriyel Üretimin Güvenilir Ortağı"
        description="Ankara merkezli makina mühendisliği firması. CNC talaşlı imalat, kaynak, hidrolik pnömatik, sac kesim, AR-GE hizmetleri. ISO 9001 sertifikalı kalite."
        keywords="Ankara makina mühendislik, CNC talaşlı imalat, kaynaklı imalat, hidrolik pnömatik sistemler, sac kesim büküm, AR-GE mühendislik, Ostim endüstriyel üretim, savunma sanayi parçaları, mekanik tesisat, endüstriyel otomasyon, hassas parça üretimi, kaliteli üretim Ankara"
        url="https://www.enwus.com/"
        image="https://enwus.com/static/media/banner.0835c9499db3c9a689dd.webp"
        schemaData={homePageSchema}
      />
      <CoreLayout
        bannerImg={banner}
        bannerTitle="Endüstriyel Üretimin Güvenilir Ortağı"
        bannerText="Enwus Makina Mühendislik"
        bannerKucuk={banner_kucuk}
        bannerAlt="Enwus Makina Mühendislik - Anasayfa"
      >
        <div className="container mt-3 mb-3">
          <div className="hero-content col-md-8 text-justify text-primary-emphasis lh-base fw-light">
            <h2 className="mb-3 fw-bold text-md-start text-center text-primary-emphasis ">
              Endüstriyel Üretimin Güvenilir Ortağı
            </h2>
            <p className="fw-bold ">
              Enwus Makina Mühendislik, endüstriyel üretim sektöründe,
              Türkiye'nin önde gelen üretim çözümleri sağlayıcılarından biri
              olarak hizmet vermektedir. Modern makine parkurumuz ve uzman
              kadromuzla, savunma sanayinden otomotive, havacılıktan enerji
              sektörüne kadar geniş bir yelpazede faaliyet gösteriyoruz.
            </p>

            <p className="mb-4">
              Üretim tesislerimizde en son teknoloji CNC tezgahları, ileri düzey
              kaynak sistemleri ve hassas ölçüm cihazları ile çalışıyoruz.
              Kalite kontrol süreçlerimiz, uluslararası standartlara uygun
              olarak yürütülmekte ve her bir ürünümüz detaylı kalite
              testlerinden geçirilmektedir.
            </p>

            <p className="mb-5">
              AR-GE departmanımız, sürekli olarak yeni teknolojileri takip
              ederek ve inovatif çözümler geliştirerek müşterilerimizin değişen
              ihtiyaçlarına cevap vermektedir. Hidrolik sistemlerden mekanik
              tesisata, talaşlı imalattan hassas parça üretimine kadar tüm
              süreçlerde mükemmelliği hedefliyoruz.
            </p>

            <div className="key-features mb-5 ">
              <h3 className="h4 mb-4 fw-bold">
                Neden Bizi Tercih Etmelisiniz?
              </h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  ✓ ISO 9001:2015 sertifikalı üretim süreçleri
                </li>
                <li className="mb-2">✓ Deneyimli mühendis ve teknik kadro</li>
                <li className="mb-2">✓ Modern makine parkuru</li>
                <li className="mb-2">✓ Zamanında teslimat garantisi</li>
                <li className="mb-2">✓ Rekabetçi fiyat politikası</li>
              </ul>
            </div>
          </div><hr></hr>
          <div className="row gy-3 gx-3 ">
            <div></div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="AR-GE ve Mühendislik"
                description="AR-GE ve Mühendislik birimimiz, yenilikçi çözümler geliştirmek ve ürünlerimize değer katmak amacıyla sürekli araştırma ve tasarım faaliyetleri yürütmektedir."
                image={arge}
                link="/arge"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Talaşlı İmalat"
                description="CNC torna ve freze makineleri ile hassas parça işleme"
                image={talasli}
                link="/talasli-imalat"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Savunma Sanayi"
                description="Savunma sanayisinde tasarım, üretim ve montaj süreçlerimizde ölçülebilir kalite, doğruluk ve güvenilirlik ilkelerini benimsiyoruz."
                image={savunma}
                link="/savunma-sanayi"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Kaynaklı İmalat"
                description="MIG, TIG ve gazaltı kaynak teknikleriyle güçlü birleştirme"
                image={kaynakli}
                link="/kaynakli-imalat"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Sac Kesim ve Büküm Silindir"
                description="Lazer/plazma kesim, abkant büküm hizmetleri ve silindir büküm hizmetleri"
                image={sacKesim}
                link="/sac-kesim-bukum"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Hidrolik & Pnömatik Sistemler"
                description="Endüstriyel otomasyon ve akış kontrol çözümleri"
                image={hidrolik}
                link="/hidrolik-pnomatik"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Mekanik Tesisat"
                description="Boru ve ek parçaları flanş,dirsek,tee,redüksüyon,kep,3000Lb - 6000Lb dişli ve Sw fittingsler"
                image={mekanik}
                link="/mekanik-tesisat"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Test Ekipmanları"
                description="..."
                image={hirdavat}
                link="/test-ekipmanlari"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Toptan Hırdavat"
                description="İnşaattan sanayiye, mobilyadan otomotive kadar pek çok sektöre yönelik hırdavat ve teknik malzeme tedariki sağlamaktayız"
                image={hirdavat}
                link="/hirdavat"
              />
            </div>
          </div>
        </div>
      </CoreLayout>
    </>
  );
};

export default HomePage;

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.enwus.com/#organization",
  name: "Enwus Makina Mühendislik",
  alternateName: "Enwus Makina",
  url: "https://www.enwus.com",
  logo: "https://www.enwus.com/static/media/logo-kucuk-beyaz.60bd22569041796544bb.webp",
  image: "https://enwus.com/static/media/banner.0835c9499db3c9a689dd.webp",
  description:
    "Ankara merkezli endüstriyel üretim ve makina mühendisliği çözümleri sunan güvenilir firma",
  legalName: "Enwus Makina Mühendislik Ltd. Şti.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ostim OSB, 1271. Sk. No:12",
    addressLocality: "Ankara",
    addressRegion: "Ankara",
    postalCode: "06374",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.977726",
    longitude: "32.749916",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-506-878-5766",
    contactType: "customer service",
    email: "info@enwus.com",
    availableLanguage: ["Turkish", "English"],
    areaServed: "TR",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Endüstriyel Üretim Hizmetleri",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Talaşlı İmalat",
        description: "CNC torna ve freze ile hassas parça üretimi",
      },
      {
        "@type": "OfferCatalog",
        name: "Kaynaklı İmalat",
        description: "MIG, TIG ve gazaltı kaynak hizmetleri",
      },
      {
        "@type": "OfferCatalog",
        name: "Hidrolik Pnömatik",
        description: "Endüstriyel otomasyon çözümleri",
      },
      {
        "@type": "OfferCatalog",
        name: "Sac Kesim Büküm",
        description: "Lazer kesim ve abkant büküm",
      },
      {
        "@type": "OfferCatalog",
        name: "AR-GE Mühendislik",
        description: "Ürün geliştirme ve tasarım",
      },
      {
        "@type": "OfferCatalog",
        name: "Mekanik Tesisat",
        description: "HVAC ve tesisat sistemleri",
      },
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  sameAs: ["https://www.linkedin.com/company/enwus-makina"],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 9001:2015 Kalite Yönetim Sistemi",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 14001 Çevre Yönetim Sistemi",
    },
  ],
  knowsAbout: [
    "CNC Tezgah İşleme",
    "Kaynak Teknolojileri",
    "Hidrolik Sistemler",
    "Endüstriyel Otomasyon",
    "Makina Mühendisliği",
    "Savunma Sanayi",
  ],
};
