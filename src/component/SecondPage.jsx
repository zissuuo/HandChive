import React from 'react';
import ImgUpload from '../component/ImgUpload';
import styled from 'styled-components';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import PDFPreview from './PDFPreview';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumNeo'; /* 원하는 폰트 이름 */
    src: url('/fonts/NanumSquareNeoOTF-Rg.otf') format('truetype'); /* 폰트 파일의 경로 */
  }
  /* 전역적으로 적용할 스타일들 */
    body {
    font-family: 'NanumNeo', sans-serif; /* 적용할 폰트 이름 */
    /* 추가적인 전역 스타일들을 정의할 수 있습니다. */
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

const Box = styled.div`
    padding: 40px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: left;
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

const GeneralText = styled.p`
    font-size: 11px;
    text-align: left;
    //margin-right: 30px;
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
        <SubTitleText>두번째 페이지어라</SubTitleText>
        <Box>
          <ButtonContainer>
              <Button
                title = "다운로드"
                onClick={handleButtonClick} />
          </ButtonContainer>
          <PDFPreview></PDFPreview>
        </Box>
    </Wrapper>
  </div>
  );
};

export default SecondPage;
