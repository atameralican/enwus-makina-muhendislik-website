import routes from "routes";
import Footer from "components/Footer";
import defaultBanner from "assets/images/home-page/banner-kucuk.webp";
import Navbar from "./Navbar";
import "../assets/styles/core-layout.css";
const CoreLayout = ({
  bannerImg,
  children,
  bannerTitle,
  bannerText,
  bannerKucuk,
  bannerAlt,
}) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar routes={routes} />
      {/* BANNER */}
      <section className="banner position-relative text-center d-flex align-items-center justify-content-center">
        <img
          src={bannerKucuk || bannerImg || defaultBanner}
          sizes="100vw"
          srcSet={`
    ${bannerKucuk || bannerImg || defaultBanner} 1200w,
    ${bannerImg || defaultBanner} 1920w
  `}
          alt={bannerAlt??"Enwus makina mühendislik"}
          className="img-fluid banner-img"
          fetchpriority="high"
          decoding="async"
        />
        <div className="banner-overlay "></div> 
        <div className="banner-content text-white">
          <h1 className="mt-5 mb-3 banner-h1">{bannerTitle ?? "İnovatif Mühendislik, Güvenilir Çözümler"}</h1>
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="banner-h2">{bannerText ?? "Kaliteli üretim, zamanında teslimat"}</h2>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <div className="page-card">{children}</div>

      <Footer />
    </>
  );
};

export default CoreLayout;
