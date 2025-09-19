import bgImage from "assets/images/banners/telephone.webp";
import profilePicture from "assets/images/logo-kucuk-beyaz.webp";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/styles/contact.css";
const Contact = () => {
  return (
    <>
      <section className="py-5 contact-section">
        {/* Circle Avatar Logo*/}
        <div className="banner-logo-circle">
          <img
            src={profilePicture}
            alt="Enwus Makina"
            className="rounded-circle shadow-lg"
            style={{ width: "110px", height: "110px", objectFit: "cover" }}
          />
        </div>

        <div className="row mt-3 gy-3 gx-3">
          {/* İletişim Alanı*/}
          <div class="col-lg-5  ">
            <div class="info-box-img text-white position-relative">
              <img
                src={bgImage}
                alt="Enwus Makina Mühendislik İletişim"
                class="contact-img"
                loading="lazy"
              />

              <div class="contact-overlay p-4">
                <h3 class="mb-3">İletişim Bilgileri</h3>

                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-phone"></i>
                  <span class="ms-2">(+90) 506 878 57 66</span>
                </div>

                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-envelope"></i>
                  <span class="ms-2">info@enwus.com</span>
                </div>

                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-map-marker-alt"></i>
                  <span class="ms-2">
                    Ostim OSB, 1271. Sk. No:12, 06374 Yenimahalle/Ankara
                  </span>
                </div>
                <div class="d-flex align-items-center mb-4 ">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/"
                    className="text-decoration-none text-reset d-inline-flex align-items-center"
                  >
                    {" "}
                    <i class="bi bi-linkedin"></i>
                    <span class="ms-2">/enwus-makina-muhendislik</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Harita Alanı*/}
          <div class="col-lg-7 contact-map">
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
