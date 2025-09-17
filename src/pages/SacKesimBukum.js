import React from "react";
import post1 from "assets/images/faaliyetler/sacKesim/1.webp";
import post2 from "assets/images/faaliyetler/sacKesim/2.webp";
import post3 from "assets/images/faaliyetler/sacKesim/3.webp";
import post4 from "assets/images/faaliyetler/sacKesim/4.webp";
import post5 from "assets/images/faaliyetler/sacKesim/5.webp";
import post6 from "assets/images/faaliyetler/sacKesim/6.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

const SacKesimBukum = () => {
  const images = [post1, post2, post3, post4, post5, post6];
  return (
    <>
      <FaaliyetlerPageComponent
        title="Sac Kesim, Abkant Büküm ve Silindir Büküm"
        children={
          <>
            <p>
              Enwus Makina Mühendislik olarak, modern üretim teknolojilerine
              dayalı sac işleme çözümlerimizle sanayiye yüksek hassasiyetli
              ürünler sunuyoruz. Lazer ve plazma kesim, abkant büküm ve silindir
              büküm hizmetlerimizle; projelerinize tam uyumlu, dayanıklı ve
              estetik parçalar üretiyoruz.
            </p>
            <strong>Hizmet kapsamımız:</strong>
            <ul>
              <li>
                Lazer ve Plazma Kesim: İnce ve kalın sac malzemelerde hızlı ve
                hassas kesim
              </li>
              <li>
                {" "}
                Abkant Büküm: CNC kontrollü makinelerle istenilen açı ve
                ölçülerde büküm
              </li>
              <li>
                {" "}
                Silindir Büküm: Silindirik formda parça üretimi, boru ve gövde
                imalatı
              </li>
              <li>
                {" "}
                Paslanmaz, DKP, galvanizli sac gibi farklı malzeme tiplerinde
                işleme
              </li>
              <li> Özel şekilli parçaların üretimi</li>
              <li> Teknik çizim ve proje desteği</li>
            </ul>
            <p>
              Hassas toleranslar ve kaliteli yüzeyler elde etmede uzmanlaşan
              firmamız, sac işleme süreçlerinde müşterilerine güvenilir,
              ekonomik ve hızlı çözümler sunar. Üretimde yüksek verimlilik
              sağlayarak, projelerinizin zamanında ve sorunsuz tamamlanmasına
              katkı sağlıyoruz.
            </p>
          </>
        }
        images={images}
      />
    </>
  );
};

export default SacKesimBukum;
