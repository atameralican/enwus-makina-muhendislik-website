import React from "react";
import post4 from "assets/images/blog2.webp";
import post3 from "assets/images/blog2.webp";
import post2 from "assets/images/blog2.webp";
import post1 from "assets/images/blog2.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

    const Arge=()=> {
  const images = [post1, post2, post3, post4];

  return (
    <FaaliyetlerPageComponent
      title="AR-GE ve Mühendislik"
      images={images}
      children={<><p> 
        Firmamızın yenilikçi vizyonunu taşıyan AR-GE ve Mühendislik Departmanı, sektörel
                  gelişmeleri yakından takip ederek müşteri ihtiyaçlarına özel, yüksek katma değerli
                  çözümler üretmektedir. Teknolojiyi etkin biçimde kullanan ve sürekli gelişimi
                  hedefleyen ekibimiz, tasarımdan prototiplemeye, testten ürün geliştirmeye kadar
                  tüm süreçlerde aktif rol almaktadır. AR-GE çalışmalarımızda temel amacımız;
                  ürünlerimizin performansını artırmak, maliyetleri optimize etmek ve çevresel
                  sürdürülebilirliği destekleyen yeni teknolojiler geliştirmektir. Bu doğrultuda
                  üniversiteler, teknoparklar ve çeşitli araştırma kuruluşları ile iş birlikleri
                  sürdürülmektedir. Mühendislik birimimiz ise ürün geliştirme süreçlerinde kalite,
                  dayanıklılık ve işlevselliği merkeze alarak mühendislik analizleri, simülasyonlar
                  ve test süreçleriyle tasarımlarımıza yön vermektedir. Ürün yaşam döngüsünün her
                  aşamasında sistematik yaklaşım ve detaylı mühendislik prensipleriyle
                  çalışmaktayız. Sahip olduğumuz bilgi birikimi, deneyimli kadromuz ve güçlü
                  altyapımız sayesinde, hem yerli hem de uluslararası pazarlarda rekabet gücü yüksek
                  çözümler sunmaya devam ediyoruz.
        </p></>}
    />
  );
}

export default Arge;
