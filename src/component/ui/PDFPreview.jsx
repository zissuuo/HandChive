import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFPreview = ({ pdfFile }) => {
  return (
    <div>
      <Document
        file={pdfFile}
        //onLoadSuccess={/* 로드 성공 시 동작할 콜백 함수 */}
      >
        <Page pageNumber={1} /> {/* 첫 번째 페이지를 렌더링 */}
      </Document>
    </div>
  );
};

export default PDFPreview;
