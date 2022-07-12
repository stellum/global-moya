import React from "react";
import QuickGuideHeader from "./QuickGuideHeader";
import QuickContent from "./QuickContent";
import { DefaultContainer } from "@styles/common/container";
import GroupList from "@components/group/GroupList";
const QuickGuideMain = () => {
  return (
    <DefaultContainer>
      <QuickGuideHeader />
      <QuickContent />
      <GroupList />
    </DefaultContainer>
  );
};

export default QuickGuideMain;
