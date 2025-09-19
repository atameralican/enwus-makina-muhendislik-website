import routes from "routes";
import Footer from "components/Footer";
import defaultBanner from "assets/images/banners/banner.webp";
import Navbar from "./Navbar";
import "../assets/styles/core-layout.css";
const CoreLayout = ({ bannerImg, children, bannerTitle, bannerText,bannerImg1200 }) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar routes={routes} />
      {/* BANNER */}
      <section className="banner position-relative text-center d-flex align-items-center justify-content-center">
        <img
          src={bannerImg1200 || bannerImg || defaultBanner}
          srcSet={`
            ${bannerImg1200 || bannerImg || defaultBanner} 1200w,
            ${bannerImg || defaultBanner} 1920w
          `}
          alt="Enwus makina mühendislik"
          className="img-fluid banner-img"
          loading="lazy"
        />
        <div className="banner-overlay "></div>
        <div className="banner-content text-white">
          <h5 className="mt-5 mb-3">{bannerTitle ?? "Takip Ediniz"}</h5>
          <div className="d-flex justify-content-center align-items-center">
            {bannerText ? (
              <h6 className="">{bannerText ?? "Takip Ediniz"}</h6>
            ) : (
              <>
                {" "}
                <a href="#" className="text-white me-3 fs-5">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="text-white me-3 fs-5">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="text-white me-3 fs-5">
                  <i className="bi bi-linkedin" />
                </a>
              </>
            )}
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
