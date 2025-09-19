import { Link  } from "react-router-dom";

    const Footer=()=> {
  return (
    <footer className="py-3">
      <div className="container ">  
        <div className="row text-secondary">
          <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
            <h6>
              <strong>ENWUS MAKİNA MÜHENDİSLİK</strong>
            </h6>
            <div className="mt-3">
              <nav aria-label="Ana Menü">
                <ul className="d-flex fs-6   flex-wrap justify-content-center justify-content-lg-start list-unstyled mb-3 ps-0">
                  <li className="me-3 ">
                    <Link
                      to="/"
                      className="text-decoration-none text-muted fw-normal "
                    >
                      Ana Sayfa
                    </Link>
                  </li>
                  <li className="me-3">
                    <Link
                      to="/hakkimizda"
                      className="text-decoration-none text-muted fw-normal"
                    >
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="me-3">
                    <Link
                      to="/kataloglar"
                      className="text-decoration-none text-muted fw-normal"
                    >
                      Kataloglar
                    </Link>
                  </li>
                  <li className="me-3">
                    <Link
                      to="/iletisim"
                      className="text-decoration-none text-muted fw-normal"
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <p className="fs-6 fw-light">
              Copyright © <script>document.write</script>2025 Alican ATAMER
            </p>
          </div>

          <div className="col-12 col-lg-6 ms-lg-auto text-center text-lg-end">
            <h6 className="mb-5">
              <strong>Endüstriyel Üretimin Güvenilir Ortağı</strong>
            </h6>

            <a
              href="#dribbble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary opacity-50 "
            >
              <i className="bi bi-linkedin"></i> enwus-maki̇na-mühendi̇sli̇k
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
