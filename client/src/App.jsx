import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "@pages/error/ErrorPage";
import Home from "@pages/home/Home";
import MainPage from "@pages/main/MainPage";

import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import PwChange from "./pages/login/PwChange";
import QuickGuideMain from "@pages/quickGuide/QuickGuideMain";
import { CustomContainer } from "@styles/common/container";
import CategoryMain from "@pages/quickGuide/categorySearch/CategoryMain";
import KeywordMain from "@pages/quickGuide/keywordSearch/KeywordMain";
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pwchange" element={<PwChange />} />
            {/* 로그인 된 사람 중 키워드 있는 사람만  */}

            <Route path="/quick" element={<QuickGuideMain />} />
            <Route path="/quick/:id" element={<CategoryMain />} />
            <Route path="/keyword" element={<KeywordMain />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CustomContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
