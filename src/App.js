import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Pages
import FirstPage from './component/page/FirstPage';
import SecondPage from './component/page/SecondPage';


function App(props) {
    return (
      <>
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