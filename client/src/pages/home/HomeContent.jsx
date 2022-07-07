import React from "react";
import HomeInput from "./HomeInput";
import HomeHeader from "./HomeHeader";
import { DefaultContainer } from "@styles/common/container";

const MainPage = () => {
  return (
    <DefaultContainer>
      <HomeHeader />
      <HomeInput />
    </DefaultContainer>
  );
};

export default MainPage;
