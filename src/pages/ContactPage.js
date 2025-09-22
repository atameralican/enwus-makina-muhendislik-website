import "../assets/styles/contact.css";
import "leaflet/dist/leaflet.css";
import contact from "assets/images/contact-page/contact.webp";
import profilePicture from "assets/images/logo-kucuk-beyaz.webp";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BsTelephone ,BsEnvelope } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import SeoHelmet from "components/SeoHelmet";


const Contact = () => {
  return (
    <>
    <SeoHelmet
        title="İletişim - Enwus Makina Mühendislik | Ankara Ostim"
        description="Enwus Makina Mühendislik iletişim bilgileri. Ostim OSB 1271. Sk. No:12 Ankara adresinde hizmetinizdeyiz. Tel: (0506) 878 57 66"
        keywords="Enwus iletişim, Ankara makina mühendislik telefon, Ostim makina firması adres, Enwus Makina telefon numarası, makina mühendislik iletişim Ankara, Ostim OSB adres, mühendislik firması telefon"
        url="https://www.enwus.com/iletisim"
        image="https://enwus.com/static/media/iletisimBanner.5bde6b9c63d5a32fa08d.webp"
        schemaData={contactSchema}
      />
      <section className="py-5 contact-section">
        {/* Circle Avatar Logo*/}
        <div className="banner-logo-circle">
          <img
            src={profilePicture}
            alt="Enwus Makina"
            className="rounded-circle shadow-lg"
            style={{ width: "110px", height: "110px", objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        <div className="row mt-3 gy-3 gx-3">
          {/* İletişim Alanı*/}
          <div className="col-lg-5">
            <div className="info-box-img text-white position-relative">
              <img
                src={contact}
                alt="Enwus Makina Mühendislik İletişim"
                className="contact-img"
                loading="lazy"
              />

              <div className="contact-overlay p-4">
                <h3 className="mb-3">İletişim Bilgileri</h3>

                <div className="d-flex align-items-center mb-2">
                  <BsTelephone  />
                  <span className="ms-2">(+90) 506 878 57 66</span>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <BsEnvelope />
                  <span className="ms-2">info@enwus.com</span>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt />
                  <span className="ms-2">
                    Ostim OSB, 1271. Sk. No:12, 06374 Yenimahalle/Ankara
                  </span>
                </div>
                <div className="d-flex align-items-center mb-4 ">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/"
                    className="text-decoration-none text-reset d-inline-flex align-items-center"
                  >
                    <SiLinkedin className="" />
                    <span className="ms-2">/enwus-makina-muhendislik</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Harita Alanı*/}
          <div className="col-lg-7 contact-map">
            <MapContainer
              center={[39.977726489204194, 32.74991602015567]}
              zoom={16}
              scrollWheelZoom={true}
              className="map-style"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[39.977726489204194, 32.74991602015567]}
                icon={L.icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowUrl: "leaflet/dist/images/marker-shadow.png",
                })}
              >
                <Popup>Enwus Makina Mühendislik</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "İletişim - Enwus Makina Mühendislik",
  "description": "Enwus Makina Mühendislik iletişim bilgileri, adres ve harita",
  "url": "https://www.enwus.com/iletisim",
  "mainEntity": {
    "@type": "Organization",
    "name": "Enwus Makina Mühendislik",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ostim OSB, 1271. Sk. No:12",
      "addressLocality": "Yenimahalle",
      "addressRegion": "Ankara",
      "postalCode": "06374",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.977726489204194",
      "longitude": "32.74991602015567"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-506-878-5766",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"]
      },
      {
        "@type": "ContactPoint",
        "email": "info@enwus.com",
        "contactType": "customer service"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/enwus-makina-muhendislik"
    ],
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-16:00"
    ]
  }
};