import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useLocation } from 'react-router-dom'; // useLocation 추가
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import PDFPreview from '../ui/PDFPreview';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumNeo';
    src: url('/fonts/NanumSquareR.ttf') format('truetype');
  }
    body {
    font-family: 'NanumNeo', sans-serif;
    }
 `

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  background: linear-gradient(to bottom, #83C4FF, #FFFFFF);
  padding-top: 90px;
`;

const Box = styled.div`
    padding-bottom: 30px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 270px;
    max-height: 270px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

const MainTitleText = styled.p`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: -5px;
`;

const SubTitleText = styled.p`
    font-size: 11px;
    text-align: center;
    padding-bottom: 40px;
`;

const SecondPage = () => {
  const location = useLocation(); // useLocation 훅 사용
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Button clicked!");
    /* 다운로드 기능 */
    const pdfUrl = location.state && location.state.pdfUrl;

    /* html 5의 'a'태그를 활용하여 link 생성*/
    if (pdfUrl) {
      const fileName = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1); // URL에서 파일 이름 추출
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', fileName); // 추출한 파일 이름으로 다운로드
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  };

  // First-page에서 전달된 URL 가져오기
  const pdfUrl = location.state && location.state.pdfUrl;

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <MainTitleText>HANDCHIVE</MainTitleText>
        <SubTitleText>내 손으로 직접 그리는 문서</SubTitleText>
        <Box>
          {/* 전달받은 PDF URL로 PDF를 렌더링 */}
          {pdfUrl && <PDFPreview pdfUrl={pdfUrl} />}
        </Box>
        <Button
          title="Download 📥"
          onClick={handleButtonClick}
        />
      </Wrapper>
    </div>
  );
};

export default SecondPage;
