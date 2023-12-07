import React from 'react';
import ImgUpload from '../component/ImgUpload';
import styled from 'styled-components';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #83C4FF, #FFFFFF); /* 그라데이션 색상 조정 */
`;

const Box = styled.div`
    padding: 40px;
    background-color: white;
    box-shadow: 20px;
    border-radius: 15px;
`;


// 제목 담당
const MainTitleText = styled.p`
    font-size: 37px;
    font-weight: bold;
    text-align: center;
    margin-bottom: -10px;
`;

// 소제목
const SubTitleText = styled.p`
    font-size: 15px;
    text-align: center;
`;

// 업로드 컴포넌트 정렬
const UploadContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FirstPage = () => {
    const navigate = useNavigate();

    const handleFileSelect = (file) => {
    // 선택한 파일을 처리하는 로직을 추가할 수 있습니다.
    console.log('Selected file:', file);
    // 여기서 파일을 업로드하거나 다른 작업을 수행할 수 있습니다.
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate('second-page'); //페이지 이동시 사용
  };

  return (
  <div>
    <Wrapper>
        <MainTitleText>📝 HandChive</MainTitleText>
        <SubTitleText>내 손으로 직접 그리는 문서</SubTitleText>
        <Box>
            <UploadContainer>
                <ImgUpload onFileSelect={handleFileSelect} />
            </UploadContainer>
            <Button
                title = "변환하기"
                onClick={handleButtonClick} />
        </Box>
    </Wrapper>
  </div>
  );
};

export default FirstPage;
