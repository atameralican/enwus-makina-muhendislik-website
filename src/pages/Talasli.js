import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";
import post1 from "assets/images/faaliyetler/talasli/talasli1.webp";
import post2 from "assets/images/faaliyetler/talasli/talasli2.webp";
import post3 from "assets/images/faaliyetler/talasli/talasli3.webp";
import post4 from "assets/images/faaliyetler/talasli/talasli4.webp";
import post5 from "assets/images/faaliyetler/talasli/talasli5.webp";
import post6 from "assets/images/faaliyetler/talasli/talasli6.webp";
import post7 from "assets/images/faaliyetler/talasli/talasli7.webp";
import post8 from "assets/images/faaliyetler/talasli/talasli8.webp";

const Talasli = () => {
  const images = [post1, post2, post3, post4, post5, post6, post7, post8];
  return (
    <>
      <FaaliyetlerPageComponent
        title="Talaşlı İmalat"
        children={
          <>
            <p>
              Firmamız, talaşlı imalat alanında yüksek hassasiyet ve kalite
              standartlarına uygun çözümler sunmaktadır. CNC torna, dik işleme
              ve freze makinelerimizle; karmaşık geometrilere sahip, milimetrik
              hassasiyet gerektiren parçaların üretimini başarıyla
              gerçekleştiriyoruz. Prototip üretimden seri imalata kadar her
              aşamada, müşteri taleplerine özel çözümler geliştiriyor, teknik
              çizim ve ölçülere birebir sadık kalarak çalışıyoruz.
            </p>
            <strong>Hizmet kapsamımız:</strong>
            <ul>
              <li>CNC torna &amp; dik işleme</li>
              <li>Frezeleme ve delme işlemleri</li>
              <li>
                Alüminyum, çelik, paslanmaz çelik, pirinç ve plastik gibi
                malzemelerin işlenmesi
              </li>
              <li>Tek parça ve seri üretim hizmetleri</li>
              <li>3D teknik çizime uygun özel parça üretimi</li>
              <li>Kalite kontrol ve ölçüm raporlama</li>
            </ul>
            <p>
              {" "}
              Enwus Makina Mühendislik olarak talaşlı imalatta; yüksek doğruluk,
              hızlı teslimat ve teknik danışmanlık hizmetlerimizle iş
              ortaklarımıza değer katıyoruz.
            </p>
          </>
        }
        images={images}
      />
    </>
  );
};

export default Talasli;
