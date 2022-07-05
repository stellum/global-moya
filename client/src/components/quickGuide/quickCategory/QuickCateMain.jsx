import React from "react";

import QuickGuideHeader from "../QuickGuideHeader";
import { DefaultContainer } from "@styles/containerStyle";
import QuickCateButton from "./QuickCateButton";
const QuickCateMain = () => {
  return (
    <DefaultContainer>
      <QuickCateButton />
      <QuickGuideHeader />
    </DefaultContainer>
  );
};

export default QuickCateMain;
