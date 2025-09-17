import React from "react";
import post4 from "assets/images/blog2.webp";
import post3 from "assets/images/blog2.webp";
import post2 from "assets/images/blog2.webp";
import post1 from "assets/images/blog2.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

const Savunma = () => {
  const images = [post1, post2, post3, post4];
  return (
    <>
      <FaaliyetlerPageComponent
        title="Savunma Sanayi"
        images={images}
        children={<p>Savunma Sanayi Page</p>}
      />
    </>
  );
};

export default Savunma;
