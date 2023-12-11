import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import PDFPreview from '../ui/PDFPreview';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumNeo';
    src: url('/fonts/NanumSquareNeoOTF-Rg.otf') format('truetype');
  }
    body {
    font-family: 'NanumNeo', sans-serif;
    }
 `

// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  background: linear-gradient(to bottom, #83C4FF, #FFFFFF); /* 그라데이션 색상 조정 */
  padding-top: 90px;
`;

// 메인 박스
const Box = styled.div`
    padding-top: 40px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    min-height: 270px;
    max-height: 270px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
`;

// 제목 담당
const MainTitleText = styled.p`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: -5px;
`;

// 소제목
const SubTitleText = styled.p`
    font-size: 11px;
    text-align: center;
    padding-bottom: 40px;
`;

const ButtonContainer = styled.div`
    margin-bottom: 50px;   
`;

const SecondPage = () => {
    const navigate = useNavigate();


  const handleButtonClick = () => {
    console.log("Button clicked!");
    /** 다운로드 기능 추가 필요 **/
    //navigate('second-page');
  };

  return (
  <div>
    <GlobalStyle />
    <Wrapper>
        <MainTitleText>HANDCHIVE</MainTitleText>
        <SubTitleText>내 손으로 직접 그리는 문서</SubTitleText>
        <Box>
          <ButtonContainer>
              <Button
                title = "Download"
                onClick = {handleButtonClick} />
          </ButtonContainer>
          <PDFPreview></PDFPreview>
        </Box>
    </Wrapper>
  </div>
  );
};

export default SecondPage;