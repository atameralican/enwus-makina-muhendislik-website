import { lazy } from "react";

import hakkimizda from "assets/images/about-us/hizmetlerBan.webp";
import arge from "assets/images/banners/arge.webp";
import talasli from "assets/images/banners/talasli8.webp";
import hidrolik from "assets/images/banners/hidrolik.webp";
import kaynakli from "assets/images/banners/kaynak.webp";
import mekanikTesisat from "assets/images/banners/mekanik_tesisat.webp";
import sacKesim from "assets/images/banners/sackesim.webp";
import hirdavat from "assets/images/banners/hirdavat-banner2.webp";
import savunma from "assets/images/banners/savunma.webp";

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
    bannerImg: hakkimizda,
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
        bannerTitle:"Ar-ge ve Mühendislik Hizmetleri",
      },
      {
        name: "Talaşlı İmalat",
        bannerTitle: "Talaşlı İmalat",
        route: "/talasli-imalat",
        component: Talasli,
        key: "talasli-imalat",
        bannerImg: talasli,
      },
      {
        name: "Savunma Sanayi",
        bannerTitle: "Savunma Sanayi",
        route: "/savunma-sanayi",
        component: Savunma,
        key: "savunma-sanayi",
        bannerImg: savunma,
      },
      {
        name: "Kaynaklı İmalat",
        bannerTitle: "Kaynaklı İmalat",
        route: "/kaynakli-imalat",
        component: Kaynakli,
        key: "kaynakli-imalat",
        bannerImg: kaynakli,
      },
      {
        name: "Sac Kesim Büküm Silindir",
        bannerTitle: "Sac Kesim Büküm Silindir",
        route: "/sac-kesim-bukum",
        component: SacKesimBukum,
        key: "sac-kesim-bukum",
        bannerImg: sacKesim,
      },
      {
        name: "Hidrolik Pnömatik",
        bannerTitle: "Hidrolik Pnömatik",
        route: "/hidrolik-pnomatik",
        component: HidrolikPnomatik,
        key: "hidrolik-pnomatik",
        bannerImg: hidrolik,
      },
      {
        name: "Mekanik Tesisat Ürünleri",
        bannerTitle: "Mekanik Tesisat Ürünleri",
        route: "/mekanik-tesisat",
        component: MekanikTesisat,
        key: "mekanik-tesisat",
        bannerImg: mekanikTesisat, 
      },
      {
        name: "Test Ekipmanları",
        bannerTitle: "Test Ekipmanları",
        route: "/test-ekipmanlari",
        component: TestEkipmanlari,
        key: "test-ekipmanlari",
      },
      {
        name: "Toptan Hırdavat",
        bannerTitle: "Toptan Hırdavat",
        route: "/hirdavat",
        component: Hirdavat,
        key: "hirdavat",
        bannerImg: hirdavat, 
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
    bannerText:"Her Zaman Yanınızdayız, Güvenle İletişime Geçin"
  },
];

export default routes;
