import React from "react";
import ImageSlider from "../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FaaliyetlerPageComponent = ({ title, images, children }) => {
  return (
    <>
      <section className="py-5 arge-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-12">
              <div className="row py-3">
                <div className="col-12 col-md-7 mb-4 mb-md-0">
                  <h2 className="mb-3 text-md-start text-center text-primary-emphasis ">
                    {title}
                  </h2>
                  <p className="text-justify text-primary-emphasis lh-base fw-light ">
                    {children}
                  </p>
                </div>
                <div className="col-12 col-md-5">
                  <ImageSlider images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FaaliyetlerPageComponent;
