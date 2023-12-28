import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumNeo';
    src: url('/fonts/NanumSquareR.ttf') format('truetype');
  }
  body {
    font-family: 'NanumNeo', sans-serif;
  }
`;

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
  const location = useLocation();
  const fileData = location.state && location.state.fileData;

  const handleButtonClick = () => {
    console.log('Button clicked!');
    if (fileData) {
      const url = URL.createObjectURL(fileData);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <MainTitleText>HANDCHIVE</MainTitleText>
        <SubTitleText>내 손으로 직접 그리는 문서</SubTitleText>
        <Box>
          {/* PDF 미리보기 */}
          {fileData && <iframe title="PDF Viewer" src={URL.createObjectURL(fileData)} width="100%" height="500px" />}
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
