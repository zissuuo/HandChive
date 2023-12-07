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

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FirstPage />} />
                <Route path="second-page" element={<SecondPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;