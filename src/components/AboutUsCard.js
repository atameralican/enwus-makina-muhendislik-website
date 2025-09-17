import React from "react";

const AboutUsCard = ({ image, name, description }) => {
  return (
    <>
      <div className="row about-card ">
        <div className="col-lg-4 col-md-6 p-2 p-1">
          <img src={image} alt={name} className="about-img" loading="lazy" />
        </div>
        <div className="col-lg-8 col-md-6 p-2 p-1 d-flex flex-column">
          <h5 className="text-primary-emphasis">{name} </h5>
          <h6 className="text-primary-emphasis fw-light lh-base about-card-description">
            {description}
          </h6>
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
