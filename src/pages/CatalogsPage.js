import React, { useState,  } from "react";
import kataloglarPhoto from "assets/images/catalogs-page/kataloglar.webp";
import kataloglarKucuk from "assets/images/catalogs-page/kataloglarkucuk.webp";
import brosur from "assets/documents/kataloglar/EnwusBrosur.pdf";
import brosurEng from "assets/documents/kataloglar/EnwusBrosurEnglish.pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Modal,  } from "react-bootstrap";
import ImgCardComponent from "../components/ImgCardComponent";
import SeoHelmet from "components/SeoHelmet";

const Catalogs = () => {
  const [selectedPdf, setSelectedPdf] = React.useState(null);
  const [show, setShow] = useState(false);

  const handleClickOpen =
    (pdfFile, scrollType = "paper") =>
    () => {
      setSelectedPdf(pdfFile);
      setShow(true);
    };

  const kataloglar = [
    {
      title: "Broşür - TR",
      pdf: brosur,
      aciklama:
        " ENWUS MAKİNA MÜHENDİSLİK olarak; Yıllar İçerisinde Kazanılan Bilgi,Birikim ve Tecrübe ile Talaşlı, Talaşsız İmalat, Kaynaklı, Kaynaksız İmalat...",
    },
    {
      title: "Brochure - ENG",
      pdf: brosurEng,
      aciklama:
        " As ENWUS ENGINEERING; Machining, Chipless Manufacturing, Welded and Weldless Manufacturing, Sheet Metal, Design, Production of Subjects...",
    },
  ];

  return (
    <>
     <SeoHelmet
        title="Kataloglar - Enwus Makina Mühendislik | Teknik Broşürler ve Dökümanlar"
        description="Enwus Makina Mühendislik hizmet katalogları, teknik broşürler ve ürün dökümanları. Türkçe ve İngilizce PDF kataloglarımızı inceleyebilirsiniz."
        keywords="Enwus katalogları, makina mühendislik broşür, teknik döküman, ürün katalogu, hizmet broşürü, CNC imalat katalogu, kaynak hizmetleri broşür, hidrolik katalog, mühendislik hizmetleri PDF"
        url="https://www.enwus.com/kataloglar"
        image="https://enwus.com/static/media/catalog-banner.47476d2ebbb0f73912c2.webp"
        schemaData={catalogsSchema}
      />
      <section className="py-5 catalogs-section">
        <div className="container">
          <h2 className="mb-3 text-md-start text-center text-primary-emphasis ">
            Kataloglar
          </h2>
          <div className="row mt-4 gy-2 gx-2">
            {kataloglar.map((item, index) => (
              <div className="col-lg-4 " key={index}>
                <ImgCardComponent
                  title={item.title}
                  description={item.aciklama}
                  imageKucuk={kataloglarKucuk}
                  image={kataloglarPhoto}
                  label="Görüntüle"
                  link="/"
                  onClick={handleClickOpen(item.pdf, "paper")}
                />

                  
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        show={show}
        size="xl"
        onHide={() => {
          setShow(false);
          setSelectedPdf(null);
        }}
        aria-label="Katalog Modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Katalog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPdf && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <div style={{ height: "80vh", width: "100%" }}>
                <Viewer fileUrl={selectedPdf} />
              </div>
            </Worker>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Catalogs;

const catalogsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Kataloglar - Enwus Makina Mühendislik",
  "description": "Enwus Makina Mühendislik hizmet katalogları ve teknik broşürler",
  "url": "https://www.enwus.com/kataloglar",
  "mainEntity": {
    "@type": "DataCatalog",
    "name": "Enwus Makina Katalogları",
    "description": "Makina mühendisliği hizmetleri katalogları ve teknik dökümanlar",
    "dataset": [
      {
        "@type": "Dataset",
        "name": "Enwus Broşür Türkçe",
        "description": "Talaşlı imalat, kaynaklı imalat ve mühendislik hizmetleri broşürü",
        "contentUrl": "https://www.enwus.com/documents/kataloglar/EnwusBrosur.pdf",
        "encodingFormat": "application/pdf",
        "inLanguage": "tr"
      },
      {
        "@type": "Dataset",
        "name": "Enwus Brochure English",
        "description": "Machining, welding and engineering services brochure",
        "contentUrl": "https://www.enwus.com/documents/kataloglar/EnwusBrosurEnglish.pdf",
        "encodingFormat": "application/pdf",
        "inLanguage": "en"
      }
    ],
    "provider": {
      "@type": "Organization",
      "name": "Enwus Makina Mühendislik"
    }
  }
};