import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "@pages/error/ErrorPage";
import Home from "@pages/home/Home";
import MainPage from "@pages/main/MainPage";
import Login from "./pages/login/Login";
import RegisterContainer from "@pages/register/RegisterContainer";
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
import ScrapMain from "./pages/scrap/ScrapMain";
import ScrapNews from "./pages/scrap/ScrapNews";
import ScrapNewsEdit from "./pages/scrap/ScrapNewsEdit";
import NewFolder from "./pages/scrap/NewFolder";
import ScrapGroupEdit from "./pages/scrap/ScrapGroupEdit";
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />

            {/* Register */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/pwchange" element={<PwChange />} />
            <Route path="/personalpolicy" element={<PersonalPolicy />} />
            <Route path="/servicepolicy" element={<ServicePolicy />} />
            {/* Subs */}
            <Route path="/subscribe" element={<SubscribeModal />} />

            {/* MyPage */}
            <Route path="/mypagemain" element={<MyPageMain />} />
            <Route path="/mypage/profile" element={<Profile />} />
            <Route path="/mypage/subscription" element={<Subscription />} />

            <Route path="/contactus" element={<ContactUs />} />

            {/*Scrap*/}
            <Route path="/scrap" element={<ScrapMain />} />
            <Route path="/scrap/:id" element={<ScrapNews />} />
            <Route path="/scrap/:id/edit" element={<ScrapNewsEdit />} />
            <Route path="/newfolder" element={<NewFolder />} />
            <Route path="/scrap/groupedit" element={<ScrapGroupEdit />} />

            {/* Quick Search */}
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
