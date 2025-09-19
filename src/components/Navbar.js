import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = ({ routes }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const navbarRef = useRef(null);

  // Scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        navbarRef.current.style.background =
          window.scrollY > 300
            ? "rgba(255, 255, 255, 0.72)"
            : "rgba(255, 255, 255, 0.95)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü kapatma
  const handleNavLinkClick = () => setIsNavbarCollapsed(false);

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg fixed-top"
        ref={navbarRef}
        role="navigation"
        aria-label="Ana Menü"
      >
        <div className="container">
          {/* Logo */}
          <NavLink
            className="navbar-brand text-secondary"
            to="/"
            aria-label="Enwus Makina Mühendislik Ana Sayfa"
          >
            Enwus Makina Mühendislik
          </NavLink>

          {/* Hamburger Menu Button */}
          <button
            className="navbar-toggler btn-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavbarCollapsed ? "true" : "false"}
            aria-label="Menüyü Aç/Kapat"
            onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
          >
            <span className="bi bi-list"></span>
          </button>

          {/* Navigation Menu */}
          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav navbar-nav-scroll">
              {routes.map((route, index) =>
                route.collapse ? (
                  // Dropdown
                  <li className="nav-item dropdown" key={index}>
                    <a
                      className="nav-link dropdown-toggle"
                     // href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {route.icon && <i className={`bi ${route.icon}`}></i>}{" "}
                      {route.name}
                    </a>
                    <ul className="dropdown-menu">
                      {route.collapse.map((subRoute, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subRoute.route}
                            className="dropdown-item"
                            onClick={handleNavLinkClick}
                          >
                            {subRoute.icon && (
                              <i className={`bi ${subRoute.icon}`}></i>
                            )}{" "}
                            {subRoute.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  // Normal link
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={route.route}
                      className="nav-link"
                      onClick={handleNavLinkClick}
                    >
                      {route.icon && <i className={`bi ${route.icon}`}></i>}{" "}
                      {route.name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
