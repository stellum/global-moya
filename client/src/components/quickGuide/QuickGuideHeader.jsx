import React from "react";
import { QuickInputWrap } from "@styles/quickGuideStyle/QuikcMainStyle";
import { QuickInput } from "@styles/quickGuideStyle/QuickInputStyle";
const QuickGuideHeader = () => {
  return (
    <QuickInputWrap>
      <QuickInput placeholder="뉴스 키워드를 검색해보세요." />
    </QuickInputWrap>
  );
};

export default QuickGuideHeader;
