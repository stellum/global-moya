import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import SiginIn from "./pages/SiginIn";

import { CustomContainer } from "./styles/containerStyle";
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<SiginIn />} />
            {/* 로그인 된 사람 중 키워드 있는 사람만  */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CustomContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
