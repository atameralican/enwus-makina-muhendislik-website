import React from "react";
import kaynak1 from "assets/images/faaliyetler/kaynak/kaynak-1.webp";
import kaynak2 from "assets/images/faaliyetler/kaynak/kaynak-2.webp";
import kaynak3 from "assets/images/faaliyetler/kaynak/kaynak-3.webp";
import kaynak4 from "assets/images/faaliyetler/kaynak/kaynak-4.webp";
import kaynak5 from "assets/images/faaliyetler/kaynak/kaynak-5.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

const Kaynakli = () => {
  const images = [kaynak1, kaynak2, kaynak3, kaynak4, kaynak5];
  return (
    <>
      <FaaliyetlerPageComponent
        title="Kaynaklı İmalat"
        children={
          <>
            <p>
              Enwus Makina Mühendislik, kaynaklı imalat alanında endüstriyel
              standartlara uygun, güçlü ve dayanıklı birleştirme çözümleri
              sunmaktadır. Alanında uzman kaynak personelimiz ve modern
              ekipmanlarımız sayesinde; yapı parçaları, taşıyıcı sistemler ve
              özel projeler için yüksek mukavemetli kaynak uygulamaları
              gerçekleştiriyoruz.
            </p>
            <strong>Uyguladığımız kaynak teknikleri:</strong>
            <ul>
              <li>MIG (Metal İnert Gaz) Kaynağı</li>
              <li>TIG (Tungsten İnert Gaz) Kaynağı</li>
              <li>Gazaltı Kaynak Uygulamaları</li>
              <li>Nokta Kaynağı ve Özel Pozisyon Kaynakları</li>
            </ul>
            <strong>Kaynaklı imalat hizmet kapsamımız:</strong>
            <ul>
              <li> Projeye özel kaynak konstrüksiyonları</li>
              <li> Kaynaklı çelik yapı ve iskelet üretimi</li>
              <li> Makine şaseleri ve taşıyıcı sistem montajları</li>
              <li> Test edilmiş ve kontrol edilmiş kaynak dikişleri</li>
              <li> Kaynak sonrası taşlama ve yüzey temizliği</li>
              <li>
                {" "}
                İhtiyaç halinde tahribatsız test (NDT) ve muayene hizmetleri
              </li>
            </ul>
            <p>
              Firmamız, yüksek dayanıklılık gerektiren parçalarda kalite ve
              güvenliği esas alarak çalışır. Her projeye özel teknik çizim ve
              şartnamelere uygun üretim gerçekleştirir, mükemmel kaynak kalitesi
              ile ürünlerinizin performansını en üst seviyeye çıkarır.
            </p>
          </>
        }
        images={images}
      />
    </>
  );
};

export default Kaynakli;
