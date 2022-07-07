import React from "react";
import QuickGuideHeader from "./QuickGuideHeader";
import QuickContent from "./QuickContent";
import { DefaultContainer } from "@styles/common/container";
import { getMasterData } from "@api/masterApi";
import { useDispatch } from "react-redux";

import { useQuery } from "react-query";
const QuickGuideMain = () => {
  const dispatch = useDispatch();
  // const { data, isLoading } = useQuery("masterData", () => getMasterData());

  return (
    <DefaultContainer>
      <QuickGuideHeader />
      <QuickContent />
    </DefaultContainer>
  );
};

export default QuickGuideMain;
