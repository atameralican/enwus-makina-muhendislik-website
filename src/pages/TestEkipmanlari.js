import React from "react";
import post4 from "assets/images/home-page/banner-kucuk.webp";
import post3 from "assets/images/home-page/banner-kucuk.webp";
import post2 from "assets/images/home-page/banner-kucuk.webp";
import post1 from "assets/images/home-page/banner-kucuk.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

const TestEkipmanlari = () => {
  const images = [post1, post2, post3, post4];
  return (
    <>
      <FaaliyetlerPageComponent
        title="TestEkipmanlari "
        images={images}
        children={<p>TestEkipmanlari Page</p>}
      />
    </>
  );
};

export default TestEkipmanlari;
