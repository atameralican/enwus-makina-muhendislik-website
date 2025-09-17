import React from "react";
import post1 from "../assets/images/faaliyetler/mekanik/1.webp";
import post2 from "../assets/images/faaliyetler/mekanik/2.webp";
import post3 from "../assets/images/faaliyetler/mekanik/3.webp";
import post4 from "../assets/images/faaliyetler/mekanik/4.webp";
import post5 from "../assets/images/faaliyetler/mekanik/5.webp";
import post6 from "../assets/images/faaliyetler/mekanik/6.webp";
import post7 from "../assets/images/faaliyetler/mekanik/7.webp";
import post8 from "../assets/images/faaliyetler/mekanik/8.webp";
import post9 from "../assets/images/faaliyetler/mekanik/9.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

const MekanikTesisat = () => {
  const images = [
    post1,
    post2,
    post3,
    post4,
    post5,
    post6,
    post7,
    post8,
    post9,
  ];
  return (
    <>
      <FaaliyetlerPageComponent
        title="Mekanik Tesisat"
        children={
          <>
            <p>
              <strong>Enwus Makina Mühendislik</strong>, mekanik tesisat
              sektöründe hem kaliteli ürün tedariği hem de profesyonel uygulama
              hizmetleri sunan, alanında uzmanlaşmış bir mühendislik ve teknik
              tedarik firmasıdır. Kurulduğumuz günden bu yana; inşaat, sanayi,
              konut, sağlık ve ticari yapı projelerinde etkin çözümler sunarak
              güvenilir iş ortağınız olduk. Geniş ürün yelpazemiz, stok gücümüz,
              teknik destek ekibimiz ve zamanında teslimat prensibimiz ile
              sektör ihtiyaçlarını en doğru ve hızlı şekilde karşılamayı
              hedefliyoruz.
            </p>
            <strong>Mekanik Tesisat Ürün Temini</strong>
            <ul>
              <li>Isıtma, soğutma ve havalandırma sistem ekipmanları</li>
              <li>Sıhhi tesisat malzemeleri</li>
              <li>Doğalgaz tesisat ekipmanları</li>
              <li>Yangın söndürme sistemi ürünleri</li>
              <li>Boru, vana, fittings (çelik, PPRC, PVC, bakır)</li>
              <li>Pompa grupları, kazanlar, genleşme tankları</li>
              <li>İzolasyon malzemeleri ve yardımcı ekipmanlar</li>
            </ul>
            <strong>Projelendirme ve Teknik Danışmanlık</strong>
            <ul>
              <li>Mekanik tesisat sistemlerinin mühendislik projeleri</li>
              <li>Malzeme seçiminde teknik destek</li>
              <li>Enerji verimliliği ve sistem optimizasyonu çözümleri</li>
            </ul>
            <strong>Uygulama ve Montaj Hizmetleri</strong>
            <ul>
              <li>Profesyonel ekip ile sahada kurulum ve devreye alma</li>
              <li>Anahtar teslim mekanik tesisat uygulamaları</li>
              <li>
                HVAC, yangın, sıhhi tesisat ve doğalgaz sistemleri montajı
              </li>
            </ul>
          </>
        }
        images={images}
      />
    </>
  );
};

export default MekanikTesisat;
