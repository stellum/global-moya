import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "@pages/error/ErrorPage";
import Home from "@pages/home/Home";
import MainPage from "@pages/main/MainPage";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import RegisterPolicy from "@pages/register/RegisterPolicy";
import PwChange from "./pages/login/PwChange";
import QuickGuideMain from "@pages/quickGuide/QuickGuideMain";
import { CustomContainer } from "@styles/common/container";
import CategoryMain from "@pages/quickGuide/categorySearch/CategoryMain";
import KeywordMain from "@pages/quickGuide/keywordSearch/KeywordMain";
import SubscribeModal from "./components/SubscribeModal";
import MyPageMain from "./pages/myPage/MyPageMain";
import ContactUs from "@pages/myPage/ContactUs";
import PersonalPolicy from "@pages/myPage/PersonalPolicy";
import ServicePolicy from "@pages/myPage/ServicePolicy";
import Profile from "@pages/myPage/Profile";
import Subscription from "./pages/myPage/Subscription";

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
            <Route path="/registerpolicy" element={<RegisterPolicy />} />

            <Route path="/pwchange" element={<PwChange />} />
            <Route path="/subscribe" element={<SubscribeModal />} />
            {/* 로그인 된 사람 중 키워드 있는 사람만  */}
            <Route path="/mypagemain" element={<MyPageMain />} />
            <Route path="/mypage/profile" element={<Profile />} />
            <Route path="/mypage/subscription" element={<Subscription />} />
            <Route path="/personalpolicy" element={<PersonalPolicy />} />
            <Route path="/servicepolicy" element={<ServicePolicy />} />

            <Route path="/contactus" element={<ContactUs />} />

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
