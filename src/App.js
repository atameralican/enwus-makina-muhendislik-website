import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CoreLayout from "./components/CoreLayout";
import routes from "./routes";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const LazyHomePage = lazy(() => import("./pages/HomePage"));
const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "#6c757d",
      flexDirection: "column",
    }}
  >
    <div className="d-flex gap-2">
      <div className="spinner-grow text-primary" role="status" />
      <div className="spinner-grow text-secondary" role="status" />
      <div className="spinner-grow text-success" role="status" />
      <div className="spinner-grow text-danger" role="status" />
      <div className="spinner-grow text-warning" role="status" />
      <div className="spinner-grow text-info" role="status" />
    </div>
  </div>
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route && route.component) {
        const ComponentToRender = route.component;
        return (
          <Route
            exact
            path={route.route}
            key={route.key}
            element={
              <Suspense fallback={<Loading />}>
                <CoreLayout bannerImg={route?.bannerImg} bannerKucuk={route?.bannerKucuk} >
                  <ComponentToRender />
                </CoreLayout>
              </Suspense>
            }
          />
        );
      }

      return null;
    });

  return (
    <Routes>
      {getRoutes(routes)}
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <LazyHomePage />
          </Suspense>
        }
        key="home-page"
      />
      <Route path="*" element={<Navigate to="/" />} key="not-found" />
    </Routes>
  );
}
