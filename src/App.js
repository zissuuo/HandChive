import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import FirstPage from './component/FirstPage';
import SecondPage from './component/SecondPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumNeo';
    src: url('public/fonts/NanumSquareNeo-aLt.ttf') format('truetype');
    /* 추가적으로 폰트 스타일 및 웨이트 설정 가능 */
  }

  body {
    font-family: 'NanumNeo', sans-serif; /* 사용할 폰트명 지정 */
    /* 나머지 스타일 설정 */
  }
`;


function App(props) {
    return (
      <>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route index element={<FirstPage />} />
            <Route path="second-page" element={<SecondPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
    }

export default App;