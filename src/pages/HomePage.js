import CoreLayout from "../components/CoreLayout";
import ImgCardComponent from "../components/ImgCardComponent";
//photos
import arge from "../assets/images/home-page/arge.webp";
import mekanik from "../assets/images/home-page/mekanik-kucuk.webp";
import sacKesim from "../assets/images/home-page/sackesim.webp";
import talasli from "../assets/images/home-page/talasli.webp";
import kaynakli from "../assets/images/home-page/kaynakli.webp";
import hidrolik from "../assets/images/home-page/hidrolik.webp";
import hirdavat from "../assets/images/home-page/hirdavat.webp";
import banner from "../assets/images/home-page/banner.webp";
import banner_kucuk from "../assets/images/home-page/banner-kucuk.webp";
const HomePage = () => {
  return (
    <>
      <CoreLayout
        bannerImg={banner}
        bannerTitle="Endüstriyel Üretimin Güvenilir Ortağı"
        bannerText="Enwus Makina Mühendislik"
        bannerKucuk={banner_kucuk}
        bannerAlt="Enwus Makina Mühendislik - Anasayfa"
      >
        <div className="container mt-3 mb-3">
          <div className="row gy-3 gx-3 ">
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="AR-GE ve Mühendislik"
                description="AR-GE ve Mühendislik birimimiz, yenilikçi çözümler geliştirmek ve ürünlerimize değer katmak amacıyla sürekli araştırma ve tasarım faaliyetleri yürütmektedir."
                image={arge}
                link="/arge"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Mekanik Tesisat"
                description="Boru ve ek parçaları flanş,dirsek,tee,redüksüyon,kep,3000Lb - 6000Lb dişli ve Sw fittingsler"
                image={mekanik}
                link="/mekanik-tesisat"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Sac Kesim ve Büküm Silindir"
                description="Lazer/plazma kesim, abkant büküm hizmetleri ve silindir büküm hizmetleri"
                image={sacKesim}
                link="/sac-kesim-bukum"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Talaşlı İmalat"
                description="CNC torna ve freze makineleri ile hassas parça işleme"
                image={talasli}
                link="/talasli-imalat"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Kaynaklı İmalat"
                description="MIG, TIG ve gazaltı kaynak teknikleriyle güçlü birleştirme"
                image={kaynakli}
                link="/kaynakli-imalat"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Hidrolik & Pnömatik Sistemler"
                description="Endüstriyel otomasyon ve akış kontrol çözümleri"
                image={hidrolik}
                link="/hidrolik-pnomatik"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ImgCardComponent
                title="Hırdavat"
                description="İnşaattan sanayiye, mobilyadan otomotive kadar pek çok sektöre yönelik hırdavat ve teknik malzeme tedariki sağlamaktayız"
                image={hirdavat}
                link="/hirdavat"
              />
            </div>
          </div>
        </div>
      </CoreLayout>
    </>
  );
};

export default HomePage;
