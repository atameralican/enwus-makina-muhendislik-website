import { lazy } from "react";

import hizmetlerBanner from "assets/images/about-us/hizmetlerBan.webp";
// import catalogBanner from "assets/images/kataloglar/machine_old.webp";
import arge from "assets/images/banners/arge.webp";
import talasli from "assets/images/banners/talasli8.webp";
import hidrolik from "assets/images/banners/hidrolik.webp";
import kaynakli from "assets/images/banners/kaynak.webp";
import mekanikTesisat from "assets/images/banners/mekanik_tesisat.webp";
import sacKesim from "assets/images/banners/sackesim.webp";

import catalogBanner from "assets/images/catalogs-page/catalog-banner.webp";
import catalogKucuk  from "assets/images/catalogs-page/catalog-banner-kucuk.webp";
import contactBanner  from "assets/images/contact-page/iletisimBanner.webp";
import contactKucuk  from "assets/images/contact-page/iletisimBannerKucuk.webp";

const AboutUs = lazy(() => import("./pages/AboutUsPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const Catalogs = lazy(() => import("./pages/CatalogsPage"));
const Arge = lazy(() => import("./pages/Arge"));
const HidrolikPnomatik = lazy(() => import("./pages/HidrolikPnomatik"));
const Hirdavat = lazy(() => import("./pages/Hirdavat"));
const Kaynakli = lazy(() => import("./pages/Kaynakli"));
const MekanikTesisat = lazy(() => import("./pages/MekanikTesisat"));
const SacKesimBukum = lazy(() => import("./pages/SacKesimBukum"));
const Talasli = lazy(() => import("./pages/Talasli"));
const TestEkipmanlari = lazy(() => import("./pages/TestEkipmanlari"));
const Savunma = lazy(() => import("./pages/Savunma"));
const routes = [
  {
    name: "Hakkımızda",
    route: "/hakkimizda",
    component: AboutUs,
    key: "about-us",
    bannerImg: hizmetlerBanner,
  },
  {
    name: "Faaliyet Alanlarımız",
    key: "faaliyet-alanlari",
    collapse: [
      {
        name: "Ar-ge ve Mühendislik Hizmetleri",
        route: "/arge",
        component: Arge,
        key: "arge",
        bannerImg: arge,
      },
      {
        name: "Talaşlı İmalat",
        route: "/talasli-imalat",
        component: Talasli,
        key: "talasli-imalat",
        bannerImg: talasli,
      },
      {
        name: "Savunma Sanayi",
        route: "/savunma-sanayi",
        component: Savunma,
        key: "savunma-sanayi",
      },
      {
        name: "Kaynaklı İmalat",
        route: "/kaynakli-imalat",
        component: Kaynakli,
        key: "kaynakli-imalat",
        bannerImg: kaynakli,
      },
      {
        name: "Sac Kesim Büküm Silindir",
        route: "/sac-kesim-bukum",
        component: SacKesimBukum,
        key: "sac-kesim-bukum",
        bannerImg: sacKesim,
      },
      {
        name: "Hidrolik Pnömatik",
        route: "/hidrolik-pnomatik",
        component: HidrolikPnomatik,
        key: "hidrolik-pnomatik",
        bannerImg: hidrolik,
      },
      {
        name: "Mekanik Tesisat Ürünleri",
        route: "/mekanik-tesisat",
        component: MekanikTesisat,
        key: "mekanik-tesisat",
        bannerImg: mekanikTesisat,
      },
      {
        name: "Test Ekipmanları",
        route: "/test-ekipmanlari",
        component: TestEkipmanlari,
        key: "test-ekipmanlari",
      },
      {
        name: "Toptan Hırdavat",
        route: "/hirdavat",
        component: Hirdavat,
        key: "hirdavat",
      },
    ],
  },
  {
    name: "Kataloglar",
    route: "/kataloglar",
    component: Catalogs,
    key: "kataloglar",
    bannerImg: catalogBanner,
    bannerKucuk: catalogKucuk,
  },
  {
    name: "İletişim",
    route: "/iletisim",
    component: Contact,
    key: "iletisim",
    bannerImg: contactBanner,
    bannerKucuk: contactKucuk,
  },
];

export default routes;
