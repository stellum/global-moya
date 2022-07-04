import React from "react";
import MainHeader from "../components/main/MainHeader";
import { DefaultContainer } from "@styles/containerStyle";
import MainInputComponent from "../components/main/MainInputComponent";
import { SearchIcon } from "../styles/svgIcon";
const MainPage = () => {
  return (
    <DefaultContainer>
      <MainHeader />
      <MainInputComponent SearchIcon={SearchIcon} />
    </DefaultContainer>
  );
};

export default MainPage;
