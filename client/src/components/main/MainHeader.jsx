import React from "react";
import { MainHeader } from "@styles/mainPageStyle/mainPageHeader";
import { Hamburger, HamburgerBar } from "@styles/buttonstyle/hamburger";
import { GlobalMoyaLogo } from "@styles/svgIcon";
const Header = () => {
  return (
    <MainHeader>
      <Hamburger>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </Hamburger>
      <GlobalMoyaLogo height={"32px"} />
    </MainHeader>
  );
};

export default Header;
