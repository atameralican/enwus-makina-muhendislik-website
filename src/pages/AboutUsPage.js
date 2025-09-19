
import AboutUsCard from "../components/AboutUsCard";
// Images
import arge from "../assets/images/about-us/arge.webp";
import kaynakli from "../assets/images/about-us/kaynakl.webp";
import mekanik from "../assets/images/about-us/mekanik-tesisat.webp";
import montaj from "../assets/images/about-us/montaj.webp";
import talasli from "../assets/images/about-us/talasli.webp";
import sackesim from "../assets/images/about-us/sackesim.webp";
import hidrolikPnomatik from "../assets/images/about-us/hidrolik.webp";
import "../assets/styles/about-us.css";
    const AboutUs=()=> {
  return (
    <>
      <section className="py-5 about-us-section">
        <div className="container">
          <h2 className="mb-3 text-md-start text-center text-primary-emphasis ">
            Endüstriyel Üretimin Güvenilir Ortağı
          </h2>
          <div className="col-md-8">
          <p className="text-justify text-primary-emphasis lh-base fw-light ">
            Ankara merkezli Enwus Makina Mühendislik, talaşlı ve kaynaklı imalat
            başta olmak üzere geniş hizmet yelpazesiyle savunma, makine ve
            endüstriyel sektörlerin önde gelen çözümlerini sunar.{" "}
          </p></div>
          <div className="row gy-3 gx-5 mt-5">
            <div className="col-md-6">
                <AboutUsCard
                  image={arge}
                  name="AR-GE ve Mühendislik"
                  position={""}
                  description="AR-GE ve Mühendislik birimimiz, yenilikçi çözümler geliştirmek ve ürünlerimize değer katmak amacıyla sürekli araştırma ve tasarım faaliyetleri yürütmektedir."
                />
              </div>
            <div className="col-md-6">
                <AboutUsCard
                  image={talasli}
                  name="Talaşlı İmalat"
                  position={""}
                  description="CNC torna ve freze makineleri ile hassas parça işleme"
                />
              </div>
            <div className="col-md-6">
                <AboutUsCard
                  image={kaynakli}
                  name="Kaynaklı İmalat"
                  position={{color:"primary"}}
                  description="MIG, TIG ve gazaltı kaynak teknikleriyle güçlü birleştirme"
                />
              </div>
            <div className="col-md-6">
                <AboutUsCard
                  image={hidrolikPnomatik}
                  name="Hidrolik & Pnömatik Sistemler"
                  position={""}
                  description="Endüstriyel otomasyon ve akış kontrol çözümleri"
                />
              </div>
            <div className="col-md-6">
                <AboutUsCard
                  image={mekanik}
                  name="Mekanik Tesisat"
                  position={""}
                  description="Boru ve ek parçaları flanş,dirsek,tee,redüksüyon,kep,3000Lb - 6000Lb dişli ve Sw fittingsler "
                />
              </div>
            <div className="col-md-6">
                <AboutUsCard
                  image={sackesim}
                  name="Sac Kesim ve Büküm Silindir"
                  position={""}
                  description="Lazer/plazma kesim, abkant büküm hizmetleri ve silindir büküm hizmetleri"
                />
              </div>
            <div className="col-md-6">
                <AboutUsCard
                  image={montaj}
                  name="Montaj Hizmetleri"
                  position={""}
                  description="Makine ve sistem kurulumlarında profesyonel montaj çözümleri"
                />
              </div>
            </div>
        </div>
      </section>
      
    </>
  );
}

export default AboutUs;
