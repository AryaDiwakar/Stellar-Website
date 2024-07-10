import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import HoriNav from "../components/HoriNav";
import "./Newsletter.css";

export default function Newsletter() {
  const [numPages, setNumPages] = useState(6);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <HoriNav />
      <div className="newspdf">
        <h1>Newsletter</h1>
        <div>
          <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </div>
  );
}
