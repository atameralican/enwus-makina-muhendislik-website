import React, { useState,  } from "react";
import kataloglarPhoto from "assets/images/catalogs-page/kataloglar.webp";
import kataloglarKucuk from "assets/images/catalogs-page/kataloglarkucuk.webp";
import brosur from "assets/documents/kataloglar/EnwusBrosur.pdf";
import brosurEng from "assets/documents/kataloglar/EnwusBrosurEnglish.pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Modal,  } from "react-bootstrap";
import ImgCardComponent from "../components/ImgCardComponent";

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
