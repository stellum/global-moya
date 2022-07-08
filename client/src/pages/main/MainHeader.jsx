import React from "react";
import { MainHeader } from "@styles/main/mainPageHeader";
import { Hamburger, HamburgerBar } from "@styles/common/button/hamburger";
import MoyaLogo from "@components/MoyaLogo";
import { useDispatch } from "react-redux";
import { toggleNavigation } from "../../redux/reducer/modalSlice";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <MainHeader>
      <Hamburger
        onClick={() => {
          dispatch(toggleNavigation(true));
        }}
      >
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </Hamburger>
      <MoyaLogo mainHeader={"mainHeader"} />
    </MainHeader>
  );
};

export default Header;
