import React, { useState, useRef } from "react";
import { DefaultContainer } from "@styles/common/container";
import QuickGuideHeader from "../QuickGuideHeader";
import KeywordList from "./KeywordList";
import { useSelector } from "react-redux";
const KeywordMain = () => {
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const inputRef = useRef(null);
  return (
    <DefaultContainer>
      <QuickGuideHeader keyword={keyword} inputRef={inputRef} />
      <KeywordList keyword={keyword} />
    </DefaultContainer>
  );
};

export default KeywordMain;
