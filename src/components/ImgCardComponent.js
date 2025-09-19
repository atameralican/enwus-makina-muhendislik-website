import React from "react";
import "../assets/styles/img-card-components.css";

const ImgCardComponent = ({
  title,
  description,
  image,
  imageKucuk,
  link,
  onClick,
  label,
}) => {
  return (
    <div
      className={`card text-white img-card h-100`}
      onClick={onClick ?? undefined}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      {/* Görsel */}
      <img
        src={imageKucuk}
        srcSet={`
    ${imageKucuk ?? image} 1200w,
    ${image} 1920w
  `}
        alt={title}
        className="img-card-img"
        loading="lazy"
      />

      {/* Overlay içerik */}
      <div className="img-card-overlay p-5 d-flex flex-column justify-content-between">
        {/* Üst kısım: Başlık + Açıklama */}
        <div>
          <h3 className="mb-3">{title}</h3>
          <p className="mb-2 lh-base fw-light fs-6">{description}</p>
        </div>

        {/* Alt kısım: Buton */}
        {onClick && (
          <div>
            <button
              type="button"
              className="btn text-light d-inline-flex align-items-center ps-0"
              onClick={onClick}
            >
              {label}
              <i className="ms-2 bi bi-arrow-right"></i>
            </button>
          </div>
        )}
        {!onClick && link && (
          <div>
            <a
              href={link}
              target="_parent"
              rel="noreferrer"
              className="btn text-light d-inline-flex "
            >
              {label ?? "Tıklayınız"}
              <i className="ms-2 bi bi-arrow-right"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgCardComponent;
