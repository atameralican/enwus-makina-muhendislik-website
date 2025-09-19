import React from "react";
import Slider from "react-slick";
import "../assets/styles/slider.css"
const ImageSlider = ({ images = [] }) => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="slider-resim-card">
            <div className="slider-resim-wrapper">
              <img
                src={image}
                alt={"Enwus Makina Mühendislik"}
                className="slider-resim img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
