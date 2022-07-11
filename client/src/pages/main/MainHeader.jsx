import React from "react";
import { MainHeader } from "@styles/main/mainPageHeader";
import Hamburger from "../../components/common/Hamburger";
import MoyaLogo from "@components/MoyaLogo";
import { useDispatch } from "react-redux";
import { toggleNavigation } from "../../redux/reducer/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleNavigation(true));
  };
  return (
    <MainHeader>
      <Hamburger click={handleToggle} main />
      <MoyaLogo mainHeader={"mainHeader"} />
    </MainHeader>
  );
};

export default Header;
