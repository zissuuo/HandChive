import React from 'react';
import ImgUpload from '../component/ImgUpload';
import styled from 'styled-components';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';


// 전체적인 레이아웃을 담당하는 코드
const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #83C4FF, #FFFFFF); /* 그라데이션 색상 조정 */
  padding-top: 100px;
`;

const Box = styled.div`
    padding: 40px;
    background-color: white;
    box-shadow: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
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
    padding-bottom: 40px;
`;

const GeneralText = styled.p`
    font-size: 15px;
    text-align: left;
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
    <Wrapper>
        <MainTitleText>HandChive</MainTitleText>
        <SubTitleText>두번째 페이지어라</SubTitleText>
        <Box>
            <GeneralText>PDF
                <Button
                    title = "다운로드"
                    onClick={handleButtonClick} />
            </GeneralText>
        </Box>
    </Wrapper>
  </div>
  );
};

export default SecondPage;
