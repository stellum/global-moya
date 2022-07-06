import React from "react";
import { MainHeader } from "@styles/mainPageStyle/mainPageHeader";
import { Hamburger, HamburgerBar } from "@styles/buttonstyle/hamburger";
import MoyaLogo from "../MoyaLogo";
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
