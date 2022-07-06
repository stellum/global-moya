import React from "react";
import QuickGuideHeader from "../components/quickGuide/QuickGuideHeader";
import QuickContent from "../components/quickGuide/QuickContent";
import { DefaultContainer } from "@styles/containerStyle";
const QuickGuideMain = () => {
  return (
    <DefaultContainer>
      <QuickGuideHeader />
      <QuickContent />
    </DefaultContainer>
  );
};

export default QuickGuideMain;
