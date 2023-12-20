import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFPreview = ({ pdfUrl }) => { // props 이름을 pdfUrl로 변경
  return (
    <div>
      <Document
        file={pdfUrl} // pdfUrl을 사용하여 PDF 파일을 로드
        // onLoadSuccess={/* 로드 성공 시 동작할 콜백 함수 */}
      >
        <Page pageNumber={1} /> {/* 첫 번째 페이지를 렌더링 */}
      </Document>
    </div>
  );
};

export default PDFPreview;
