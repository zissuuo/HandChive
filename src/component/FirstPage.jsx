import React from 'react';
import ImgUpload from '../ui/ImgUpload';
import styled from 'styled-components';
import Button from '../ui/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumNeo';
    src: url('/fonts/NanumSquareR.ttf') format('truetype');
  }
    body {
    font-family: 'NanumNeo', sans-serif;
    }
 `
const InitialText = styled.p`
  font-size: 10px;
`;

// 전체 layout
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  background: linear-gradient(to bottom, #83C4FF, #FFFFFF); /* 그라데이션 색상 조정 */
  padding-top: 90px;
`;


// 제목 담당
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

const Box = styled.div`
    padding-bottom: 30px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    min-height: 270px;
    max-height: 270px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
`;

// 업로드 컴포넌트 정렬
const UploadContainer = styled.div`
    margin-top: 40px;
    //display: flex;
    justify-content: center;
    align-items: center;
`;

// 버튼 컴포넌트 둘러싸는 아이
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;



const FirstPage = () => {
  const navigate = useNavigate();
  let selectedFile;

  const handleFileSelect = (file) => {
    console.log('Selected file:', file);
    selectedFile = file;
  };

  const handleButtonClick = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:5000/upload_image', formData, {
      responseType: 'arraybuffer',
      });

      if (response && response.data) {
        // 서버로부터 받은 PDF 데이터를 클라이언트에 저장
        const pdfData = new Blob([response.data], { type: 'application/pdf' });

        // 두 번째 페이지로 이동
        navigate('/second-page', { state: { fileData: pdfData } });
      } else {
        console.error('No PDF data received from the server.');
        // 에러 처리
      }
    } catch (error) {
      console.error('Error uploading image to server:', error);
      // 에러 처리
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <MainTitleText>HANDCHIVE</MainTitleText>
        <SubTitleText>내 손으로 직접 그리는 문서</SubTitleText>
        <Box>
          <UploadContainer>
            <ImgUpload onFileSelect={handleFileSelect} />
          </UploadContainer>
        </Box>
        <Button
          title="Convert ⬆️"
          onClick={handleButtonClick}
        />
      </Wrapper>
    </div>
  );
};

export default FirstPage;