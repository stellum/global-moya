import React from "react";
import HomeInputComponent from "./HomeInputComponent";
import HomeHeaderComponent from "./HomeHeaderComponent";
import { DefaultContainer } from "@styles/containerStyle";

const MainPage = () => {
  return (
    <DefaultContainer>
      <HomeHeaderComponent />
      <HomeInputComponent />
    </DefaultContainer>
  );
};

export default MainPage;
