// Pages
import AboutUs from "./pages/AboutUsPage";
import Contact from "./pages/ContactPage";
import Catalogs from "./pages/CatalogsPage";
import Arge from "./pages/Arge";
import HidrolikPnomatik from "./pages/HidrolikPnomatik";
import Hirdavat from "./pages/Hirdavat";
import Kaynakli from "./pages/Kaynakli";
import MekanikTesisat from "./pages/MekanikTesisat";
import SacKesimBukum from "./pages/SacKesimBukum";
import Talasli from "./pages/Talasli";
import TestEkipmanlari from "pages/TestEkipmanlari";
import Savunma from "pages/Savunma";

// Images
import hizmetlerBanner from "assets/images/about-us/hizmetlerBan.webp";
import catalogBanner from "assets/images/kataloglar/machine_old.webp";
import contactBanner from "assets/images/banners/iletisimBanner.webp";
import arge from "assets/images/banners/arge.webp";
import talasli from "assets/images/banners/talasli8.webp";
import hidrolik from "assets/images/banners/hidrolik.webp";
import kaynakli from "assets/images/banners/kaynak.webp";
import mekanikTesisat from "assets/images/banners/mekanik_tesisat.webp";
import sacKesim from "assets/images/banners/sackesim.webp";

const routes = [
  {
    name: "Hakkımızda",
    route: "/hakkimizda",
    component: <AboutUs />,
    bannerImg: hizmetlerBanner,
  },
  {
    name: "Faaliyet Alanlarımız",
    collapse: [
      {
        name: "Ar-ge ve Mühendislik Hizmetleri",
        route: "/arge",
        component: <Arge />,
        bannerImg: arge,
      },
      {
        name: "Talaşlı İmalat",
        route: "/talasli-imalat",
        component: <Talasli />,
        bannerImg: talasli,
      },
      {
        name: "Savunma Sanayi",
        route: "/savunma-sanayi",
        component: <Savunma />,
      },
      {
        name: "Kaynaklı İmalat",
        route: "/kaynakli-imalat",
        component: <Kaynakli />,
        bannerImg: kaynakli,
      },
      {
        name: "Sac Kesim Büküm Silindir",
        route: "/sac-kesim-bukum",
        component: <SacKesimBukum />,
        bannerImg: sacKesim,
      },
      {
        name: "Hidrolik Pnömatik",
        route: "/hidrolik-pnomatik",
        component: <HidrolikPnomatik />,
        bannerImg: hidrolik,
      },
      {
        name: "Mekanik Tesisat Ürünleri",
        route: "/mekanik-tesisat",
        component: <MekanikTesisat />,
        bannerImg: mekanikTesisat,
      },
      {
        name: "Test Ekipmanları",
        route: "/test-ekipmanlari",
        component: <TestEkipmanlari />,
      },
      {
        name: "Toptan Hırdavat",
        route: "/hirdavat",
        component: <Hirdavat />,
      },
    ],
  },
  {
    name: "Kataloglar",
    route: "/kataloglar",
    component: <Catalogs />,
    bannerImg: catalogBanner,
  },
  {
    name: "İletişim",
    route: "/iletisim",
    component: <Contact />,
    bannerImg: contactBanner,
  },
];

export default routes;
