import React from "react";
import { MainHeader, SideHeader } from "@styles/main/mainPageHeader";
import { NaviWrap, NaviGo, Navispan } from "@styles/naviStyle/naviWrap";
import { FilterBG } from "@styles/filterStyle/filterBG";
import Hamburger from "@components/common/Hamburger";
import MoyaLogo from "@components/MoyaLogo";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../../redux/reducer/modalSlice";
import { logOutFunc } from "@api/loginApi";
import { userLogoutAction } from "@redux/user/userSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const showNavi = useSelector((state) => state.modalSlice.showSideNavi);

  const toggleNavi = () => {
    dispatch(toggleNavigation(!showNavi));
  };
  const handleBG = () => {
    dispatch(toggleNavigation(!showNavi));
  };
  return (
    <>
      <NaviWrap showNavi={showNavi}>
        <SideHeader>
          <MoyaLogo />
        </SideHeader>
        <a
          href="https://watch.moya.ai/global"
          target="_blank"
          rel="noopener noreferrer"
          title="새창으로 열기"
        >
          <NaviGo>AI 모야 글로벌 뉴스 바로가기</NaviGo>
        </a>
        <Navispan />
        <NaviGo>스크랩 뉴스</NaviGo>
        <NaviGo>키워드 관리</NaviGo>
        <Navispan />
        <Link to="/mypagemain">
          <NaviGo>마이페이지</NaviGo>
        </Link>
        <NaviGo
          onClick={() => {
            logOutFunc();
            dispatch(userLogoutAction());
          }}
        >
          로그아웃
        </NaviGo>
      </NaviWrap>
      <FilterBG showNavi={showNavi} onClick={handleBG} />
      <MainHeader>
        <Hamburger click={toggleNavi} main></Hamburger>
        <MoyaLogo mainHeader={"mainHeader"} />
      </MainHeader>
    </>
  );
};

export default Header;
