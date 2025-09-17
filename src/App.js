import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CoreLayout from "./components/CoreLayout";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// React routes
import routes from "routes";
import "./index.css"
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/HomePage";
//dahasonra ana sayfa eklenince kelenecek
export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            key={route.key}
            element={<CoreLayout bannerImg={route?.bannerImg}>{route.component}</CoreLayout>}
          />
        );
      }

      return null;
    });

  return (
 
     
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* Bunun için bi sayfa bulunamadı sayfası tasarlanabilir.  */}
      </Routes>

  );
}
