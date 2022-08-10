import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import throttle from "lodash/throttle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GrRevert } from "react-icons/gr";
import Slider from "@mui/material/Slider"



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewPdf = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const [initialWidth, setInitialWidth] = useState(null);
  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 3000));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 3000));
    };
  }, []);
  const [slides, setSlides] = useState([{}]);

  useEffect(() => {
    const data = [];
    for (let i = 0; i <= numPages; i++) {
      data.push({ value: i });
    }
    setSlides(data);
  }, [numPages]);

  console.log(numPages, slides);
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="controls shadow-sm">
          <div id="placeholderWrapper" />
          <div id="pdfWrapper" ref={pdfWrapper}>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              onContextMenu={(e) => e.preventDefault()}
              className="pdf-container"
            >
              <Page pageNumber={pageNumber} width={initialWidth} />
            </Document>
          </div>
        </div>
        <div
          className="d-flex justify-content-center text-white p-2 text-center rounded-pill"
          style={{
            width: "120px",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333333",
          }}
        >
          <small
            onClick={prevPage}
            disabled={pageNumber === 1}
            className="cursor"
          >
            <AiOutlineLeft size="20" />
          </small>
          <small className="mx-2">
            {pageNumber} / {numPages}
          </small>
          <small
            onClick={nextPage}
            disabled={pageNumber === numPages}
            className="cursor"
          >
            <AiOutlineRight size="20" />
          </small>
        </div>
        <div
          className="d-flex justify-content-center text-white p-2 text-center rounded-pill"
          style={{
            width: "140px",
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "#333333",
          }}
        >
          <small onClick={() => setPageNumber(1)} className="cursor">
            <GrRevert size="20" className="text-white" />{" "}
            <span className="ms-3">Restart (R)</span>
          </small>
        </div>
      </div>
      {/* {slides?.map((i) => (
        <span className="bgColor my-2 w-25 mx-2">{i}</span>
      ))} */}

        <Slider
          value={pageNumber}
          valueLabelDisplay="auto"
          marks={slides}
          max={numPages}
          step={1}
        />
    </>
  );
};

export default ViewPdf;
